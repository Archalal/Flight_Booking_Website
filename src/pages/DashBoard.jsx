import React from 'react';
import ReactApexChart from "react-apexcharts";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const DashBoard = () => {

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: '#003366',
      tension: 0.1
    }]
  };

  const apexChartOptions = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    yaxis: {
      title: {
        text: 'Sales (in units)'
      }
    },
    fill: {
      opacity: 1
    },
    title: {
      // text: 'Monthly Sales (Bar Chart)',
      align: 'left'
    },
    colors: ['#66cdaa'],
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5
      }
    }
  };

  const apexChartSeries = [{
    name: "Sales",
    data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 130, 140, 150]
  }];

  return (
    <div>
      <div
        className="rounded shadow mt-2"
        style={{
          backgroundColor: "#ffffff",
          height: "50px",
          width: "100%",
          color: "#525f7f",
          position: "sticky",
          top: "0",
          zIndex: "1",
        }}
      >
        <div
          className="container d-flex  align-items-center"
          style={{ height: "100%" }}
        >
          <div>
            <h4> <span style={{ color: "black",letterSpacing:"1px" }} >DashBoard</span></h4>
          </div>
          <div>
          </div>
          <div>
            <i style={{ color: "red" }} className="fa-solid fa-bell"></i>
          </div>
        </div>
      </div>
      <h2 className="ms-2 mt-3" style={{ fontWeight: "bolder" }}>OverView</h2>

      <div className="row mt-4 p-3">
        <div className="col-md-3">
          <div
            className=" p-3 rounded "
            style={{ height: "130px", backgroundColor: "#B4EEB4" }}
          >
            <div  > <i className="fa-solid fa-eye  " style={{ color: "#420420" }}></i></div>
            <h2 className="text-md font-bold">1,234</h2>
            <h6 className="text-2xl ">Total Users</h6>
          </div>
        </div>
        <div className="col-md-3">
          <div
            className=" p-3 rounded "
            style={{ height: "130px", backgroundColor: "#66CCCC" }}
          >
            <i className="fa-solid fa-cart-shopping " ></i>
            <h2 className="text-md font-bold">567</h2>
            <h6 className="text-2xl">Total Bookings</h6>
          </div>
        </div>
        <div className="col-md-3">
          <div
            className=" p-3 rounded "
            style={{ height: "130px", backgroundColor: "#CCCCFF" }}
          >
            <i className="fa-solid fa-dollar-sign" style={{ color: "purple" }}></i>
            <h2 className="text-2xl font-bold">12,345</h2>
            <h6 className="text-2xl">Total Revenue</h6>
          </div>
        </div>
        <div className="col-md-3">
          <div
            className=" p-3 rounded "
            style={{ height: "130px", backgroundColor: "#FFB6C1" }}
          >
            <i className="fa-solid fa-plane" style={{ color: "purple" }}></i>
            <h3 className="text-2xl font-bold">45</h3>
            <h6 className="text-2xl">Active Flights</h6>
          </div>
        </div>
      </div>

      <div className="row mt-4 p-3">
        <div className="col-6">
          <div
            className="bg-white"
          >
            <h3 style={{ color: "purple", marginBottom: "16px", fontWeight: "bold", fontSize: "1.40rem" }}>
              Revenue(Over the month)
            </h3>
            <Line data={lineData} options={{
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }} />
          </div>
        </div>
        <div className="col-6">
          <div
            className="bg-white"
          >
            <h3 style={{ color: "purple", marginBottom: "13px", fontWeight: "bold", fontSize: "1.40rem" }}>
              Monthly Sales (Bar Chart)
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
  )
}

export default DashBoard;