import React, { useEffect, useState } from 'react';
import { Card,Badge } from 'react-bootstrap';
import { gettotalBooking, gettotalflight, gettotalUser } from '../../services/allApi';




const TotalDisplay = () => {
  useEffect(()=>{
    totalUser(),
    totalFligt(),
    totalBooking()
  },[])
   const[user,setUser]=useState("")
    const[flight,setFlight]=useState("")
     const[booking,setBooking]=useState("")
     console.log("hi",booking);
     
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
        console.log(apiResponse.data,"ok");
        
        setBooking(apiResponse.data)
        
  
      }catch(err){
        console.log(err);
        
      }
    }
  return (
      <div className="row mb-4 g-4">
        <div className="col-md-4">
          <Card className="border-0 shadow-sm h-100" style={{ 
            background: 'linear-gradient(135deg, #d3ffce 0%, #2ecc71 100%)',
            color: '#2d3748'
          }}>
            <Card.Body className="d-flex flex-column">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h6 className="text-uppercase text-black mb-2">Total Users</h6>
                  <h2 className="mb-0">{user}</h2>
                </div>
                <div className="bg-white bg-opacity-30 p-3 rounded-circle">
                  <i className="fas fa-plane-departure fs-4" style={{ color: '#27ae60' }}></i>
                </div>
              </div>
             
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="border-0 shadow-sm h-100" style={{ 
            background: 'linear-gradient(135deg, #c6e2ff 0%, #3498db 100%)',
            color: '#2d3748'
          }}>
            <Card.Body className="d-flex flex-column">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h6 className="text-uppercase text-black  mb-2">Total Bookings</h6>
                  <h2 className="mb-0">{booking}</h2>
                </div>
                <div className="bg-white bg-opacity-30 p-3 rounded-circle">
                  <i className="fas fa-calendar-check fs-4" style={{ color: '#2980b9' }}></i>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="border-0 shadow-sm h-100" style={{ 
          background: "linear-gradient(135deg, #0ba360 0%, #3cba92 100%)",
            color: '#2d3748'
          }}>
            <Card.Body className="d-flex flex-column">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h6 className="text-uppercase text-black  mb-2">Total flight</h6>
                  <h2 className="mb-0">{flight}</h2>
                </div>
                <div className="bg-white bg-opacity-30 p-3 rounded-circle">
                  <i className="fas fa-calendar-check fs-4" style={{ color: '#2980b9' }}></i>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>

  
  );
};

export default TotalDisplay;