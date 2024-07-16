import React from 'react';
import styles from './page.module.css';
import Header from '../../components/header/Header';

export default function LegacyAeroAPI() {
    return (
        <div className={styles.pageWrapper}>
            <Header className={styles.header} />
            <div className={styles.content}>
                <a href="/newsroom" className={styles.backLink}>← Back to All News</a>
                <h1 className={styles.mainHeading}>Legacy AeroAPI Version 2 and Version 3 Accounts are Being Sunset</h1>
                <p className={styles.date}>Thursday, November 9, 2023</p>
                <div className={styles.articleContent}>
                    <p>AeroAPI Version 2 and Version 3, previously known as FlightXML, have reached end of life as of October 31, 2023. It has been replaced with <a href="#">AeroAPI Version 4 (V4)</a>, which was introduced in October 2021.</p>
                    <p>For those who still have AeroAPI version 2 or version 3 keys, they will be sunset shortly. This does not impact your version 4 keys (if applicable), which are always different than version 2 and 3 keys.</p>
                    <p>It is imperative that you contact us immediately if you have had any issues successfully migrating to AeroAPI Version 4.</p>
                    <a href="#" className={styles.migrationButton}>View the Migration Guide</a>
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
