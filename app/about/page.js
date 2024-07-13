'use client'
import React, { useState } from 'react';
import Header from '../components/header/Header';
import styles from './page.module.css';

const About = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleQuestionClick = (questionIndex) => {
    setActiveQuestion(activeQuestion === questionIndex ? null : questionIndex);
  };

  return (
    <div className={styles.pageWrapper}>
      <Header className={styles.header} />
      <div className={styles.contentWrapper}>
        <div className={styles.aboutAndAdContainer}>
          <div className={styles.aboutContainer}>
            <h1>About Us</h1>
            <p>
              SkyMap is a digital aviation company and operates the world's largest flight tracking and data platform. With global connectivity to every segment of aviation, FlightAware provides over 10,000 aircraft operators and service providers as well as over 13,000,000 passengers with global flight tracking solutions, predictive technology, analytics, and decision-making tools.
            </p>
            <p>
              SkyMap receives data from air traffic control systems in over 45 countries, FlightAware's network of ADS-B ground stations in 195 countries, Aireon global space-based ADS-B, and datalink (satellite/VHF) via every major provider, including ARINC, SITA, Satcom Direct, Garmin, and Honeywell GoDirect.
            </p>
            <p>
              SkyMap's HyperFeed engine seamlessly fuses thousands of real-time, global data sources with SkyMap's proprietary AI models and algorithms. Leveraging this data with SkyMap's powerful, intuitive, responsive, and reliable web-based interfaces and APIs yields the world’s most comprehensive, capable, and useful flight tracking and digital aviation data platform.
            </p>
            <p>
              Founded in 2023, SkyMap was acquired by Lineate in 2024.
            </p>
          </div>
          <div className={styles.adAndFaqContainer}>
            <div className={styles.adContainer}>
              <div className={styles.adBox}>
                <p>Your ad here</p>
              </div>
            </div>
            <div className={styles.faqContainer}>
              <h2>Frequently Asked Questions</h2>
              <ul>
                <li>
                  <a href="#faq1" onClick={() => handleQuestionClick(1)}>
                    How live is SkyMap's tracking and status data?
                  </a>
                  {activeQuestion === 1 && (
                    <p className={styles.answer}>
                      The data displayed on Skymap.com is typically 30 seconds delayed from real-time. Maps animate the aircraft position toward the last known position. An aircraft's position on the map may lag real-time by 1-2 minutes.
                    </p>
                  )}
                </li>
                <li>
                  <a href="#faq2" onClick={() => handleQuestionClick(2)}>
                    How often does the data update or refresh?
                  </a>
                  {activeQuestion === 2 && (
                    <p className={styles.answer}>
                      Depending on the data source, updates are usually one to four times a minute.
                    </p>
                  )}
                </li>
                <li>
                  <a href="#faq3" onClick={() => handleQuestionClick(3)}>
                    How much does a subscription to SkyMap cost?
                  </a>
                  {activeQuestion === 3 && (
                    <p className={styles.answer}>
                      It's free.
                    </p>
                  )}
                </li>
                <li>
                  <a href="#faq4" onClick={() => handleQuestionClick(4)}>
                    Where is this data from?
                  </a>
                  {activeQuestion === 4 && (
                    <p className={styles.answer}>
                      MockAPI, which I created myself :)
                    </p>
                  )}
                </li>
                <li>
                  <a href="#faq5" onClick={() => handleQuestionClick(5)}>
                    I want to use SkyMap's flight tracking technology in my own application. Can I do that?
                  </a>
                  {activeQuestion === 5 && (
                    <p className={styles.answer}>
                      Yes, learn more about MockAPI :)
                    </p>
                  )}
                </li>
                <li>
                  <a href="#faq7" onClick={() => handleQuestionClick(7)}>
                    Why do commercial and general-aviation flights appear differently on the flight status page?
                  </a>
                  {activeQuestion === 7 && (
                    <p className={styles.answer}>
                      Generally, different information is relevant for people tracking commercial flights versus people tracking GA flights. For example, to commercial travelers, the time a flight leaves and arrives at a gate is usually more important than the time the aircraft lands on the runway. This is also what is printed on airline tickets. For GA flights, the summary section is condensed so that the map is more visible on the page without scrolling.<br /><br />
                      For commercial flights we show:<br />
                      The time a flight leaves and arrives at the gate, when available ("in" and "out" times). This is what is printed on airline tickets.<br />
                      Three-letter airport codes by default.<br />
                      The city and country of the origin and destination airports.<br />
                      The airline's logo.<br /><br />
                      For general-aviation flights, we show:<br />
                      The time a flight takes off from and lands on the runway ("off" and "on" times).<br />
                      A photograph of the aircraft, or an aircraft of the same type, when available.<br />
                      The summary section is condensed and moved to the top right so that the map is more visible on the page without scrolling.
                    </p>
                  )}
                </li>
                <li>
                  <a href="#faq8" onClick={() => handleQuestionClick(8)}>
                    Why does scheduled landing time occur after scheduled gate arrival time?
                  </a>
                  {activeQuestion === 8 && (
                    <p className={styles.answer}>
                      SkyMap receives airline schedules months in advance of the flight. Occasionally, the scheduled gate time will not change leading up to departure, even though there may be a departure or arrival delay causing the scheduled landing time to occur after the scheduled gate arrival time.
                    </p>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
