import React, { useEffect, useState } from "react";

import { Button, Badge, Table, Card } from "react-bootstrap";
import TotalDisplay from "../../component/TotalDisplay";
import { Link, useNavigate } from "react-router-dom";
import AdminNotification from "../../component/AdminNotification";
import { getAllUser } from "../../../services/allApi";
import baseURL from "../../../services/baseURL";


const UserAdminManage = () => {

  const[userData,setUserData]=useState([])
  const navigate=useNavigate()


  useEffect(()=>{
    getUsers()
  

  },[])

  const getUsers=async()=>{
    const apiResponse=await getAllUser()
    let filter= apiResponse.data.filter((a)=>(a.role==="user" ))
     setUserData(filter)
     console.log(filter);
     
    
    

  }

  const onSingleUserId=(id)=>{
    console.log(id);
    sessionStorage.setItem("singleUserId",id)
    navigate(`/admin/useradminmanage/${id}/adminsingleuser`)
    


  }
  
  return (
    <div className="admin-dashboard" style={{ backgroundColor: "#f8f9fa" }}>
     
   
      <div >
       
      <Link to={'/admin/notification'} style={{textDecoration:"none"}}>
    <AdminNotification />
    </Link>
      
        <div className="d-flex justify-content-betwen align-items-center mb-4 mt-3">
          <h2 className="m-0" style={{ fontWeight: "300", color: "#2d3748" }}>
            <i className="fas fa-users me-2 text-primary"></i> User Management
          </h2>
       
        </div>

       
        <TotalDisplay />

      
        <Card className="border-0 shadow-sm mt-4">
          <Card.Body className="p-0">
            <div className="p-3 border-bottom bg-white">
              <h5 className="mb-0" style={{ fontWeight: "600", color: "#2d3748" }}>
                <i className="fas fa-list me-2 text-primary"></i> All Users Details
              </h5>
            </div>
            
           <div className="table-responsive">
  <Table
    hover
    className="align-middle mb-0"
    style={{ borderCollapse: "separate", borderSpacing: "0 10px" }}
  >
    <thead style={{ backgroundColor: "#f1f5f9", boxShadow: "0 2px 6px rgba(0,0,0,0.05)" }}>
      <tr className="text-uppercase text-secondary small fw-bold">
        <th className="p-3 text-center">Picture</th>
        <th className="p-3">Name</th>
        <th className="p-3">Email</th>
        <th className="p-3">Phone</th>
        <th className="p-3">Status</th>
        <th className="p-3 text-center">Actions</th>
      </tr>
    </thead>
    <tbody>
      {userData?.map((a, index) => (
        <tr
          key={index}
          style={{
            backgroundColor: "white",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
            borderRadius: "8px",
          }}
        >
          <td className="text-center p-3">
            <div
              className="rounded-circle overflow-hidden mx-auto border"
              style={{ width: "50px", height: "50px" }}
            >
              <img
                src={`${baseURL}/uploads/${a.image}`}
                alt="User"
                className="img-fluid"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
          </td>
          <td className="p-3 fw-semibold text-dark">{a.name}</td>
          <td className="p-3 text-muted">{a.email}</td>
          <td className="p-3 text-muted">{a.phoneNumber}</td>
          <td className="p-3">
            <Badge
              bg="success"
              className="bg-opacity-25 text-success px-3 py-2 rounded-pill"
              style={{ fontSize: "0.8rem" }}
            >
              <i className="fas fa-check-circle me-1"></i> Active
            </Badge>
          </td>
          <td className="text-center p-3">
            <Button
              variant="outline-primary"
              size="sm"
              className="rounded-pill px-3 py-1"
              onClick={() => onSingleUserId(a._id)}
              style={{ fontWeight: "500", fontSize: "0.85rem" }}
            >
              <i className="fas fa-eye me-1"></i> View
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
</div>

          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default UserAdminManage;