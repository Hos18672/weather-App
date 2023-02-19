const axios = require('axios'); // import axios library for making HTTP requests

const API_KEY = 'oYGuGBpGrENWkPbYJbGHQjARhL9LIxIG'; // replace with your AccuWeather API key
async function getLocationKey(city) {
  const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${city}`);
  const data = await response.json();
  return data[0].Key;
}

async function getCurrentWeather(city) {
  const locationKey = await getLocationKey(city);
  const response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${API_KEY}&details=true`);
  const data = await response.json();
  console.log('data', data); // log the data to the console for debugging purposes
  return {
    city: data[0].LocalizedName,
    temperature: data[0].Temperature.Metric.Value,
    description: data[0].WeatherText,
  };
}

export { getCurrentWeather };


async function getDailyForecast(city) {
  const locationKey = await getLocationKey(city);
  const response = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}&metric=true`);
  const data = await response.json();
  console.log('data', data); // log the data to the console for debugging purposes
  return data.DailyForecasts.map(forecast => ({
    date: forecast.Date,
    minTemperature: forecast.Temperature.Minimum.Value,
    maxTemperature: forecast.Temperature.Maximum.Value,
    description: forecast.Day.IconPhrase,
  }));
}

export { getDailyForecast };