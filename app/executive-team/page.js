'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import Header from '../components/header/Header';

const executiveMembers = [
    { name: "Elene Gadelia", title: "CEO", link: "/executive-team/elene-gadelia", image: "/images/team/elene.jpg" },
    { name: "Christopher Nolan", title: "Chief Solutions Officer", link: "/executive-team/christopher-nolan", image: "/images/team/christopher.jpg" },
    { name: "Christian Bale", title: "Chief Technology Officer", link: "/executive-team/christian-bale", image: "/images/team/christian.jpg" },
    { name: "Keira Knightley", title: "Vice President, Global Aviation", link: "/executive-team/keira-knightley", image: "/images/team/keira.jpg" },
    { name: "Jessica Chastain", title: "Human Resources Director", link: "/executive-team/jessica-chastain", image: "/images/team/jessica.jpg" },
    { name: "Matthew McConaughey", title: "Founder, Advisor", link: "/executive-team/matthew-mcconaughey", image: "/images/team/matthew.jpg" }
];

export default function ExecutiveTeam() {
    const router = useRouter();

    const handleClick = (link) => {
        router.push(link);
    };

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.header}>
                <Header />
            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.adWrapper}>
                    <p>Your ad here</p>
                    <video
                        className={styles.videoElement}
                        autoPlay
                        muted
                        playsInline
                    >
                        <source src="ad2.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className={styles.teamSection}>
                    <div className={styles.headerContainer}>
                        <h2>Executive Profiles</h2>
                        <p>
                            Our leadership team continues to move SkyMap forward with their<br />
                            expertise in technology and data, and shared affinity for aviation.<br /> <br />
                            For contact requests or for additional information, <br />
                            please call <br />
                            Elene Gadelia <span className={styles.phone}>(+995 599433004).</span>
                        </p>
                    </div>
                    <div className={styles.teamContainer}>
                        <div className={styles.teamGrid}>
                            {executiveMembers.map((member, index) => (
                                <div 
                                    key={index} 
                                    className={styles.teamMember} 
                                    onClick={() => handleClick(member.link)}
                                    role="button" 
                                    tabIndex="0"
                                    onKeyDown={(e) => e.key === 'Enter' && handleClick(member.link)}
                                >
                                    <Image 
                                        src={member.image} 
                                        alt={member.name} 
                                        width={150} 
                                        height={150} 
                                        className={styles.memberImage} 
                                    />
                                    <div className={styles.memberInfo}>
                                        <h3>{member.name}</h3>
                                        <p>{member.title} <span className={styles.arrow}>&#8594;</span></p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
