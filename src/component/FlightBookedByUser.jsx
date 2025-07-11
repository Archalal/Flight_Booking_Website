import React, { useEffect, useState } from 'react';
import { Button, Card, Badge } from "react-bootstrap";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import AdminNotification from './AdminNotification';
import { approvedByAdmin, flightBooked, gettotalBooking, gettotalUser, rejectByAdmin, singleBooking } from '../../services/allApi';
import baseURL from '../../services/baseURL';





const FlightBookedByUser = () => {

  const[data,setData]=useState([])
  
  const navigate=useNavigate()
   const[user,setUser]=useState("")
   const[booking,setBooking]=useState("")

  
 
  

  useEffect(()=>{
    bookedUser()
    totalBooking(),
    totalUser()
  },[])

  const bookedUser=async()=>{
    
    try{

      let apiResponse=await flightBooked()
     setData(apiResponse.data)
     console.log(apiResponse.data);
     
    

    }catch(err){
      console.log(err);
      
    }
  }

  const onUserClick=async(id)=>{

    try{

      let apiResponse =await singleBooking(id)
      console.log(apiResponse);
      navigate(`/admin/useradminmanage/${id}/singleflightview`)
      
      

    }catch(err){
      console.log(err);
      
    }

  }

  const approved=async(data)=>{
    console.log(data._id);
    

    const token=sessionStorage.getItem("token")
   const reqheaders={
      "authorization":`Bearer ${token}`
    }
   
    const reqBody="approved"
    const apiResponse=await approvedByAdmin(data._id,reqBody,reqheaders)
    console.log(apiResponse);
    bookedUser()
    
    

  }
  const rejectCancellation=async(data)=>{


    const token=sessionStorage.getItem("token")
    const reqheaders={
       "authorization":`Bearer ${token}`
     }
    
     const reqBody="rejected"
     const apiResponse=await rejectByAdmin(data._id,reqBody,reqheaders)
     console.log(apiResponse);
     bookedUser()
     
     
 
   

  }
   const totalUser=async()=>{
    
      try{
        let apiResponse=await gettotalUser()
        setUser(apiResponse.data)
        
  
      }catch(err){
        console.log(err);
        
      }
    }
      const totalBooking=async()=>{
    
        try{
          let apiResponse=await gettotalBooking()
          console.log(apiResponse.data,"ok");
          
          setBooking(apiResponse.data)
          
    
        }catch(err){
          console.log(err);
          
        }
      }
  




  return (
    <div className="p-3" style={{ backgroundColor: '#f8fafc' }}>
      <Link to={'/admin/notification'} style={{textDecoration:"none"}}>
    <AdminNotification />
    </Link>
      <div className="d-flex justify-content-between align-items-center mb-4 mt-1">
        <div>
          <h2 className="m-0" style={{ fontWeight: '300', color: '#2d3748' }}>Flight Management</h2>
          <p className="text-muted m-0">Manage all user flight bookings</p>
        </div>
        
      </div>

      {/* Stats Cards */}
      <div className="row mb-4 g-4">
        <div className="col-md-6">
          <Card className="border-0 shadow-sm h-100" style={{ 
            background: 'linear-gradient(135deg, #000080 0%, #1e3a8a 100%)',
            color: 'white'
          }}>
            <Card.Body className="d-flex flex-column">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h6 className="text-uppercase text-white-50 mb-2">Total Users</h6>
                  <h2 className="mb-0">{user}</h2>
                </div>
                <div className="bg-white bg-opacity-10 p-3 rounded-circle">
                  <i className="fas fa-users fs-4"></i>
                </div>
              </div>
              
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6">
          <Card className="border-0 shadow-sm h-100" style={{ 
            background: 'linear-gradient(135deg, #0e2f44 0%, #1e3a8a 100%)',
            color: 'white'
          }}>
            <Card.Body className="d-flex flex-column">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h6 className="text-uppercase text-white-50 mb-2">Total Bookings</h6>
                  <h2 className="mb-0">{booking}</h2>
                </div>
                <div className="bg-white bg-opacity-10 p-3 rounded-circle">
                  <i className="fas fa-plane fs-4"></i>
                </div>
              </div>
              
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* Bookings Table */}
      <table className="table table-borderless table-hover align-middle mb-0" style={{ fontSize: '14px' }}>
  <thead className="bg-light text-secondary">
    <tr className="text-uppercase fw-semibold">
      <th className="p-3">Picture</th>
      <th className="p-3">Name</th>
      <th className="p-3">Email</th>
      <th className="p-3">Address</th>
      <th className="p-3">Phone</th>
      <th className="p-3">Status</th>
      <th className="p-3">Cancellation</th>
      <th className="p-3">Actions</th>
    </tr>
  </thead>
  <tbody>
    {data?.map((a, index) => (
      <tr key={index} style={{ verticalAlign: 'middle', backgroundColor: index % 2 === 0 ? '#f9fafb' : 'white' }}>
        <td className="p-3">
          <div
            className="rounded-circle overflow-hidden border shadow-sm"
            style={{ width: '50px', height: '50px' }}
          >
            <img
              src={a.userId?.image ? `${baseURL}/uploads/${a.userId.image}` : '/default-avatar.png'}
              alt="Profile"
              className="img-fluid"
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
        </td>
        <td className="p-3 fw-semibold text-dark">{a.userId?.name}</td>
        <td className="p-3 text-muted">{a.userId?.email}</td>
        <td className="p-3 text-muted">{a.userId?.address}</td>
        <td className="p-3 text-muted">{a.userId?.phoneNumber}</td>
        <td className="p-3">
          <Badge
            bg="success"
            className="px-3 py-1 text-white rounded-pill shadow-sm"
            style={{ fontSize: '0.75rem' }}
          >
            <i className="fas fa-check-circle me-1"></i> {a.status}
          </Badge>
        </td>
        <td className="p-3">
          {a.cancellationStatus === "requested" ? (
            <div className="d-flex gap-2">
              <button
                style={{
                  border: 'none',
                  backgroundColor: '#d1fae5',
                  color: '#065f46',
                  padding: '5px 10px',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: '500',
                }}
                onClick={() => approved(a)}
              >
                Approve
              </button>
              <button
                style={{
                  border: 'none',
                  backgroundColor: '#fee2e2',
                  color: '#991b1b',
                  padding: '5px 10px',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: '500',
                }}
                onClick={() => rejectCancellation(a)}
              >
                Reject
              </button>
            </div>
          ) : a.cancellationStatus === "approved" ? (
            <span className="text-success fw-semibold small">Cancellation Approved</span>
          ) : a.cancellationStatus === "rejected" ? (
            <span className="text-danger fw-semibold small">Cancellation Rejected</span>
          ) : (
            <span className="text-muted small">Not Requested</span>
          )}
        </td>
        <td className="p-3">
          <Button
            variant="outline-primary"
            size="sm"
            className="rounded-pill px-3 py-1 d-flex align-items-center"
            style={{ fontSize: '0.75rem', fontWeight: '500' }}
            onClick={() => onUserClick(a._id)}
          >
            <i className="fas fa-eye me-2"></i> View
          </Button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

           
    
     
    </div>
  )
}

export default FlightBookedByUser;