import React from 'react'
import { Line } from 'react-chartjs-2';

const TotalRevenueFlight = () => {
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
            <i style={{ color: "red" }} className="fa-solid fa-bell"></i>
          </div>
        </div>
      </div>
      <h2 className="ms-2 mt-3" style={{ fontWeight: "bolder" }}>Flight Manage</h2> 
              <div className="row mt-4 p-3">
        <div className="col-md-6">
          <div
            className=" p-3 rounded "
            style={{ height: "130px", backgroundColor: "#d3ffce",color:"black" }}
          >
            <div  > <i className="fa-solid fa-eye  " style={{ color: "black" }}></i></div>
            <h2 className="text-md font-bold">1,234</h2>
            <h6 className="text-2xl ">Total Flights</h6>
          </div>
        </div>
        <div className="col-md-6">
        <div
                    className=" p-3 rounded "
                    style={{ height: "130px", backgroundColor: "#CCCCFF" }}
                  >
                    <i className="fa-solid fa-dollar-sign" style={{ color: "purple" }}></i>
                    <h2 className="text-2xl font-bold">12,345</h2>
                    <h6 className="text-2xl">Total Revenue</h6>
                  </div>
        </div>

        <div className="row" style={{height:"400px"}}>
            <div className="col p-5" >
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
        </div>
       
      </div>
      
    </div>
  )
}

export default TotalRevenueFlight
