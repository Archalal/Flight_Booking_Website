import React, { useEffect, useState } from 'react';
import UserDashNav from '../component/UserDashNav';
import { Button, Modal } from 'react-bootstrap';
import { userbookedFlights, getSingleFlight, statusChange } from '../../services/allApi';
import { useNavigate, useParams } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const BookedFlight = () => {
  const [ticket, setTicket] = useState("");
  const [total, setTotal] = useState("");
  const [isBooked, setIsBooked] = useState(false);
  const [bookinId, setBookingId] = useState("");
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const username = sessionStorage.getItem("username");
  const searchParams = new URLSearchParams(location.search);
  const { id } = useParams();

  const departureName = searchParams.get("departureName");
  const destinationName = searchParams.get("destinationName");
  const returnDate = searchParams.get("returnDate");
  const avaiableSeat = searchParams.get("avaiableSeat");

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
        const requestedHeaders = { authorization: `Bearer ${token}` };
        const apiResponse = await userbookedFlights(id, flightDetails, requestedHeaders);
        if (apiResponse.status === 201) {
          setIsBooked(true);
          setBookingId(apiResponse.data._id);
          setShowModal(true);
        } else {
          alert("Ticket is already booked, look history to processed payment");
        }
      } else {
        alert("Please login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const statusUpdate = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const reqHeaders = { authorization: `Bearer ${token}` };
      await statusChange(bookinId, "successful", reqHeaders);
    } catch (error) {
      console.error("Error updating booking status:", error);
    }
  };

  const formattedDate = new Date(ticket.dateOfDeparture).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric"
  });

  const formattedArrival = new Date(ticket.dateOfDestination).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric"
  });

  const getTimeLeft = () => {
    const departure = new Date(ticket.dateOfDeparture);
    const diff = departure - new Date();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    return hours > 0 ? `${hours} hours left` : "Departed";
  };

  return (
    <div style={{ backgroundColor: "#f0f3f8", minHeight: "100vh", width: "100vw", overflowX: "hidden" }}>
      <UserDashNav />
      <div className="container-fluid px-4 py-4" style={{ minHeight: "calc(100vh - 60px)" }}>
        <div className="bg-white p-5 rounded-4 w-100 mx-auto" style={{ fontFamily: "'Segoe UI', sans-serif" }}>
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
            <div>
              <h4 className="fw-bold text-dark">{departureName?.toUpperCase()} → {destinationName?.toUpperCase()}</h4>
              <p className="text-muted m-0">{ticket.tripType?.toUpperCase()} • {avaiableSeat} Passenger{avaiableSeat > 1 ? "s" : ""}</p>
              <span className="badge bg-warning text-dark mt-2">{getTimeLeft()}</span>
            </div>
            <div className="text-end">
              <small className="text-muted">Total Price</small>
              <h3 className="text-success fw-bold mt-1 mb-0">₹{total}</h3>
              <small className="text-muted">Incl. taxes & charges</small>
            </div>
          </div>

          <hr className="my-4" />

          <div className="row g-4">
            <div className="col-lg-6 d-flex">
              <div className="border rounded-4 p-4 bg-light w-100">
                <h5 className="mb-3 text-primary fw-semibold">Departure</h5>
                <div className="d-flex justify-content-between">
                  <div>
                    <h6 className="fw-bold">{departureName?.toUpperCase()}</h6>
                    <p className="text-muted mb-1">{formattedDate}</p>
                    <p className="text-muted">Flight: AI-202 • Economy</p>
                  </div>
                  <div className="text-center align-self-center">
                    <i className="fas fa-plane-departure text-danger fs-3" />
                    <div className="text-muted mt-1">{ticket.flightDuration}</div>
                  </div>
                  <div className="text-end">
                    <h6 className="fw-bold">{destinationName?.toUpperCase()}</h6>
                    <p className="text-muted mb-1">{formattedArrival}</p>
                  </div>
                </div>
              </div>
            </div>

            {returnDate && (
              <div className="col-lg-6 d-flex">
                <div className="border rounded-4 p-4 bg-light w-100">
                  <h5 className="mb-3 text-primary fw-semibold">Return</h5>
                  <div className="d-flex justify-content-between">
                    <div>
                      <h6 className="fw-bold">{destinationName?.toUpperCase()}</h6>
                      <p className="text-muted mb-1">{formattedArrival}</p>
                    </div>
                    <div className="text-center align-self-center">
                      <i className="fas fa-plane-arrival text-warning fs-3" />
                      <div className="text-muted mt-1">{ticket.flightDuration}</div>
                    </div>
                    <div className="text-end">
                      <h6 className="fw-bold">{departureName?.toUpperCase()}</h6>
                      <p className="text-muted mb-1">{formattedDate}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <details className="mt-4">
            <summary className="text-primary fw-semibold">Fare Breakdown</summary>
            <ul className="list-unstyled mt-2">
              <li>Base Fare: ₹{ticket.price * avaiableSeat}</li>
              <li><strong>Total: ₹{total}</strong></li>
            </ul>
          </details>

          <div className="text-center mt-5">
            <Button
              onClick={() => bookNow(ticket._id)}
              style={{
                background: 'linear-gradient(to right, #ff5f13, #ff8142)',
                border: 'none',
                padding: '12px 40px',
                borderRadius: '30px',
                fontSize: '18px',
                fontWeight: '600',
                color: '#fff',
                boxShadow: '0 4px 12px rgba(255, 95, 19, 0.25)'
              }}
            >
              Book Now
            </Button>
          </div>

          <Modal show={showModal} onHide={() => setShowModal(false)} centered>
            <Modal.Header closeButton>
              <Modal.Title>Booking Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>You can now proceed to payment using PayPal.</p>
              <PayPalScriptProvider options={{
                "client-id": "AUcaPf_ix5FcJuchVEQMiu5MzJueOHKIZm2VLGGjdeWV1NhQVpVs8hkW-2_f0r7M4g-C5lvalvooLWxw",
                currency: "USD"
              }}>
                <div className="d-flex justify-content-center">
                  <PayPalButtons
                    style={{ layout: 'horizontal', height: 45 }}
                    createOrder={(data, actions) => actions.order.create({
                      purchase_units: [{ amount: { value: total.toString(), currency_code: "USD" } }]
                    })}
                    onApprove={(data, actions) =>
                      actions.order.capture().then((details) => {
                        alert(`Transaction completed by ${details.payer.name.given_name}`);
                        statusUpdate();
                        setTimeout(() => navigate('/userdashboard'), 1000);
                      })
                    }
                  />
                </div>
              </PayPalScriptProvider>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default BookedFlight;
