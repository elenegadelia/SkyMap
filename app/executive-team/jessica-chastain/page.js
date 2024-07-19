import React from 'react';
import Image from 'next/image';
import jessica from '/public/images/team/jessica.jpg';
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
                        src={jessica} 
                        alt="Jessica Chastain" 
                        width={300} 
                        height={300} 
                        className={styles.profileImage} 
                    />
                    <div className={styles.profileInfo}>
                        <h2>Jessica Chastain</h2>
                        <h3>HUMAN RESOURCES DIRECTOR</h3>
                        <div className={styles.additionalInfo}>
                            <p>Talent Acquisition</p>
                            <p>Performance Management</p>
                            <p>Compensation and Benefits</p>
                        </div>
                        <p>Jessica Chastain joined the SkyMap team in 2017 as its Director of Human Resources. In her role, she is responsible for the day-to-day human resources functions, including recruiting, onboarding, employee relations, performance management, and benefits administration. She brings over 20 years of experience in human resources and has worked with both privately held and publicly traded corporations, ranging in size from small to multi-billion-dollar companies. Most recently, Jessica served in human resources for an engineering firm.</p>
                        <p>As the Director of Human Resources, Jessica leads a team of professionals whose collective goal is to provide a high level of support to SkyMap's diverse workforce.</p>
                        <p>The human resources team works vigorously to position SkyMap as an employer of choice, attracting elite talent while retaining and growing our employees’ passion for SkyMap. As collaborative business partners, they advocate for a sustainable company culture to ensure it remains aligned with the vision and values of the organization.</p>
                        <p className={styles.contact}>For contact requests or for additional information: <br />
                         📞 (+995 599744404) <br />
                         ✉ jessica.chastain@skymap.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
