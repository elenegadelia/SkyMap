import React from 'react';
import styles from './page.module.css';
import Header from '../../components/header/Header';

export default function LegacyAeroAPI() {
    return (
        <div className={styles.pageWrapper}>
            <Header className={styles.header} />
            <div className={styles.content}>
                <a href="/newsroom" className={styles.backLink}>← Back to All News</a>
                <h1 className={styles.mainHeading}>RTX’s FlightAware Announces Expanded Tracking Platform</h1>
                <p className={styles.date}>Thursday, November 9, 2023</p>
                <div className={styles.articleContent}>
                    <p>LAS VEGAS (October 17, 2023) - FlightAware announced today the release of Global for Helicopters, a new flight tracking platform for helicopter or mixed fleet business aviation managers. FlightAware is a division of Collins Aerospace, an RTX (NYSE: RTX) business.</p>
                    <p>More than 15,000 business aviation customers worldwide are currently supported by FlightAware Global. This latest addition to the industry-leading flight tracking suite gives managers of fixed-wing and rotary fleets the full capabilities of Global for all their airframes, plus enhanced high-frequency Aireon℠ space-based ADS-B tracking and defined custom airports for operations unique to rotary-wing aircraft.</p>
                    <p>“Helicopters often operate out of remote areas and are fundamentally very different from fixed wing aircraft,” said Matt Davis, FlightAware president. “This new capability represents an important expansion of FlightAware’s flight tracking technology. FlightAware Global helps users optimize operational efficiency, improve situational awareness, and keep stakeholders informed. Now those same benefits are available to helicopter operators all over the world.”</p>
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
