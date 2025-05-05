import React, { useEffect, useState } from 'react'
import { getAllFlights } from '../../services/allApi'


const AdminFlightTicketView = () => {
  useEffect(()=>{
    flightrecent()
  },[])
  const[flight,setFlight]=useState([])


   const flightrecent=async()=>{
      try{
        const apiResponse= await getAllFlights()
        let user=apiResponse.data
        console.log(user);
        setFlight(user)
        
  
      }catch(err){
        console.log(err);
        
      }
    }
  return (
    <div>
       <div className="d-flex flex-column align-items-center mt-3">
      {
        flight.map((a)=>(
          a.returnDate?
          <div className='bg-white rounded-3 shadow p-4 mb-4 mt-3' style={{ 
            width: '90%',
            maxWidth: '900px',
            background: "linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%)", 
            border: "1px solid #e0e0e0",
            borderLeft: "5px solid #090979",
            overflow: "hidden" 
          }}>
            <div className="row align-items-center g-4 ">
              <div className="col-md-10">
                <div className="row mb-3 align-items-center">
                  <div className="col-md-1">
                    <img src="https://logos-world.net/wp-content/uploads/2023/01/AirAsia-Logo-2002.png" alt="AirAsia" className="img-fluid rounded" />
                  </div>
                  <div className="col-md-5 text-center">
                    <h4 className='fw-bold mb-1'>{a.timeOfDeparture} - {a.timeOfDestination}</h4>
                    <span className="text-muted small">{a.departureName} → {a.destinationName}</span>
                  </div>
                  <div className="col-md-3">
                    <h6 className='fw-bold text-success'>{a.stop}</h6>
                  </div>
                  <div className="col-md-3">
                    <h6 className='fw-bold'>{a.flightDuration}</h6>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-1">
                    <img src="https://logos-world.net/wp-content/uploads/2023/01/AirAsia-Logo-2002.png" alt="AirAsia" className="img-fluid rounded" />
                  </div>
                  <div className="col-md-5 text-center">
                    <h4 className='fw-bold mb-1'>{a.timeOfDeparture} - {a.timeOfDestination}</h4>
                    <span className="text-muted small">{a.destinationName} → {a.departureName}</span>
                  </div>
                  <div className="col-md-3">
                    <h6 className='fw-bold text-success'>{a.stop}</h6>
                  </div>
                  <div className="col-md-3">
                    <h6 className='fw-bold'>{a.flightDuration}</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-2 text-center border-start ps-4">
                <h4 className='fw-bold text-danger'>{a.price}</h4>
                <h6 className='fw-bold text-danger'>{a.cabinClass}</h6>
               
              
              </div>
            </div>
          </div>
        :
        <div className='bg-white rounded-3 shadow p-4 mt-3' style={{ 
          width: '90%',
          maxWidth: '900px',
          background: "linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%)", 
          border: "1px solid #e0e0e0",
          borderLeft: "5px solid #dc3545",
          overflow: "hidden" 
        }}>
          <div className="row align-items-center g-4 ">
            <div className="col-md-10">
              <div className="row align-items-center">
                <div className="col-md-1">
                  <img src="https://logos-world.net/wp-content/uploads/2023/01/AirAsia-Logo-2002.png" alt="AirAsia" className="img-fluid rounded" />
                </div>
                <div className="col-md-5 text-center">
                  <h4 className='fw-bold mb-1'>{a.timeOfDeparture} - {a.timeOfDestination}</h4>
                  <span className="text-muted small">{a.departureName} → {a.destinationName}</span>
                </div>
                <div className="col-md-3">
                  <h6 className='fw-bold text-success'>{a.stop}</h6>
                </div>
                <div className="col-md-3">
                  <h6 className='fw-bold'>{a.flightDuration}</h6>
                </div>
              </div>
            </div>
            <div className="col-md-2 text-center border-start ps-4">
              <h4 className='fw-bold text-danger'>{a.price}</h4>
              <h6 className='fw-bold text-danger'>{a.cabinClass} Economy</h6>
             
             
            </div>
          </div>
        </div>


        ))
      }
       
     



      


    </div>
      
    </div>
  )
}

export default AdminFlightTicketView
