#!/usr/bin/env node
/* build.js — enrich seed.js from TMDB and write data.js.
   Adds per title: poster, backdrop, overview, genres, cast, trailer, imdb,
   rating, runtime, real release date (drives upcoming), and ALL Egypt watch
   providers (flatrate/rent/buy) + link. Also:
     • uses TMDB's real release/air date for released-vs-upcoming
     • flags titles newly available on EG streaming since last build
     • auto-adds new Marvel Studios titles (unless in config.ignore)
   Usage: TMDB_API_KEY=your_key node build.js   (WATCH_REGION defaults to EG) */

const fs=require('fs'),path=require('path'),vm=require('vm');
const KEY=process.env.TMDB_API_KEY;
if(!KEY){console.error('Missing TMDB_API_KEY (short v3 API Key).');process.exit(1);}
const REGION=(process.env.WATCH_REGION||'EG').toUpperCase();
const COMPANY=420;                                  // Marvel Studios
const IMG='https://image.tmdb.org/t/p/w185';
const BACK='https://image.tmdb.org/t/p/w1280';
const RESOLVE_VER=4;
const seed=require('./seed.js');
const IGNORE=new Set((seed.config.ignore)||[]);     // tmdb keys "movie:123" to suppress
const CACHE_FILE=path.join(__dirname,'.tmdb-cache.json');
let cache={};try{cache=JSON.parse(fs.readFileSync(CACHE_FILE,'utf8'));}catch(e){}
const sleep=ms=>new Promise(r=>setTimeout(r,ms));

async function api(endpoint,params={}){
  const url=new URL('https://api.themoviedb.org/3'+endpoint);url.searchParams.set('api_key',KEY);
  for(const k in params)if(params[k]!=null)url.searchParams.set(k,params[k]);
  for(let a=0;a<4;a++){const res=await fetch(url);if(res.status===429){await sleep(1500);continue;}if(!res.ok)throw new Error(endpoint+' -> HTTP '+res.status);return res.json();}
  throw new Error(endpoint+' -> repeated 429s');
}
const searchTitle=t=>t.title.replace(/\s*—\s*Season.*$/i,'').replace(/\*+$/,'').trim();
const normTitle=s=>String(s||'').toLowerCase().replace(/[^a-z0-9]+/g,'');
const slug=(t,y)=>(String(t)+' '+(y||'')).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');

// previous committed providers (to detect "newly available")
let prevFlat={};
try{const ctx={window:{}};vm.createContext(ctx);vm.runInContext(fs.readFileSync('data.js','utf8'),ctx);
  (ctx.window.MCU_DATA||[]).forEach(o=>{if(o.watch&&o.watch.flatrate)prevFlat[o.id]=o.watch.flatrate.slice();});}catch(e){}

