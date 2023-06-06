import "./weather.scss";
import { useEffect, useState } from "react";
import { getCurrentWeather } from "./weather-api";
import { getDailyForecast } from "./weather-api";
import cloudy from "./icons/Cloudy.png";
import Storm from "./icons/Storm.png";
import Sunny from "./icons/sunny.png";
import Windy from "./icons/wind.png";
import Rainy from "./icons/rainy.png";
import PartlyRainy from "./icons/partlyRainy.png";

export const Weather = () => {
  const [city, setCity] = useState("Vienna");
  const [weather, setWeather] = useState({
    date: "12.10.2023",
    temperature: 13,
    maxTemperature: 15,
    description: "Cloudy",
  });
  const [forecastData, setForecastData] = useState([]);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    //Call the getCurrentWeather function with the input city and update the weather state
    getCurrentWeather(city).then((data) => {
      setWeather(data);
    });
    getDailyForecast(city).then((data) => {
      setForecastData(data);
    });
  
  };

  useEffect(() => {
    getCurrentWeather("Vienna").then((data) => {
      setWeather(data);
    });
  }, []);

  useEffect(() => {
    async function fetchForecast() {
      const data = await getDailyForecast(city);
      setForecastData(data);
    }
    fetchForecast();
  }, []);

  return (
      <div className="weather-main-container">
        <div className="top-container">
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              id="city"
              value={city}
              placeholder="Enter your city"
              onChange={handleInputChange}
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="info">
          {weather && (
            <div className="current-weather-container">
              <div className="current-weather">
                <h2>{city}</h2>
                <p>{weather.temperature} °C</p>
                <p>{weather.description}</p>
              </div>
              {["Cloudy", "Intermittent clouds", "Mostly cloudy","Partly cloudy",  "Mostly Sunny"].includes(weather.description) && (
                <img src={cloudy} alt={weather.description}></img>
              )}
              {["Hot","Partly sunny", "Partly sunny w/ showers", "Mostly sunny", "Mostly Clear",  "Clear", "Partly sunny w/ t-storms", "Clear", "Sunny"].includes(weather.description) && (
                <img src={Sunny} alt={weather.description}></img>
              )}
              {["Windy","Storm", "Thunderstorms", "Mostly cloudy w/ t-storms"].includes(weather.description) && (
                <img src={Storm} alt={weather.description}></img>
              )}
              {["rainy", "Rain", "Light rain","Showers", "Dreary"].includes(weather.description) && (
                <img src={PartlyRainy} alt={weather.description}></img>
              )}
            </div>
          )}
        </div>
        <div className="weather-container">
          <ul>
            {forecastData.map((day, index) => (
              <li key={index}>
                <div className="day">
                  <h3>{new Date(day.date).toLocaleDateString('en-US', { weekday: 'long' })}</h3>
                  {["Cloudy", "Dreary", "Intermittent clouds", "Partly cloudy", "Mostly cloudy"].includes(day.description) && (
                    <img src={cloudy} alt={day.description}></img>
                  )}
                  {["Hot","Partly sunny", "Partly sunny w/ showers", "Mostly sunny", "Mostly Clear", "Partly sunny w/ t-storms", "Clear", "Sunny"].includes(day.description) && (
                    <img src={Sunny} alt={day.description}></img>
                  )}
                  {["Windy", "Storm", "Thunderstorms", "Mostly cloudy w/ t-storms"].includes(day.description) && (
                    <img src={Storm} alt={day.description}></img>
                  )}
                  {["rainy", "Rain", "Showers", "Light rain","Dreary"].includes(day.description) && (
                    <img src={PartlyRainy} alt={day.description}></img>
                  )}
                  <p>{day.minTemperature}°C</p>
                  <p>{day.maxTemperature}°C</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
};
