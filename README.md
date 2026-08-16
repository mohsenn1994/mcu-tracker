# Marvel Watch Tracker (MCU & Beyond)

A single-page tracker for every Marvel film and series — the **MCU**, **legacy Marvel TV**,
and the **non-MCU film universes** (Fox, Sony, and older one-offs). Progress is private to
each visitor's browser. Titles are enriched from **TMDB** with posters, descriptions, IMDb
links, ratings, and **where-to-watch in Egypt**.

**Live site:** https://mohsenn1994.github.io/mcu-tracker/

## Files
| File | Purpose |
|------|---------|
| `index.html` | The app. Loads `data.js`. No build step to view. |
| `data.js` | **Auto-generated.** Don't hand-edit — it's produced by `build.js`. |
| `seed.js` | **You edit this.** The list of titles + grouping (universe/saga/phase). |
| `build.js` | Reads `seed.js`, enriches via TMDB, writes `data.js`. |
| `.github/workflows/update-data.yml` | Optional: refreshes `data.js` weekly. |

## One-time setup for enrichment
1. Create a free TMDB account and API key: https://www.themoviedb.org/settings/api (v3 auth key).
2. Run the build (Node 18+):
   ```bash
   TMDB_API_KEY=your_key node build.js
   ```
   This regenerates `data.js` with posters, overviews, IMDb links, ratings, runtimes, and
   Egypt watch providers. Region defaults to `EG`; override with `WATCH_REGION=US node build.js`.

The app works fine **without** running this — rows just show a placeholder poster and your
notes until enrichment is run.

## Add or change a title
Edit **`seed.js`** (not `data.js`) and add a line to `titles`:
```js
{ id:"the-x-men", title:"The X-Men", year:2028, release:"2028-11-10",
  type:"movie", universe:"MCU", saga:"Mutant Saga", phase:"Phase 7",
  notes:"Kicks off the next era." },
```
Then run `node build.js`. Notes:
- `id` must be unique and never change (watched progress is stored against it).
- `universe`: `"MCU"`, `"TV"`, or `"EXT"`. `phase` drives MCU sub-tabs; leave `""` for TV/EXT (they group by `saga`).
- If TMDB matches the wrong entry, pin it: add `tmdb_id: 1726, tmdb_type: "movie"` (or `"tv"`).

## Auto-update (optional)
Add your key as a repo secret named `TMDB_API_KEY`
(Settings → Secrets and variables → Actions), and the included workflow re-runs `build.js`
weekly (and on demand from the Actions tab), committing any changes.

## App features
- Tabs by universe with sub-tabs (phases / studios), each showing live counts.
- **List and grid (poster) views**, plus **sort** by release, rating, runtime, A–Z, or unwatched-first.
- Search · filters (film/series, to-watch/watched/watchlist/upcoming).
- **Watchlist** flag and **1–5 star ratings** per title · **Mark all** per group.
- **Stats panel**: watched %, film-hours watched, your average rating, and per-universe completion.
- **Copy progress link** — packs your watched list into a short code in the URL (`#p=…`); open it
  on another device or send it to a friend to load that exact watched list. Full backups use Export/Import.
- Automatic **Upcoming** detection from release dates.

## Enable GitHub Pages (one-time)
Settings → Pages → Source: **Deploy from a branch** → Branch **main**, folder **/ (root)** → Save.

## A note on Egypt watch links
"Where to watch" comes from TMDB/JustWatch for region **EG**, so it reflects what's actually
available in Egypt (Netflix, OSN+, Shahid, Watch iT!, etc.). Services not offered in Egypt —
e.g. Disney+ — correctly won't appear. There's no legal way to deep-link straight into
playback, so the button opens the title's watch page where you pick your service.
