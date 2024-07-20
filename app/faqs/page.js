// faqs/page.js
'use client'
import React, { useState } from 'react';
import styles from './page.module.css';
import faqData from './faqData';
import Header from '../components/header/Header'

const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        if (index === activeIndex) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div className={styles.faqPage}>
          <div className={styles.header}><Header /></div>
            <h1 className={styles.title}>Frequently Asked Questions</h1>
            {faqData.map((section, secIndex) => (
                <div key={secIndex} className={styles.faqSection}>
                    <h2 className={styles.sectionTitle}>{section.section}</h2>
                    <div className={styles.faqList}>
                        {section.questions.map((faq, index) => (
                            <div key={index} className={styles.faqItem}>
                                <div className={styles.question} onClick={() => toggleAnswer(`${secIndex}-${index}`)}>
                                    {faq.question}
                                </div>
                                {activeIndex === `${secIndex}-${index}` && (
                                    <div className={styles.answer}>
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQs;
