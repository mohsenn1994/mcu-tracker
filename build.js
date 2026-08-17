#!/usr/bin/env node
/* build.js — enrich seed.js from TMDB, write data.js, and surface NEW Marvel
   titles that aren't in your seed yet (written to new-titles.md for review).

   Usage: TMDB_API_KEY=your_key node build.js   (region defaults to EG)
   Enrichment adds: poster, overview, imdb, rating, runtime, genres, where-to-watch.
   Editorial fields (universe/saga/phase/notes/essential/chrono) come from seed.js. */

const fs=require('fs'),path=require('path');
const KEY=process.env.TMDB_API_KEY;
if(!KEY){console.error('Missing TMDB_API_KEY. Get one free at themoviedb.org (v3 API Key).');process.exit(1);}
const REGION=(process.env.WATCH_REGION||'EG').toUpperCase();
const MARVEL_STUDIOS_COMPANY=420;               // TMDB company id for Marvel Studios
const IMG='https://image.tmdb.org/t/p/w185';
const CACHE_VER=3;
const seed=require('./seed.js');
const CACHE_FILE=path.join(__dirname,'.tmdb-cache.json');
let cache={};try{cache=JSON.parse(fs.readFileSync(CACHE_FILE,'utf8'));}catch(e){}
const sleep=ms=>new Promise(r=>setTimeout(r,ms));

