import React, { useState, useEffect } from "react";
import "./middle.scss";
import jsonData from './list_links.json'; // Import the JSON data

export const Middle = () => {
  const [query, setQuery] = useState("");
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  const hours = formatTime(time.getHours());
  const minutes = formatTime(time.getMinutes());
  const seconds = formatTime(time.getSeconds());
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(url, "_blank");
  };

  const [data, setData] = useState(jsonData); // Initial state set to the imported JSON data

  const handleAddObject = () => {
    const newObject = { name: "John Doe", age: 25 };

    // Create a new array with the added object
    const updatedData = [...data, newObject];

    setData(updatedData); // Update the state with the new data
  };

  return (
    <main className="middle">
      <div className="clock">
        <span className="hour">{hours}</span>:
        <span className="minutes">{minutes}</span>:
        <span className="seconds">{seconds}</span>
      </div>
      <div className="search">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="search-input"
            placeholder="Search in Google"
            value={query}
            onChange={handleChange}
            required
          />
          <br />
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>
      </div>
      <div className="links">
        <ul>
          {data.map((object, index) => (
            <li key={index} className="link">
              <a href={object.url} target="_blank" ><p>{object.name}</p></a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};
