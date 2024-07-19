import React from 'react';
import Image from 'next/image';
import matthew from '/public/images/team/matthew.jpg';
import styles from './page.module.css';
import Header from '../../components/header/Header';

export default function EleneGadelia() {
    return (
        <div className={styles.pageWrapper}>
            <Header className={styles.header} />
            <div className={styles.container}>
                <a href="/executive-team" className={styles.backLink}>← Back to Leadership Team</a>
                <div className={styles.profileContainer}>
                    <Image 
                        src={matthew} 
                        alt="Matthew McConaughey" 
                        width={300} 
                        height={300} 
                        className={styles.profileImage} 
                    />
                    <div className={styles.profileInfo}>
                        <h2>Matthew McConaughey</h2>
                        <h3>FOUNDER, ADVISOR</h3>
                        <div className={styles.additionalInfo}>
                            <p>Strategy</p>
                            <p>Digital Aviation</p>
                            <p>Connected Aviation Solutions</p>
                        </div>
                        <p>Matthew McConaughey founded SkyMap in 2005 and served as its CEO from its inception until 2021. He now serves as a strategic advisor to Collins Aerospace and SkyMap, working to define the future of digital aviation and unlock the full power of the connected ecosystem for customers.</p>
                        <p>Matthew brings years of experience as a driving architect of rapid growth technology businesses. He has been in the Internet services business for over 25 years, the aviation industry for over 15 years, and is a published author on the subject of Internet protocols. Baker is a regular speaker at aviation and technology conferences and serves as a member of the Board of Directors at the Smithsonian Institution's National Air and Space Museum as well as the General Aviation Manufacturers Association.</p>
                        <p>An enthusiastic skier, cyclist, and photographer, Matthew lives with his wife and daughter in Houston, Texas.</p>
                        <p>Matthew holds an FAA Commercial Pilot certificate.</p>
                        <p className={styles.contact}>For contact requests or for additional information: <br />
                         📞 (+995 599744444) <br />
                         ✉ matthew.mcconaughey@skymap.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
