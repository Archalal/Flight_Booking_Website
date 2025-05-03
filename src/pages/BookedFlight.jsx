import React, { useEffect, useState } from 'react';
import UserDashNav from '../component/UserDashNav';
import { Button } from 'react-bootstrap';
import { userbookedFlights, getSingleFlight } from '../../services/allApi';
import { useParams } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'; // PayPal import

const BookedFlight = () => {
  const [ticket, setTicket] = useState("");
  const [total, setTotal] = useState("");
  
  const username = sessionStorage.getItem("username");
  const searchParams = new URLSearchParams(location.search);
  const { id } = useParams();
  
  const departureName = searchParams.get("departureName");
  const destinationName = searchParams.get("destinationName");
  const returnDate = searchParams.get("returnDate");
  const avaiableSeat = searchParams.get("avaiableSeat");
  console.log(avaiableSeat);
  
  useEffect(() => {
    ticketSearch();
  }, []);
  
  const ticketSearch = async () => {
    let apiResponse = await getSingleFlight(id);
    setTicket(apiResponse.data);
    const totalPrice = avaiableSeat * apiResponse.data.price;
    setTotal(totalPrice);
  };
  
  const [flightDetails, setFlightDetails] = useState({});
  useEffect(() => {
    if (ticket && total) {
      setFlightDetails({
        username: username,
        price: total,
        departureName: ticket.departureName,
        destinationName: ticket.destinationName,
        refundable: ticket.refundable,
        totalPassenger: avaiableSeat
      });
    }
  }, [ticket, total]);
  
  const bookNow = async (id) => {
    try {
      const token = sessionStorage.getItem("token");

      if (token) {
        const requestedHeaders = {
          "authorization": `Bearer ${token}`,
        };
        const apiResponse = await userbookedFlights(id, flightDetails, requestedHeaders);
        if (apiResponse.status == 200) {
          console.log(apiResponse);
        } else {
          alert("ticket is already booked");
        }
      } else {
        alert("Please login");
      }
    } catch (err) {
      console.log(err);
    }
  };
  
  const date = new Date(ticket.dateOfDeparture);
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric"
  });
  
  const dateOfArrival = new Date(ticket.dateOfDestination);
  const formatted = dateOfArrival.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric"
  });

  return (
    <div style={{ backgroundColor: "#f7f9fc", minHeight: "100vh" }}>
      <UserDashNav />
      <div className="container mt-5">
        <div className="row">
          <h5 className='mb-1' style={{ fontWeight: "800", color: "#1a202c" }}>
            {ticket.departureName} to {ticket.destinationName}
          </h5>
          {
            ticket.tripType === "oneWay" ? 
              <span className='mb-4 fs-6 text-muted'>OneWay • {avaiableSeat} Passengers</span> 
              :
              <span className='mb-4 fs-6 text-muted'>Return • {avaiableSeat} Passengers</span>
          }

          <div className="row mb-5">
            <div className="col-8">
              <h2 style={{ fontStyle: "italic", fontWeight: "bold", color: "#2d3748" }}>Choose your Outbound Flight</h2>
              <h6 className='text-muted'>{departureName} to {destinationName}</h6>
            </div>
            <div className="col-4 text-end">
              <h6>Lowest total price for {avaiableSeat} passengers</h6>
              <h3 style={{ color: "#10b981", fontWeight: "bold", fontSize: "32px" }}>₹{total}</h3>
              <span className='text-muted'>Includes taxes, fees & carrier charges</span>
            </div>
          </div>

          <hr className="mb-4" />

          {/* Flight details */}
          <div className="card p-4 mb-4 flight-card">
            <div className="row align-items-center">
              <div className="col-3">
                <h3 style={{ color: '#2d3748', fontWeight: '700' }}>{departureName}</h3>
                <span className="text-muted">{formattedDate}</span>
              </div>
              <div className="col-6 text-center">
                <div className="d-flex align-items-center justify-content-center">
                  <i className="fas fa-plane-departure me-2" style={{ color: "#ff3a0d", fontSize: "20px" }}></i>
                  <div style={{
                    flexGrow: 1,
                    height: '2px',
                    background: 'linear-gradient(to right, #ff3a0d, #ffa07a)',
                    margin: '0 10px',
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '-4px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: '#ff3a0d',
                      border: '2px solid white'
                    }} />
                  </div>
                  <i className="fas fa-plane-arrival ms-2" style={{ color: "#ff3a0d", fontSize: "20px" }}></i>
                </div>
                <div className="mt-2" style={{ color: '#4a5568', fontWeight: '600' }}>
                  Direct • {ticket.flightDuration}
                </div>
              </div>
              <div className="col-3 text-end">
                <h3 style={{ color: '#2d3748', fontWeight: '700' }}>{destinationName}</h3>
                <span className="text-muted">{formatted}</span>
              </div>
            </div>
          </div>
          
          <div>
            {
              returnDate ? <div className="card p-4 mb-4 flight-card">
                <div className="row align-items-center">
                  <div className="col-3">
                    <h3 style={{ color: '#2d3748', fontWeight: '700' }}>{destinationName}</h3>
                    <span className="text-muted">{formatted}</span>
                  </div>
                  <div className="col-6 text-center">
                    <div className="d-flex align-items-center justify-content-center">
                      <i className="fas fa-plane-departure me-2" style={{ color: "#ff3a0d", fontSize: "20px" }}></i>
                      <div style={{
                        flexGrow: 1,
                        height: '2px',
                        background: 'linear-gradient(to right, #ff3a0d, #ffa07a)',
                        margin: '0 10px',
                        position: 'relative'
                      }}>
                        <div style={{
                          position: 'absolute',
                          top: '-4px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          backgroundColor: '#ff3a0d',
                          border: '2px solid white'
                        }} />
                      </div>
                      <i className="fas fa-plane-arrival ms-2" style={{ color: "#ff3a0d", fontSize: "20px" }}></i>
                    </div>
                    <div className="mt-2" style={{ color: '#4a5568', fontWeight: '600' }}>
                      Direct • {ticket.flightDuration}
                    </div>
                  </div>
                  <div className="col-3 text-end">
                    <h3 style={{ color: '#2d3748', fontWeight: '700' }}>{departureName}</h3>
                    <span className="text-muted">{formattedDate}</span>
                  </div>
                </div>
              </div> : ""
            }
          </div>
          
          {/* Book Now Button */}
          <div className="d-flex justify-content-center mt-4">
            <Button
              variant="primary"
              style={{
                height: '50px',
                width: '130px',
                borderRadius: '12px',
                background: 'linear-gradient(to right, #ff3a0d, #ff7e5f)',
                border: 'none',
                fontSize: '16px',
                fontWeight: '600',
                boxShadow: '0 4px 12px rgba(255, 58, 13, 0.3)',
                transition: 'all 0.3s ease-in-out'
              }}
              onClick={() => bookNow(ticket._id)}
            >
              Book Now
            </Button>
          </div>

          {/* PayPal Button */}
          <div className="d-flex justify-content-center mt-4">
            <PayPalScriptProvider options={{ "client-id": "AUcaPf_ix5FcJuchVEQMiu5MzJueOHKIZm2VLGGjdeWV1NhQVpVs8hkW-2_f0r7M4g-C5lvalvooLWxw" , currency: "USD"}}>
            <PayPalButtons
    createOrder={(data, actions) => {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: total.toString(),  // assuming `total` is in USD now
            currency_code: "USD"
          }
        }]
      });
    }}
    onApprove={(data, actions) => {
      return actions.order.capture().then((details) => {
        alert(`Transaction completed by ${details.payer.name.given_name}`);
      });
    }}
              />
            </PayPalScriptProvider>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookedFlight;
