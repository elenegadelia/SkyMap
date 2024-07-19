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
            <img src="/images/owners-operators/making-flying-better.jpg" alt="Airline Staff" className={styles.image} />
            <div className={styles.textWrapper}>
            <h2 className={styles.title}>Making Flying Better</h2>
              <p className={styles.text}>
              It's our business to make the flying experience easier and more informed. From preflight planning through arrival, insights powered by our data make each flight as seamless as possible. 
                <br /><br />
                Apart from having unparalleled surface visualizations, weather forecasts, and flight history reports, aircraft owners and operators also get the information needed to stay synced with the people who matter. With partners like ForeFlight and FlightBridge, we integrate into the systems you already use, infusing them with the most complete data and predictive insights in the aviation industry.
              </p>
            </div>
          </div>
        </div>

        <div className={`${styles.section} ${styles.blueSection}`}>
          <div className={styles.contentWrapper}>
            <img src="/images/owners-operators/synchronize.jpg" alt="Trusted Real-time ETAs" className={styles.image} />
            <div className={styles.textWrapper}>
              <h2 className={styles.title}>Synchronize Your Plans</h2>
              <p className={styles.text}>
              A successful flight is a team effort. SkyMap removes barriers to effective communication within various teams and entities that need to know plan details and how they're changing in real-time. 
                <br /><br />
                No need to alert your FBO and five different parties about a takeoff delay, it's an automated process.
              </p>
            </div>
          </div>
        </div>

        <div className={`${styles.section} ${styles.whiteSection}`}>
          <div className={styles.contentWrapper}>
            <img src="/images/owners-operators/visualizer.jpg" alt="United Airlines Partnership" className={styles.image} />
            <div className={styles.textWrapper}>
              <h2 className={styles.title}>Global Situational Awareness</h2>
              <p className={styles.text}>
              With the advanced surface situational awareness accompanied by our airborne flight tracking, customers of SkyMap Global get the complete picture of their flight from the moment it powers on to when it parks at its final destination. If flying in areas of lower terrestrial coverage, Aireon's Space-based ADS-B completes the picture. 
                <br /><br />
                When SkyMap detects ground positions for your aircraft (either taxiing for takeoff or to park) you can watch a live surface stream directly on your aircraft's flight page. You will also be able to see other planes taxiing, taking off, and landing.
              </p>
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
