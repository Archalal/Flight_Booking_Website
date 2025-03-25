import React from "react";
import SideBar from "./SideBar";

import { Button } from "react-bootstrap";
import TotalDisplay from "../component/TotalDisplay";
import { Link } from "react-router-dom";


const UserAdminManage = () => {
 
  return (
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
           <TotalDisplay />


              <div className="row mt-2">
              <div className="col rounded  p-4 bg-white">
              <h2 style={{ display: "block", fontWeight: "bold", color: "#090979", marginTop: "30px" }}> All Users  Details</h2>
      <table className="table table-hover mt-4">
        <thead>
          <tr>
          <th className="p-3 text-center text-muted">Picture</th>
            <th  className="p-3 text-center text-muted">Name</th>
            <th className="p-3 text-center text-muted">E-Mail</th>
            {/* <th className="p-3 text-center text-muted">Date of Birth</th> */}
            {/* <th className="p-3 text-center text-muted">Address</th> */}
            <th className="p-3 text-center text-muted">Phone number</th>
            <th className="p-3 text-center text-muted">View</th>
            <th colSpan={2} className="p-3 text-center text-muted">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="align-middle">
            <td className="p-3 text-center text-muted"> <img src="https://static.vecteezy.com/system/resources/previews/024/558/262/non_2x/businessman-isolated-illustration-ai-generative-free-png.png" width={"100%"} height={"160px"}></img></td>
            <td className="p-3 text-center">Philip P</td>
            <td className="p-3 text-center">philip@gmail.com</td>
            {/* <td className="p-3 text-center">31/07/2000</td> */}
            {/* <td className="p-3 text-center">Tvm,India</td> */}
            <td className="p-3 text-center">9876543212</td>
            <td className="p-3 text-center">
            <Link to={'/adminsingleuser'}>
            <Button variant="outline-warning" size="sm" className="rounded-pill px-3">
                View
              </Button></Link>
            </td>
            <td className="p-3 text-center">
              <Button variant="outline-info" size="sm" className="rounded-pill px-3">
                Accept
              </Button>
            </td>
            <td className="p-3 text-center">
              <Button variant="outline-danger" size="sm" className="rounded-pill px-3">
                Reject
              </Button>
            </td>
          </tr>
         
        </tbody>
      </table>
    </div>
         
         </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default UserAdminManage;