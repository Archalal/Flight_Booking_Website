import React, { useEffect, useState } from 'react';
import { Button, Card, Badge } from "react-bootstrap";
import { Link } from 'react-router-dom';
import AdminNotification from './AdminNotification';
import { getAllFlights, gettotalBooking, gettotalflight } from '../../services/allApi';



const TotalFlight = () => {

  const[flightDatas,setFlightData]=useState([])
  const[filteredArray,setfilteredArray]=useState([])
   const[flight,setFlight]=useState("")
   const[booking,setBooking]=useState("")
  useEffect(()=>{
    getFlights(),
    totalBooking(),
    totalFligt()
  },[])
  console.log("hi",flightDatas);
  console.log(filteredArray);
  
  

  const getFlights=async()=>{
    const apiResponse =await getAllFlights()
   if(apiResponse.status==200){
    setFlightData(apiResponse.data)
    const arrayreduce= apiResponse.data.slice(-3)
    setfilteredArray(arrayreduce)
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
    <div style={{ backgroundColor: '#f8fafc' }}>
     <Link to={'/admin/notification'} style={{textDecoration:"none"}}>
    <AdminNotification />
    </Link>
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="m-0" style={{ fontWeight: '700', color: '#2d3748' }}>Flight Management</h2>
          <p className="text-muted m-0">Monitor and manage flight operations</p>
        </div>
       
      </div>

      {/* Stats Cards */}
      <div className="row mb-4 g-4">
        <div className="col-md-6">
          <Card className="border-0 shadow-sm h-100" style={{ 
            background: 'linear-gradient(135deg, #d3ffce 0%, #2ecc71 100%)',
            color: '#2d3748'
          }}>
            <Card.Body className="d-flex flex-column">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h6 className="text-uppercase text-muted mb-2">Total Flights</h6>
                  <h2 className="mb-0">{flight}</h2>
                </div>
                <div className="bg-white bg-opacity-30 p-3 rounded-circle">
                  <i className="fas fa-plane-departure fs-4" style={{ color: '#27ae60' }}></i>
                </div>
              </div>
             
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6">
          <Card className="border-0 shadow-sm h-100" style={{ 
            background: 'linear-gradient(135deg, #c6e2ff 0%, #3498db 100%)',
            color: '#2d3748'
          }}>
            <Card.Body className="d-flex flex-column">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h6 className="text-uppercase text-muted mb-2">Total Bookings</h6>
                  <h2 className="mb-0">{booking}</h2>
                </div>
                <div className="bg-white bg-opacity-30 p-3 rounded-circle">
                  <i className="fas fa-calendar-check fs-4" style={{ color: '#2980b9' }}></i>
                </div>
              </div>
           
            </Card.Body>
          </Card>
        </div>
      </div>

      

      {/* Recent Flights Table */}
      <Card className="border-0 shadow-sm">
        <Card.Body className="p-0">
          <div className="p-3 border-bottom bg-white">
            <h5 className="mb-0" style={{ fontWeight: '600', color: '#2d3748' }}>
              <i className="fas fa-list me-2 text-primary"></i> Recent Flight Activities
            </h5>
          </div>
          <div className="table-responsive">
            <div className="table-responsive">
  <table className="table align-middle mb-0" style={{ fontSize: '14px' }}>
    <thead style={{ backgroundColor: '#f1f5f9' }}>
      <tr className="text-uppercase text-muted fw-semibold small">
        <th className="p-3">Flight No.</th>
        <th className="p-3">Departure</th>
        <th className="p-3">Destination</th>
        <th className="p-3">Date</th>
        <th className="p-3">Stop</th>
      </tr>
    </thead>
    <tbody>
      {filteredArray?.map((a, index) => (
        <tr
          key={index}
          style={{
            backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb',
            transition: 'background 0.2s ease-in-out',
          }}
        >
          <td className="p-3 fw-semibold text-dark">{a.flightNumber}</td>
          <td className="p-3 text-muted">{a.departureName}</td>
          <td className="p-3 text-muted">{a.destinationName}</td>
          <td className="p-3 text-muted">
            {new Date(a.dateOfDeparture).toLocaleString("en-US", {
              dateStyle: "medium",
              timeStyle: "short",
            })}
          </td>
          <td className="p-3 text-muted">{a.stop}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TotalFlight;