import React, { useState } from "react";
import { Button, Modal, FloatingLabel, Form } from "react-bootstrap";

const FlightAdded = () => {
  const [show, setShow] = useState(false);
  const [tripType, setTripType] = useState("one-way");
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <div className="container-fluid p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="m-0" style={{ fontWeight: '600', color: '#2d3748' }}>
          <i className="fas fa-plane me-2 text-primary"></i> Flight Management
        </h3>
        <Button 
          variant="primary" 
          onClick={handleShow}
          className="rounded-pill px-4"
          style={{ boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}
        >
          <i className="fas fa-plus me-2"></i> Add New Flight
        </Button>
      </div>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton className="border-0 pb-0">
          <Modal.Title className="w-100">
            <h4 className="text-center mb-3" style={{ color: '#2d3748', fontWeight: '600' }}>
              <i className="fas fa-plane-circle-plus me-2 text-primary"></i>
              Add New Flight Details
            </h4>
          </Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body className="pt-0">
            <div className="row">
              <div className="col-md-6">
                <FloatingLabel controlId="tripType" label="Trip Type" className="mb-3">
                  <Form.Select 
                    name="tripType"
                    className="border-2"
                    value={tripType}
                    onChange={((e)=>setTripType(e.target.value))}
                  >
                    <option value="one-way">One Way</option>
                    <option value="return">Return</option>
                  </Form.Select>
                </FloatingLabel>

                <FloatingLabel controlId="airlineName" label="Airline Name" className="mb-3">
                  <Form.Control 
                    type="text" 
                    name="airlineName"
                    placeholder="Enter airline name" 
                    required
                  />
                </FloatingLabel>

                <FloatingLabel controlId="flightNumber" label="Flight Number" className="mb-3">
                  <Form.Control 
                    type="text" 
                    name="flightNumber"
                    placeholder="Enter flight number" 
                    required
                  />
                </FloatingLabel>

                <FloatingLabel controlId="placeName" label="Destination Name" className="mb-3">
                  <Form.Control 
                    type="text" 
                    name="placeName"
                    placeholder="Enter destination name" 
                    required
                  />
                </FloatingLabel>
              </div>

              <div className="col-md-6">
                <FloatingLabel controlId="departureDate" label="Date of Departure" className="mb-3">
                  <Form.Control 
                    type="date" 
                    name="departureDate"
                    required
                  />
                </FloatingLabel>

                <FloatingLabel controlId="departureTime" label="Departure Time" className="mb-3">
                  <Form.Control 
                    type="time" 
                    name="departureTime"
                    required
                  />
                </FloatingLabel>

                {tripType === "return" && (
                  <>
                    <FloatingLabel controlId="arrivalDate" label="Return Date" className="mb-3">
                      <Form.Control 
                        type="date" 
                        name="arrivalDate"
                        required
                      />
                    </FloatingLabel>
                    <FloatingLabel controlId="arrivalTime" label="Return Time" className="mb-3">
                      <Form.Control 
                        type="time" 
                        name="arrivalTime"
                        required
                      />
                    </FloatingLabel>
                  </>
                )}

                <FloatingLabel controlId="flightDuration" label="Flight Duration (hours)" className="mb-3">
                  <Form.Control 
                    type="number" 
                    name="flightDuration"
                    placeholder="Enter flight duration" 
                    min="0"
                    step="0.1"
                  />
                </FloatingLabel>
              </div>
            </div>

            {/* Rest of your form remains the same */}
            <div className="row">
              <div className="col-md-6">
                <FloatingLabel controlId="departurePlace" label="Departure City" className="mb-3">
                  <Form.Control 
                    type="text" 
                    name="departurePlace"
                    placeholder="Enter departure city" 
                    required
                  />
                </FloatingLabel>

                <FloatingLabel controlId="departureAirport" label="Departure Airport Code" className="mb-3">
                  <Form.Control 
                    type="text" 
                    name="departureAirport"
                    placeholder="e.g., JFK" 
                    required
                  />
                </FloatingLabel>

                <FloatingLabel controlId="placeImage" label="Destination Image URL" className="mb-3">
                  <Form.Control 
                    type="url" 
                    name="placeImage"
                    placeholder="Enter image URL" 
                  />
                </FloatingLabel>

                <FloatingLabel controlId="logo" label="Airline Logo URL" className="mb-3">
                  <Form.Control 
                    type="url" 
                    name="logo"
                    placeholder="Enter logo URL" 
                  />
                </FloatingLabel>
              </div>

              <div className="col-md-6">
                <FloatingLabel controlId="arrivalPlace" label="Arrival City" className="mb-3">
                  <Form.Control 
                    type="text" 
                    name="arrivalPlace"
                    placeholder="Enter arrival city" 
                    required
                  />
                </FloatingLabel>

                <FloatingLabel controlId="arrivalAirport" label="Arrival Airport Code" className="mb-3">
                  <Form.Control 
                    type="text" 
                    name="arrivalAirport"
                    placeholder="e.g., LAX" 
                    required
                  />
                </FloatingLabel>

                <FloatingLabel controlId="baggageAllowance" label="Baggage Allowance" className="mb-3">
                  <Form.Control 
                    type="text" 
                    name="baggageAllowance"
                    placeholder="e.g., 1 x 23kg" 
                  />
                </FloatingLabel>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <FloatingLabel controlId="refundable" label="Refundable">
                      <Form.Select name="refundable">
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                      </Form.Select>
                    </FloatingLabel>
                  </div>
                  <div className="col-md-6">
                    <FloatingLabel controlId="mealsIncluded" label="Meals Included">
                      <Form.Select name="mealsIncluded">
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                      </Form.Select>
                    </FloatingLabel>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <FloatingLabel controlId="cabinClass" label="Cabin Class" className="mb-3">
                  <Form.Select 
                    name="cabinClass"
                    className="border-2"
                  >
                    <option value="Business-class">Business class</option>
                    <option value="Premium-class">Premium Economy</option>
                    <option value="Economy-class">Economy class</option>
                    <option value="First-class">First class</option>
                  </Form.Select>
                </FloatingLabel>
              </div>
              <div className="col-md-3">
                <FloatingLabel controlId="seats" label="Available Seats" className="mb-3">
                  <Form.Control 
                    type="number" 
                    name="seats"
                    placeholder="0" 
                    min="1"
                    required
                  />
                </FloatingLabel>
              </div>
              <div className="col-md-3">
                <FloatingLabel controlId="price" label="Price ($)" className="mb-3">
                  <Form.Control 
                    type="number" 
                    name="price"
                    placeholder="0.00" 
                    min="0"
                    step="0.01"
                    required
                  />
                </FloatingLabel>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="border-0">
            <Button variant="outline-secondary" onClick={handleClose} className="px-4">
              Cancel
            </Button>
            <Button variant="primary" type="submit" className="px-4">
              Save Flight
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default FlightAdded;