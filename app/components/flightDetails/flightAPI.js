import axios from 'axios';

const fetchFlightDetails = async (flightNumber) => {
  try {
    const response = await axios.get('/flights.json'); 
    const flights = response.data;

    const flightDetails = flights[flightNumber];
    if (!flightDetails) {
      throw new Error('No flight details found');
    }

    return flightDetails; 
  } catch (error) {
    console.error('Error fetching flight details:', error);
    throw error;
  }
};

export { fetchFlightDetails };