async function api(endpoint,params={}){
  const url=new URL('https://api.themoviedb.org/3'+endpoint);url.searchParams.set('api_key',KEY);
  for(const k in params)if(params[k]!=null)url.searchParams.set(k,params[k]);
  for(let a=0;a<4;a++){const res=await fetch(url);if(res.status===429){await sleep(1500);continue;}if(!res.ok)throw new Error(endpoint+' -> HTTP '+res.status);return res.json();}
  throw new Error(endpoint+' -> repeated 429s');
}
function searchTitle(t){return t.title.replace(/\s*—\s*Season.*$/i,'').replace(/\*+$/,'').trim();}
function normTitle(s){return String(s||'').toLowerCase().replace(/[^a-z0-9]+/g,'');}
function slug(t,y){return (String(t)+' '+(y||'')).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');}

async function resolveId(t){
  if(t.tmdb_id&&t.tmdb_type)return{id:t.tmdb_id,mt:t.tmdb_type};
  const primary=(t.type==='series')?'tv':'movie',secondary=primary==='movie'?'tv':'movie',q=searchTitle(t);
  for(const mt of [primary,secondary]){const params=mt==='movie'?{query:q,year:t.year}:{query:q,first_air_date_year:t.year};const res=await api('/search/'+mt,params);const hit=(res.results||[])[0];if(hit)return{id:hit.id,mt};}
  return null;
}
async function enrich(t){
  if(cache[t.id]&&cache[t.id]._v===CACHE_VER)return{...t,...cache[t.id].data};
  let data={};const r=await resolveId(t);
  if(r){const d=await api('/'+r.mt+'/'+r.id,{append_to_response:'external_ids,watch/providers'});
    const prov=(((d['watch/providers']||{}).results)||{})[REGION]||null,names=a=>(a||[]).map(p=>p.provider_name);
    data={tmdb_id:r.id,tmdb_type:r.mt,poster:d.poster_path?IMG+d.poster_path:null,overview:d.overview||null,
      imdb:(d.external_ids&&d.external_ids.imdb_id)?'https://www.imdb.com/title/'+d.external_ids.imdb_id+'/':null,
      rating:d.vote_average?Math.round(d.vote_average*10)/10:null,runtime:d.runtime||(d.episode_run_time&&d.episode_run_time[0])||null,
      genres:(d.genres||[]).map(g=>g.name).slice(0,3),
      watch:prov?{link:prov.link||null,flatrate:names(prov.flatrate),rent:names(prov.rent),buy:names(prov.buy)}:null};}
  cache[t.id]={_v:CACHE_VER,data};return{...t,...data};
}

// --- surface Marvel Studios titles on TMDB that aren't in the seed ---
async function discoverNew(seedKeys,seedNames){
  const found=[],seen=new Set();
  for(const mt of ['movie','tv']){
    let pages=1;
    for(let page=1;page<=pages&&page<=5;page++){
      let res;try{res=await api('/discover/'+mt,{with_companies:MARVEL_STUDIOS_COMPANY,sort_by:(mt==='movie'?'primary_release_date.desc':'first_air_date.desc'),page});}catch(e){break;}
      pages=res.total_pages||1;
      (res.results||[]).forEach(r=>{
        const title=r.title||r.name,date=r.release_date||r.first_air_date||'';
        if(!title)return;
        const key=mt+':'+r.id;
        if(seedKeys.has(key)||seen.has(key))return;
        if(seedNames.has(normTitle(title)))return;                 // already in seed under a resolved/other id
        seen.add(key);
        found.push({id:r.id,mt,title,year:date?+date.slice(0,4):null,release:date||null});
      });
      await sleep(200);
    }
  }
  return found;
}
function suggestLine(f){
  const type=f.mt==='tv'?'series':'movie';
  return '{ id:"'+slug(f.title,f.year)+'", title:"'+f.title.replace(/"/g,'\\"')+'", year:'+(f.year||'?')+', '+
    (f.release?'release:"'+f.release+'", ':'')+'type:"'+type+'", universe:"MCU", saga:"?", phase:"?", '+
    'tmdb_id:'+f.id+', tmdb_type:"'+f.mt+'" },';
}

(async()=>{
  const out=[];let done=0,missed=[];
  for(const t of seed.titles){
    try{const e=await enrich(t);if(!e.tmdb_id)missed.push(t.title);out.push(e);}
    catch(err){console.error('\n! '+t.id+': '+err.message);out.push(t);missed.push(t.title);}
    done++;process.stdout.write(done%10===0?''+done:'.');if(done%5===0)await sleep(250);
  }
  fs.writeFileSync(CACHE_FILE,JSON.stringify(cache));

  // write enriched data.js
  const cfg={...seed.config,updated:new Date().toISOString().slice(0,7),watchRegion:REGION};
  fs.writeFileSync(path.join(__dirname,'data.js'),
    '/* AUTO-GENERATED by build.js — do not edit by hand. Edit seed.js and re-run. */\n'+
    'window.MCU_CONFIG = '+JSON.stringify(cfg,null,2)+';\n\nwindow.MCU_DATA = '+JSON.stringify(out,null,2)+';\n');
  console.log('\n\nWrote data.js — '+out.length+' titles, region '+REGION+'.');
  if(missed.length)console.log('No TMDB match for '+missed.length+' (pin tmdb_id in seed.js): '+missed.join(', '));

  // discover new titles → new-titles.md (or remove it if none)
  const NEW_FILE=path.join(__dirname,'new-titles.md');
  try{
    const seedKeys=new Set(out.filter(o=>o.tmdb_id).map(o=>o.tmdb_type+':'+o.tmdb_id));
    const seedNames=new Set(seed.titles.map(t=>normTitle(searchTitle(t))));
    const found=await discoverNew(seedKeys,seedNames);
    if(found.length){
      found.sort((a,b)=>String(b.release||'').localeCompare(String(a.release||'')));
      const body='### New Marvel Studios titles on TMDB not in your seed\n\n'+
        'Found '+found.length+' title(s). Review and paste the ones you want into `seed.js` '+
        '(fill in `saga`/`phase`, adjust `universe` if needed). Some may be shorts, promos, or '+
        'specials you can ignore.\n\n```js\n'+found.map(suggestLine).join('\n')+'\n```\n\n'+
        '_Auto-generated by build.js on '+new Date().toISOString().slice(0,10)+'._\n';
      fs.writeFileSync(NEW_FILE,body);
      console.log('\nDiscovered '+found.length+' new title(s) → new-titles.md');
    }else{
      if(fs.existsSync(NEW_FILE))fs.unlinkSync(NEW_FILE);
      console.log('\nNo new titles to review.');
    }
  }catch(e){console.error('\nDiscovery skipped: '+e.message);}
})();
