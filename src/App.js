
import './App.css';
import {Search, MapPin, Wind} from 'react-feather';
import getWeather from './api/api';
import { useState } from 'react';

function App() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [error, setError] = useState("");

  const getWeatherbyCity = async() => {
    if (!city.trim()) return;
    const weatherData = await getWeather(city);

    if (weatherData.error) {
      setError(weatherData.error);
      setWeather({});
    } else {
      setWeather(weatherData);
      setError("");
    }

    setCity("");
  };
  

  return (
    <div className="app">
      <h1>Weather Now</h1>
      <div className='input-wrapper'>
        <input type="text" value={city} onChange={(e)=>setCity(e.target.value)}
         placeholder='Enter city name' />
        <button onClick={()=>getWeatherbyCity()}>
          <Search></Search>
        </button>
      </div>
       {/* Error message */}
      {error && (
        <div className="content">
          <h4 style={{ color: "red" }}>{error}</h4>
        </div>
      )}
      {/* Weather Data */}
      {weather.city ?(
      <div className='content'>
        <div className='location d-flex'>
          <MapPin/>
          <h2>{weather.city} <span>({weather.country})</span></h2>
        </div>
        <p className='datetext'>{new Date(weather.time).toLocaleString()}</p>
        <div className='Weatherdesc'>
          <img src=""alt=""
          />
          <h3>Current Weather</h3>
        </div>
        <div className='tempstats d-flex flex-c'>
          <h1>{weather.temperature}<span>&deg;C</span></h1>
          <h3>Feels like {Math.round(weather.temperature)} <span>&deg;C</span> </h3>
        </div>
        <div className='windstats d-flex'>
          <Wind/>
          <h3>Wind is {weather.windspeed} Km/h at {weather.winddirection} &deg;</h3>

        </div>

      </div>
      ):(
        !error && (
      <div className='content'>
        <h4>No Data Found !</h4>
      </div>
        )
      )}
    </div>
  );
}

export default App;
