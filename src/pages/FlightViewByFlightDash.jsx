import React from 'react'
import FlightTicket from '../component/FlightTicket'
import FlightOverview from './FlightOverview'
import FlightSidebar from './FlightSidebar'
import TotalFlight from '../component/TotalFlight'
import AdminFlightTicketView from '../component/AdminFlightTicketView'


const FlightViewByFlightDash = () => {
  return (
    <div>

<div className="row">
            <div className="col-2"
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
              }}>
                <FlightSidebar />
            </div>
            <div className="col-10 " style={{ marginLeft: "16.65%", overflowX: "hidden" }}>
          <TotalFlight />
           <div className="p-5">
           <AdminFlightTicketView />
           </div>
            </div>
        </div>
      
      
    </div>
  )
}

export default FlightViewByFlightDash
