"use client";
import React, { useState } from "react";
import Header from "../components/header/Header";
import styles from "./page.module.css";

const airports = [
  {
    name: "Tbilisi International Airport",
    info: {
      description: "Shota Rustaveli Tbilisi International Airport, is the busiest international airport in Georgia, located 17 km southeast of capital Tbilisi. The airport handled 3.7 million passengers in 2019. Over 45 airlines operate from the airport, with nonstop or direct flights to over 25 countries.",
      address: "MX97+RV6, Tbilisi",
      phone: "032 231 04 21",
      code: "TBS",
      hubFor: ["Georgian Airways", "Georgian Wings", "Geo-Sky"],
      elevation: "495 m",
      serves: "Tbilisi"
    },
    images: [
      "/images/tbilisi/1.jpg",
      "/images/tbilisi/2.jpg",
      "/images/tbilisi/3.jpg",
      "/images/tbilisi/4.jpg",
      "/images/tbilisi/5.jpg"
    ]
  },
  {
    name: "Natakhtari Airfield",
    info: {
      description: "Natakhtari Airfield is a domestic airport located in Natakhtari, Mtskheta-Mtianeti, Georgia. It serves as a secondary and domestic-only airfield for the Tbilisi metropolitan area at roughly 20 kilometres north of the city. It is privately owned and operated by the parent company of Vanilla Sky Airlines, Service Air.",
      address: "WPC9+FG2, Natakhtari",
      phone: "599 65 90 99",
      hubFor: ["Vanilla Sky", "Service Air"]
    },
    images: [
      "/images/natakhtari/1.jpg",
      "/images/natakhtari/2.jpg",
      "/images/natakhtari/3.jpg",
      "/images/natakhtari/4.jpg",
      "/images/natakhtari/5.jpg"
    ]
  },
  {
    name: "Stepanavan Airport",
    info: {
      description: "Stepanavan Airport is a small airport located in Stepanavan, Armenia.",
      address: "28XP+9XF, Saratovka, Armenia"
    },
    images: [
      "/images/stepanavan/1.jpg",
      "/images/stepanavan/2.jpg",
      "/images/stepanavan/3.jpg",
      "/images/stepanavan/4.jpg",
      "/images/stepanavan/5.jpg"
    ]
  }
];

const AirportsPage = () => {
  const [selectedAirport, setSelectedAirport] = useState(null);
  const [showAirports, setShowAirports] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [showAd, setShowAd] = useState(true);

  const handleAirportClick = (airport) => {
    setSelectedAirport(airport);
    setShowAd(false);
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const showPrevImage = (event) => {
    event.stopPropagation();
    setSelectedImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : selectedAirport.images.length - 1
    );
  };

  const showNextImage = (event) => {
    event.stopPropagation();
    setSelectedImageIndex((prevIndex) =>
      prevIndex < selectedAirport.images.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.header}>
        <Header />
      </div>        
      <div className={styles.container}>
        <h1>Find Nearest Airports</h1>
        {!showAirports && (
          <button
            onClick={() => setShowAirports(true)}
            className={styles.findButton}
          >
            Find Nearest Airports
          </button>
        )}
        {showAirports && (
          <div className={styles.airportList}>
            {airports.map((airport, index) => (
              <button
                key={index}
                onClick={() => handleAirportClick(airport)}
                className={styles.airportButton}
              >
                {airport.name}
              </button>
            ))}
          </div>
        )}
        {selectedAirport && (
          <div className={styles.airportInfo}>
            <h2>{selectedAirport.name}</h2>
            <p>{selectedAirport.info.description}</p>
            <p><strong>Address:</strong> {selectedAirport.info.address}</p>
            {selectedAirport.info.phone && <p><strong>Phone:</strong> {selectedAirport.info.phone}</p>}
            {selectedAirport.info.code && <p><strong>Code:</strong> {selectedAirport.info.code}</p>}
            {selectedAirport.info.hubFor && (
              <p>
                <strong>Hub for:</strong> {selectedAirport.info.hubFor.join(", ")}
              </p>
            )}
            {selectedAirport.info.elevation && <p><strong>Elevation:</strong> {selectedAirport.info.elevation}</p>}
            {selectedAirport.info.serves && <p><strong>Serves:</strong> {selectedAirport.info.serves}</p>}
            <div className={styles.imageGallery}>
              {selectedAirport.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className={styles.image}
                  onClick={() => handleImageClick(index)}
                />
              ))}
            </div>
          </div>
        )}
        {selectedImageIndex !== null && (
          <div className={styles.modal} onClick={closeModal}>
            <span className={styles.closeButton} onClick={closeModal}>&times;</span>
            <span className={styles.prevButton} onClick={showPrevImage}>&#10094;</span>
            <img className={styles.modalContent} src={selectedAirport.images[selectedImageIndex]} alt="Selected" />
            <span className={styles.nextButton} onClick={showNextImage}>&#10095;</span>
          </div>
        )}
      </div>
      {showAd && (
        <div className={styles.adContainer}>
          <div className={styles.adBox}>
            <p>Your ad here</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AirportsPage;
