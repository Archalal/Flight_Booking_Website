import React, { useContext, useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import baseURL from '../../services/baseURL';
import { updateFlight } from '../../services/allApi';
import { editFlight } from '../component/Context/FlightContext';


const FlightEdit = ({ flights }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const{flightUpdate,setFlightUpdate}=useContext(editFlight)
  
  
  const formatDate = (date) => {
    if (!date) return '';
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  console.log("hi",flights);
  

  const [flightData, setFlightData] = useState({
    flightId:flights._id,
    tripType: flights.tripType|| 'one-way' ,
    airlineName: flights.airlineName ,
    flightNumber: flights.flightNumber ,
    departureAirportCode: flights.departureAirportCode ,
    departureName: flights.departureName  ,
    dateOfDeparture: formatDate(flights.dateOfDeparture) ,
    timeOfDeparture: flights.timeOfDeparture ,
    destinationAirportCode: flights.destinationAirportCode ,
    destinationImg: flights.destinationImg,
    destinationName: flights.destinationName ,
    dateOfDestination: formatDate(flights.dateOfDestination),
    timeOfDestination: flights.timeOfDestination ,
    flightDuration: flights.flightDuration ,
    refundable: flights.refundable,
    cabinClass: flights.cabinClass ,
    price: flights.price ,
    returnDate: flights.returnDate ,
    returnTime: flights.returnTime,
    avaiableSeat: flights.avaiableSeat ,
    stop: flights.stop
  });
  console.log(flights.tripType);
  

 const saveFlights=async(e)=>{
          e.preventDefault(); 
      const token=sessionStorage.getItem("token")
      if(token){
        
            
            const reqHeaders={
              "authorization":`Bearer ${token}`,
            
            }
            try{
              const apiResponse=await updateFlight(flightData.flightId,flightData,reqHeaders)
              console.log(apiResponse.data);
              
              
            if(apiResponse.status==200){
              console.log(apiResponse.data);
              setFlightUpdate(apiResponse.data)
              alert("Flight  updated Successfully")
              handleClose()
              
            }else{
              alert("something went wrong")
            }
              

            }catch(err){
              console.log(err);
              
            }
          
           
          
          

      }else{
        alert("please login")
      }

    }





  return (
    <div>
      <button
        onClick={handleShow}
        style={{
          backgroundColor: '#ff5a1d',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          padding: '8px 16px',
          fontSize: '0.9rem',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
      >
        Edit
      </button>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton className="border-0 pb-0">
          <Modal.Title className="w-100">
            <h4 className="text-center mb-3" style={{ color: '#2d3748', fontWeight: '600' }}>
              Edit Flight Details
            </h4>
          </Modal.Title>
        </Modal.Header>

        <Form>
          <Modal.Body className="pt-0">
            <div className="row">
              <div className="col-md-6">
                <label>
                  <input
                    type="file"
                    style={{ display: 'none' }}
                    onChange={(e) => setFlightData({ ...flightData, destinationImg: e.target.files[0] })}
                  />
                  <img
                    src={`${baseURL}/uploads/${flights.destinationImg}`}
                    alt="image"
                    className="img-fluid"
                  />
                </label>

                <FloatingLabel controlId="tripType" label="Trip Type" className="mb-3">
                  <Form.Select
                    value={flightData.tripType}
                    onChange={(e) => setFlightData({ ...flightData, tripType: e.target.value })}
                  >
                    <option value="one-way">One Way</option>
                    <option value="return">Return</option>
                  </Form.Select>
                </FloatingLabel>

                <FloatingLabel controlId="airlineName" label="Airline Name" className="mb-3">
                  <Form.Control
                    type="text"
                    value={flightData.airlineName}
                    onChange={(e) => setFlightData({ ...flightData, airlineName: e.target.value })}
                  />
                </FloatingLabel>

                <Form.Control
                type="text"
                value={flightData.flightNumber}
                onChange={(e) => setFlightData({ ...flightData, flightNumber: e.target.value })}
                required
              />

              </div>

              <div className="col-md-6">
              <FloatingLabel controlId="departureDate" label="Date of Departure" className="mb-3">
                <Form.Control
                  type="date"
                  value={flightData.dateOfDeparture}
                  onChange={(e) => setFlightData({ ...flightData, dateOfDeparture: e.target.value })}
                />
              </FloatingLabel>


                <FloatingLabel controlId="departureTime" label="Departure Time" className="mb-3">
                  <Form.Control
                    type="time"
                    value={flightData.timeOfDeparture}
                    onChange={(e) => setFlightData({ ...flightData, timeOfDeparture: e.target.value })}
                  />
                </FloatingLabel>

                <FloatingLabel controlId="destinationTime" label="Destination Time" className="mb-3">
                  <Form.Control
                    type="time"
                    value={flightData.timeOfDestination}
                    onChange={(e) => setFlightData({ ...flightData, timeOfDestination: e.target.value })}
                  />
                </FloatingLabel>

                <FloatingLabel controlId="dateOfDestination" label="Destination Date" className="mb-3">
                  <Form.Control
                    type="date"
                    value={flightData.dateOfDestination}
                    onChange={(e) => setFlightData({ ...flightData, dateOfDestination: e.target.value })}
                  />
                </FloatingLabel>

                <FloatingLabel controlId="flightDuration" label="Flight Duration (hours)" className="mb-3">
                  <Form.Control
                    type="number"
                    min="0"
                    step="0.1"
                    value={flightData.flightDuration}
                    onChange={(e) => setFlightData({ ...flightData, flightDuration: e.target.value })}
                  />
                </FloatingLabel>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <FloatingLabel controlId="departureAirport" label="Departure Airport Code" className="mb-3">
                  <Form.Control
                    type="text"
                    value={flightData.departureAirportCode}
                    onChange={(e) => setFlightData({ ...flightData, departureAirportCode: e.target.value })}
                  />
                </FloatingLabel>

                <FloatingLabel controlId="departureCity" label="Departure City" className="mb-3">
                  <Form.Control
                    type="text"
                    value={flightData.departureName}
                    onChange={(e) => setFlightData({ ...flightData, departureName: e.target.value })}
                  />
                </FloatingLabel>
              </div>

              <div className="col-md-6">
                <FloatingLabel controlId="destinationAirport" label="Destination Airport Code" className="mb-3">
                  <Form.Control
                    type="text"
                    value={flightData.destinationAirportCode}
                    onChange={(e) => setFlightData({ ...flightData, destinationAirportCode: e.target.value })}
                  />
                </FloatingLabel>

                <FloatingLabel controlId="destinationCity" label="Destination City" className="mb-3">
                  <Form.Control
                    type="text"
                    value={flightData.destinationName}
                    onChange={(e) => setFlightData({ ...flightData, destinationName: e.target.value })}
                  />
                </FloatingLabel>
              </div>
            </div>

            {flightData.tripType === 'return' && (
              <div className="row">
                <div className="col-md-6">
                  <FloatingLabel controlId="returnDate" label="Return Date" className="mb-3">
                    <Form.Control
                      type="date"
                      value={flightData.returnDate}
                      onChange={(e) => setFlightData({ ...flightData, returnDate: e.target.value })}
                    />
                  </FloatingLabel>
                </div>
                <div className="col-md-6">
                  <FloatingLabel controlId="returnTime" label="Return Time" className="mb-3">
                    <Form.Control
                      type="time"
                      value={flightData.returnTime}
                      onChange={(e) => setFlightData({ ...flightData, returnTime: e.target.value })}
                    />
                  </FloatingLabel>
                </div>
              </div>
            )}

            <div className="row mt-1">
              <div className="col-md-3">
                <FloatingLabel controlId="cabinClass" label="Cabin Class" className="mb-3">
                  <Form.Select
                    value={flightData.cabinClass}
                    onChange={(e) => setFlightData({ ...flightData, cabinClass: e.target.value })}
                  >
                    <option value="business">Business</option>
                    <option value="premium">Premium Economy</option>
                    <option value="economy">Economy</option>
                  </Form.Select>
                </FloatingLabel>
              </div>

              <div className="col-md-3">
                <FloatingLabel controlId="stop" label="Stop" className="mb-3">
                  <Form.Select
                    value={flightData.stop}
                    onChange={(e) => setFlightData({ ...flightData, stop: e.target.value })}
                  >
                    <option value="direct">Direct</option>
                    <option value="oneStop">One Stop</option>
                  </Form.Select>
                </FloatingLabel>
              </div>

              <div className="col-md-3">
                <FloatingLabel controlId="refundable" label="Refundable" className="mb-3">
                  <Form.Select
                    value={flightData.refundable}
                    onChange={(e) => setFlightData({ ...flightData, refundable: e.target.value })}
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </Form.Select>
                </FloatingLabel>
              </div>

              <div className="col-md-3">
                <FloatingLabel controlId="price" label="Price ($)" className="mb-3">
                  <Form.Control
                    type="number"
                    value={flightData.price}
                    onChange={(e) => setFlightData({ ...flightData, price: e.target.value })}
                  />
                </FloatingLabel>
              </div>

              <div className="col-md-3">
                <FloatingLabel controlId="seats" label="Available Seats" className="mb-3">
                  <Form.Control
                    type="number"
                    value={flightData.avaiableSeat}
                    onChange={(e) => setFlightData({ ...flightData, avaiableSeat: e.target.value })}
                  />
                </FloatingLabel>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer className="border-0">
            <Button variant="outline-secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit"
               onClick={saveFlights}>
            
              Save Flight
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default FlightEdit;
