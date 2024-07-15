import React from 'react';
import styles from './page.module.css';
import Header from '../../components/header/Header';

export default function LegacyAeroAPI() {
    return (
        <div className={styles.pageWrapper}>
            <Header className={styles.header} />
            <div className={styles.content}>
                <a href="/newsroom" className={styles.backLink}>← Back to All News</a>
                <h1 className={styles.mainHeading}>Experiment with SkyMap's Predictive Technology</h1>
                <p className={styles.date}>Thursday, November 9, 2023</p>
                <div className={styles.articleContent}>
                    <p>HOUSTON - July 25, 2023 – SkyMap Foresight, the most advanced machine learning predictions in the aviation industry, just became more accessible. SkyMap Foresight Labs is a space to explore potential new applications powered by SkyMap Foresight.</p>
                    <p>What If My Gate Changes: Explore how our best-in-class neural-network ETAs are influenced in real time by gate changes.
                    Arrival Runway Predictions: Visualize arrival runway probabilities and accuracy throughout the course of a flight.</p>
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
