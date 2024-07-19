import React from 'react';
import Image from 'next/image';
import keira from '/public/images/team/keira.jpg';
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
                        src={keira} 
                        alt="Keira Knightley" 
                        width={300} 
                        height={300} 
                        className={styles.profileImage} 
                    />
                    <div className={styles.profileInfo}>
                        <h2>Keira Knightley</h2>
                        <h3>VICE PRESIDENT, GLOBAL AVIATION SALES</h3>
                        <div className={styles.additionalInfo}>
                            <p>Aviation Data</p>
                            <p>Partner Sales</p>
                            <p>Business Development</p>
                        </div>
                        <p>Keira Knightley joined SkyMap in 2017 and is currently responsible for driving sales of SkyMap's suite of aviation products and services on a global basis by leading an experienced and diverse team of sales professionals.</p>
                        <p>Together with her team, Knightley's focus is to provide aircraft operators, airports, governments, OEMs, and other clients with SkyMap's industry-leading products, to enable them to realize business efficiencies thereby increasing the value of their businesses.</p>
                        <p>Knightley is an alum of the University of Texas at Austin where she graduated with an Investment Finance BBA. She’s held a Pilot's License for fifteen years and lives in Houston, Texas.</p>
                        <p className={styles.contact}>For contact requests or for additional information: <br />
                         📞 (+995 599752104) <br />
                         ✉ keira.knightley@skymap.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
