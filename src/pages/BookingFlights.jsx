import React from 'react'
import SideBar from './SideBar'
import FlightBookedByUser from '../component/FlightBookedByUser';




const BookingFlights = () => {
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
             
            
             


      
    <FlightBookedByUser />

    

</div>
            
          </div>
        
        </div>
      
      
    </div>
    </div>
  )
}




export default BookingFlights
