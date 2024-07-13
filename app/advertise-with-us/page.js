import React from 'react';
import Header from '../components/header/Header';
import styles from './page.module.css'; 


const advertiseWithUs = () => {
  return (
    <div>
      <Header />
      <div className={styles.contentWrapper}>
        <h1>Advertise with us</h1>
        <p></p>
      </div>

    </div>
  );
};

export default advertiseWithUs;
