'use client'
import React, { useState, useRef } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import careersImage from '/public/images/careers.jpg';
import Header from '../../components/header/Header';
import jobsData from '../jobsData';

export default function SkyMapCareers() {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [expandedSection, setExpandedSection] = useState(null);
    const [selectedFilters, setSelectedFilters] = useState({
        businessUnit: null,
        country: null,
        city: null,
        hiringType: null,
        jobCategory: null,
        location: null,
        experienceLevel: null,
    });
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 4;
    const filterRef = useRef(null); 

    const handleCountryChange = (country) => {
        setSelectedCountry(country);
        setSelectedFilters((prev) => ({ ...prev, country }));
    };

    const getCities = () => {
        switch (selectedCountry) {
            case 'Georgia':
                return ['Tbilisi', 'Batumi'];
            case 'Hungary':
                return ['Budapest', 'Debrecen'];
            case 'Netherlands':
                return ['Amsterdam', 'Utrecht', 'Maastricht', 'Eindhoven'];
            default:
                return [];
        }
    };

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    const handleFilterClick = (section, value) => {
        setSelectedFilters((prev) => ({ ...prev, [section]: value }));
    };

    const filteredJobs = jobsData.filter((job) => {
        return (
            (!selectedFilters.businessUnit || job.businessUnit === selectedFilters.businessUnit) &&
            (!selectedFilters.country || job.country === selectedFilters.country) &&
            (!selectedFilters.city || job.city === selectedFilters.city) &&
            (!selectedFilters.hiringType || job.type === selectedFilters.hiringType) &&
            (!selectedFilters.jobCategory || job.category === selectedFilters.jobCategory) &&
            (!selectedFilters.location || job.locationType === selectedFilters.location) &&
            (!selectedFilters.experienceLevel || job.experienceLevel === selectedFilters.experienceLevel)
        );
    });

    const clearFilters = () => {
        setSelectedFilters({
            businessUnit: null,
            country: null,
            city: null,
            hiringType: null,
            jobCategory: null,
            location: null,
            experienceLevel: null,
        });
    };

    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredJobs.length / jobsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handlePageClick = (number) => {
        setCurrentPage(number);
        window.scrollTo({
            top: filterRef.current.offsetTop, 
            behavior: 'smooth' 
        });
    };

    return (
        <div className={styles.pageWrapper}>
            <Header className={styles.header} />
            <div className={styles.imageContainer}>
                <Image src={careersImage} alt="Careers" className={styles.careersImage} />
            </div>
            <div className={styles.title}>
                <h1>Careers at SkyMap</h1>
            </div>
            <div className={styles.content}>
                <aside className={styles.filter} ref={filterRef}>
                    <h2>Filter</h2>
                    <div className={styles.filterSection}>
                        <h3 onClick={() => toggleSection('businessUnit')}>
                            Business Unit {expandedSection === 'businessUnit' ? '-' : '+'}
                        </h3>
                        {expandedSection === 'businessUnit' && (
                            <div className={styles.filterOptions}>
                                <div
                                    className={`${styles.filterOption} ${selectedFilters.businessUnit === 'Georgian Airways' ? styles.selected : ''}`}
                                    onClick={() => handleFilterClick('businessUnit', 'Georgian Airways')}
                                >
                                    Georgian Airways
                                </div>
                                <div
                                    className={`${styles.filterOption} ${selectedFilters.businessUnit === 'WizzAir' ? styles.selected : ''}`}
                                    onClick={() => handleFilterClick('businessUnit', 'WizzAir')}
                                >
                                    WizzAir
                                </div>
                                <div
                                    className={`${styles.filterOption} ${selectedFilters.businessUnit === 'TransAvia' ? styles.selected : ''}`}
                                    onClick={() => handleFilterClick('businessUnit', 'TransAvia')}
                                >
                                    TransAvia
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={styles.filterSection}>
                        <h3 onClick={() => toggleSection('country')}>
                            Country {expandedSection === 'country' ? '-' : '+'}
                        </h3>
                        {expandedSection === 'country' && (
                            <div className={styles.filterOptions}>
                                <div
                                    className={`${styles.filterOption} ${selectedFilters.country === 'Georgia' ? styles.selected : ''}`}
                                    onClick={() => handleCountryChange('Georgia')}
                                >
                                    Georgia
                                </div>
                                <div
                                    className={`${styles.filterOption} ${selectedFilters.country === 'Hungary' ? styles.selected : ''}`}
                                    onClick={() => handleCountryChange('Hungary')}
                                >
                                    Hungary
                                </div>
                                <div
                                    className={`${styles.filterOption} ${selectedFilters.country === 'Netherlands' ? styles.selected : ''}`}
                                    onClick={() => handleCountryChange('Netherlands')}
                                >
                                    Netherlands
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={styles.filterSection}>
                        <h3 onClick={() => toggleSection('city')}>
                            City {expandedSection === 'city' ? '-' : '+'}
                        </h3>
                        {expandedSection === 'city' && (
                            <div className={styles.filterOptions}>
                                {getCities().map((city) => (
                                    <div
                                        key={city}
                                        className={`${styles.filterOption} ${selectedFilters.city === city ? styles.selected : ''}`}
                                        onClick={() => handleFilterClick('city', city)}
                                    >
                                        {city}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className={styles.filterSection}>
                        <h3 onClick={() => toggleSection('hiringType')}>
                            Hiring Type {expandedSection === 'hiringType' ? '-' : '+'}
                        </h3>
                        {expandedSection === 'hiringType' && (
                            <div className={styles.filterOptions}>
                                <div
                                    className={`${styles.filterOption} ${selectedFilters.hiringType === 'Full Time' ? styles.selected : ''}`}
                                    onClick={() => handleFilterClick('hiringType', 'Full Time')}
                                >
                                    Full Time
                                </div>
                                <div
                                    className={`${styles.filterOption} ${selectedFilters.hiringType === 'Part Time' ? styles.selected : ''}`}
                                    onClick={() => handleFilterClick('hiringType', 'Part Time')}
                                >
                                    Part Time
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={styles.filterSection}>
                        <h3 onClick={() => toggleSection('jobCategory')}>
                            Job Category {expandedSection === 'jobCategory' ? '-' : '+'}
                        </h3>
                        {expandedSection === 'jobCategory' && (
                            <div className={styles.filterOptions}>
                                <div
                                    className={`${styles.filterOption} ${selectedFilters.jobCategory === 'Engineering' ? styles.selected : ''}`}
                                    onClick={() => handleFilterClick('jobCategory', 'Engineering')}
                                >
                                    Engineering
                                </div>
                                <div
                                    className={`${styles.filterOption} ${selectedFilters.jobCategory === 'Front-End Developer' ? styles.selected : ''}`}
                                    onClick={() => handleFilterClick('jobCategory', 'Front-End Developer')}
                                >
                                    Front-End Developer
                                </div>
                                <div
                                    className={`${styles.filterOption} ${selectedFilters.jobCategory === 'Java Developer' ? styles.selected : ''}`}
                                    onClick={() => handleFilterClick('jobCategory', 'Java Developer')}
                                >
                                    Java Developer
                                </div>
                                <div
                                    className={`${styles.filterOption} ${selectedFilters.jobCategory === 'Full-Stack Developer' ? styles.selected : ''}`}
                                    onClick={() => handleFilterClick('jobCategory', 'Full-Stack Developer')}
                                >
                                    Full-Stack Developer
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={styles.filterSection}>
                        <h3 onClick={() => toggleSection('location')}>
                            Location {expandedSection === 'location' ? '-' : '+'}
                        </h3>
                        {expandedSection === 'location' && (
                            <div className={styles.filterOptions}>
                                <div
                                    className={`${styles.filterOption} ${selectedFilters.location === 'Remote' ? styles.selected : ''}`}
                                    onClick={() => handleFilterClick('location', 'Remote')}
                                >
                                    Remote
                                </div>
                                <div
                                    className={`${styles.filterOption} ${selectedFilters.location === 'On Site' ? styles.selected : ''}`}
                                    onClick={() => handleFilterClick('location', 'On Site')}
                                >
                                    On Site
                                </div>
                                <div
                                    className={`${styles.filterOption} ${selectedFilters.location === 'Hybrid' ? styles.selected : ''}`}
                                    onClick={() => handleFilterClick('location', 'Hybrid')}
                                >
                                    Hybrid
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={styles.filterSection}>
                        <h3 onClick={() => toggleSection('experienceLevel')}>
                            Experience Level {expandedSection === 'experienceLevel' ? '-' : '+'}
                        </h3>
                        {expandedSection === 'experienceLevel' && (
                            <div className={styles.filterOptions}>
                                <div
                                    className={`${styles.filterOption} ${selectedFilters.experienceLevel === 'Entry Level' ? styles.selected : ''}`}
                                    onClick={() => handleFilterClick('experienceLevel', 'Entry Level')}
                                >
                                    Entry Level
                                </div>
                                <div
                                    className={`${styles.filterOption} ${selectedFilters.experienceLevel === 'Middle' ? styles.selected : ''}`}
                                    onClick={() => handleFilterClick('experienceLevel', 'Middle')}
                                >
                                    Middle
                                </div>
                                <div
                                    className={`${styles.filterOption} ${selectedFilters.experienceLevel === 'Senior' ? styles.selected : ''}`}
                                    onClick={() => handleFilterClick('experienceLevel', 'Senior')}
                                >
                                    Senior
                                </div>
                                <div
                                    className={`${styles.filterOption} ${selectedFilters.experienceLevel === 'Internship' ? styles.selected : ''}`}
                                    onClick={() => handleFilterClick('experienceLevel', 'Internship')}
                                >
                                    Internship
                                </div>
                            </div>
                        )}
                    </div>
                </aside>
                <main className={styles.results}>
                    {Object.values(selectedFilters).some(value => value) && (
                        <div className={styles.selectedFilters}>
                            {Object.entries(selectedFilters).map(([key, value]) => value && (
                                <div key={key} className={styles.selectedFilter}>
                                    {value} <span onClick={() => handleFilterClick(key, null)}>x</span>
                                </div>
                            ))}
                            <button onClick={clearFilters} className={styles.clearFiltersButton}>Clear all</button>
                        </div>
                    )}
                    {currentJobs.map((job) => (
                        <div key={job.id} className={styles.job}>
                            <h2>{job.title}</h2>
                            <p>
                                ⚲ {job.location} | Job ID: {job.jobID} | {job.type}
                            </p>
                            <p>Category: {job.category}</p>
                            <p>Date Posted: {job.datePosted}</p>
                            <p>Business Unit: {job.businessUnit}</p>
                            <p>Country: {job.country}</p>
                            <p>City: {job.city}</p>
                            <p>Location Type: {job.locationType}</p>
                            <button className={styles.applyButton}>Apply</button>
                        </div>
                    ))}

                    <div className={styles.pagination}>
                        {pageNumbers.map(number => (
                            <button
                                key={number}
                                className={`${styles.pageItem} ${number === currentPage ? styles.activePage : ''}`}
                                onClick={() => handlePageClick(number)}
                            >
                                {number}
                            </button>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}