async function resolveId(t){
  if(t.tmdb_id&&t.tmdb_type)return{id:t.tmdb_id,mt:t.tmdb_type};
  const c=cache[t.id];if(c&&c._v===RESOLVE_VER&&c.id)return{id:c.id,mt:c.mt};
  const primary=(t.type==='series')?'tv':'movie',secondary=primary==='movie'?'tv':'movie',q=searchTitle(t);
  for(const mt of[primary,secondary]){const p=mt==='movie'?{query:q,year:t.year}:{query:q,first_air_date_year:t.year};const res=await api('/search/'+mt,p);const hit=(res.results||[])[0];if(hit){cache[t.id]={_v:RESOLVE_VER,id:hit.id,mt};return{id:hit.id,mt};}}
  cache[t.id]={_v:RESOLVE_VER,id:null,mt:null};return null;
}
function pickTrailer(videos){
  const v=((videos||{}).results)||[];
  const yt=v.filter(x=>x.site==='YouTube');
  const t=yt.find(x=>x.type==='Trailer'&&x.official)||yt.find(x=>x.type==='Trailer')||yt.find(x=>x.type==='Teaser')||yt[0];
  return t?('https://www.youtube.com/watch?v='+t.key):null;
}
async function enrich(t){
  const r=await resolveId(t);
  if(!r){return{...t,_matched:false};}
  const d=await api('/'+r.mt+'/'+r.id,{append_to_response:'external_ids,watch/providers,videos,credits'});
  const prov=(((d['watch/providers']||{}).results)||{})[REGION]||null;
  const names=a=>(a||[]).map(p=>p.provider_name);
  const rel=(r.mt==='movie'?d.release_date:d.first_air_date)||t.release||null;
  const flat=prov?names(prov.flatrate):[];
  const prev=prevFlat[t.id]||[];
  const newlyAvailable=flat.length>0 && flat.some(n=>prev.indexOf(n)===-1) && (prev.length>0 || true) && (prev.join('|')!==flat.join('|'));
  var seasons=null;
  if(r.mt==='tv' && Array.isArray(d.seasons)){
    seasons=d.seasons.filter(function(se){return se.season_number>0 && (se.episode_count||0)>0;})
      .map(function(se){return {n:se.season_number,name:se.name||('Season '+se.season_number),eps:se.episode_count||0,air:se.air_date||null};});
    if(!seasons.length)seasons=null;
  }
  return {...t,_matched:true,
    seasons:seasons,
    tmdb_id:r.id,tmdb_type:r.mt,
    release: rel || t.release || (t.year?String(t.year)+'-12-31':null),
    poster:d.poster_path?IMG+d.poster_path:null,
    backdrop:d.backdrop_path?BACK+d.backdrop_path:null,
    overview:d.overview||null,
    imdb:(d.external_ids&&d.external_ids.imdb_id)?'https://www.imdb.com/title/'+d.external_ids.imdb_id+'/':null,
    rating:d.vote_average?Math.round(d.vote_average*10)/10:null,
    runtime:d.runtime||(d.episode_run_time&&d.episode_run_time[0])||null,
    genres:(d.genres||[]).map(g=>g.name).slice(0,3),
    cast:((d.credits&&d.credits.cast)||[]).slice(0,4).map(c=>c.name),
    trailer:pickTrailer(d.videos),
    watch:prov?{link:prov.link||null,flatrate:names(prov.flatrate),rent:names(prov.rent),buy:names(prov.buy)}:null,
    newlyAvailable: !!(flat.length && prev.length && flat.some(n=>prev.indexOf(n)===-1))
  };
}
async function discoverNew(seedKeys,seedNames){
  const found=[],seen=new Set();
  for(const mt of['movie','tv']){let pages=1;
    for(let page=1;page<=pages&&page<=5;page++){let res;try{res=await api('/discover/'+mt,{with_companies:COMPANY,sort_by:(mt==='movie'?'primary_release_date.desc':'first_air_date.desc'),page});}catch(e){break;}pages=res.total_pages||1;
      (res.results||[]).forEach(x=>{const title=x.title||x.name,date=x.release_date||x.first_air_date||'';if(!title)return;const key=mt+':'+x.id;if(seedKeys.has(key)||seen.has(key)||IGNORE.has(key))return;if(seedNames.has(normTitle(title)))return;if(date && new Date(date)<=new Date())return;seen.add(key);found.push({id:x.id,mt,title,year:date?+date.slice(0,4):null,release:date||null});});
      await sleep(180);}}
  return found;
}

(async()=>{
  const out=[];let done=0,missed=[];
  for(const t of seed.titles){
    try{const e=await enrich(t);if(!e._matched)missed.push(t.title);delete e._matched;out.push(e);}
    catch(err){console.error('\n! '+t.id+': '+err.message);out.push(t);missed.push(t.title);}
    done++;process.stdout.write(done%10===0?''+done:'.');if(done%5===0)await sleep(200);
  }
  // auto-add discovered Marvel Studios titles (unless ignored)
  let added=[];
  try{
    const seedKeys=new Set(out.filter(o=>o.tmdb_id).map(o=>o.tmdb_type+':'+o.tmdb_id));
    const seedNames=new Set(seed.titles.map(t=>normTitle(searchTitle(t))));
    const found=await discoverNew(seedKeys,seedNames);
    for(const f of found){
      const entry={id:slug(f.title,f.year),title:f.title,year:f.year,release:f.release,
        type:(f.mt==='tv'?'series':'movie'),universe:'MCU',saga:'Newly Discovered',phase:'',
        tmdb_id:f.id,tmdb_type:f.mt,discovered:true};
      try{const e=await enrich(entry);delete e._matched;out.push(e);added.push(e.title);}catch(_){out.push(entry);}
      await sleep(150);
    }
  }catch(e){console.error('\nDiscovery skipped: '+e.message);}

  fs.writeFileSync(CACHE_FILE,JSON.stringify(cache));
  const order=(seed.config.sagaOrder||[]).slice();if(order.indexOf('Newly Discovered')===-1)order.push('Newly Discovered');
  const cfg={...seed.config,sagaOrder:order,updated:new Date().toISOString().slice(0,7),watchRegion:REGION};
  fs.writeFileSync(path.join(__dirname,'data.js'),
    '/* AUTO-GENERATED by build.js — do not edit by hand. Edit seed.js and re-run. */\n'+
    'window.MCU_CONFIG = '+JSON.stringify(cfg,null,2)+';\n\nwindow.MCU_DATA = '+JSON.stringify(out,null,2)+';\n');
  console.log('\n\nWrote data.js — '+out.length+' titles, region '+REGION+'.');
  if(added.length)console.log('Auto-added '+added.length+' new title(s) under "Newly Discovered": '+added.join(', '));
  if(missed.length)console.log('No TMDB match for '+missed.length+' (pin tmdb_id in seed.js): '+missed.join(', '));
  const na=out.filter(o=>o.newlyAvailable).map(o=>o.title);
  if(na.length)console.log('Newly available on '+REGION+' streaming: '+na.join(', '));
})();
