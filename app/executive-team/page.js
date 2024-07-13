import React from 'react';
import Header from '../components/header/Header';
import styles from './page.module.css'; 
import homeStyles from '../page.module.css'; 

const executiveTeam = () => {
  return (
    <div className={homeStyles.backgroundWrapper}> 
      <Header />
      <div className={homeStyles.contentWrapper}> 
        <div className={styles.container}>
          <h1>Executive Team</h1>
          <p></p>
        </div>
      </div>
      
    </div>
  );
};

export default executiveTeam;
