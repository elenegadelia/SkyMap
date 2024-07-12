import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import styles from './AviationTrends.module.css'

const GlobalArrivalsChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const globalArrivalsChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jul 3', 'Jul 4', 'Jul 5', 'Jul 6', 'Jul 7', 'Jul 8', 'Jul 9'],
        datasets: [{
          label: 'Commercial & Cargo Airlines',
          data: [100000, 95000, 90000, 85000, 90000, 95000, 100000], 
          borderColor: '#007bff',
          fill: false
        },
        {
          label: 'General & Business Aviation',
          data: [50000, 45000, 40000, 35000, 40000, 45000, 50000], 
          borderColor: '#fd7e14',
          fill: false
        }]
      },
      options: {
        responsive: true,
        legend: {
          position: 'top'
        }
      }
    });

    return () => {
      globalArrivalsChart.destroy();
    };
  }, []);

  return (
    <div className={styles.chartContainer}>
      <h3 className={styles.chartTitle}>Global Arrivals</h3>
      <canvas ref={chartRef} className={styles.chartCanvas}></canvas>
    </div>
  );
};

export default GlobalArrivalsChart;
