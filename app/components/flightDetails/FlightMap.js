import { MapContainer, TileLayer, Polyline, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const FlightMap = ({ departureLat, departureLng, arrivalLat, arrivalLng }) => {
  const position = [(departureLat + arrivalLat) / 2, (departureLng + arrivalLng) / 2]; 
  const polylinePositions = [
    [departureLat, departureLng],
    [arrivalLat, arrivalLng]
  ];

  return (
    <MapContainer center={position} zoom={4} style={{ height: '480px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Polyline positions={polylinePositions} color="blue" />
    </MapContainer>
  );
};

export default FlightMap;
