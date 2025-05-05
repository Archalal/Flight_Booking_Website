import React, { useEffect, useState } from 'react';
import ReactApexChart from "react-apexcharts";
import { Line } from 'react-chartjs-2';
import OverView from '../component/OverView';
import { getMonthlyStats } from '../../services/allApi';
import { Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,BarElement,Title,Tooltip,Legend,} from 'chart.js';ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,BarElement,Title,Tooltip,Legend);

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
  
        const headers = {
          authorization: `Bearer ${token}`,
        };
  
        const res = await getMonthlyStats(headers); // Pass headers
        const data = res.data;
        console.log(data);
        
  
        const revenue = Array(12).fill(0);
        const bookings = Array(12).fill(0);
  
        data.forEach(item => {
          const monthIndex = item._id - 1; // _id: 1-12
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
  
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Monthly Revenue',
      data: monthlyRevenue,
      fill: false,
      borderColor: '#003366',
      tension: 0.3
    }]
  };

  const apexChartSeries = [{
    name: "Bookings",
    data: monthlyBookings
  }];

  const apexChartOptions = {
    chart: { type: 'bar', height: 350, toolbar: { show: false } },
    plotOptions: {
      bar: { horizontal: false, columnWidth: '55%', endingShape: 'rounded' }
    },
    dataLabels: { enabled: false },
    stroke: { show: true, width: 2, colors: ['transparent'] },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yaxis: { title: { text: 'Bookings Count' } },
    fill: { opacity: 1 },
    colors: ['#66cdaa'],
    grid: {
      row: { colors: ['#f3f3f3', 'transparent'], opacity: 0.5 }
    }
  };

  return (
    <div>
      <OverView />
      <div className="row mt-4 p-3">
        <div className="col-6">
          <div className="bg-white p-3 rounded shadow-sm">
            <h3 style={{ color: "purple", fontWeight: "bold", fontSize: "1.3rem" }}>
              Revenue (Over the Month)
            </h3>
            <Line data={lineData} options={{ scales: { y: { beginAtZero: true } } }} />
          </div>
        </div>
        <div className="col-6">
          <div className="bg-white p-3 rounded shadow-sm">
            <h3 style={{ color: "purple", fontWeight: "bold", fontSize: "1.3rem" }}>
              Monthly Bookings (Bar Chart)
            </h3>
            <ReactApexChart
              options={apexChartOptions}
              series={apexChartSeries}
              type="bar"
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
