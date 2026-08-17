# Marvel Watch Tracker (MCU & Beyond)

Track every Marvel film and series — **MCU**, **legacy Marvel TV**, and the **non-MCU film
universes** — with posters, trailers, ratings, watchlist, story order, and where to watch in
Egypt. Static site; progress is private to each visitor's browser. Installable as a PWA.

**Live:** https://mohsenn1994.github.io/mcu-tracker/

## Files
| File | Purpose |
|------|---------|
| `index.html` | The app. |
| `data.js` | **Auto-generated** by `build.js` — don't hand-edit; don't upload over the live one (rebuild instead). |
| `seed.js` | **You edit this**: titles, grouping, `essential`, `chrono` (story order), and `config.ignore`. |
| `build.js` | Enriches `seed.js` from TMDB → writes `data.js`; auto-adds new Marvel titles. |
| `manifest.json`, `sw.js`, `icon-*.png` | PWA (install + offline). |
| `.github/workflows/update-data.yml` | Monthly auto-refresh. |

## Features
- Tabs (MCU / Legacy TV / Extended) + sub-tabs (phases / studios), **collapsible**.
- **List & grid** views; **sort** (release / rating / runtime / A–Z / unwatched); **🎬 Story order** (chronological).
- **Detail modal**: backdrop, poster, overview, genres, cast, trailer, all Egypt watch providers, IMDb.
- **Where to watch (Egypt)**: every provider TMDB returns (stream + rent/buy).
- **Essential** flag + filter; **Watchlist** flag; **1–5 star ratings**; **Mark all** per group.
- Simplified filters (All / To watch / Watched + toggles) with a **Clear** button and active-count.
- **🎲 Surprise me**, **Stats**, **Compare with a friend** (paste their progress code), **Copy progress** link.
- **Light/Dark** toggle. Automatic **Upcoming** and **New in EG** detection.

## Editing titles
Edit `seed.js` → `titles`, then run `node build.js`:
```js
{ id:"the-x-men", title:"The X-Men", year:2028, release:"2028-11-10",
  type:"movie", universe:"MCU", saga:"Mutant Saga", phase:"Phase 7",
  essential:true, chrono:67, notes:"Next era." },
```
- `id` unique & permanent. `essential:true` → gold tag; `chrono:<n>` → story position.
- Auto-added titles land under **"Newly Discovered"**. To hide one, add its TMDB key to
  `config.ignore` in `seed.js`, e.g. `"ignore": ["movie:1234567"]`, and rebuild.

## Enrichment + auto-update
- Free TMDB v3 **API Key** (short hex). Local: `TMDB_API_KEY=key node build.js`.
- Auto: add repo secret `TMDB_API_KEY`, set **Settings → Actions → General → Workflow permissions →
  Read and write**. The workflow runs **monthly** (1st, 06:00 UTC) and on demand from the Actions tab.
- Release dates now come from **TMDB**, so status (released vs upcoming) self-corrects.

## Updating the site safely
Upload everything **except `data.js`** (it's generated). Then run the **Refresh Marvel data**
workflow to regenerate `data.js` with the new fields (trailers, cast, backdrops, corrected dates).
Your existing enriched `data.js` keeps the site working until the rebuild finishes.
