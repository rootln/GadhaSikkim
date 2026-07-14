# Five Friends — Sikkim Journey Planner

A browser-ready, high-fidelity responsive prototype based on the supplied Sikkim travel brief.

## Fastest preview

Open `index.html` in a browser, or serve this folder locally:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Next.js shell

A deployable Next.js shell is included in `nextjs/`.

```bash
cd nextjs
npm install
npm run dev
```

The shell loads the complete interactive prototype from `public/prototype/` and includes a Framer Motion page entrance. The prototype itself is intentionally framework-independent so it can also be reviewed directly without installing dependencies.

## Included interactions

- Three full itineraries with expandable day timelines
- Indicative schedules, road intensity, altitude, permits, weather alerts and Plan B options
- Destination search, regional filters, permit filters, favourites and group voting
- Synchronized itinerary and Google Maps panels
- Bhubaneswar flight/train/mixed/return journey planner
- Private SUV versus shared/public transport comparison
- Permit centre with nationality selector
- October/November seasonal guidance
- Packing checklist and My Trip dashboard saved in local storage
- Itinerary comparison, share controls, print/PDF layout, dark mode and reduced-motion support

## Production integration still required

Live train and flight availability, road status, weather, permit rules and official Google Maps API credentials are not hard-coded. Connect verified official or licensed data sources before a production launch. Remote imagery should also be self-hosted or replaced with final licensed assets.
