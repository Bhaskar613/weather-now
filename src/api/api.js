

const getWeather = async (city) => {
  try {
    // Step 1: Get latitude & longitude from city
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
    );
    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      return { error: "City not found!" };
    }

    const { latitude, longitude, name, country } = geoData.results[0];

    // Step 2: Get current weather using coordinates
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const weatherData = await weatherRes.json();

    // Step 3: Return clean data
    return {
      city: name,
      country: country,
      temperature: weatherData.current_weather.temperature,
      windspeed: weatherData.current_weather.windspeed,
      winddirection: weatherData.current_weather.winddirection,
      time: weatherData.current_weather.time,
    };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return { error: "Failed to fetch weather data" };
  }
};

export default getWeather;
