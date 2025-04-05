import React from 'react';

const TotalFlight = () => {
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
          className="container d-flex align-items-center"
          style={{ height: "100%" }}
        >
          <div>
            <h4><span style={{ color: "black", letterSpacing: "1px" }}>DashBoard</span></h4>
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
            className="p-3 rounded"
            style={{ 
              height: "130px", 
              background: "linear-gradient(135deg, #d3ffce 0%, #a8e8a0 100%)",
              color: "black",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
            }}
          >
            <div><i className="fa-solid fa-eye" style={{ color: "black" }}></i></div>
            <h2 className="text-md font-bold">1,234</h2>
            <h6 className="text-2xl">Total Flights</h6>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="p-3 rounded"
            style={{ 
              height: "130px", 
              background: "linear-gradient(135deg, #c6e2ff 0%, #9cc5ff 100%)",
              color: "black",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
            }}
          >
            <i className="fa-solid fa-cart-shopping" style={{ color: "black" }}></i>
            <h2 className="text-md font-bold">567</h2>
            <h6 className="text-2xl">Total Bookings</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TotalFlight;