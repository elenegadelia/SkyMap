import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import styles from './AviationTrends.module.css';

const CurrentTrafficChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const currentTrafficChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Commercial Airlines', 'General Aviation', 'Business Aviation', 'Cargo Airlines'],
        datasets: [{
          data: [50, 30, 10, 10], 
          backgroundColor: ['#007bff', '#ffc107', '#28a745', '#fd7e14']
        }]
      },
      options: {
        responsive: true,
        legend: {
          position: 'left'
        }
      }
    });

    return () => {
      currentTrafficChart.destroy();
    };
  }, []);

  return (
    <div className={styles.chartContainer}>
      <h3 className={styles.chartTitle}>Current Traffic</h3>
      <canvas ref={chartRef} className={styles.chartCanvas}></canvas>
    </div>
  );
};

export default CurrentTrafficChart;
