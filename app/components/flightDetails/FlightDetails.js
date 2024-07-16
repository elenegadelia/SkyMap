'use client';

import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import styles from './FlightDetails.module.css';
import { fetchFlightDetails } from './flightAPI'; 
import FlightMap from './FlightMap';

const FlightDetails = forwardRef((props, ref) => {
  const [flightNumber, setFlightNumber] = useState('');
  const [departureCity, setDepartureCity] = useState('');
  const [arrivalCity, setArrivalCity] = useState('');
  const [filteredDepartureCities, setFilteredDepartureCities] = useState([]);
  const [filteredArrivalCities, setFilteredArrivalCities] = useState([]);
  const [flightDetails, setFlightDetails] = useState(null);
  const [error, setError] = useState(null);
  const [cities, setCities] = useState([]);
  const [arrivalCities, setArrivalCities] = useState([]);
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch('/flights.json')
      .then(response => response.json())
      .then(data => {
        const flightsArray = Object.values(data);
        const departureCityNames = flightsArray.map(flight => flight.departure.city);
        const arrivalCityNames = flightsArray.map(flight => flight.arrival.city);
        const uniqueDepartureCityNames = [...new Set(departureCityNames)]; 
        const uniqueArrivalCityNames = [...new Set(arrivalCityNames)]; 
        setCities(uniqueDepartureCityNames);
        setArrivalCities(uniqueArrivalCityNames);
        setFlights(flightsArray); 
      })
      .catch(error => console.error('Error fetching flights:', error));
  }, []);

  const handleTrackFlight = async () => {
    try {
      if (flightNumber.trim()) {
        const details = await fetchFlightDetails(flightNumber);
        setFlightDetails(details);
        setError(null);
        setFlightNumber('');
      } else if (departureCity.trim() && arrivalCity.trim()) {
        const matchedFlight = flights.find(
          flight =>
            flight.departure.city.toLowerCase() === departureCity.toLowerCase() &&
            flight.arrival.city.toLowerCase() === arrivalCity.toLowerCase()
        );
        if (matchedFlight) {
          setFlightDetails(matchedFlight);
          setError(null);
          setDepartureCity('');
          setArrivalCity('');
        } else {
          setError('No flight details found for the specified route.');
          setFlightDetails(null);
        }
      } else {
        setError('Please enter a flight number or a valid route.');
        setFlightDetails(null);
      }
    } catch (error) {
      setError('No flight details found or an error occurred.');
      setFlightDetails(null);
    }
  };

  useImperativeHandle(ref, () => ({
    resetState: () => {
      setFlightNumber('');
      setDepartureCity('');
      setArrivalCity('');
      setFlightDetails(null);
      setError(null);
    }
  }));

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleTrackFlight();
    }
  };

  const filterCities = (input, cityList, setFilteredCities) => {
    const filtered = cityList.filter(city =>
      city.toLowerCase().startsWith(input.toLowerCase())
    );
    setFilteredCities(filtered);
  };

  const handleDepartureChange = (e) => {
    const value = e.target.value;
    setDepartureCity(value);
    filterCities(value, cities, setFilteredDepartureCities);
  };

  const handleArrivalChange = (e) => {
    const value = e.target.value;
    setArrivalCity(value);
    filterCities(value, arrivalCities, setFilteredArrivalCities);
  };

  return (
    <div className={styles.container}>
      <div className={styles.flightDetailsWrapper}>
        {!flightDetails ? (
          <div className={styles.flightDetailsContainer}>
            <h2 className={styles.heading}>Flight Details</h2>
            <div className={styles.inputContainer}>
              <label>Search by Flight Number:</label>
              <input
                type="text"
                value={flightNumber}
                placeholder="Your flight number"
                onChange={(e) => setFlightNumber(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            </div>
            <div className={styles.inputContainer}>
              <label>Search by Route:</label>
              <input
                type="text"
                value={departureCity}
                placeholder="Flying from"
                onChange={handleDepartureChange}
                list="departureCities"
              />
              <input
                type="text"
                value={arrivalCity}
                placeholder="Flying to"
                onChange={handleArrivalChange}
                list="arrivalCities"
              />
              <datalist id="departureCities">
                {filteredDepartureCities.map((city, index) => (
                  <option key={index} value={city} />
                ))}
              </datalist>
              <datalist id="arrivalCities">
                {filteredArrivalCities.map((city, index) => (
                  <option key={index} value={city} />
                ))}
              </datalist>
            </div>
            <button 
              className={styles.button} 
              onClick={handleTrackFlight}
              disabled={!flightNumber.trim() && (!departureCity.trim() || !arrivalCity.trim())} 
            >
              ✈︎ Track the flight
            </button>
            {error && <div className={styles.error}>{error}</div>}
          </div>
        ) : (
          <>
            <div className={styles.details}>
              <h2>Flight Details</h2>
              <div className={styles.box}>
                <div className={styles.boxTitle}>Status</div>
                {flightDetails.status}
              </div>
              <div className={styles.box}>
                <div className={styles.boxTitle}>Duration</div>
                {flightDetails.duration} hours
              </div>
              <div className={styles.box}>
                <div className={styles.boxTitle}>Departing</div>
                {new Date(flightDetails.departure.time * 1000).toLocaleString()} from{' '}
                {flightDetails.departure.city}
              </div>
              <div className={styles.box}>
                <div className={styles.boxTitle}>Arriving</div>
                {new Date(flightDetails.arrival.time * 1000).toLocaleString()} at{' '}
                {flightDetails.arrival.city}
              </div>
              <div className={styles.box}>
                <div className={styles.boxTitle}>Flight Number</div>
                {flightDetails.flightNumber}
              </div>
            </div>
            <div className={styles.link} onClick={() => ref.current.resetState()}>
              ✈︎ Track another flight 
            </div>
          </>
        )}
      </div>
      {flightDetails && (
        <div className={styles.mapWrapper}>
          <FlightMap 
            departureLat={flightDetails.departure.lat}
            departureLng={flightDetails.departure.lng}
            arrivalLat={flightDetails.arrival.lat}
            arrivalLng={flightDetails.arrival.lng}
          />
        </div>
      )}
    </div>
  );
});

FlightDetails.displayName = 'FlightDetails'; 

export default FlightDetails;
