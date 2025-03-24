import React from 'react'

const TotalDisplay = () => {
  return (
    <div>
           <div className="row mt-4 p-3">
        <div className="col-md-4">
          <div
            className=" p-3 rounded "
            style={{ height: "130px", backgroundColor: "#000080",color:"white" }}
          >
            <div  > <i className="fa-solid fa-eye  " style={{ color: "white" }}></i></div>
            <h2 className="text-md font-bold">1,234</h2>
            <h6 className="text-2xl ">Total Users</h6>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className=" p-3 rounded "
            style={{ height: "130px", backgroundColor: "#0e2f44",color:"white" }}
          >
            <i className="fa-solid fa-cart-shopping " style={{color:"white"}} ></i>
            <h2 className="text-md font-bold">567</h2>
            <h6 className="text-2xl">Total Bookings</h6>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className=" p-3 rounded "
            style={{ height: "130px", backgroundColor: "#660066",color:"white" }}
          >
            <i className="fa-solid fa-dollar-sign" style={{ color: "white" }}></i>
            <h2 className="text-2xl font-bold">12,345</h2>
            <h6 className="text-2xl">Total Revenue</h6>
          </div>
        </div>
      
      </div>
      
    </div>
  )
}

export default TotalDisplay
