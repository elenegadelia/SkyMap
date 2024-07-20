import React from 'react';
import Image from 'next/image';
import elene from '/public/images/team/elene.jpg';
import styles from './page.module.css';
import Header from '../../components/header/Header';

export default function Pages() {
    return (
        <div className={styles.pageWrapper}>
            <Header className={styles.header} />
            <div className={styles.container}>
                <a href="/executive-team" className={styles.backLink}>← Back to Leadership Team</a>
                <div className={styles.profileContainer}>
                    <Image 
                        src={elene} 
                        alt="Elene Gadelia" 
                        width={300} 
                        height={300} 
                        className={styles.profileImage} 
                    />
                    <div className={styles.profileInfo}>
                        <h2>Elene Gadelia</h2>
                        <h3>CEO</h3>
                        <div className={styles.additionalInfo}>
                            <p>Commercial Strategy</p>
                            <p>Partnerships</p>
                            <p>Business Development</p>
                        </div>
                        <p>Elene Gadelia joined SkyMap in 2024 and serves as its CEO. In this role, she is responsible for the full lifecycle of products and services delivery and long-term strategic business plans of SkyMap.</p>
                        <p>Prior to her role as CEO, Elene served as SkyMap's Vice President of Sales and Marketing, as well as Director of Business Development. She has been instrumental in developing and executing SkyMap's growth strategies.</p>
                        <p>Elene earned a B.S. from the University of Texas at Austin and a MBA from the McCombs School of Business at the University of Texas at Austin. She also holds an FAA Commercial Pilot certificate.</p>
                        <p>An enthusiastic skier, Elene lives in Tbilisi, Georgia with her brother and her dog and during her free time can be found having fun with her friends or travelling around the world.</p>
                        <p className={styles.contact}>For contact requests or for additional information: <br />
                         📞 (+995 599433004) <br />
                         ✉ Elenegadelia@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
