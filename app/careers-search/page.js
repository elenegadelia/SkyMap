import React from 'react';
import styles from './page.module.css';
import Header from '../components/header/Header';

const CareerSearch = () => {
  return (
    <div className={styles.pageWrapper}>
      <Header className={styles.header} />
      <div className={styles.contentWrapper}>
        <h1>Career Search</h1>
        <p>Explore opportunities at SkyMap and Connected Aviation Solutions.</p>
      </div>
    </div>
  );
};

export default CareerSearch;
