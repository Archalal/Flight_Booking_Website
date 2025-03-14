import React from "react";
import ReactApexChart from "react-apexcharts";
import SideBar from "./SideBar";

const AdminDashBoard = () => {
  // State for the chart data and options
  const [chartState, setChartState] = React.useState({
    series: [
      {
        name: "Bookings",
        data: [65, 59, 80, 81, 56, 55], // Replace with your data
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false, // Hide the toolbar
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 10, // Rounded corners for bars
          dataLabels: {
            position: "top", // Position data labels at the top of bars
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val; // Display the value as is
        },
        offsetY: -20, // Adjust the position of data labels
        style: {
          fontSize: "12px",
          colors: ["#304758"], // Dark gray color for data labels
        },
      },
      colors: ["#ff5a1d"], // Set bar color to orange
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], // Replace with your categories
        position: "top",
        axisBorder: {
          show: false, // Hide the x-axis border
        },
        axisTicks: {
          show: false, // Hide the x-axis ticks
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true, // Enable tooltips
        },
      },
      yaxis: {
        axisBorder: {
          show: false, // Hide the y-axis border
        },
        axisTicks: {
          show: false, // Hide the y-axis ticks
        },
        labels: {
          show: false, // Hide y-axis labels
          formatter: function (val) {
            return val; // Display the value as is
          },
        },
      },
      title: {
        text: "Booking Trends Over Time", // Chart title
        floating: true, // Float the title
        offsetY: 330, // Adjust the position of the title
        align: "center",
        style: {
          color: "#444", // Dark gray color for the title
          fontSize: "16px",
          fontWeight: "bold",
        },
      },
    },
  });

  return (
    <div>
      <div className="m-2">
        <div className="row mt-2" style={{ background: "#f8f9fa" }}>
          {/* Sidebar */}
         <div
          className="col-2"
          style={{
            backgroundColor: "#ffffff",
            height: "100vh",
            position: "sticky",
            top: "0",
            padding: "20px",
            color: "#525f7f",
            boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
          }}>
            <SideBar />
         </div>

          {/* Main Content */}
          <div className="col-10">
            {/* Header */}
            <div
              className="rounded shadow mt-1"
              style={{
                backgroundColor: "#ffffff",
                height: "50px",
                width: "100%",
                color: "#525f7f",
              }}
            >
              <div
                className="container d-flex justify-content-between align-items-center"
                style={{ height: "100%" }}
              >
                <div>
                  <i className="fa-solid fa-bell"></i>
                </div>
                <div>
                  <i className="fa-solid fa-right-from-bracket"></i>
                </div>
              </div>
            </div>

            {/* Cards */}
            <div className="row mt-4">
              <div className="col-md-3">
                <div
                  className="bg-white p-4 rounded shadow"
                  style={{ height: "120px" }}
                >
                  <h3 className="text-sm font-semibold">Total Users</h3>
                  <p className="text-2xl font-bold">1,234</p>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="bg-white p-4 rounded shadow"
                  style={{ height: "120px" }}
                >
                  <h3 className="text-lg font-semibold">Total Bookings</h3>
                  <p className="text-2xl font-bold">567</p>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="bg-white p-4 rounded shadow"
                  style={{ height: "120px" }}
                >
                  <h3 className="text-lg font-semibold">Total Revenue</h3>
                  <p className="text-2xl font-bold">12,345</p>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="bg-white p-4 rounded shadow"
                  style={{ height: "120px" }}
                >
                  <h3 className="text-lg font-semibold">Active Flights</h3>
                  <p className="text-2xl font-bold">45</p>
                </div>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="row mt-4">
              <div className="col">
                <div
                  className="bg-white p-4 rounded shadow" // Added shadow effect
                  style={{ height: "400px" }}
                >
                  <h3 style={{ color: "#ff5a1d", marginBottom: "13px" }}>
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
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;