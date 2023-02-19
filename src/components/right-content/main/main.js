import "./main.scss";
import axios from "axios";
import { Switch } from "../switch/switch";
import { useEffect, useState } from "react";
import { getCurrentWeather } from "./weather-api";
import { getDailyForecast } from "./weather-api";
import cloudy from "./icons/Cloudy.png";
import Storm from "./icons/Storm.png";
import Sunny from "./icons/sunny.png";
import Windy from "./icons/wind.png";
import Rainy from "./icons/rainy.png";
import PartlyRainy from "./icons/partlyRainy.png";

export const MainContainer = () => {
  const API_KEY = "oYGuGBpGrENWkPbYJbGHQjARhL9LIxIG";
  const [city, setCity] = useState("Vienna");
  const [weather, setWeather] = useState({
    date: "12.10.2023",
    temperature: 13,
    maxTemperature: 15,
    description: "Cloudy",
  });
  const [forecastData, setForecastData] = useState([
    {
      date: "Theusday",
      minTemperature: 13,
      maxTemperature: 15,
      description: "Cloudy",
    },
    {
      date: "Wednesday",
      minTemperature: 13,
      maxTemperature: 15,
      description: "Sunny",
    },
    {
      date: "Thursday",
      minTemperature: 13,
      maxTemperature: 15,
      description: "Sunny",
    },
    {
      date: "Friday",
      minTemperature: 13,
      maxTemperature: 15,
      description: "Windy",
    },
    {
      date: "Satarday",
      minTemperature: 13,
      maxTemperature: 15,
      description: "rainy",
    },
    {
      date: "Sunday",
      minTemperature: 13,
      maxTemperature: 15,
      description: "Storm",
    },
  ]);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    //Call the getCurrentWeather function with the input city and update the weather state
    getCurrentWeather(city).then((data) => {
      setWeather(data);
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
  }, [city]);

  return (
    <div className="main-container">
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
        <Switch />
      </div>
      <div className="info">
        {weather && (
          <div className="current-weather-container">
            <div className="current-weather">
              <h1>Vienna</h1>
              <p>Temperature: {weather.temperature} °C</p>
              <p>Description: {weather.description}</p>
            </div>
            <img src={PartlyRainy}></img>
          </div>
        )}
      </div>

      <div className="weather-container">
        <h2>Forecast for {city}</h2>
        <ul>
          {forecastData.map((day, index) => (
            <li key={index}>
              <div className="day">
                {/* <h3>{new Date(day.date).toLocaleDateString()}</h3> */}
                <h3>{day.date}</h3>

                {day.description == "Cloudy" && (
                  <img src={cloudy} alt={day.description}></img>
                )}
                {day.description == "Sunny" && (
                  <img src={Sunny} alt={day.description}></img>
                )}
                {day.description == "Windy" && (
                  <img src={Windy} alt={day.description}></img>
                )}
                {day.description == "Storm" && (
                  <img src={Storm} alt={day.description}></img>
                )}
                {day.description == "rainy" && (
                  <img src={Rainy} alt={day.description}></img>
                )}
                {day.description == "" && (
                  <img src={Rainy} alt={day.description}></img>
                )}
                <p>Low: {day.minTemperature}°C</p>
                <p>High: {day.maxTemperature}°C</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
