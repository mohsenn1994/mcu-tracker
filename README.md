# Marvel Watch Tracker (MCU & Beyond)

A single-page tracker for every Marvel film and series — the **MCU**, **legacy Marvel TV**,
and the **non-MCU film universes** (Fox, Sony, and older one-offs). Progress is private to each
visitor's browser. Titles can be enriched from **TMDB** with posters, descriptions, IMDb links,
ratings, and **where-to-watch in Egypt**.

**Live site:** https://mohsenn1994.github.io/mcu-tracker/

## Files
| File | Purpose |
|------|---------|
| `index.html` | The app. Loads `data.js`. No build step to view. |
| `data.js` | **Auto-generated** by `build.js` (don't hand-edit if you use the build). |
| `seed.js` | **You edit this.** Titles + grouping + `essential`/`chrono`. |
| `build.js` | Reads `seed.js`, enriches via TMDB, writes `data.js`. |
| `.github/workflows/update-data.yml` | Optional weekly refresh. |

## App features
- Tabs by universe (MCU / Legacy TV / Extended) with sub-tabs (phases / studios).
- **List & grid (poster) views**; **sort** by release, rating, runtime, A–Z, unwatched-first.
- **🎬 Story order** toggle — flattens the list into in-universe chronological order, numbered 1…N.
- **Essential** flag + filter — the main-saga throughline titles (gold tag).
- **Watchlist** flag and **1–5 star ratings** per title; **Mark all** per group.
- Search · status filters (to-watch / watched / essential / watchlist / upcoming).
- **Stats panel**: watched %, essential progress, film-hours, avg rating, per-universe completion.
- **Copy progress link** (`#p=…`) to share your watched list; **Export/Import** for full backups.
- Automatic **Upcoming** detection from release dates.

## Editing content
Edit **`seed.js`** (not `data.js`) — add a title to `titles`:
```js
{ id:"the-x-men", title:"The X-Men", year:2028, release:"2028-11-10",
  type:"movie", universe:"MCU", saga:"Mutant Saga", phase:"Phase 7",
  essential:true, chrono:67, notes:"Kicks off the next era." },
```
- `id` unique & permanent (progress keys off it).
- `essential:true` shows the gold Essential tag; `chrono:<n>` sets story-order position.
- `universe`: `"MCU"|"TV"|"EXT"`; `phase` drives MCU sub-tabs, `""` for others.
- Wrong TMDB match? pin `tmdb_id:1726, tmdb_type:"movie"`.

## Enrichment (posters, IMDb, Egypt watch links)
1. Free TMDB v3 **API Key** (short hex, not the `eyJ…` token): themoviedb.org → Settings → API.
2. `TMDB_API_KEY=your_key node build.js` → regenerates `data.js`.
   The app works without this; rows just show a placeholder poster + notes until then.

## Discovering new titles automatically
Each build also asks TMDB for Marvel Studios titles that aren't in your `seed.js` yet.
When it finds any, the monthly workflow opens (or updates) a GitHub issue titled
**"🆕 New Marvel titles to review"** with ready-to-paste `seed.js` lines (TMDB id already
filled in). You get a GitHub notification; approving = pasting the lines you want into
`seed.js`, setting their `saga`/`phase`, and committing. Nothing is added automatically,
so shorts/promos never sneak in. There's no deadline — a missing title just isn't listed
until you add it, and future titles show as **Upcoming** anyway.

## Auto-update (optional)
Add repo secret `TMDB_API_KEY`, set **Settings → Actions → General → Workflow permissions →
Read and write**, then run **Actions → "Refresh Marvel data" → Run workflow** (or wait for the weekly schedule).

## Pages
Settings → Pages → Deploy from a branch → `main` / `/ (root)`.

## Note on Egypt watch links
"Where to watch" reflects TMDB/JustWatch for region **EG**, so services not in Egypt (e.g. Disney+)
correctly won't appear. There's no legal deep-link to playback; the button opens the title's watch page.
