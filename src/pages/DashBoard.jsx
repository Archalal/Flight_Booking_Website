import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import OverView from '../component/OverView';
import { getMonthlyStats } from '../../services/allApi';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DashBoard = () => {
  const [monthlyRevenue, setMonthlyRevenue] = useState(Array(12).fill(0));
  const [monthlyBookings, setMonthlyBookings] = useState(Array(12).fill(0));

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = sessionStorage.getItem("token");
        if (!token) {
          alert("Please login to view dashboard data");
          return;
        }

        const res = await getMonthlyStats({ authorization: `Bearer ${token}` });
        const data = res.data;

        const revenue = Array(12).fill(0);
        const bookings = Array(12).fill(0);

        data.forEach(item => {
          const monthIndex = item._id - 1; // Assuming _id is 1 (Jan) to 12 (Dec)
          revenue[monthIndex] = item.totalRevenue;
          bookings[monthIndex] = item.bookingCount;
        });

        setMonthlyRevenue(revenue);
        setMonthlyBookings(bookings);
      } catch (err) {
        console.error("Error loading stats:", err);
      }
    };

    fetchStats();
  }, []);

  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
             'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue',
        data: monthlyRevenue,
        borderColor: '#7b1fa2',
        backgroundColor: 'rgba(123, 31, 162, 0.1)',
        tension: 0.3
      },
      {
        label: 'Bookings',
        data: monthlyBookings,
        borderColor: '#388e3c',
        backgroundColor: 'rgba(56, 142, 60, 0.1)',
        tension: 0.3
      }
    ]
  };

  return (
    <div>
      <OverView />
      <div className="bg-white p-4 m-4 rounded shadow-sm">
        <h3 style={{ color: "purple", fontWeight: "bold", fontSize: "1.3rem" }}>
          Monthly Overview
        </h3>
        <Line
          data={lineChartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: false
              }
            },
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }}
        />
      </div>
    </div>
  );
};

export default DashBoard;
