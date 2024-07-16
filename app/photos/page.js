"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from '../components/header/Header';

const Photos = () => {
  const [aircrafts, setAircrafts] = useState({});
  const [airlines, setAirlines] = useState({});
  const [selectedAircraft, setSelectedAircraft] = useState("AERMACCHI MB-339");
  const [selectedAirline, setSelectedAirline] = useState("Austrian Airlines");

  useEffect(() => {
    fetch('/aircrafts.json')
      .then(response => response.json())
      .then(data => {
        setAircrafts(data.aircrafts);
        setAirlines(data.airlines);
      });
  }, []);

  if (!aircrafts[selectedAircraft] || !airlines[selectedAirline]) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header} >
        <Header />
      </div>
      <div className={styles.carouselContainer}>
        <div className={styles.carouselSection}>
          <h2 className={styles.title}>Aircraft Photos</h2>
          <div >
            <label htmlFor="aircraftSelect" className={styles.label}>Select Aircraft:</label>
            <select
              id="aircraftSelect"
              className={styles.select}
              value={selectedAircraft}
              onChange={(e) => setSelectedAircraft(e.target.value)}
            >
              {Object.keys(aircrafts).map((aircraft) => (
                <option key={aircraft} value={aircraft}>
                  {aircraft}
                </option>
              ))}
            </select>
          </div>
          <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
            {aircrafts[selectedAircraft].images.map((image) => {
              const folderName = aircrafts[selectedAircraft].folder;
              const imagePath = `/images/airplanes/${folderName}/${image}`;
              return (
                <div key={image}>
                  <Image
                    src={imagePath}
                    alt={`${selectedAircraft} ${image}`}
                    width={800}
                    height={500}
                    className={styles.img}
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className={styles.carouselSection}>
          <h2 className={styles.title}>Airline Photos</h2>
          <div>
            <label htmlFor="airlineSelect" className={styles.label}>Select Airline:</label>
            <select
              id="airlineSelect"
              className={styles.select}
              value={selectedAirline}
              onChange={(e) => setSelectedAirline(e.target.value)}
            >
              {Object.keys(airlines).map((airline) => (
                <option key={airline} value={airline}>
                  {airline}
                </option>
              ))}
            </select>
          </div>
          <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
            {airlines[selectedAirline].images.map((image) => {
              const folderName = airlines[selectedAirline].folder;
              const imagePath = `/images/airlines-photo/${folderName}/${image}`;
              return (
                <div key={image}>
                  <Image
                    src={imagePath}
                    alt={`${selectedAirline} ${image}`}
                    width={800}
                    height={500}
                    className={styles.img}
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Photos;
