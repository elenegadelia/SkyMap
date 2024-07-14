'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import executiveTeamImage from '/public/images/executiveTeam.jpg';
import styles from './page.module.css';
import Header from '../components/header/Header';

const executiveMembers = [
    { name: "Elene Gadelia", title: "CEO", link: "/executive-team/elene-gadelia" }
];

export default function ExecutiveTeam() {
    const router = useRouter();

    const handleClick = (link) => {
        router.push(link);
    };

    return (
        <div className={styles.pageWrapper}>
            <Header className={styles.header} />
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
                            <Image src={executiveTeamImage} alt={member.name} className={styles.memberImage} />
                            <div className={styles.memberInfo}>
                                <h3>{member.name}</h3>
                                <p>{member.title} <span className={styles.arrow}>&#8594;</span></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
