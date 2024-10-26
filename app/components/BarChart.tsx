import React from 'react'
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,     
    LinearScale,       
    BarElement,       
    Title,             
    Tooltip,           
    Legend,   
    ArcElement         
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  );
  
const BarChart = ({data, options}) => {


  return (
    <Bar options={options} data={data} />
  )
}

export default BarChart