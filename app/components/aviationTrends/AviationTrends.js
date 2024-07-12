import React from 'react';
import CurrentTrafficChart from './CurrentTrafficChart';
import GlobalArrivalsChart from './GlobalArrivalsChart';
import RealTimeData from './RealTimeData';
import styles from './AviationTrends.module.css';

const AviationTrends = () => {
  return (
    <div className={styles.aviationTrends}>
      <div className={`${styles.chartSection} ${styles.currentTraffic}`}>
        <CurrentTrafficChart />
      </div>
      <div className={`${styles.chartSection} ${styles.globalArrivals}`}>
        <GlobalArrivalsChart />
      </div>
      <div className={`${styles.chartSection} ${styles.realTimeData}`}>
        <RealTimeData />
      </div>
    </div>
  );
};

export default AviationTrends;
