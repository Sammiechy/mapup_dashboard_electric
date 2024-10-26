'use client'
import Layout from '@/app/components/Layout'
import React from 'react';
import { Container, Typography, Grid, Paper,Button } from '@mui/material';
import Link from 'next/link';
import {vehicleData} from '@/vehicleData';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
const page = () => {
  const totalVehicles = vehicleData.length;
  
  const averageRange =
  vehicleData?.reduce((acc, vehicle) => acc + (vehicle?.["Electric Range"] || 0), 0) / totalVehicles || 0;
  
  const totalElectricRange = vehicleData?.reduce((acc, vehicle) => {
    return acc + (vehicle?.["Electric Range"] || 0);
  }, 0);

  console.log(averageRange,totalVehicles,"vehicleData----")
  const makeCounts = vehicleData?.reduce((acc, vehicle) => {
    if (vehicle) {
      acc[vehicle.Make] = (acc[vehicle.Make] || 0) + 1;
    }
    return acc;
  }, {});

  const makes = Object.keys(makeCounts);
  const makeValues = Object.values(makeCounts);

  const pieData = {
    labels: makes,
    datasets: [
      {
        data: makeValues,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };
  const barData = {
    labels: ['Total Vehicles', 'Average Electric Range', 'Total Electric Range'],
    datasets: [
      {
        label: 'Metrics',
        data: [totalVehicles, averageRange, totalElectricRange],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <Layout>
       <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Electric Vehicle Metrics
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: '16px' }}>
            <Typography variant="h6">Total Vehicles: {totalVehicles}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: '16px' }}>
            <Typography variant="h6">Average Range: {averageRange.toFixed(2)} miles</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '16px' }}>
            <Typography variant="h6">Vehicle Make Distribution</Typography>
            <Pie data={pieData} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '16px' }}>
            <Typography variant="h6">Metrics Overview</Typography>
            <Bar data={barData} />
          </Paper>
        </Grid>
      </Grid>
      <Link href="/dashboard" legacyBehavior>
        <Button>Back to Dashboard</Button>
      </Link>
    </Container>
         </Layout>
  )
}

export default page