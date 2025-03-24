import React from 'react';
import ReactApexChart from "react-apexcharts";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import OverView from '../component/OverView';

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
    
    <OverView/>

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