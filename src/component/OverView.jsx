import React, { useEffect, useState } from 'react';
import { Button, Card, Badge, Row, Col } from "react-bootstrap";

import { Link } from 'react-router-dom';
import { getAllUser, gettotalBooking, gettotalflight, gettotalUser,getAllFlights,flightBooked, totalBookedPrice,   } from '../../services/allApi';
import AdminNotification from './AdminNotification';




const OverView = () => {
  useEffect(()=>{
    totalUser(),
    totalFligt(),
    totalBooking(),
    singleUser(),
    flightrecent(),
    bookingrecent(),
    totalRevenue()

  },[])
  const[user,setUser]=useState("")
  const[flight,setFlight]=useState("")
  const[booking,setBooking]=useState("")
  const[revenue,setRevenue]=useState("")
  const[singleData,setSingleUse]=useState([])
  const[singleFlight,setSingleFlight]=useState([])
  const[singleBooking,setSingleBooking]=useState([])

  const totalUser=async()=>{

    try{
      let apiResponse=await gettotalUser()
      setUser(apiResponse.data)
      

    }catch(err){
      console.log(err);
      
    }
  }
  const totalFligt=async()=>{

    try{
      let apiResponse=await gettotalflight()
      setFlight(apiResponse.data)
      

    }catch(err){
      console.log(err);
      
    }
  }
  const totalBooking=async()=>{

    try{
      let apiResponse=await gettotalBooking()
      setBooking(apiResponse.data)
      

    }catch(err){
      console.log(err);
      
    }
  }

  const singleUser=async()=>{
    try{
      const apiResponse= await getAllUser()
      let user=apiResponse.data.slice(-1)
      console.log(user);
      setSingleUse(user)
      

    }catch(err){
      console.log(err);
      
    }
  }
  const flightrecent=async()=>{
    try{
      const apiResponse= await getAllFlights()
      let user=apiResponse.data.slice(-1)
      console.log(user);
      setSingleFlight(user)
      

    }catch(err){
      console.log(err);
      
    }
  }
  const bookingrecent=async()=>{
    try{
      const apiResponse= await flightBooked()
      let user=apiResponse.data.slice(-1)
      console.log(user);
      setSingleBooking(user)
      

    }catch(err){
      console.log(err);
      
    }
  }
  const totalRevenue=async()=>{
    try{
      const apiResponse= await totalBookedPrice()
      let total=apiResponse.data[0].revenue
      console.log(total,"hi");
      
      setRevenue(total)
    
      

    }catch(err){
      console.log(err);
      
    }
  }
  return (
    <div className="p-3" style={{ backgroundColor: '#f8fafc' }}>
      {/* Header Section */}
    <Link to={'/admin/notification'} style={{textDecoration:"none"}}>
  <AdminNotification  />
    </Link>
      {/* Stats Cards */}
      <Row className="mb-4 g-4">
        <Col md={6} lg={3}>
          <Card className="border-0 shadow-sm h-100" style={{ 
            background: 'linear-gradient(135deg, #55efc4 0%, #00b894 100%)'
          }}>
            <Card.Body className="d-flex flex-column text-white">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h6 className="text-uppercase text-black mb-2">Total Users</h6>
                  <h2 className="mb-0 text-black">{user}</h2>
                </div>
                <div className="bg-white bg-opacity-20 p-3 rounded-circle">
                  <i style={{color:'blue'}} className="fas fa-users fs-4"></i>
                </div>
              </div>

            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6} lg={3}>
          <Card className="border-0 shadow-sm h-100" style={{ 
            background: 'linear-gradient(135deg, #81ecec 0%, #00cec9 100%)'
          }}>
            <Card.Body className="d-flex flex-column text-white">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h6 className="text-uppercase text-black mb-2">Total Bookings</h6>
                  <h2 className="mb-0 text-black">{booking}</h2>
                </div>
                <div className="bg-white bg-opacity-20 p-3 rounded-circle">
                  <i style={{color:'green'}}  className="fas fa-cart-shopping fs-4"></i>
                </div>
              </div>
            
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6} lg={3}>
          <Card className="border-0 shadow-sm h-100" style={{ 
            background: 'linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%)'
          }}>
            <Card.Body className="d-flex flex-column text-white">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h6 className="text-uppercase text-black mb-2">Total Revenue</h6>
                  <h2 className="mb-0 text-black">{revenue}</h2>
                </div>
                <div className="bg-white bg-opacity-20 p-3 rounded-circle">
                  <i style={{color:'purple'}} className="fas fa-dollar-sign fs-4"></i>
                </div>
              </div>
          
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6} lg={3}>
          <Card className="border-0 shadow-sm h-100" style={{ 
            background: 'linear-gradient(135deg, #ffb8b8 0%, #ff7675 100%)'
          }}>
            <Card.Body className="d-flex flex-column text-white">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h6 className="text-uppercase text-black mb-2">Active Flights</h6>
                  <h2 className="mb-0 text-black">{flight}</h2>
                </div>
                <div className="bg-white bg-opacity-20 p-3 rounded-circle">
                  <i style={{color:'pink'}} className="fas fa-plane fs-4"></i>
                </div>
              </div>
            
            </Card.Body>
          </Card>
        </Col>
      </Row>

      
      <Card className="border-0 shadow-sm">
  <Card.Body className="p-0">
    <div className="p-3 border-bottom">
      <h5 className="mb-0" style={{ fontWeight: '600', color: '#2d3748' }}>
        <i className="fas fa-history me-2 text-primary"></i> Recent Activity
      </h5>
    </div>
    
    <div className="list-group list-group-flush">
  {singleData.map((a,index) => (
    <div key={index} className="list-group-item border-0 px-3 py-3 hover-effect">
      <div className="d-flex align-items-start">
        <div className="flex-shrink-0 rounded-circle p-2 me-3 bg-light">
          <i className="fas fa-fw fa-bell text-primary"></i> 
        </div>
        <div className="flex-grow-1">
        
            <h6 className="mb-1 fw-semibold text-gray-800">
            New User Registered
            </h6>
          {a.name} who has recently registered
        </div>
      </div>
    </div>
  ))}
   {singleFlight.map((a,index) => (
    <div key={index} className="list-group-item border-0 px-3 py-3 hover-effect">
      <div className="d-flex align-items-start">
        <div className="flex-shrink-0 rounded-circle p-2 me-3 bg-light">
          <i className="fas fa-fw fa-bell text-primary"></i> 
        </div>
        <div className="flex-grow-1">
        
            <h6 className="mb-1 fw-semibold text-gray-800">
          New Flight Registered
            </h6>
             Flight Number {a.flightNumber} has been registered

        </div>
      </div>
    </div>
  ))}
  {singleBooking.map((a,index) => (
    <div key={index} className="list-group-item border-0 px-3 py-3 hover-effect">
      <div className="d-flex align-items-start">
        <div className="flex-shrink-0 rounded-circle p-2 me-3 bg-light">
          <i className="fas fa-fw fa-bell text-primary"></i> 
        </div>
        <div className="flex-grow-1">
        
            <h6 className="mb-1 fw-semibold text-gray-800">
          User Booked Flight
            </h6>
              {a.username} has been booked flight

        </div>
      </div>
    </div>
  ))}
</div>
       
  </Card.Body>
</Card>
    </div>
  )
}

export default OverView;