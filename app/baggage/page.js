"use client";
import React, { useState } from "react";
import Header from "../components/header/Header";
import styles from "./page.module.css";

const baggageInfo = {
  "Tbilisi International Airport": {
    name: "Tbilisi International Airport",
    baggageAllowance: "23 kg for Economy class, 32 kg for Business class",
    carryOnAllowance: "1 piece, max 8 kg",
    oversizedBaggage: "Contact airline for information",
    prohibitedItems: "No liquids over 100ml, no sharp objects",
  },
  "Natakhtari Airfield": {
    name: "Natakhtari Airfield",
    baggageAllowance: "15 kg for all classes",
    carryOnAllowance: "1 piece, max 5 kg",
    oversizedBaggage: "Not allowed",
    prohibitedItems: "No liquids over 100ml, no sharp objects, no electronic devices over 15 inches",
  },
  "Stepanavan Airport": {
    name: "Stepanavan Airport",
    baggageAllowance: "20 kg for Economy class, 30 kg for Business class",
    carryOnAllowance: "1 piece, max 7 kg",
    oversizedBaggage: "Contact airline for information",
    prohibitedItems: "No liquids over 100ml, no sharp objects",
  },
};

const BaggagePage = () => {
  const [selectedAirport, setSelectedAirport] = useState("");

  const handleAirportChange = (e) => {
    setSelectedAirport(e.target.value);
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.container}>
        <div className={styles.videoContainer}>
          <video
            className={styles.videoElement}
            autoPlay
            muted
            playsInline
          >
            <source src="lineate.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={styles.videoText}>Lineate - freedom to develop</div>
        </div>
        <div className={styles.mainContent}>
          <h1>Baggage Information</h1>
          <div className={styles.selector}>
            <label htmlFor="airport">Select Airport:</label>
            <select id="airport" value={selectedAirport} onChange={handleAirportChange}>
              <option value="">Select an airport</option>
              {Object.keys(baggageInfo).map((airport, index) => (
                <option key={index} value={airport}>
                  {airport}
                </option>
              ))}
            </select>
          </div>
          {selectedAirport && (
            <div className={styles.baggageInfo}>
              <h2>{baggageInfo[selectedAirport].name}</h2>
              <p><strong>Baggage Allowance:</strong> {baggageInfo[selectedAirport].baggageAllowance}</p>
              <p><strong>Carry-On Allowance:</strong> {baggageInfo[selectedAirport].carryOnAllowance}</p>
              <p><strong>Oversized Baggage:</strong> {baggageInfo[selectedAirport].oversizedBaggage}</p>
              <p><strong>Prohibited Items:</strong> {baggageInfo[selectedAirport].prohibitedItems}</p>
            </div>
          )}
        </div>
        <div className={styles.sidePanel}>
          <h3>Baggage Policies</h3>
          <ul>
            <li>Check-in baggage must not exceed the weight limit.</li>
            <li>Carry-on baggage should fit in the overhead bin or under the seat.</li>
            <li>Label your baggage with your name and contact information.</li>
            <li>Declare any hazardous materials to the airline staff.</li>
            <li>Adhere to the airline's size and weight restrictions for all baggage.</li>
            <li>Keep valuable items, medications, and important documents in your carry-on.</li>
          </ul>
        </div>
      </div>
      <div className={styles.youtubeVideoContainer}>
        <div className={styles.videoText}>Place your ad here</div>
          <video
            className={styles.videoElement}
            autoPlay
            muted
            playsInline
          >
            <source src="ad.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
    </div>
  );
};

export default BaggagePage;
