import React from 'react'
import { Button } from "react-bootstrap";
import { Link} from 'react-router-dom';

const UserTicketBooking = () => {
  return (
    <div>
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
              <h2 className="ms-2 mt-3" style={{ fontWeight: "bolder" }}>Flight Manage</h2> 
              <div className="row mt-4 p-3">
        <div className="col-md-6">
          <div
            className=" p-3 rounded "
            style={{ height: "130px", backgroundColor: "#000080",color:"white" }}
          >
            <div  > <i className="fa-solid fa-eye  " style={{ color: "white" }}></i></div>
            <h2 className="text-md font-bold">1,234</h2>
            <h6 className="text-2xl ">Total Users </h6>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className=" p-3 rounded "
            style={{ height: "130px", backgroundColor: "#0e2f44",color:"white" }}
          >
            <i className="fa-solid fa-cart-shopping " style={{color:"white"}} ></i>
            <h2 className="text-md font-bold">567</h2>
            <h6 className="text-2xl">Total Bookings from users</h6>
          </div>
        </div>
       
      </div>




      
      <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead style={{ backgroundColor: "#f8f9fa" }}>
                  <tr>
                    <th className="p-3 text-secondary fw-normal">Name</th>
                    <th className="p-3 text-secondary fw-normal">E-Mail</th>
                    <th className="p-3 text-secondary fw-normal">Date of Birth</th>
                    <th className="p-3 text-secondary fw-normal">Address</th>
                    <th className="p-3 text-secondary fw-normal">Phone</th>
                    <th className="p-3 text-secondary fw-normal">Status</th>
                    <th className="p-3 text-secondary fw-normal">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3">Reha P</td>
                    <td className="p-3">reha0002@gmail.com</td>
                    <td className="p-3">31/07/2000</td>
                    <td className="p-3">Tvm, India</td>
                    <td className="p-3">9876543212</td>
                    <td className="p-3">
                      <span className="badge bg-success bg-opacity-10 text-success">Paid</span>
                    </td>
                    <td className="p-3">
                      <Link to={'/singleflightview'}>
                        <Button 
                          variant="outline-primary" 
                          size="sm" 
                          className="rounded-pill px-3"
                          style={{ borderWidth: "1.5px" }}
                        >
                          View Booking
                        </Button>
                      </Link>
                    </td>
                  </tr>
                 
                </tbody>
              </table>
            </div>

      
    </div>
  )
}

export default UserTicketBooking
