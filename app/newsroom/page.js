'use client'
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import Header from '../components/header/Header';
import Image from 'next/image';
import planeNewsroom from '/public/images/planeNewsroom.jpg';
import { useRouter } from 'next/navigation';

export default function Newsroom() {
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const newsItems = [
        { date: "11/09/2023", type: "Announcement", title: "Legacy AeroAPI Version 2 and Version 3 Accounts are Being Sunset", link: "/newsroom/legacy-aeroAPI" },
        { date: "10/17/2023", type: "Press Release", title: "RTX’s SkyMap Announces Expanded Tracking Platform", link: "/newsroom/rtx" },
        { date: "09/19/2023", type: "Press Release", title: "SkyMap's Launches Integrated Maps Solutions for Applications and Websites", link: "/newsroom/skymap" },
        { date: "08/22/2023", type: "Press Release", title: "Australia’s Renowned Royal Flying Doctor Service (Queensland Section) Selects SkyMap for Remote Enhanced Flight Tracking Capabilities", link: "/newsroom/australia" },
        { date: "07/25/2023", type: "Announcement", title: "Experiment with SkyMap's Predictive Technology", link: "/newsroom/experiment" },
    ];

    const handleItemClick = (link) => {
        router.push(link);
    };

    if (!isMounted) {
        return null;
    }

    return (
        <div className={styles.pageWrapper}>
            <Header className={styles.header} />
            <div className={styles.content}>
                <div className={styles.topHeading}>
                    <h1 className={styles.mainHeading}>SkyMap Newsroom</h1>
                    <p className={`${styles['tracking-in-expand']} ${styles.subHeading}`}>
                        Your destination for SkyMap news, <br /> 
                        announcements, and resources.
                    </p>
                </div>
                <div className={styles.imageContainer}>
                    <Image src={planeNewsroom} alt="Plane" />
                </div>
            </div>
            <div className={styles.contactSection}>
                <div className={styles.contactBox}>
                    <h3>MEDIA CONTACT</h3>
                    <p>Elene Gadelia</p>
                    <p>+995 599433004</p>
                    <a href="/newsroom/form">Request Data</a>
                </div>
            </div>
            <div className={styles.newsSection}>
                <h2>SkyMap News</h2>
                <div className={styles.newsList}>
                    {newsItems.map((item, index) => (
                        <div key={index} className={styles.newsItem} onClick={() => handleItemClick(item.link)}>
                            <span className={styles.newsDate}>{item.date}</span>
                            <span className={styles.newsType}>{item.type}</span>
                            <span className={styles.newsTitle}>{item.title}</span>
                        </div>
                    ))}
                </div>
                <a href="#" className={styles.allNewsLink}>All News</a>
            </div>
        </div>
    );
}
