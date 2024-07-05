'use client'

import { useState } from 'react';
import styles from './FlightDetails.module.css';
import { fetchFlightDetails } from '..//flightDetails/flightAPI';

const FlightDetails = () => {
  const [flightNumber, setFlightNumber] = useState('');
  const [flightDetails, setFlightDetails] = useState(null);
  const [error, setError] = useState(null);

  const handleTrackFlight = async () => {
    try {
      const details = await fetchFlightDetails(flightNumber);
      setFlightDetails(details);
      setError(null);
    } catch (error) {
      setError('No flight details found or an error occurred.');
      setFlightDetails(null);
    }
  };

  return (
    <div className={styles.flightDetailsWrapper}>
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
        ✈︎ Track the flight
        </button>
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
              <strong>Departing:</strong>{' '}
              {new Date(flightDetails.departure.time * 1000).toLocaleString()} from{' '}
              {flightDetails.departure.city}
            </div>
            <div className={styles.box}>
              <strong>Arriving:</strong>{' '}
              {new Date(flightDetails.arrival.time * 1000).toLocaleString()} at{' '}
              {flightDetails.arrival.city}
            </div>
          </div>
        )}
      </div>
      {flightDetails && (
        <div className={styles.flightPathContainer}>
          <div className={styles.city}>{flightDetails.departure.city}</div>
          <div className={styles.arcContainer}>
            <div className={styles.arc}></div>
            <img
              src="/airplane-icon.png"
              alt="Airplane"
              className={styles.airplane}

            />
          </div>
          <div className={styles.city}>{flightDetails.arrival.city}</div>
        </div>
      )}
    </div>
  );
};

export default FlightDetails;