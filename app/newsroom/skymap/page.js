import React from 'react';
import styles from './page.module.css';
import Header from '../../components/header/Header';

export default function LegacyAeroAPI() {
    return (
        <div className={styles.pageWrapper}>
            <Header className={styles.header} />
            <div className={styles.content}>
                <a href="/newsroom" className={styles.backLink}>← Back to All News</a>
                <h1 className={styles.mainHeading}>SkyMap Launches Integrated Maps Solutions for Applications and Websites</h1>
                <p className={styles.date}>Thursday, November 9, 2023</p>
                <div className={styles.articleContent}>
                    <p>HOUSTON (September 19, 2023) - SkyMap, a division of Collins Aerospace, an RTX (NYSE: RTX) business, announced a new comprehensive suite of highly customizable integrated flight map and status solutions.</p>
                    <p>Integrated Maps Solutions easily fuses flight tracking visualizations for individual flights into any website or application. Users can now combine airborne and surface aircraft movement against a backdrop of worldwide maps that include various layer styles for aviation charts, airports and weather.</p>
                    <p>“Customers have been asking FlightAware for an easy path to integrate the map experience of our flight stories into their digital properties,” said SkyMap president Matt Davis. “Over time, customers will migrate from legacy iFrame solutions to our new Integrated Maps Solutions for greater functionality and will appreciate the ease of integration.”</p>
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
