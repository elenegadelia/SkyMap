import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './RealTimeFlightMap.module.css';

const planeIcon = new L.DivIcon({
  html: '<div class="' + styles['leaflet-div-icon'] + '">✈︎</div>',
  className: '', 
  iconSize: [24, 24], 
});

const generateFakeFlights = (num) => {
  const flights = [];
  const airports = [
    { name: 'JFK', country: 'USA', lat: 40.6413, lon: -73.7781 },
    { name: 'LHR', country: 'UK', lat: 51.4700, lon: -0.4543 },
    { name: 'HND', country: 'Japan', lat: 35.5494, lon: 139.7798 },
    { name: 'CDG', country: 'France', lat: 49.0097, lon: 2.5479 },
    { name: 'SYD', country: 'Australia', lat: -33.9399, lon: 151.1753 },
  ];
  
  for (let i = 0; i < num; i++) {
    const fromAirport = airports[Math.floor(Math.random() * airports.length)];
    const toAirport = airports[Math.floor(Math.random() * airports.length)];
    
    flights.push({
      id: i,
      from: fromAirport.name,
      fromCountry: fromAirport.country,
      to: toAirport.name,
      toCountry: toAirport.country,
      lat: (Math.random() * 180) - 90, 
      lon: (Math.random() * 360) - 180, 
    });
  }
  return flights;
};

const RealTimeFlightMap = () => {
    const [flights, setFlights] = useState([]);
  
    useEffect(() => {
      const fakeFlights = generateFakeFlights(100);
      setFlights(fakeFlights);
    }, []);
  
    return (
      <div className={styles.mapContainer}>
        <div className={styles.headerText}>
          Real-time Worldwide Flight Traffic
        </div>
        <div className={styles.paragraphText}>
          Explore the skies around you or anywhere in the world using our live flight tracking map. Click on any aircraft or airport for a more detailed view, and use the layer icon in the top right corner to add weather layers and more.
        </div>
        <MapContainer center={[20, 0]} zoom={2} style={{ height: '500px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {flights
            .map((flight, index) => (
              <Marker key={index} position={[flight.lat, flight.lon]} icon={planeIcon}>
                <Popup>
                  <div>
                    <strong>From:</strong> {flight.from}, {flight.fromCountry}<br />
                    <strong>To:</strong> {flight.to}, {flight.toCountry}
                  </div>
                </Popup>
              </Marker>
            ))}
        </MapContainer>
      </div>
    );
};

export default RealTimeFlightMap;
