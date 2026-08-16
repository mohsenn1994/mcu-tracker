/* =============================================================
   SEED — the editable source of truth for the Marvel tracker.
   Edit THIS file to add or change titles, then run:  node build.js
   (build.js enriches every entry from TMDB and regenerates data.js).

   To pin an exact TMDB match, add:  tmdb_id: 1234, tmdb_type: "movie"|"tv"
   ============================================================= */
module.exports = {
  config: {
    "title": "Marvel Cinematic Universe & Beyond",
    "subtitle": "Every Marvel film and series — the MCU, legacy Marvel TV, and the non-MCU film universes.",
    "updated": "2026-08",
    "universes": [
      {
        "id": "MCU",
        "short": "MCU",
        "label": "Marvel Cinematic Universe"
      },
      {
        "id": "TV",
        "short": "Legacy TV",
        "label": "Marvel Television (Legacy)"
      },
      {
        "id": "EXT",
        "short": "Extended",
        "label": "Extended Universe (Non-MCU)"
      }
    ],
    "sagaOrder": [
      "Infinity Saga",
      "Multiverse Saga",
      "ABC & Network",
      "Netflix — The Defenders Saga",
      "Hulu & Freeform",
      "Sony — Spider-Man",
      "Sony — Spider-Verse",
      "Sony's Spider-Man Universe",
      "Fox — X-Men",
      "Fox — Fantastic Four",
      "Other & Early Films"
    ],
    "phaseOrder": [
      "Phase 1",
      "Phase 2",
      "Phase 3",
      "Phase 4",
      "Phase 5",
      "Phase 6",
      "Phase 7"
    ]
  },

  titles: [
    {
      "id": "iron-man",
      "title": "Iron Man",
      "year": 2008,
      "release": "2008-05-02",
      "type": "movie",
      "universe": "MCU",
      "saga": "Infinity Saga",
      "phase": "Phase 1",
      "notes": "Where it all begins."
    },
    {
      "id": "incredible-hulk",
      "title": "The Incredible Hulk",
      "year": 2008,
      "release": "2008-06-13",
      "type": "movie",
      "universe": "MCU",
      "saga": "Infinity Saga",
      "phase": "Phase 1"
    },
    {
      "id": "iron-man-2",
      "title": "Iron Man 2",
      "year": 2010,
      "release": "2010-05-07",
      "type": "movie",
      "universe": "MCU",
      "saga": "Infinity Saga",
      "phase": "Phase 1"
    },
    {
      "id": "thor",
      "title": "Thor",
      "year": 2011,
      "release": "2011-05-06",
      "type": "movie",
      "universe": "MCU",
      "saga": "Infinity Saga",
      "phase": "Phase 1"
    },
    {
      "id": "captain-america-tfa",
      "title": "Captain America: The First Avenger",
      "year": 2011,
      "release": "2011-07-22",
      "type": "movie",
      "universe": "MCU",
      "saga": "Infinity Saga",
      "phase": "Phase 1"
    },
    {
      "id": "the-avengers",
      "title": "The Avengers",
      "year": 2012,
      "release": "2012-05-04",
      "type": "movie",
      "universe": "MCU",
      "saga": "Infinity Saga",
      "phase": "Phase 1",
      "notes": "The team assembles."
    },
    {
      "id": "iron-man-3",
      "title": "Iron Man 3",
      "year": 2013,
      "release": "2013-05-03",
      "type": "movie",
      "universe": "MCU",
      "saga": "Infinity Saga",
      "phase": "Phase 2"
    },
    {
      "id": "thor-dark-world",
      "title": "Thor: The Dark World",
      "year": 2013,
      "release": "2013-11-08",
      "type": "movie",
      "universe": "MCU",
      "saga": "Infinity Saga",
      "phase": "Phase 2"
    },
    {
      "id": "cap-winter-soldier",
      "title": "Captain America: The Winter Soldier",
      "year": 2014,
      "release": "2014-04-04",
      "type": "movie",
      "universe": "MCU",
      "saga": "Infinity Saga",
      "phase": "Phase 2"
    },
    {
      "id": "gotg",
      "title": "Guardians of the Galaxy",
      "year": 2014,
      "release": "2014-08-01",
      "type": "movie",
      "universe": "MCU",
      "saga": "Infinity Saga",
      "phase": "Phase 2"
    },
    {
      "id": "avengers-age-of-ultron",
      "title": "Avengers: Age of Ultron",
      "year": 2015,
      "release": "2015-05-01",
      "type": "movie",
      "universe": "MCU",
      "saga": "Infinity Saga",
      "phase": "Phase 2"
    },
    {
      "id": "ant-man",
      "title": "Ant-Man",
      "year": 2015,
      "release": "2015-07-17",
      "type": "movie",
      "universe": "MCU",
      "saga": "Infinity Saga",
      "phase": "Phase 2"
    },
    {
      "id": "cap-civil-war",
      "title": "Captain America: Civil War",
      "year": 2016,
      "release": "2016-05-06",
      "type": "movie",
      "universe": "MCU",
      "saga": "Infinity Saga",
      "phase": "Phase 3",
      "notes": "The Avengers split."
    },
    {
      "id": "doctor-strange",
      "title": "Doctor Strange",
      "year": 2016,
      "release": "2016-11-04",
      "type": "movie",
      "universe": "MCU",
      "saga": "Infinity Saga",
      "phase": "Phase 3"
    },
    {
      "id": "gotg-vol-2",
      "title": "Guardians of the Galaxy Vol. 2",
      "year": 2017,
      "release": "2017-05-05",
      "type": "movie",
      "universe": "MCU",
      "saga": "Infinity Saga",
      "phase": "Phase 3"
    },
    {
      "id": "spider-man-homecoming",
      "title": "Spider-Man: Homecoming",
      "year": 2017,
      "release": "2017-07-07",
      "type": "movie",
      "universe": "MCU",
      "saga": "Infinity Saga",
      "phase": "Phase 3"
    },
    {
      "id": "thor-ragnarok",
      "title": "Thor: Ragnarok",
      "year": 2017,
      "release": "2017-11-03",
      "type": "movie",
      "universe": "MCU",
      "saga": "Infinity Saga",
      "phase": "Phase 3"
    },
    {
      "id": "black-panther",
      "title": "Black Panther",
      "year": 2018,
      "release": "2018-02-16",
      "type": "movie",
      "universe": "MCU",
      "saga": "Infinity Saga",
      "phase": "Phase 3"
    },
    {
      "id": "avengers-infinity-war",
      "title": "Avengers: Infinity War",
      "year": 2018,
      "release": "2018-04-27",
      "type": "movie",
      "universe": "MCU",
      "saga": "Infinity Saga",
      "phase": "Phase 3",
      "notes": "Thanos arrives."
    },
    {
      "id": "ant-man-and-the-wasp",
      "title": "Ant-Man and the Wasp",
      "year": 2018,
      "release": "2018-07-06",
      "type": "movie",
      "universe": "MCU",
      "saga": "Infinity Saga",
      "phase": "Phase 3"
    },
    {
      "id": "captain-marvel",
      "title": "Captain Marvel",
      "year": 2019,
      "release": "2019-03-08",
      "type": "movie",
      "universe": "MCU",
      "saga": "Infinity Saga",
      "phase": "Phase 3"
    },
    {
      "id": "avengers-endgame",
      "title": "Avengers: Endgame",
      "year": 2019,
      "release": "2019-04-26",
      "type": "movie",
      "universe": "MCU",
      "saga": "Infinity Saga",
      "phase": "Phase 3",
      "notes": "Climax of the Infinity Saga."
    },
    {
      "id": "spider-man-far-from-home",
      "title": "Spider-Man: Far From Home",
      "year": 2019,
      "release": "2019-07-02",
      "type": "movie",
      "universe": "MCU",
      "saga": "Infinity Saga",
      "phase": "Phase 3"
    },
    {
      "id": "wandavision",
      "title": "WandaVision",
      "year": 2021,
      "release": "2021-01-15",
      "type": "series",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 4"
    },
    {
      "id": "falcon-winter-soldier",
      "title": "The Falcon and the Winter Soldier",
      "year": 2021,
      "release": "2021-03-19",
      "type": "series",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 4"
    },
    {
      "id": "loki-s1",
      "title": "Loki — Season 1",
      "year": 2021,
      "release": "2021-06-09",
      "type": "series",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 4",
      "notes": "Introduces the TVA and the multiverse."
    },
    {
      "id": "black-widow",
      "title": "Black Widow",
      "year": 2021,
      "release": "2021-07-09",
      "type": "movie",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 4"
    },
    {
      "id": "what-if-s1",
      "title": "What If…? — Season 1",
      "year": 2021,
      "release": "2021-08-11",
      "type": "series",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 4",
      "notes": "Animated."
    },
    {
      "id": "shang-chi",
      "title": "Shang-Chi and the Legend of the Ten Rings",
      "year": 2021,
      "release": "2021-09-03",
      "type": "movie",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 4"
    },
    {
      "id": "eternals",
      "title": "Eternals",
      "year": 2021,
      "release": "2021-11-05",
      "type": "movie",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 4"
    },
    {
      "id": "hawkeye",
      "title": "Hawkeye",
      "year": 2021,
      "release": "2021-11-24",
      "type": "series",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 4"
    },
    {
      "id": "spider-man-no-way-home",
      "title": "Spider-Man: No Way Home",
      "year": 2021,
      "release": "2021-12-17",
      "type": "movie",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 4",
      "notes": "The multiverse breaks open."
    },
    {
      "id": "moon-knight",
      "title": "Moon Knight",
      "year": 2022,
      "release": "2022-03-30",
      "type": "series",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 4"
    },
    {
      "id": "doctor-strange-mom",
      "title": "Doctor Strange in the Multiverse of Madness",
      "year": 2022,
      "release": "2022-05-06",
      "type": "movie",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 4",
      "notes": "Introduces incursions."
    },
    {
      "id": "ms-marvel",
      "title": "Ms. Marvel",
      "year": 2022,
      "release": "2022-06-08",
      "type": "series",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 4"
    },
    {
      "id": "thor-love-and-thunder",
      "title": "Thor: Love and Thunder",
      "year": 2022,
      "release": "2022-07-08",
      "type": "movie",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 4"
    },
    {
      "id": "i-am-groot-s1",
      "title": "I Am Groot — Season 1",
      "year": 2022,
      "release": "2022-08-10",
      "type": "series",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 4",
      "notes": "Animated shorts."
    },
    {
      "id": "she-hulk",
      "title": "She-Hulk: Attorney at Law",
      "year": 2022,
      "release": "2022-08-18",
      "type": "series",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 4"
    },
    {
      "id": "werewolf-by-night",
      "title": "Werewolf by Night",
      "year": 2022,
      "release": "2022-10-07",
      "type": "special",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 4",
      "notes": "Special Presentation."
    },
    {
      "id": "black-panther-wf",
      "title": "Black Panther: Wakanda Forever",
      "year": 2022,
      "release": "2022-11-11",
      "type": "movie",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 4"
    },
    {
      "id": "gotg-holiday-special",
      "title": "The Guardians of the Galaxy Holiday Special",
      "year": 2022,
      "release": "2022-11-25",
      "type": "special",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 4",
      "notes": "Special Presentation."
    },
    {
      "id": "quantumania",
      "title": "Ant-Man and the Wasp: Quantumania",
      "year": 2023,
      "release": "2023-02-17",
      "type": "movie",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 5"
    },
    {
      "id": "gotg-vol-3",
      "title": "Guardians of the Galaxy Vol. 3",
      "year": 2023,
      "release": "2023-05-05",
      "type": "movie",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 5"
    },
    {
      "id": "secret-invasion",
      "title": "Secret Invasion",
      "year": 2023,
      "release": "2023-06-21",
      "type": "series",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 5"
    },
    {
      "id": "loki-s2",
      "title": "Loki — Season 2",
      "year": 2023,
      "release": "2023-10-05",
      "type": "series",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 5"
    },
    {
      "id": "the-marvels",
      "title": "The Marvels",
      "year": 2023,
      "release": "2023-11-10",
      "type": "movie",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 5"
    },
    {
      "id": "what-if-s2",
      "title": "What If…? — Season 2",
      "year": 2023,
      "release": "2023-12-22",
      "type": "series",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 5",
      "notes": "Animated."
    },
    {
      "id": "echo",
      "title": "Echo",
      "year": 2024,
      "release": "2024-01-09",
      "type": "series",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 5"
    },
    {
      "id": "xmen-97-s1",
      "title": "X-Men '97 — Season 1",
      "year": 2024,
      "release": "2024-03-20",
      "type": "series",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 5",
      "notes": "Marvel Animation."
    },
    {
      "id": "deadpool-and-wolverine",
      "title": "Deadpool & Wolverine",
      "year": 2024,
      "release": "2024-07-26",
      "type": "movie",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 5",
      "notes": "Brings the X-Men into the multiverse."
    },
    {
      "id": "agatha-all-along",
      "title": "Agatha All Along",
      "year": 2024,
      "release": "2024-09-18",
      "type": "series",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 5"
    },
    {
      "id": "what-if-s3",
      "title": "What If…? — Season 3",
      "year": 2024,
      "release": "2024-12-22",
      "type": "series",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 5",
      "notes": "Animated."
    },
    {
      "id": "yfn-spider-man",
      "title": "Your Friendly Neighborhood Spider-Man",
      "year": 2025,
      "release": "2025-01-29",
      "type": "series",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 5",
      "notes": "Marvel Animation."
    },
    {
      "id": "captain-america-bnw",
      "title": "Captain America: Brave New World",
      "year": 2025,
      "release": "2025-02-14",
      "type": "movie",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 5"
    },
    {
      "id": "daredevil-born-again-s1",
      "title": "Daredevil: Born Again — Season 1",
      "year": 2025,
      "release": "2025-03-04",
      "type": "series",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 5"
    },
    {
      "id": "thunderbolts",
      "title": "Thunderbolts*",
      "year": 2025,
      "release": "2025-05-02",
      "type": "movie",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 5"
    },
    {
      "id": "ironheart",
      "title": "Ironheart",
      "year": 2025,
      "release": "2025-06-24",
      "type": "series",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 5"
    },
    {
      "id": "fantastic-four-first-steps",
      "title": "The Fantastic Four: First Steps",
      "year": 2025,
      "release": "2025-07-25",
      "type": "movie",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 6",
      "notes": "Introduces the Fantastic Four."
    },
    {
      "id": "eyes-of-wakanda",
      "title": "Eyes of Wakanda",
      "year": 2025,
      "release": "2025-08-06",
      "type": "series",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 6",
      "notes": "Marvel Animation."
    },
    {
      "id": "marvel-zombies",
      "title": "Marvel Zombies",
      "year": 2025,
      "release": "2025-09-24",
      "type": "series",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 6",
      "notes": "Marvel Animation."
    },
    {
      "id": "wonder-man",
      "title": "Wonder Man",
      "year": 2026,
      "release": "2026-01-27",
      "type": "series",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 6"
    },
    {
      "id": "daredevil-born-again-s2",
      "title": "Daredevil: Born Again — Season 2",
      "year": 2026,
      "release": "2026-03-01",
      "type": "series",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 6"
    },
    {
      "id": "spider-man-brand-new-day",
      "title": "Spider-Man: Brand New Day",
      "year": 2026,
      "release": "2026-07-31",
      "type": "movie",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 6"
    },
    {
      "id": "punisher-one-last-kill",
      "title": "The Punisher: One Last Kill",
      "year": 2026,
      "type": "special",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 6",
      "notes": "Special Presentation."
    },
    {
      "id": "avengers-doomsday",
      "title": "Avengers: Doomsday",
      "year": 2026,
      "release": "2026-12-18",
      "type": "movie",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 6",
      "notes": "Doctor Doom vs. the assembled heroes."
    },
    {
      "id": "avengers-secret-wars",
      "title": "Avengers: Secret Wars",
      "year": 2027,
      "release": "2027-12-17",
      "type": "movie",
      "universe": "MCU",
      "saga": "Multiverse Saga",
      "phase": "Phase 6",
      "notes": "Concludes the Multiverse Saga."
    },
    {
      "id": "agents-of-shield",
      "title": "Agents of S.H.I.E.L.D.",
      "year": 2013,
      "type": "series",
      "universe": "TV",
      "saga": "ABC & Network",
      "phase": "",
      "notes": "7 seasons, 2013–2020 (ABC)."
    },
    {
      "id": "agent-carter",
      "title": "Agent Carter",
      "year": 2015,
      "type": "series",
      "universe": "TV",
      "saga": "ABC & Network",
      "phase": "",
      "notes": "2 seasons (ABC)."
    },
    {
      "id": "inhumans",
      "title": "Inhumans",
      "year": 2017,
      "type": "series",
      "universe": "TV",
      "saga": "ABC & Network",
      "phase": "",
      "notes": "(ABC)."
    },
    {
      "id": "daredevil-netflix",
      "title": "Daredevil",
      "year": 2015,
      "type": "series",
      "universe": "TV",
      "saga": "Netflix — The Defenders Saga",
      "phase": "",
      "notes": "3 seasons, 2015–2018 (Netflix)."
    },
    {
      "id": "jessica-jones",
      "title": "Jessica Jones",
      "year": 2015,
      "type": "series",
      "universe": "TV",
      "saga": "Netflix — The Defenders Saga",
      "phase": "",
      "notes": "(Netflix)."
    },
    {
      "id": "luke-cage",
      "title": "Luke Cage",
      "year": 2016,
      "type": "series",
      "universe": "TV",
      "saga": "Netflix — The Defenders Saga",
      "phase": "",
      "notes": "(Netflix)."
    },
    {
      "id": "iron-fist",
      "title": "Iron Fist",
      "year": 2017,
      "type": "series",
      "universe": "TV",
      "saga": "Netflix — The Defenders Saga",
      "phase": "",
      "notes": "(Netflix)."
    },
    {
      "id": "the-defenders",
      "title": "The Defenders",
      "year": 2017,
      "type": "series",
      "universe": "TV",
      "saga": "Netflix — The Defenders Saga",
      "phase": "",
      "notes": "Crossover miniseries (Netflix)."
    },
    {
      "id": "punisher-netflix-tv",
      "title": "The Punisher",
      "year": 2017,
      "type": "series",
      "universe": "TV",
      "saga": "Netflix — The Defenders Saga",
      "phase": "",
      "notes": "2 seasons (Netflix)."
    },
    {
      "id": "runaways",
      "title": "Runaways",
      "year": 2017,
      "type": "series",
      "universe": "TV",
      "saga": "Hulu & Freeform",
      "phase": "",
      "notes": "(Hulu)."
    },
    {
      "id": "cloak-and-dagger",
      "title": "Cloak & Dagger",
      "year": 2018,
      "type": "series",
      "universe": "TV",
      "saga": "Hulu & Freeform",
      "phase": "",
      "notes": "(Freeform)."
    },
    {
      "id": "helstrom",
      "title": "Helstrom",
      "year": 2020,
      "type": "series",
      "universe": "TV",
      "saga": "Hulu & Freeform",
      "phase": "",
      "notes": "(Hulu)."
    },
    {
      "id": "spider-man-2002",
      "title": "Spider-Man",
      "year": 2002,
      "type": "movie",
      "universe": "EXT",
      "saga": "Sony — Spider-Man",
      "phase": "",
      "notes": "The Tobey Maguire trilogy begins."
    },
    {
      "id": "spider-man-2-2004",
      "title": "Spider-Man 2",
      "year": 2004,
      "type": "movie",
      "universe": "EXT",
      "saga": "Sony — Spider-Man",
      "phase": ""
    },
    {
      "id": "spider-man-3-2007",
      "title": "Spider-Man 3",
      "year": 2007,
      "type": "movie",
      "universe": "EXT",
      "saga": "Sony — Spider-Man",
      "phase": ""
    },
    {
      "id": "amazing-spider-man",
      "title": "The Amazing Spider-Man",
      "year": 2012,
      "type": "movie",
      "universe": "EXT",
      "saga": "Sony — Spider-Man",
      "phase": "",
      "notes": "The Andrew Garfield reboot."
    },
    {
      "id": "amazing-spider-man-2",
      "title": "The Amazing Spider-Man 2",
      "year": 2014,
      "type": "movie",
      "universe": "EXT",
      "saga": "Sony — Spider-Man",
      "phase": ""
    },
    {
      "id": "into-the-spider-verse",
      "title": "Spider-Man: Into the Spider-Verse",
      "year": 2018,
      "type": "movie",
      "universe": "EXT",
      "saga": "Sony — Spider-Verse",
      "phase": "",
      "notes": "Oscar winner; introduces Miles Morales."
    },
    {
      "id": "across-the-spider-verse",
      "title": "Spider-Man: Across the Spider-Verse",
      "year": 2023,
      "type": "movie",
      "universe": "EXT",
      "saga": "Sony — Spider-Verse",
      "phase": ""
    },
    {
      "id": "beyond-the-spider-verse",
      "title": "Spider-Man: Beyond the Spider-Verse",
      "year": 2027,
      "release": "2027-06-18",
      "type": "movie",
      "universe": "EXT",
      "saga": "Sony — Spider-Verse",
      "phase": "",
      "notes": "Trilogy finale."
    },
    {
      "id": "venom",
      "title": "Venom",
      "year": 2018,
      "type": "movie",
      "universe": "EXT",
      "saga": "Sony's Spider-Man Universe",
      "phase": ""
    },
    {
      "id": "venom-2",
      "title": "Venom: Let There Be Carnage",
      "year": 2021,
      "type": "movie",
      "universe": "EXT",
      "saga": "Sony's Spider-Man Universe",
      "phase": ""
    },
    {
      "id": "morbius",
      "title": "Morbius",
      "year": 2022,
      "type": "movie",
      "universe": "EXT",
      "saga": "Sony's Spider-Man Universe",
      "phase": ""
    },
    {
      "id": "madame-web",
      "title": "Madame Web",
      "year": 2024,
      "type": "movie",
      "universe": "EXT",
      "saga": "Sony's Spider-Man Universe",
      "phase": ""
    },
    {
      "id": "kraven-the-hunter",
      "title": "Kraven the Hunter",
      "year": 2024,
      "type": "movie",
      "universe": "EXT",
      "saga": "Sony's Spider-Man Universe",
      "phase": ""
    },
    {
      "id": "venom-3",
      "title": "Venom: The Last Dance",
      "year": 2024,
      "type": "movie",
      "universe": "EXT",
      "saga": "Sony's Spider-Man Universe",
      "phase": ""
    },
    {
      "id": "x-men-2000",
      "title": "X-Men",
      "year": 2000,
      "type": "movie",
      "universe": "EXT",
      "saga": "Fox — X-Men",
      "phase": ""
    },
    {
      "id": "x2",
      "title": "X2: X-Men United",
      "year": 2003,
      "type": "movie",
      "universe": "EXT",
      "saga": "Fox — X-Men",
      "phase": ""
    },
    {
      "id": "x-men-last-stand",
      "title": "X-Men: The Last Stand",
      "year": 2006,
      "type": "movie",
      "universe": "EXT",
      "saga": "Fox — X-Men",
      "phase": ""
    },
    {
      "id": "x-men-origins-wolverine",
      "title": "X-Men Origins: Wolverine",
      "year": 2009,
      "type": "movie",
      "universe": "EXT",
      "saga": "Fox — X-Men",
      "phase": ""
    },
    {
      "id": "x-men-first-class",
      "title": "X-Men: First Class",
      "year": 2011,
      "type": "movie",
      "universe": "EXT",
      "saga": "Fox — X-Men",
      "phase": "",
      "notes": "Prequel reboot."
    },
    {
      "id": "the-wolverine",
      "title": "The Wolverine",
      "year": 2013,
      "type": "movie",
      "universe": "EXT",
      "saga": "Fox — X-Men",
      "phase": ""
    },
    {
      "id": "x-men-dofp",
      "title": "X-Men: Days of Future Past",
      "year": 2014,
      "type": "movie",
      "universe": "EXT",
      "saga": "Fox — X-Men",
      "phase": ""
    },
    {
      "id": "deadpool",
      "title": "Deadpool",
      "year": 2016,
      "type": "movie",
      "universe": "EXT",
      "saga": "Fox — X-Men",
      "phase": ""
    },
    {
      "id": "x-men-apocalypse",
      "title": "X-Men: Apocalypse",
      "year": 2016,
      "type": "movie",
      "universe": "EXT",
      "saga": "Fox — X-Men",
      "phase": ""
    },
    {
      "id": "logan",
      "title": "Logan",
      "year": 2017,
      "type": "movie",
      "universe": "EXT",
      "saga": "Fox — X-Men",
      "phase": "",
      "notes": "Jackman's Wolverine send-off."
    },
    {
      "id": "deadpool-2",
      "title": "Deadpool 2",
      "year": 2018,
      "type": "movie",
      "universe": "EXT",
      "saga": "Fox — X-Men",
      "phase": ""
    },
    {
      "id": "dark-phoenix",
      "title": "Dark Phoenix",
      "year": 2019,
      "type": "movie",
      "universe": "EXT",
      "saga": "Fox — X-Men",
      "phase": ""
    },
    {
      "id": "the-new-mutants",
      "title": "The New Mutants",
      "year": 2020,
      "type": "movie",
      "universe": "EXT",
      "saga": "Fox — X-Men",
      "phase": ""
    },
    {
      "id": "fantastic-four-2005",
      "title": "Fantastic Four",
      "year": 2005,
      "type": "movie",
      "universe": "EXT",
      "saga": "Fox — Fantastic Four",
      "phase": ""
    },
    {
      "id": "fantastic-four-2007",
      "title": "Fantastic Four: Rise of the Silver Surfer",
      "year": 2007,
      "type": "movie",
      "universe": "EXT",
      "saga": "Fox — Fantastic Four",
      "phase": ""
    },
    {
      "id": "fantastic-four-2015",
      "title": "Fantastic Four",
      "year": 2015,
      "type": "movie",
      "universe": "EXT",
      "saga": "Fox — Fantastic Four",
      "phase": ""
    },
    {
      "id": "howard-the-duck",
      "title": "Howard the Duck",
      "year": 1986,
      "type": "movie",
      "universe": "EXT",
      "saga": "Other & Early Films",
      "phase": ""
    },
    {
      "id": "punisher-1989",
      "title": "The Punisher",
      "year": 1989,
      "type": "movie",
      "universe": "EXT",
      "saga": "Other & Early Films",
      "phase": ""
    },
    {
      "id": "captain-america-1990",
      "title": "Captain America",
      "year": 1990,
      "type": "movie",
      "universe": "EXT",
      "saga": "Other & Early Films",
      "phase": ""
    },
    {
      "id": "blade-1998",
      "title": "Blade",
      "year": 1998,
      "type": "movie",
      "universe": "EXT",
      "saga": "Other & Early Films",
      "phase": "",
      "notes": "Kicked off the modern Marvel movie era."
    },
    {
      "id": "blade-2-2002",
      "title": "Blade II",
      "year": 2002,
      "type": "movie",
      "universe": "EXT",
      "saga": "Other & Early Films",
      "phase": ""
    },
    {
      "id": "daredevil-2003",
      "title": "Daredevil",
      "year": 2003,
      "type": "movie",
      "universe": "EXT",
      "saga": "Other & Early Films",
      "phase": ""
    },
    {
      "id": "hulk-2003",
      "title": "Hulk",
      "year": 2003,
      "type": "movie",
      "universe": "EXT",
      "saga": "Other & Early Films",
      "phase": "",
      "notes": "Ang Lee's version."
    },
    {
      "id": "punisher-2004",
      "title": "The Punisher",
      "year": 2004,
      "type": "movie",
      "universe": "EXT",
      "saga": "Other & Early Films",
      "phase": ""
    },
    {
      "id": "blade-trinity-2004",
      "title": "Blade: Trinity",
      "year": 2004,
      "type": "movie",
      "universe": "EXT",
      "saga": "Other & Early Films",
      "phase": ""
    },
    {
      "id": "elektra-2005",
      "title": "Elektra",
      "year": 2005,
      "type": "movie",
      "universe": "EXT",
      "saga": "Other & Early Films",
      "phase": ""
    },
    {
      "id": "man-thing-2005",
      "title": "Man-Thing",
      "year": 2005,
      "type": "movie",
      "universe": "EXT",
      "saga": "Other & Early Films",
      "phase": ""
    },
    {
      "id": "ghost-rider-2007",
      "title": "Ghost Rider",
      "year": 2007,
      "type": "movie",
      "universe": "EXT",
      "saga": "Other & Early Films",
      "phase": ""
    },
    {
      "id": "punisher-war-zone-2008",
      "title": "Punisher: War Zone",
      "year": 2008,
      "type": "movie",
      "universe": "EXT",
      "saga": "Other & Early Films",
      "phase": ""
    },
    {
      "id": "ghost-rider-2011",
      "title": "Ghost Rider: Spirit of Vengeance",
      "year": 2011,
      "type": "movie",
      "universe": "EXT",
      "saga": "Other & Early Films",
      "phase": ""
    }
  ]
};
