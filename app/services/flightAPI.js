import axios from 'axios';

const fetchFlightDetails = async (flightNumber) => {
  try {
    const response = await axios.get('https://667a89c2bd627f0dcc8f6b3b.mockapi.io/api/v1/flights', {
      params: { flightNumber },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.data.length) {
      throw new Error('No flight details found');
    }

    return response.data.find(flight => flight.flightNumber === flightNumber);
  } catch (error) {
    console.error('Error fetching flight details:', error);
    throw error;
  }
};

export { fetchFlightDetails };
