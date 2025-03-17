import React from 'react'
import ReactApexChart from "react-apexcharts";

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, LineElement, Tooltip, Legend, CategoryScale, PointElement } from 'chart.js';

// Register the required components
ChartJS.register(LinearScale, LineElement, Tooltip, Legend, CategoryScale, PointElement);

const DashBoard = () => {

  const data = {
    labels: ["Jan", "Feb","mar"], // X-axis labels
    datasets: [
      {
        label: "Transaction", // Singular, not an array
        data: [10, 202,3], // Must be numbers, not a string
        borderColor: [
          "red",
          "blue",
          "green"
        ],
        backgroundColor:[
          "red",
          "blue",
          "green"
        ],
        fill: true,
      },
      {
        label: "Transaction", // Singular, not an array
        data: [1, 12,3], // Must be numbers, not a string
        borderColor: [
          "red",
          "blue",
          "green"
        ],
        backgroundColor:[
          "red",
          "blue",
          "green"
        ],
        fill: true,
      },
    ],
  };
 
  return (
    <div>
      <div
              className="rounded shadow mt-1"
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
                className="container d-flex justify-content-between align-items-center"
                style={{ height: "100%" }}
              >
                <div>
                  <i style={{color: "red"}} className="fa-solid fa-bell"></i>
                </div>
                <div>
                  <h4>Welcome, <span style={{color:"red"}}>𝐀𝐝𝐦𝐢𝐧</span></h4>
                </div>
                <div>
                  <i  style={{color: "red"}} className="fa-solid fa-right-from-bracket"></i>
                </div>
              </div>
            </div>

            <div className="row mt-4 p-3">
              <div className="col-md-3">
                <div
                  className="bg-white p-3 rounded shadow"
                  style={{ height: "120px" }}
                >
                  <i className="fa-solid fa-eye" style={{color: "purple"}}></i>
                  <h4 className="text-sm font-semibold">Total Users</h4>
                  <p className="text-2xl font-bold">1,234</p>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="bg-white p-3 rounded shadow"
                  style={{ height: "120px" }}
                >
                  <i className="fa-solid fa-cart-shopping" style={{color: "purple"}}></i>
                  <h4 className="text-lg font-semibold">Total Bookings</h4>
                  <p className="text-2xl font-bold">567</p>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="bg-white p-3 rounded shadow"
                  style={{ height: "120px" }}
                >
                  <i className="fa-solid fa-dollar-sign" style={{color: "purple"}}></i>
                  <h4 className="text-lg font-semibold">Total Revenue</h4>
                  <p className="text-2xl font-bold">12,345</p>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="bg-white p-3 rounded shadow"
                  style={{ height: "120px" }}
                >
                  <i className="fa-solid fa-plane" style={{color: "purple"}}></i>
                  <h4 className="text-lg font-semibold">Active Flights</h4>
                  <p className="text-2xl font-bold">45</p>
                </div>
              </div>
            </div>

            <div className="row mt-4 p-3">
              <div className="col">
                <div
                  className="bg-white p-4 rounded shadow"
                  style={{ height: "500px" }}
                >
                  <h3 style={{ color: "purple", marginBottom: "13px",fontWeight:"bold" ,fontSize:"1.40rem"}}>
                    Booking Trends
                  </h3>
                <Line data={data}/>
                </div>
              </div>
            </div>
      
    </div>
  )
}

export default DashBoard
