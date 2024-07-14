import React from 'react';
import Image from 'next/image';
import executiveTeamImage from '/public/images/executiveTeam.jpg';
import styles from './page.module.css';
import Header from '../../components/header/Header';

export default function EleneGadelia() {
    return (
        <div className={styles.pageWrapper}>
            <Header className={styles.header} />
            <div className={styles.container}>
                <a href="/executive-team" className={styles.backLink}>← Back to Leadership Team</a>
                <div className={styles.profileContainer}>
                    <Image src={executiveTeamImage} alt="Elene Gadelia" className={styles.profileImage} />
                    <div className={styles.profileInfo}>
                        <h2>Elene Gadelia</h2>
                        <h3>CEO</h3>
                        <div className={styles.additionalInfo}>
                            <p>Commercial Strategy</p>
                            <p>Partnerships</p>
                            <p>Business Development</p>
                        </div>
                        <p>For contact requests or for additional information: <br />
                         📞 (+995 599433004) <br />
                         ✉Elenegadelia@gmail.com</p>
                        <p>Elene Gadelia joined SkyMap in 2024 and serves as its CEO. In this role, she is responsible for the full lifecycle of products and services delivery and long-term strategic business plans of SkyMap.</p>
                        <p>Prior to her role as CEO, Elene served as SkyMap's Vice President of Sales and Marketing, as well as Director of Business Development. She has been instrumental in developing and executing SkyMap's growth strategies.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
