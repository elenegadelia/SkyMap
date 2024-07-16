'use client'
import React, { useRef } from 'react';
import styles from './page.module.css';
import Header from '../components/header/Header'; 

export default function Airlines() {
  const formRef = useRef(null);

  const handleContactUsClick = () => {
    formRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.pageWrapper}>
      <Header /> 
      <div className={styles.container}>
        <div className={`${styles.section} ${styles.whiteSection}`}>
          <div className={styles.contentWrapper}>
            <img src="/images/airlines/staff.jpg" alt="Airline Staff" className={styles.image} />
            <div className={styles.textWrapper}>
            <h2 className={styles.title}>SkyMap for Airlines</h2>
              <p className={styles.text}>
                How do airlines recover from the global pandemic? The answer lies in creating new and deep-rooted efficiencies driven by trusted data that proves to shareholders and passengers every resource is allocated in the smartest way possible.
                <br /><br />
                As global flight traffic bounces back, airlines making smarter ground handling and gate allocations powered by predictive AI-driven outcomes will be leading the recovery.
              </p>
              <button className={styles.contactButton} onClick={handleContactUsClick}>Contact Us</button>
            </div>
          </div>
        </div>

        <div className={`${styles.section} ${styles.blueSection}`}>
          <div className={styles.contentWrapper}>
            <img src="/images/airlines/trusted-etas.jpg" alt="Trusted Real-time ETAs" className={styles.image} />
            <div className={styles.textWrapper}>
              <h2 className={styles.title}>Trusted Real-time ETAs</h2>
              <p className={styles.text}>
                SkyMap offers the most accurate estimated in (EIN) or landing (ELDT) times in the industry allowing airlines to make accurate predictions about what is going to happen downstream.
                <br /><br />
                SkyMap's machine learning algorithm blends years of historical data with real-time status on aircraft positions, traffic, and weather affecting the flight to predict -- hours in advance -- when the aircraft will arrive at the gate.
              </p>
              <button className={styles.contactButton} onClick={handleContactUsClick}>Contact Us</button>
            </div>
          </div>
        </div>

        <div className={`${styles.section} ${styles.whiteSection}`}>
          <div className={styles.contentWrapper}>
            <img src="/images/airlines/united.jpg" alt="United Airlines Partnership" className={styles.image} />
            <div className={styles.textWrapper}>
              <h2 className={styles.title}>United Airlines Partnership</h2>
              <p className={styles.text}>
                United Airlines trusts SkyMap to augment its decision-making toolset.
                <br /><br />
                "It is more important than ever that United operates at the highest levels of efficiency to ensure our customers have a seamless travel experience. By leveraging data from SkyMap, we further able to accurately time our operations to provide reliable service and minimize any disruptions to our schedule."
              </p>
              <button className={styles.contactButton} onClick={handleContactUsClick}>Contact Us</button>
            </div>
          </div>
        </div>

        <div className={`${styles.section} ${styles.blueSection}`}>
          <div className={styles.contentWrapper}>
            <img src="/images/airlines/real-global.jpg" alt="Real Global Coverage" className={styles.image} />
            <div className={styles.textWrapper}>
              <h2 className={styles.title}>Real Global Coverage</h2>
              <p className={styles.text}>
                Whether flying over the world's oceans, the north or the south pole, you're under SkyMap coverage. Complementing our vast terrestrial ADS-B network is enhanced satellite coverage by our partner, Aireon utilizing their 66 space-based ADS-B constellations.
                <br /><br />
                With 4D position information reported at a standard interval of at least once per minute, SkyMap exceeds GADSS requirements for airlines and aircraft operators all over the world.
              </p>
              <button className={styles.contactButton} onClick={handleContactUsClick}>Contact Us</button>
            </div>
          </div>
        </div>

        <div className={`${styles.section} ${styles.whiteSection}`}>
          <div className={styles.contentWrapper}>
            <img src="/images/airlines/meet-passenger.jpg" alt="Meet Passenger Expectations" className={styles.image} />
            <div className={styles.textWrapper}>
              <h2 className={styles.title}>Meet Passenger Expectations</h2>
              <p className={styles.text}>
                From your apps in passenger phones to the FIDs boards to the gate announcements, travelers expect a unified experience. SkyMap delivers on that expectation by cutting through the multiple, conflicting sources of information to provide a single source of truth that has become established as a central, accurate, and dependable data source for the aviation industry.
                <br /><br />
                We even make it easy for airlines to test our data, including a free trial of Firehose, the streaming data feed for enterprise integrations.
              </p>
              <button className={styles.contactButton} onClick={handleContactUsClick}>Contact Us</button>
            </div>
          </div>
        </div>

        <div className={styles.formSection} ref={formRef}>
          <h2 className={styles.formTitle}>Ready to ask questions?</h2>
          <p className={styles.formText}>
            Contact us and we will be happy to answer them and share <br /> 
            proof points of how our data is helping customers like you.
          </p>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="firstName" className={styles.label}>First name</label>
              <input type="text" id="firstName" name="firstName" className={styles.input} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="lastName" className={styles.label}>Last name</label>
              <input type="text" id="lastName" name="lastName" className={styles.input} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="companyName" className={styles.label}>Company name</label>
              <input type="text" id="companyName" name="companyName" className={styles.input} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input type="email" id="email" name="email" className={styles.input} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phoneNumber" className={styles.label}>Phone number</label>
              <input type="text" id="phoneNumber" name="phoneNumber" className={styles.input} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="dataNeeds" className={styles.label}>Tell us a little bit about your data needs</label>
              <textarea id="dataNeeds" name="dataNeeds" className={styles.textarea} required></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
