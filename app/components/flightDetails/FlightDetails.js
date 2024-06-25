'use client';

import { useState } from 'react';
import styles from './FlightDetails.module.css';
import { fetchFlightDetails } from '../../services/flightAPI';

const FlightDetails = () => {
  const [flightNumber, setFlightNumber] = useState('');
  const [flightDetails, setFlightDetails] = useState(null);
  const [error, setError] = useState('');

  const handleTrackFlight = async () => {
    try {
      const details = await fetchFlightDetails(flightNumber);
      setFlightDetails(details);
      setError('');
    } catch (err) {
      setFlightDetails(null);
      setError('No flight details found or an error occurred.');
    }
  };

  return (
    <div className={styles.flightDetailsContainer}>
      <h2 className={styles.heading}>Flight Details</h2>
      <div className={styles.inputContainer}>
        <label>Flight:</label>
        <input
          type="text"
          value={flightNumber}
          onChange={(e) => setFlightNumber(e.target.value)}
        />
      </div>
      <button className={styles.button} onClick={handleTrackFlight}>
        Track the flight
      </button>
      <a className={styles.link} onClick={() => setFlightDetails(null)}>
        Search by Route
      </a>
      {error && <div className={styles.error}>{error}</div>}
      {flightDetails && (
        <div className={styles.details}>
          <div className={styles.box}>
            <strong>Status:</strong> {flightDetails.status}
          </div>
          <div className={styles.box}>
            <strong>Duration:</strong> {flightDetails.duration} hours
          </div>
          <div className={styles.box}>
            <strong>Departing:</strong> {new Date(flightDetails.departure.time * 1000).toLocaleString()} from {flightDetails.departure.city}
          </div>
          <div className={styles.box}>
            <strong>Arriving:</strong> {new Date(flightDetails.arrival.time * 1000).toLocaleString()} at {flightDetails.arrival.city}
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightDetails;
