'use client'
import React, { useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import chatLogo from '/public/images/icon.png';  
import Header from "../components/header/Header";

const ContactUs = () => {
    const [chatVisible, setChatVisible] = useState(false);

    const handleChatClick = () => {
        setChatVisible(!chatVisible);
    };

    const handleMinimizeClick = () => {
        setChatVisible(false);
    };

    return (
        <div className={styles.contactPage}>
          <div className={styles.header}>
            <Header />
          </div>
            <div className={styles.contactInfo}>
              <h1>Support</h1>
              <section>
                  <h2>User Accounts, Commercial Services, Flight Tracking</h2>
                  <p>Contact SkyMap support by email <a href="mailto:support@skymap.com">support@skymap.com</a>.</p>
                  <p>Please provide any possible information that could assist us in helping you. Be sure to include relevant details like your username, flight identification, and any screenshots.</p>
              </section>
              <section>
                  <h2>General SkyMap Support</h2>
                  <p>Please be sure to check the <a href="http://localhost:3000/faqs">frequently asked questions.</a></p>
              </section>
              <section>
                  <h2>Contact Information</h2>
                  <p>e-mail <a href="mailto:contact@skymap.com">contact@skymap.com</a> (Please do not submit export controlled technical information to this email address)</p>
                  <button className={styles.chatButton} onClick={handleChatClick}>Click here to chat with us!</button>
                  {chatVisible && (
                      <div className={styles.chatBox}>
                          <div className={styles.chatHeader}>
                              <Image src={chatLogo} alt="Chat Logo" width={35} height={35} />
                              <span>SkyMap</span>
                              <button className={styles.minimizeButton} onClick={handleMinimizeClick}>─</button>
                          </div>
                          <div className={styles.chatBody}>
                              <div className={styles.message}>
                                  <strong>SkyMap · Bot</strong>
                                  <p>Hi! Welcome to SkyMap. Ask me a question and I'll find the answer for you.</p>
                              </div>
                          </div>
                          <input type="text" placeholder="Type your question here..." className={styles.chatInput} />
                      </div>
                  )}
              </section>
              <section className={styles.contactDetails}>
                  <div>
                      <h3>Corporate (<a href="https://maps.app.goo.gl/UCB1fNZstCkVwP3MA" target="_blank">map</a>)</h3>
                      <address>
                          SkyMap<br />
                          13 Mikheil Tamarashvili St<br />
                          Georgia, Tbilisi 0186
                      </address>
                  </div>
              </section>
            </div>
        </div>
    );
};

export default ContactUs;
