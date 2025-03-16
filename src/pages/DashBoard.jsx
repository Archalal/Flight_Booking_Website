import React from 'react'
import ReactApexChart from "react-apexcharts";


const DashBoard = () => {
  const [chartState, setChartState] = React.useState({
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "Free Cash Flow",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          borderRadius: 5,
          borderRadiusApplication: "end",
          color:"red"
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      },
      yaxis: {
        title: {
          text: "$ (thousands)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
  });
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
                  <ReactApexChart
                    options={chartState.options}
                    series={chartState.series}
                    type="bar"
                    height={350}
                    
                  />
                </div>
              </div>
            </div>
      
    </div>
  )
}

export default DashBoard
