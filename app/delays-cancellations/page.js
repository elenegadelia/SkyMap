"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import styles from "./page.module.css";

const SummarySection = () => {
  return (
    <div className={styles.summarySection}>
      <p>Total delays today: 18,156</p>
      <p>Total cancellations today: 600</p>
    </div>
  );
};

const DayButtons = ({ selectedDay, setSelectedDay }) => {
  const days = ["Monday", "Tuesday", "Yesterday", "Today", "Tomorrow", "Saturday"];
  return (
    <div className={styles.dayButtons}>
      {days.map((day) => (
        <button
          key={day}
          onClick={() => setSelectedDay(day)}
          className={selectedDay === day ? styles.activeButton : styles.button}
        >
          {day}
        </button>
      ))}
    </div>
  );
};

const sortData = (data, selectedDay) => {
  switch (selectedDay) {
    case "Monday":
      return data.sort((a, b) => (a.airline && b.airline ? a.airline.localeCompare(b.airline) : 0));
    case "Tuesday":
      return data.sort((a, b) => (a.airline && b.airline ? b.airline.localeCompare(a.airline) : 0));
    case "Yesterday":
      return data.reverse();
    case "Today":
      return data;
    case "Tomorrow":
      return data.sort((a, b) => a.cancellations_number - b.cancellations_number);
    case "Saturday":
      return data.sort((a, b) => b.cancellations_number - a.cancellations_number);
    default:
      return data;
  }
};

const Charts = ({ selectedDay }) => {
  const [airlineData, setAirlineData] = useState([]);
  const [airportData, setAirportData] = useState([]);

  useEffect(() => {
    fetch("/airline_data.json")
      .then((response) => response.json())
      .then((data) => {
        setAirlineData(sortData(data, selectedDay));
      });

    fetch("/airport_data.json")
      .then((response) => response.json())
      .then((data) => {
        setAirportData(sortData(data, selectedDay));
      });
  }, [selectedDay]);

  return (
    <div className={styles.charts}>
      <div className={styles.chart}>
        <h3>By Airline</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Airline</th>
              <th className={styles.cancelled}>Cancelled</th>
              <th className={styles.delayed}>Delayed</th>
            </tr>
          </thead>
          <tbody>
            {airlineData.map((item, index) => (
              <tr key={index}>
                <td>{item.airline}</td>
                <td>{item.cancellations_number} ({item.cancellations_percentage}%)</td>
                <td>{item.delays_number} ({item.delays_percentage}%)</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.chart}>
        <h3>By Origin Airport</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Airport</th>
              <th className={styles.cancelled}>Cancelled</th>
              <th className={styles.delayed}>Delayed</th>
            </tr>
          </thead>
          <tbody>
            {airportData.map((item, index) => (
              <tr key={index}>
                <td>{item.airport}</td>
                <td>{item.cancellations_number} ({item.cancellations_percentage}%)</td>
                <td>{item.delays_number} ({item.delays_percentage}%)</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.chart}>
        <h3>By Destination Airport</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Airport</th>
              <th className={styles.cancelled}>Cancelled</th>
              <th className={styles.delayed}>Delayed</th>
            </tr>
          </thead>
          <tbody>
            {airportData.map((item, index) => (
              <tr key={index}>
                <td>{item.airport}</td>
                <td>{item.cancellations_number} ({item.cancellations_percentage}%)</td>
                <td>{item.delays_number} ({item.delays_percentage}%)</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const DelaysCancellationsPage = () => {
  const [selectedDay, setSelectedDay] = useState("Today");

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.header}>
        <Header />
      </div>
      <SummarySection />
      <DayButtons selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <Charts selectedDay={selectedDay} />
    </div>
  );
};

export default DelaysCancellationsPage;
