"use client";
import React, { useState } from "react";
import Header from "../components/header/Header";
import styles from "./page.module.css";
import axios from "axios";

const WeatherPage = () => {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const [selectedCity, setSelectedCity] = useState("");

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setCity(value);

    if (value.length > 2) {
      const response = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${value}`
      );
      setSuggestions(response.data.results || []);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = async (suggestion) => {
    if (suggestion && suggestion.latitude && suggestion.longitude) {
      setSelectedCity(suggestion.name);
      setCity(suggestion.name);
      setSuggestions([]);

      const response = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${suggestion.latitude}&longitude=${suggestion.longitude}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`
      );
      setWeatherData(response.data);
    } else {
      console.error("Invalid suggestion data", suggestion);
    }
  };

  const handleSearchClick = async () => {
    if (city) {
      const foundSuggestion = suggestions.find(
        (suggestion) => suggestion.name.toLowerCase() === city.toLowerCase()
      );
      if (foundSuggestion) {
        await handleSuggestionClick(foundSuggestion);
      } else {
        console.error("City not found in suggestions");
      }
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.container}>
        <div className={styles.sidePanel}>
          <h3>Weather Tips</h3>
          <ul>
            <li>Stay hydrated, especially in hot weather.</li>
            <li>Wear sunscreen to protect your skin.</li>
            <li>Dress in layers to adjust to changing temperatures.</li>
            <li>Check the weather before outdoor activities.</li>
            <li>Keep an umbrella handy during rainy seasons.</li>
            <li>Check for weather alerts and warnings in your area to stay safe.</li>
            <li>Plan your travel around the weather forecast to avoid delays and disruptions.</li>
          </ul>
        </div>
        <div className={styles.mainContent}>
          <h1>Weather Forecast</h1>
          <input
            type="text"
            value={city}
            onChange={handleInputChange}
            className={styles.searchInput}
            placeholder="Enter city name"
          />
          <button onClick={handleSearchClick} className={styles.searchButton}>
            Search
          </button>
          {suggestions.length > 0 && (
            <ul className={styles.suggestionsList}>
              {suggestions.map((suggestion, index) => (
                <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                  {suggestion.name}
                </li>
              ))}
            </ul>
          )}
          {weatherData && (
            <div className={styles.weatherContainer}>
              <h2>Weather in {selectedCity}</h2>
              <div className={styles.weatherCards}>
                {weatherData.daily.time.map((date, index) => (
                  <div key={index} className={styles.weatherCard}>
                    <p className={styles.date}>{date}</p>
                    <p>Max: {weatherData.daily.temperature_2m_max[index]}°C</p>
                    <p>Min: {weatherData.daily.temperature_2m_min[index]}°C</p>
                    <img
                      src={`images/weather_icons/${weatherData.daily.weathercode[index]}.png`}
                      alt="Weather icon"
                      className={styles.weatherIcon}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className={styles.adBox}>
          <p>Your ad here</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;
