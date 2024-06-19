// src/components/flightDetails/FlightDetails.js
'use client'
import styles from './FlightDetails.module.css';
import { useState } from 'react';

const FlightDetails = () => {
  const [flightNumber, setFlightNumber] = useState('');
  const [airline, setAirline] = useState('');

  const handleTrackFlight = () => {
    // Add tracking logic here
    console.log(`Tracking flight: ${flightNumber} with airline: ${airline}`);
  };

  return (
    <div className={styles.flightDetailsContainer}>
      <h2 className={styles.title}>Flight Details</h2>
      <div className={styles.detailsGrid}>
        <div className={styles.detailItem}>
          <label className={styles.detailLabel} htmlFor="flightNumber">Flight:</label>
          <input
            type="text"
            id="flightNumber"
            className={styles.inputField}
            value={flightNumber}
            onChange={(e) => setFlightNumber(e.target.value)}
          />
        </div>
        <div className={styles.detailItem}>
          <label className={styles.detailLabel} htmlFor="airline">Airline:</label>
          <input
            type="text"
            id="airline"
            className={styles.inputField}
            value={airline}
            onChange={(e) => setAirline(e.target.value)}
          />
        </div>
      </div>
      <button className={styles.trackButton} onClick={handleTrackFlight}>
        Track the flight
      </button>
    </div>
  );
};

export default FlightDetails;
