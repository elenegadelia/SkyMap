import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import styles from './AviationTrends.module.css';

const GlobalArrivalsChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jul 3', 'Jul 4', 'Jul 5', 'Jul 6', 'Jul 7', 'Jul 8', 'Jul 9'],
        datasets: [
          {
            label: 'Commercial & Cargo Airlines',
            data: [100000, 95000, 105000, 98000, 99000, 101000, 97000],
            borderColor: 'blue',
            borderWidth: 2,
            fill: false,
          },
          {
            label: 'General & Business Aviation',
            data: [50000, 52000, 53000, 51000, 49000, 50000, 52000],
            borderColor: 'orange',
            borderWidth: 2,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, 
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className={styles.chartContainer}>
      <div className={styles.chartTitle}>Global Arrivals</div>
      <canvas ref={chartRef} className={styles.canvas}></canvas>
    </div>
  );
};

export default GlobalArrivalsChart;
