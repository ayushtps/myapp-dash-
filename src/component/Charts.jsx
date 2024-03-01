import React from 'react'
import '../asset/style/component/Charts.css'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie, Bar, Line } from 'react-chartjs-2';
import { Chance } from 'chance';

const chance = Chance()

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const data = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    {
      label: 'User',
      data: [12, 19, 15, 10],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1,
    },
  ],
};


export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'User',
    },
  },
};

const labels = ['Q1', 'Q2', 'Q3', 'Q4'];

export const data1 = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => chance.integer({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => chance.integer({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

function Charts() {
    return (
        <>
            <div className="graph-section">
                <div className="chart-section">
                    <div className="chart-content">
                        <p>Overall Revenue</p>
                        <div className="pie-chart">
                            <Pie data={data} className='pie' />
                        </div>
                    </div>
                </div>
                <div className="chart-section">
                    <div className="chart-content">
                        <p>New Installation</p>
                        <div className="bar-chart">
                            <Bar options={options} data={data1} className='bar' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-chart">
                <div className="chart-content">
                    <p>New Installation</p>
                    <div className="line-chart">
                        <Line options={options} data={data1} className='line' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Charts