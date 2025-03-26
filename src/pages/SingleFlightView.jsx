import React from 'react';
import SideBar from './SideBar';
import './SingleFlightView.css'

const SingleFlightView = () => {
  return (
    <div className="main-container">
     
      <div className="sidebar">
        <SideBar />
      </div>

     
      <div className="main-content">
      
        <div className="top-nav">
          <h4>Flight Details</h4>
          <div className="notification-icon">
            <i className="fa-solid fa-bell"></i>
          </div>
        </div>

       
        <div className="ticket-container">
          <h2 className="ticket-title"> Flight Ticket</h2>

       
          <div className="ticket">
        
            <div className="ticket-header">
              <div className="airline-info">
                <img 
                  src="https://logos-world.net/wp-content/uploads/2023/01/AirAsia-Logo-2002.png" 
                  alt="AirAsia Logo" 
                  className="airline-logo"
                />
                <h3>AIR ASIA</h3>
              </div>
              <div className="flight-info">
                
                <small>Premium Class</small>
              </div>
            </div>

           
            <div className="ticket-body">
              <div className="flight-details">
                {/* Departure */}
                <div className="departure">
                  <div className="icon-circle">
                    <i className="fa-solid fa-plane-departure"></i>
                  </div>
                  <div className="details">
                    <div className="label">DEPARTURE</div>
                    <div className="airport">Thiruvananthapuram (TRV)</div>
                    <div className="date">Thu, 15 Jun 2023</div>
                    <div className="time">16:45</div>
                  </div>
                </div>

                
                <div className="arrival">
                  <div className="icon-circle">
                    <i className="fa-solid fa-plane-arrival"></i>
                  </div>
                  <div className="details">
                    <div className="label">ARRIVAL</div>
                    <div className="airport">Dubai (DXB)</div>
                    <div className="date">Thu, 15 Jun 2023</div>
                    <div className="time">19:45</div>
                  </div>
                </div>
              </div>

          
              <div className="flight-info-bar">
                <div className="info-item">
                  <div className="info-label">FLIGHT DURATION</div>
                  <div className="info-value">4h 30m</div>
                </div>
                <div className="divider"></div>
                <div className="info-item">
                  <div className="info-label">FLIGHT TYPE</div>
                  <div className="info-value direct">Direct</div>
                </div>
              </div>

              
              <div className="passenger-price">
                <div className="passenger">
                  <div className="label">PASSENGER</div>
                  <div className="name">Reha P</div>
                </div>
                <div className="price">
                  <div className="label">TOTAL FARE</div>
                  <div className="amount">₹40,532</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default SingleFlightView;