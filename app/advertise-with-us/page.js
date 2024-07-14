'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import laptopImage from '/public/images/laptop.jpg';
import styles from './page.module.css';
import Header from '../components/header/Header';

const advertisingStats = [
    { title: "Advertising Overview", value: "", isSubHeader: true },
    { title: "Monthly Unique Visitors", value: "19,000,000 unique visitors" },
    { title: "Registered SkyMap Users", value: "12,000,000 registered users" },
    { title: "Monthly Email Newsletter Circulation", value: "11,500,000 subscribers" },
    { title: "Monthly Web Page Views", value: "170,000,000 page views" },
    { title: "Average Time Spent on the Website", value: "20 minutes per session" },
    { title: "Average Number of Monthly Visits per User", value: "7 visits per month" },
    { title: "SkyMap User Demographics", value: "", isSubHeader: true },
    { title: "Age Range", value: "65% of SkyMap's audience is 25-54" },
    { title: "Gender", value: "62% male / 38% female" },
    { title: "Total Number of Pilots Using SkyMap", value: "364,635 pilots" },
    { title: "Total Number of Aircraft Owners Using SkyMap", value: "141,301 aircraft owners" },
];

export default function AdvertiseWithUs() {
    const [showContactInfo, setShowContactInfo] = useState(false);

    const handleContactClick = () => {
        setShowContactInfo(true);
    };

    return (
        <div className={styles.pageWrapper}>
            <Header className={styles.header} />
            <div className={styles.topSection}>
                <h1>Advertise With Us</h1>
                <div className={styles.imageAndText}>
                    <Image src={laptopImage} alt="Laptop" className={styles.laptopImage} />
                    <div className={styles.advertiseText}>
                        <p>Looking to reach high-end travelers who fly both private and commercial airlines as well as those who are in the aviation industry?</p>
                        <a href="#" onClick={handleContactClick}>Contact Us</a>
                        {showContactInfo && (
                            <div className={styles.contactInfo}>
                                📞 (+995 599433004) <br />
                                ✉ Elenegadelia@gmail.com
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.statsSection}>
                <h2>SkyMap Advertising by the Numbers</h2>
                <div className={styles.statsGrid}>
                    {advertisingStats.map((stat, index) => (
                        <div key={index} className={stat.isSubHeader ? styles.subHeader : styles.statItem}>
                            <h3>{stat.title}</h3>
                            {stat.value && <p>{stat.value}</p>}
                        </div>
                    ))}
                </div>
                <p className={styles.sources}>Sources: ComScore, FlightAware, Quantcast, Google Analytics</p>
            </div>
        </div>
    );
}
