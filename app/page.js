import Head from 'next/head';
import FlightDetails from './components/flightDetails/FlightDetails';
import Header from './components/header/Header';
import styles from './page.module.css';

export default function Home() {
  const flight = {
    departure: 'Tbilisi (TB)',
    arrival: 'Amsterdam (NL)',
    number: 'BT 618',
    airline: 'Air Canada',
    status: 'On time',
    duration: '4',
    departureTime: '6:15 PM 22/10/2024',
    arrivalTime: '8:15 PM 22/10/2024',
  };

  return (
    <div className={styles.backgroundWrapper}>
      <Head>
        <title>SkyMap</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.contentWrapper}>
        <FlightDetails flight={flight} />
      </div>
    </div>
  );
}
