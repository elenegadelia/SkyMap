import React from 'react';
import Image from 'next/image';
import christopher from '/public/images/team/christopher.jpg';
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
                        src={christopher} 
                        alt="Christopher Nolan" 
                        width={300} 
                        height={300} 
                        className={styles.profileImage} 
                    />
                    <div className={styles.profileInfo}>
                        <h2>Christopher Nolan</h2>
                        <h3>CHIEF SOLUTIONS OFFICER</h3>
                        <div className={styles.additionalInfo}>
                            <p>Corporate Strategy</p>
                            <p>Product Strategy</p>
                            <p>Sales Engineering</p>
                        </div>
                        <p>Christopher Nolan is a founding employee of SkyMap, helping launch and grow the business in 2019 and serving as its Vice President from 2019 to 2021. In his current role as Chief Solutions Officer, his primary focus is leading the corporate and product strategy for SkyMap, key commercial projects and strategic partner integration, and sales engineering. He also provides media interviews during major aviation-impacting events.</p>
                        <p>Nolan brings experience in concept development, design implementation, and technical analysis from engineering positions at the Air Force Research Laboratory and GE Aircraft Engines. He has a strong background in the aviation business and is a co-author of several patents. He earned a BSc. Aerospace Engineering from Embry-Riddle Aeronautical University.</p>
                        <p>Nolan holds an FAA pilot certificate and lives in Houston with his family.</p>
                        <p className={styles.contact}>For contact requests or for additional information: <br />
                         📞 (+995 577777777) <br />
                         ✉ christopher.nolan@skymap.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
