import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.leftSection}>
          <div className={styles.logoContainer}>
            <img src="/logo.jpg" alt="Logo" className={styles.logo} />
            <p className={styles.logoText}>SkyMap</p>
          </div>
          <p>SkyMap provides accurate real-time, historical and predictive flight insights to all segments of the aviation industry.</p>
          <div className={styles.storeButtons}>
            <img src="/images/appStore.jpg" alt="App Store" className={styles.storeButton} />
            <img src="/images/googlePlay.jpg" alt="Google Play" className={styles.storeButton} />
          </div>
        </div>
        <div className={styles.column}>
          <h3 className={styles.heading}>Company</h3>
          <ul className={styles.list}>
          <li><Link href="/about">About</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/history">History</Link></li>
            <li><Link href="/executive-team">Executive Team</Link></li>
            <li><Link href="/advertise-with-us">Advertise with Us</Link></li>
            <li><Link href="/newsroom">Newsroom</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/webinars">Webinars</Link></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3 className={styles.heading}>Community</h3>
          <ul className={styles.list}>
            <li><Link href="/photos">Photos</Link></li>
            <li><Link href="/discussions">Discussions</Link></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3 className={styles.heading}>Support</h3>
          <ul className={styles.list}>
          <li><Link href="/contact-us">Contact Us</Link></li>
          <li><Link href="/faqs">FAQs</Link></li>
          </ul>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <p>
          English (USA) | © 2024 SkyMap  
          <span className={styles.terms}>
            <a href="#"> Terms of Use</a> | <a href="#">Privacy</a> | <a href="#">Cookie Settings</a>
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
