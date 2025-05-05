import React, { useState, useEffect } from 'react';
import UserDashNav from '../component/UserDashNav';
import { bookedTicket, cancelTicket, statusChange } from '../../services/allApi';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'; // PayPal import

import jsPDF from 'jspdf';


const UserHistory = () => {
  const [data, setData] = useState([]);
  console.log(data);
  // const[isCancel,setCancel]=useState(false)
  

  useEffect(() => {
    fetchTickets();
  }, []);


  const fetchTickets = async () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeaders = {
        "Authorization": `Bearer ${token}`,
      };
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


  const cancellationTicket=async(id)=>{
    try{
      const token=sessionStorage.getItem("token")
     const reqHeaders={
        "authorization":`Bearer ${token}`
      }
      console.log(reqHeaders);
      
      const reqBody="requested"
      const apiResponse=await cancelTicket(id,reqBody,reqHeaders)
      
      if(apiResponse.status==200){
       
        fetchTickets()
        console.log(apiResponse.data);
        
      }else{
        console.log("api call err");
        
      }
      

      

    }catch(err){
      alert("Something went wrong",err)
    }
  }
  const statusUpdate=async(id)=>{
    console.log(id);
    
   
      try {
       
        const token=sessionStorage.getItem("token")
        const reqHeaders={
          "authorization":`Bearer ${token}`
        }
       const apiResponse=  await statusChange(id, "successful",reqHeaders);
       
       fetchTickets()
       console.log(apiResponse);
      
       
      
      } catch (error) {
        console.error("Error updating booking status:", error);
        
      }
     
    }
  
  

  const handleDownload = (ticket) => {
    const doc = new jsPDF();
    
    // Set styles
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.setTextColor(33, 150, 243); // Blue color
    doc.text('FLIGHT TICKET', 105, 20, null, null, 'center');
    
    // Add airline logo placeholder
    doc.setFillColor(240, 240, 240);
    doc.rect(20, 30, 170, 15, 'F');
    doc.setFontSize(12);
    doc.setTextColor(100);
    doc.text('Air Asia', 105, 40, null, null, 'center');
    
    // Passenger info section
    doc.setFontSize(14);
    doc.setTextColor(0);
    doc.text('PASSENGER INFORMATION', 20, 60);
    doc.setDrawColor(200);
    doc.line(20, 62, 80, 62);
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text(`Name: ${ticket.username || 'Passenger'}`, 20, 70);
    doc.text(`Booking ID: ${ticket._id}`, 20, 80);
    
    // Flight details section
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('FLIGHT DETAILS', 20, 100);
    doc.line(20, 102, 70, 102);
    
    doc.setFont('helvetica', 'normal');
    doc.text(`Flight: ${ticket.flightId?.flightNumber || 'N/A'}`, 20, 110);
    doc.text(`From: ${ticket.flightId?.departureName || 'N/A'}`, 20, 120);
    doc.text(`To: ${ticket.flightId?.destinationName || 'N/A'}`, 20, 130);
    doc.text(`Date: ${ticket.flightId?.dateOfDeparture || '2023-11-15'}`, 20, 140);
    doc.text(`Time: ${ticket.flightId?.timeOfDeparture || '08:30 AM'}`, 20, 150);
    
    // Price and status section
    doc.setFont('helvetica', 'bold');
    doc.text(`Price: ₹${ticket.price || '249.99'}`, 120, 110);
    doc.setFontSize(12);
    doc.setTextColor(255);
    doc.setFillColor(76, 175, 80); // Green color
    doc.rect(120, 120, 30, 10, 'F');
    doc.text('CONFIRMED', 135, 127, null, null, 'center');
    
    // Footer
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text('Thank you for flying with us!', 105, 180, null, null, 'center');
    doc.text('Safe travels!', 105, 185, null, null, 'center');
    
    // Save the PDF
    doc.save(`ticket-${ticket._id}.pdf`);
  };

  return (
    <div>
      <UserDashNav />
      <div style={{  padding: '20px' }}>
        <h1 style={{ marginBottom: '30px', color: '#333',textAlign:"center" }}>Flight Booking History</h1>
        <h6>Note:The Cancellation Option avaiable only for 24hrs! happy Journey</h6>
        <div
          style={{
            overflowX: 'auto',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            borderRadius: '8px',
          }}
        >
          <table style={{ width: '100%', backgroundColor: 'white' }}>
            <thead>
              <tr
                style={{
                  backgroundColor: '#f8f9fa',
                  borderBottom: '2px solid #e9ecef',
                }}
              >
                <th style={{ padding: '16px', textAlign: 'left' }}>Flight</th>
                <th style={{ padding: '16px', textAlign: 'left' }}>Route</th>
                <th style={{ padding: '16px', textAlign: 'left' }}>Date & Time</th>
                <th style={{ padding: '16px', textAlign: 'left' }}>Status</th>
                <th style={{ padding: '16px', textAlign: 'left' }}>Price</th>
                <th style={{ padding: '16px', textAlign: 'left' }}>Ticket Download</th>
                <th style={{ padding: '16px', textAlign: 'left' }}>Cancellation</th>
                <th style={{ padding: '16px', textAlign: 'left' }}>Payment</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((ticket, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #e9ecef' }}>
                  <td style={{ padding: '16px' }}>
                    <div style={{ fontWeight: '600' }}>
                      {ticket.flightId?.flightNumber}
                    </div>
                  </td>
                  <td style={{ padding: '16px' }}>
                    <div>{ticket.flightId?.departureName}</div>
                    <div style={{ color: '#6c757d' }}>→</div>
                    <div>{ticket.flightId?.destinationName}</div>
                  </td>
                  <td style={{ padding: '16px' }}>
                    <div>2023-11-15</div>
                    <div style={{ color: '#6c757d' }}>08:30 AM</div>
                  </td>
                  <td style={{ padding: '16px' }}>
                   {
                    ticket.status=="successful"?
                    <span
                    style={{
                      padding: '4px 8px',
                      borderRadius: '12px',
                      backgroundColor: '#e8f5e9',
                      color: '#2e7d32',
                      fontSize: '14px',
                    }}
                  >
                    Completed
                  </span>:
                   <span
                   style={{
                     padding: '4px 8px',
                     borderRadius: '12px',
                     backgroundColor: 'red',
                     color: 'white',
                     fontSize: '14px',
                   }}
                 >
                   pending
                 </span>
                   }
                  </td>
                  <td style={{ padding: '16px', fontWeight: '600' }}>
                    ₹{ticket.price}
                  </td>
                  <td style={{ padding: '16px' }}>
                    {
                      ticket.status=="successful"?
                      <button
                      onClick={() => handleDownload(ticket)}
                      style={{
                        padding: '6px 12px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                      }}
                    >
                      Download Ticket
                    </button>:<p>Cant download Ticket</p>
                    }
                   
                  </td>

                  <td style={{ padding: '16px' }}>
                    
                    {
                      ticket.cancellationStatus=="requested"?
                      <button
                     
                      style={{
                        padding: '6px 12px',
                        backgroundColor: 'yellow',
                        color: 'black',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                      }}

                      
                    >
                      Requested
                    </button>
                      
                      :  ticket.cancellationStatus=="none" && ticket.status!="pending"?
                      <button
                     
                      style={{
                        padding: '6px 12px',
                        backgroundColor: 'red',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                      }}
                      onClick={()=>cancellationTicket(ticket._id)}

                      
                    >
                      Cancelation
                    </button>: ticket.cancellationStatus=="approved"?
                    <p style={{
                    
                      color: 'orange',
                      fontWeight: 'bold'
                    }}>
                      Approved
                    </p>
                    : ticket.cancellationStatus=="approved"?<p
                    style={{
                    
                      color: 'red',
                      fontWeight: 'bold'
                    }}
                    >Rejected</p>
                    :ticket.cancellationStatus=="expired"?
                    <p
                    style={{
                    
                      color: 'orange',
                      fontWeight: 'bold'
                    }}
                    >Sorry you cant Cancel the ticket</p>
                    :ticket.cancellationStatus=="rejected"?
                    <p
                    style={{
                    
                      color: 'red',
                      fontWeight: 'bold'
                    }}
                    >Rejected </p>
                    :
                    <p
                    style={{
                    
                      color: 'orange',
                      fontWeight: 'bold'
                    }}
                    >Payment Not Done </p>
                    
                    }
                  </td>
                  <td>  
                 {
                   ticket.status=="pending"&&ticket.cancellationStatus=="none"? 
                   <div className="d-flex justify-content-center mt-4">
                            <PayPalScriptProvider options={{ "client-id": "AUcaPf_ix5FcJuchVEQMiu5MzJueOHKIZm2VLGGjdeWV1NhQVpVs8hkW-2_f0r7M4g-C5lvalvooLWxw" , currency: "USD"}}>
                            <PayPalButtons
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units: [{
                          amount: {
                            value: (ticket.totalPassenger*ticket.price).toString(),  // assuming `total` is in USD now
                            currency_code: "USD"
                          }
                        }]
                      });
                    }}
                    onApprove={(data, actions) => {
                      return actions.order.capture().then((details) => {
                        alert(`Transaction completed by ${details.payer.name.given_name}`);
                        statusUpdate(ticket._id)
                    
    
                      });
                    }}
                              />
                            </PayPalScriptProvider>
                          </div>:<p>Payment completed</p>
                 }

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
