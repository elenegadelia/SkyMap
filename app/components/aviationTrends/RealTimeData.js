import React from 'react';
import styles from './AviationTrends.module.css';

const RealTimeData = () => {
  const flightActivityChange = 3; 
  const mostFlownAircraft = 'A320'; 
  const busiestAirport = 'ATL'; 

  return (
    <div className={styles.realTimeData}>
      <h3 className={styles.chartTitle}>Trends from the Last Week</h3>
      <div className={styles.dataItem}>
        <h4>Change in Flight Activity</h4>
        <p>{flightActivityChange !== null ? `${flightActivityChange}%` : 'Loading...'}</p>
      </div>
      <div className={styles.dataItem}>
        <h4>Most Flown Aircraft</h4>
        <p>{mostFlownAircraft !== null ? mostFlownAircraft : 'Loading...'}</p>
      </div>
      <div className={styles.dataItem}>
        <h4>Busiest Airport</h4>
        <p>{busiestAirport !== null ? busiestAirport : 'Loading...'}</p>
      </div>
    </div>
  );
};

export default RealTimeData;
