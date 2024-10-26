'use client'
import React from 'react'
import Layout from '../components/Layout';
import BarChart from '../components/BarChart';
import TableComp from '../components/TableComp';
import {vehicleData} from '@/vehicleData'

const Dashboard = () => {

  const Data :any= vehicleData;
  const vehicleByCity = Data?.reduce((acc:any, vehicle:any) => {
    const city = vehicle.City;
    if (!acc[city]) {
      acc[city] = 1;
    } else {
      acc[city] += 1;
    }
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(vehicleByCity), 
    datasets: [
      {
        label: 'Number of Vehicles',
        data: Object?.values(vehicleByCity), 
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };


      const options = {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };

  return (
    <Layout>
      <h1>Dashboard Overview</h1>
      <div style={{ width: '80%', margin: 'auto' }}>
        <BarChart data={chartData} options={options}/>
      </div>
      <div style={{ marginTop: '50px' }}>
        <h2>Data Table</h2>
        <TableComp Data={Data} />
      </div>
    </Layout>
  )
}

export default Dashboard;