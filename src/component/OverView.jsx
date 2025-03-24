import React from 'react'

const OverView = () => {
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

      <div>
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
      </div>
      
    </div>
  )
}

export default OverView
