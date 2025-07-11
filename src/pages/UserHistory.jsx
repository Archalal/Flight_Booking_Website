import React, { useState, useEffect } from 'react';
import UserDashNav from '../component/UserDashNav';
import { bookedTicket, cancelTicket, statusChange } from '../../services/allApi';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'; 
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './UserHistory.css'; // Add a CSS file for modern styles

const UserHistory = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeaders = { "Authorization": `Bearer ${token}` };
      try {
        const apiResponse = await bookedTicket(reqHeaders);
        if (apiResponse.status === 200) {
          setData(apiResponse.data);
        } else {
          console.error("Something went wrong");
        }
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    } else {
      console.log("Please login");
    }
  };

  const cancellationTicket = async (id) => {
    try {
      const token = sessionStorage.getItem("token");
      const reqHeaders = { "authorization": `Bearer ${token}` };
      const reqBody = "requested";
      const apiResponse = await cancelTicket(id, reqBody, reqHeaders);
      if (apiResponse.status === 200) fetchTickets();
    } catch (err) {
      alert("Something went wrong", err);
    }
  };

  const statusUpdate = async (id) => {
    try {
      const token = sessionStorage.getItem("token");
      const reqHeaders = { "authorization": `Bearer ${token}` };
      await statusChange(id, "successful", reqHeaders);
      fetchTickets();
    } catch (error) {
      console.error("Error updating booking status:", error);
    }
  };

  const handleDownload = (ticket) => {
    const doc = new jsPDF();
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.setTextColor(33, 150, 243);
    doc.text('FLIGHT TICKET', 105, 20, null, null, 'center');
    doc.setFontSize(12);
    doc.text('Air Asia', 105, 40, null, null, 'center');

    doc.setFontSize(14);
    doc.setTextColor(0);
    doc.text('PASSENGER INFORMATION', 20, 60);
    doc.setFontSize(12);
    doc.text(`Name: ${ticket.username || 'Passenger'}`, 20, 70);
    doc.text(`Booking ID: ${ticket._id}`, 20, 80);
    doc.text(`Flight: ${ticket.flightId?.flightNumber || 'N/A'}`, 20, 90);
    doc.text(`From: ${ticket.flightId?.departureName || 'N/A'}`, 20, 100);
    doc.text(`To: ${ticket.flightId?.destinationName || 'N/A'}`, 20, 110);
    doc.text(`Date: ${ticket.flightId?.dateOfDeparture || '2023-11-15'}`, 20, 120);
    doc.text(`Time: ${ticket.flightId?.timeOfDeparture || '08:30 AM'}`, 20, 130);
    doc.text(`Price: ₹${ticket.price || '249.99'}`, 20, 140);
    doc.save(`ticket-${ticket._id}.pdf`);
  };

  return (
    <div>
      <UserDashNav />
      <div className="history-container">
        <h2 className="history-heading">Flight Booking History</h2>
        <p className="history-note">Note: The cancellation option is available only for 24hrs. Happy journey!</p>
        <div className="table-container">
          <table className="modern-table">
            <thead>
              <tr>
                <th>Flight</th>
                <th>Route</th>
                <th>Date & Time</th>
                <th>Status</th>
                <th>Price</th>
                <th>Download</th>
                <th>Cancel</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((ticket, index) => (
                <tr key={index}>
                  <td>{ticket.flightId?.flightNumber}</td>
                  <td>
                    <div>{ticket.flightId?.departureName}</div>
                    <div className="arrow">→</div>
                    <div>{ticket.flightId?.destinationName}</div>
                  </td>
                  <td>
                    <div>{ticket.flightId?.dateOfDeparture}</div>
                    <div className="subtext">{ticket.flightId?.timeOfDeparture}</div>
                  </td>
                  <td>
                    <span className={`status-badge ${ticket.status === 'successful' ? 'completed' : 'pending'}`}>
                      {ticket.status === 'successful' ? 'Completed' : 'Pending'}
                    </span>
                  </td>
                  <td>₹{ticket.price}</td>
                  <td>
                    {ticket.status === 'successful' ? (
                      <button className="btn-download" onClick={() => handleDownload(ticket)}>Download</button>
                    ) : (<span className="subtext">Can't Download</span>)}
                  </td>
                  <td>
                    {ticket.cancellationStatus === 'requested' ? (
                      <button className="btn-requested">Requested</button>
                    ) : ticket.cancellationStatus === 'none' && ticket.status !== 'pending' ? (
                      <button className="btn-cancel" onClick={() => cancellationTicket(ticket._id)}>Cancel</button>
                    ) : ticket.cancellationStatus === 'approved' ? (
                      <span className="status approved">Approved</span>
                    ) : ticket.cancellationStatus === 'rejected' ? (
                      <span className="status rejected">Rejected</span>
                    ) : ticket.cancellationStatus === 'expired' ? (
                      <span className="status expired">Expired</span>
                    ) : (<span className="status">Payment Not Done</span>)}
                  </td>
                  <td>
                    {ticket.status === 'pending' && ticket.cancellationStatus === 'none' ? (
                      <div className="paypal-wrapper">
                        <PayPalScriptProvider options={{ "client-id": "AUcaPf_ix5FcJuchVEQMiu5MzJueOHKIZm2VLGGjdeWV1NhQVpVs8hkW-2_f0r7M4g-C5lvalvooLWxw", currency: "USD" }}>
                          <PayPalButtons
                            createOrder={(data, actions) => actions.order.create({
                              purchase_units: [{ amount: { value: (ticket.totalPassenger * ticket.price).toString() } }]
                            })}
                            onApprove={(data, actions) => actions.order.capture().then(details => {
                              alert(`Transaction completed by ${details.payer.name.given_name}`);
                              statusUpdate(ticket._id);
                            })}
                          />
                        </PayPalScriptProvider>
                      </div>
                    ) : (<span className="subtext">Completed</span>)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserHistory;
