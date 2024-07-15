import React from 'react';
import styles from './page.module.css';
import Header from '../../components/header/Header';

export default function LegacyAeroAPI() {
    return (
        <div className={styles.pageWrapper}>
            <Header className={styles.header} />
            <div className={styles.content}>
                <a href="/newsroom" className={styles.backLink}>← Back to All News</a>
                <h1 className={styles.mainHeading}>Australia’s Renowned Royal Flying Doctor Service (Queensland Section) Selects FlightAware for Remote Enhanced Flight Tracking Capabilities</h1>
                <p className={styles.date}>Thursday, November 9, 2023</p>
                <div className={styles.articleContent}>
                    <p>Houston, August 22, 2023 – SkyMap, a division of Collins Aerospace, a leading digital aviation company providing global flight tracking solutions, predictive technology, analytics, and decision-making tools has announced the iconic Royal Flying Doctor Service (RFDS) (Queensland Section) – has selected FlightAware as a solution for their operationally demanding flight tracking needs.</p>
                    <p>While the SkyMap platform is utilized by all RFDS operations across Australia, the RFDS (Queensland Section) is investing in the full suite of capabilities and is now an active SkyMap Global Platinum, SkyMap GlobalBeacon, and SkyMap AeroAPI customer. Global Platinum offers 100% global flight tracking coverage and includes Aireon’s space-based satellite ADS-B technology to accurately track RFDS aircraft from takeoff to touchdown in the most remote locations they serve. GlobalBeacon is a first in kind industry leading satellite-based ADS-B from Aireon℠ and SkyMap for minute-by-minute position updates that exceed modern safety standards.</p>
                    <p>SkyMap Global Beacon web-based alerting dashboard combines Aireon℠ space-based ADS-B position data with SkyMap's technology and worldwide flight database to provide real-time 4D aircraft positions and customizable alerts for immediate notification of aircraft in distress. It’s a true turn-key solution complementing existing tools and systems to provide the RFDS operators, the peace of mind their fleet is always monitored, even in the most remote locations.</p>
                    <p>If you have questions or need assistance, please reach out to our support team at <a href="mailto:contact@skymap.com">contact@skymap.com</a> or +995 599433004</p>
                </div>
                <div className={styles.contactSection}>
                    <div className={styles.contactBox}>
                        <h3>MEDIA CONTACT</h3>
                        <p>Elene Gadelia</p>
                        <p>+995 599433004</p>
                        <a href="mailto:elenegadelia@skymap.com">email</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
