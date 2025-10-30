# Weather Now

A small React app (created with Create React App) that fetches current weather for a city using the Open-Meteo geocoding and weather APIs.

This repository contains a `weather-now` React app in the `weather-now/` folder. The app's weather helper is in `src/api/api.js` and uses the Open-Meteo geocoding endpoint plus the Open-Meteo forecast endpoint to return a small, cleaned weather object.

## Features

- Resolve city name to latitude/longitude via Open-Meteo geocoding
- Fetch current weather from Open-Meteo
- Return a simple object with city, country, temperature, windspeed, winddirection and time

## Project layout

- `weather-now/` — React app (create-react-app)
  - `package.json` — app scripts and dependencies
  - `src/` — React sources
    - `api/api.js` — getWeather function that queries Open-Meteo
    - `App.js`, `index.js`, etc.
- `README.md` — this file

## Requirements

- Node.js (v14+ recommended)
- npm (or yarn)

## Install & run (development)

Open a terminal and run:

```pwsh
cd weather-now
npm install
npm start
```

This starts the development server (usually at http://localhost:3000).

## Build

To build a production bundle:

```pwsh
cd weather-now
npm run build
```

## Tests

Run the test runner:

```pwsh
cd weather-now
npm test
```

## API helper (usage)

The weather helper is implemented in `weather-now/src/api/api.js` and exports a default `getWeather` async function. It queries two Open-Meteo endpoints (geocoding + forecast) and returns a small object or an error object.

Example usage:

```javascript
import getWeather from "./api/api";

async function example() {
  const result = await getWeather("London");
  if (result.error) {
    console.error(result.error);
  } else {
    console.log(result);
    // { city, country, temperature, windspeed, winddirection, time }
  }
}

example();
```

Notes:

- No API key is required for the Open-Meteo endpoints used here.
- `getWeather` returns `{ error: '...' }` on failure or the cleaned weather object on success.

## Scripts (from `weather-now/package.json`)

- `npm start` — start dev server
- `npm run build` — build production bundle
- `npm test` — run tests
- `npm run eject` — eject the CRA configuration (irreversible)

## Dependencies

The React app relies on typical Create React App dependencies (react, react-dom, react-scripts, etc.). There are also a couple of additional dependencies included at the repository root (for example `dateformat` and `react-feather`) — if code in the root uses them, run `npm install` in the root as well.

## Contributing

1. Fork the repo
2. Create a feature branch
3. Open a pull request with a clear description of changes

## License

This project does not include a LICENSE file by default. Add one (for example, `MIT`) if you plan to make the project public.

---

If you'd like, I can:

- Add a short example UI in `App.js` to demonstrate `getWeather` results.
- Add a `LICENSE` file (MIT) and a minimal CI workflow to run tests on push.
- Update README with screenshots and badges.
