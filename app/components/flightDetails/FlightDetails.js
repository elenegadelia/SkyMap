'use client';

import { useState } from 'react';
import styles from './FlightDetails.module.css';

const FlightDetails = () => {
  const [flightNumber, setFlightNumber] = useState('');
  const [airline, setAirline] = useState('');
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [showDetails, setShowDetails] = useState(false);
  const [isRouteSearch, setIsRouteSearch] = useState(false);

  const handleTrackFlight = () => {
    // Validate inputs here if needed
    setShowDetails(true);
  };

  const toggleSearchMode = () => {
    setIsRouteSearch(!isRouteSearch);
    setShowDetails(false);
  };

  return (
    <div className={styles.flightDetailsContainer}>
      <h2 className={styles.heading}>Flight Details</h2>
      {!isRouteSearch ? (
        <>
          <div className={styles.inputContainer}>
            <label>Flight:</label>
            <input
              type="text"
              value={flightNumber}
              onChange={(e) => setFlightNumber(e.target.value)}
            />
          </div>
          <div className={styles.inputContainer}>
            <label>Airline:</label>
            <input
              type="text"
              value={airline}
              onChange={(e) => setAirline(e.target.value)}
            />
          </div>
        </>
      ) : (
        <>
          <div className={styles.inputContainer}>
            <label>Departure:</label>
            <input
              type="text"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
            />
          </div>
          <div className={styles.inputContainer}>
            <label>Destination:</label>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <div className={styles.inputContainer}>
            <label>Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </>
      )}
      <button className={styles.button} onClick={handleTrackFlight}>Track the flight</button>
      <a className={styles.link} onClick={toggleSearchMode}>
        {isRouteSearch ? 'Search by Flight' : 'Search by Route'}
      </a>
      {showDetails && !isRouteSearch && (
        <div className={styles.details}>
          <div className={styles.box}>
            <strong>Status:</strong> On time
          </div>
          <div className={styles.box}>
            <strong>Duration:</strong> 4
          </div>
          <div className={styles.box}>
            <strong>Departing:</strong> 6:15 PM 22/10/2024 from Tbilisi (TB)
          </div>
          <div className={styles.box}>
            <strong>Arriving:</strong> 8:15 PM 22/10/2024 at Amsterdam (NL)
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightDetails;
