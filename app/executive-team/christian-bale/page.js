import React from 'react';
import Image from 'next/image';
import christian from '/public/images/team/christian.jpg';
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
                        src={christian} 
                        alt="Christian Bale" 
                        width={300} 
                        height={300} 
                        className={styles.profileImage} 
                    />
                    <div className={styles.profileInfo}>
                        <h2>Christian Bale</h2>
                        <h3>CHIEF TECHNOLOGY OFFICER</h3>
                        <div className={styles.additionalInfo}>
                            <p>Research and Development</p>
                            <p>Technology Architecture</p>
                            <p>Platform</p>
                        </div>
                        
                        <p>Christian Bale joined SkyMap in 2021 and currently serves as its Chief Technology Officer. In this role, he leads the company’s large and highly talented Engineering division where he provides top-level business, organizational, and technology strategy.</p>
                        <p>His focus is to build a highly scalable organization and technology platform with industry leading product delivery and innovation, all while positioning SkyMap and Collins Aerospace for continued rapid growth and expansion into new markets.</p>
                        <p>In his previous roles at SkyMap, Zach founded and led multiple core engineering teams, most recently serving as a Director of Engineering with oversight for the company's strategy for artificial intelligence, machine learning, and real-time data fusion and interpretation for global flight and surface tracking.</p>
                        <p>Christian studied mathematics at Rice University. He spent a summer at Cornell University under Professor Robert Strichartz, where he coauthored research developing a new form of de Rham cohomology on certain fractal spaces. At Pennsylvania State University, he worked on probabilistic unfolding algorithms for searching for special periodic orbits inside high-dimensional polytopes. He also spent a semester studying advanced mathematics in Russia at the Independent University of Moscow. His Erdős number is 4.</p>
                        <p>Christian resides in Houston, Texas with his partner. His hobbies include juggling, reading, cooking, and playing board games with family and friends</p>
                        <p className={styles.contact}>For contact requests or for additional information: <br />
                         📞 (+995 599453004) <br />
                         ✉ christian.bale@skymap.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
