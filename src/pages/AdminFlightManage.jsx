import React from 'react'
import SideBar from './SideBar'
import { Button } from 'react-bootstrap'


const AdminFlightManage = () => {
  return (
    <div>
        <div>
      <div>
        <div className="w-100">
          <div className="row" style={{ background: "#f8f9fa" }}>
            <div
              className="col-2"
              style={{
                backgroundColor: "#ffffff",
                height: "100vh",
                position: "fixed",
                top: "0",
                left: "0",
                padding: "10px",
                color: "#525f7f",
                boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
                zIndex: "1",
              }}
            >
              <SideBar />
            </div>

            <div
              className="col-10"
              style={{
                marginLeft: "16.65%",
                overflowX: "hidden",
                backgroundColor: "#ffffff",
              }}
            >
              <div
                style={{
                  height: "50px",
                  width: "100%",
                  backgroundColor: "white",
                }}
                className="rounded shadow "
              >
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
    
              </div>
              <h2 className="ms-2 mt-3" style={{ fontWeight: "bolder" }}>User Manage</h2> 
              <div className="row mt-4 p-3">
        <div className="col-md-6">
          <div
            className=" p-3 rounded "
            style={{ height: "130px", backgroundColor: "#000080",color:"white" }}
          >
            <div  > <i className="fa-solid fa-eye  " style={{ color: "white" }}></i></div>
            <h2 className="text-md font-bold">1,234</h2>
            <h6 className="text-2xl ">Total Flights</h6>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className=" p-3 rounded "
            style={{ height: "130px", backgroundColor: "#0e2f44",color:"white" }}
          >
            <i className="fa-solid fa-cart-shopping " style={{color:"white"}} ></i>
            <h2 className="text-md font-bold">567</h2>
            <h6 className="text-2xl">Total Bookings</h6>
          </div>
        </div>
       
      </div>


              <div className="row mt-2">
              <div className="col rounded  p-4 bg-white">
                <h2>All Users Details</h2>
      <table className="table table-hover mt-4">
        <thead>
          <tr>
            <th className="p-3 text-center text-muted">Flight Number</th>
            <th className="p-3 text-center text-muted">AirlineLogo</th>
            <th className="p-3 text-center text-muted">Depature airport</th>
            <th  className="p-3 text-center text-muted">Destination airport</th>
            <th  className="p-3 text-center text-muted">Depature Date</th>
            <th  className="p-3 text-center text-muted">Depature Time</th>
            <th  className="p-3 text-center text-muted">Arrival Date</th>
            <th  className="p-3 text-center text-muted">Arrival Time</th>
            <th  className="p-3 text-center text-muted">Seats</th>
            <th  className="p-3 text-center text-muted">Fight Type</th>
          </tr>
        </thead>
        <tbody>
          <tr className="align-middle">
            <td className="p-3 text-center">567897</td>
            <td className="p-3 text-center">   <img
            src="https://logos-world.net/wp-content/uploads/2023/01/AirAsia-Logo-2002.png"
            alt="AirAsia Logo"
            style={{ width: '50%', borderRadius: '8px' }}
          /></td>
            <td className="p-3 text-center">TVM</td>
            <td className="p-3 text-center">Qatar</td>
            <td className="p-3 text-center">01/04/25</td>
            <td className="p-3 text-center">9.00 am</td>
            <td className="p-3 text-center">01/04/25</td>
            <td className="p-3 text-center">1.00 pm</td>
            <td className="p-3 text-center">40</td>
            <td className="p-3 text-center">return</td>
            
          </tr>
          <tr className="align-middle">
            <td className="p-3 text-center">345567</td>
            <td className="p-3 text-center">   <img
            src="https://logos-world.net/wp-content/uploads/2023/01/AirAsia-Logo-2002.png"
            alt="AirAsia Logo"
            style={{ width: '50%', borderRadius: '8px' }}
          /></td>
            <td className="p-3 text-center">TVM</td>
            <td className="p-3 text-center">Dubai</td>
            <td className="p-3 text-center">01/04/25</td>
            <td className="p-3 text-center">9.00 am</td>
            <td className="p-3 text-center">01/04/25</td>
            <td className="p-3 text-center">1.00 pm</td>
            <td className="p-3 text-center">40</td>
            <td className="p-3 text-center">oneWay</td>
            
          </tr>
        </tbody>
      </table>
    </div>
          {/* <div className="col-3 ">
            
                 
                </div> */}
         </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default AdminFlightManage
