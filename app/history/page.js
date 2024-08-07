import React from 'react';
import Header from '../components/header/Header';
import styles from './page.module.css'; 
import homeStyles from '../page.module.css'; 

const history = () => {
  return (
    <div className={homeStyles.backgroundWrapper}> 
      <Header />
      <div className={homeStyles.contentWrapper}> 
        <div className={styles.container}>
          <h1>History</h1>
          <p></p>
        </div>
      </div>
      
    </div>
  );
};

export default history;
