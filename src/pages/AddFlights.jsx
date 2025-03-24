import React from 'react'
import FlightSidebar from './FlightSidebar'
import TotalFlight from '../component/TotalFlight'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';



const AddFlights = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
  <div className="col-10"  style={{ marginLeft: "16.65%", overflowX: "hidden" }}>
    <TotalFlight />
    <div className="row">
      <div className="col">
        <h3>Add Flights</h3>
      </div>
      <div className="col">
  <button className="round-button"
  onClick={handleShow}><i className="fa-solid fa-plus"></i></button>
  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div>
          <FloatingLabel
                    controlId="floatingSelect"
                    label="Trip Type"
                    className="mb-3"
                  >
                    <Form.Select 
                      aria-label="Trip type select"
                    value={""}
                    >
                      <option value="one-way">One Way</option>
                      <option value="return">Return</option>
                    </Form.Select>
                  </FloatingLabel>


          <FloatingLabel
        controlId="floatingInput"
        label="Name of the place"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="text" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Image of the place"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="text" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="logo"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="text" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label=" date of Departure"
        className="mb-3"
      >
        <Form.Control type="date" placeholder="Departure" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Date of Arrival"
        className="mb-3"
      >
        <Form.Control type="date" placeholder="Arrival" />
      </FloatingLabel>

      
    
      <FloatingLabel
        controlId="floatingInput"
        label="Departure place"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="DeparturePlace" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Arrival place"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="ArrivalPlace" />
      </FloatingLabel>

      <FloatingLabel
                    controlId="floatingSelect"
                    label="Cabin Class"
                    className="mb-3"
                  >
                    <Form.Select 
                      aria-label="Cabin class select"
                    value={""}
                    >
                      <option value="Business-class">Business class</option>
                      <option value="Premium-class">Premium Class</option>
                      <option value="Economy-class">Economy class</option>
                    </Form.Select>
                  </FloatingLabel>



      <FloatingLabel
        controlId="floatingInput"
        label="No of Seats"
        className="mb-3"
      >
        <Form.Control type="number" placeholder="Seats" />
      </FloatingLabel>





          </div>



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
</div>
    </div>
    
    </div></div>       
      
    </div>
  )
}

export default AddFlights
