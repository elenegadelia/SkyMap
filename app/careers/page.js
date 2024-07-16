'use client'
import React, { useEffect } from 'react';
import Header from '../components/header/Header';
import styles from './page.module.css';
import Link from 'next/link';

const Careers = () => {
  useEffect(() => {
    const containers = document.querySelectorAll(`.${styles.textContainer}`);
    containers.forEach((container, index) => {
      setTimeout(() => {
        container.classList.add(styles.visible);
      }, index * 1000); 
    });
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <Header className={styles.header} />
      <div className={styles.contentWrapper}>
        <div className={styles.row}>
          <div className={`${styles.textContainer}`}>
            <h2>Working at SkyMap</h2>
            <p>
              SkyMap’s philosophy starts with hiring and developing the very best people. If we get that right, everything else follows. When we find the right person, we focus on your success from the moment you begin, and our leaders embrace a core responsibility to grow their people.
            </p>
            <p>
              Everyone at SkyMap uses their influence to actively foster and create an environment of inclusiveness, mutual respect, and learning. We measure our success by accuracy, reliability, and usefulness—by delivering value to customers quickly and often. When in doubt, we communicate.
            </p>
            <p>
              At SkyMap, we believe in continuous growth and innovation. Our team members are encouraged to pursue their passions, share their ideas, and collaborate on groundbreaking projects. We provide the tools and resources needed to thrive, fostering a culture where every voice is heard and every contribution is valued. Our commitment to excellence drives us to push boundaries and achieve new heights together.
            </p>
          </div>
          <div className={`${styles.textContainer}`}>
            <h2>SkyMap and Connected Aviation Solutions</h2>
            <p>
              Collins Aerospace acquired SkyMap in November 2021, in part for SkyMap’s ability to deliver advanced technologies that demonstrate robust industry solutions. SkyMap now operates as part of the Connected Aviation Solutions team.
            </p>
            <p>
              The Connected Aviation Solutions team provides advanced information management systems, products and services that enable the connected ecosystem by bringing together Collins’ unique breadth of aviation, surface transportation and critical infrastructure products with our smart digital solutions to help us enhance every aspect of the travel experience. We help airlines, airports, business aircraft and rail operators turn data into value to streamline operations, increase efficiency and reduce cost, enhance the passenger experience, and contribute to sustainable flight. Aviation connects the world. Our Connected Aviation Solutions team connects aviation. Sustainably. Seamlessly. Securely.
            </p>
            <p>
              This profile of us by The Points Guy is a good overview of who we are. Be sure to check out the latest activity in our blog, and if you’re an engineer, check out our engineering blog.
            </p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={`${styles.textContainer}`}>
            <h2>Benefits</h2>
            <p>
              We are an open and creative work environment, with competitive compensation and benefits. SkyMap employees are offered an extensive benefits package through RTX & Collins Aerospace.
            </p>
            <p>
              Our benefits package includes comprehensive health coverage, retirement plans, and professional development opportunities. We also offer flexible working hours, wellness programs, and a supportive work-life balance to ensure our employees can thrive both professionally and personally. At SkyMap, we are dedicated to the well-being and success of our team members.
            </p>
          </div>
          <div className={`${styles.textContainer}`}>
            <h2>Join Us</h2>
            <p>
              We’re looking for the brightest, most innovative minds to help build a more connected world. Discover how your skills can help us better the world we share and discover the never-before.
            </p>
            <div className={styles.joinUsContainer}>
              <Link href="/careers-search/skymap" legacyBehavior>
                <a className={styles.careerButton}>Search SkyMap Careers</a>
              </Link>
              <Link href="/careers-search/aviation-solutions" legacyBehavior>
                <a className={styles.careerButton}>Search Connected Aviation Solutions Careers</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
