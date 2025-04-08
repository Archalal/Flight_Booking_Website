import React from "react";
import { Button, Modal, FloatingLabel, Form } from "react-bootstrap";
import { useState } from "react";

const FlightAdded = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    tripType: "one-way",
    placeName: "",
    placeImage: "",
    logo: "",
    departureDate: "",
    arrivalDate: "",
    departurePlace: "",
    arrivalPlace: "",
    cabinClass: "Business-class",
    seats: "",
    price: ""
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    handleClose();
  };

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
        <Form onSubmit={handleSubmit}>
          <Modal.Body className="pt-0">
            <div className="row">
              <div className="col-md-6">
                <FloatingLabel controlId="tripType" label="Trip Type" className="mb-3">
                  <Form.Select 
                    name="tripType"
                    value={formData.tripType}
                    onChange={handleChange}
                    className="border-2"
                  >
                    <option value="one-way">One Way</option>
                    <option value="return">Return</option>
                  </Form.Select>
                </FloatingLabel>

                <FloatingLabel controlId="placeName" label="Name of the place" className="mb-3">
                  <Form.Control 
                    type="text" 
                    name="placeName"
                    value={formData.placeName}
                    onChange={handleChange}
                    placeholder="Enter place name" 
                  />
                </FloatingLabel>

                <FloatingLabel controlId="placeImage" label="Image URL of the place" className="mb-3">
                  <Form.Control 
                    type="text" 
                    name="placeImage"
                    value={formData.placeImage}
                    onChange={handleChange}
                    placeholder="Enter image URL" 
                  />
                </FloatingLabel>

                <FloatingLabel controlId="logo" label="Airline Logo URL" className="mb-3">
                  <Form.Control 
                    type="text" 
                    name="logo"
                    value={formData.logo}
                    onChange={handleChange}
                    placeholder="Enter logo URL" 
                  />
                </FloatingLabel>
              </div>

              <div className="col-md-6">
                <FloatingLabel controlId="departureDate" label="Date of Departure" className="mb-3">
                  <Form.Control 
                    type="date" 
                    name="departureDate"
                    value={formData.departureDate}
                    onChange={handleChange}
                  />
                </FloatingLabel>

                {formData.tripType === 'return' && (
                  <FloatingLabel controlId="arrivalDate" label="Date of Arrival" className="mb-3">
                    <Form.Control 
                      type="date" 
                      name="arrivalDate"
                      value={formData.arrivalDate}
                      onChange={handleChange}
                    />
                  </FloatingLabel>
                )}

                <FloatingLabel controlId="departurePlace" label="Departure place" className="mb-3">
                  <Form.Control 
                    type="text" 
                    name="departurePlace"
                    value={formData.departurePlace}
                    onChange={handleChange}
                    placeholder="Enter departure place" 
                  />
                </FloatingLabel>

                <FloatingLabel controlId="arrivalPlace" label="Arrival place" className="mb-3">
                  <Form.Control 
                    type="text" 
                    name="arrivalPlace"
                    value={formData.arrivalPlace}
                    onChange={handleChange}
                    placeholder="Enter arrival place" 
                  />
                </FloatingLabel>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <FloatingLabel controlId="cabinClass" label="Cabin Class" className="mb-3">
                  <Form.Select 
                    name="cabinClass"
                    value={formData.cabinClass}
                    onChange={handleChange}
                    className="border-2"
                  >
                    <option value="Business-class">Business class</option>
                    <option value="Premium-class">Premium Class</option>
                    <option value="Economy-class">Economy class</option>
                  </Form.Select>
                </FloatingLabel>
              </div>
              <div className="col-md-3">
                <FloatingLabel controlId="seats" label="No of Seats" className="mb-3">
                  <Form.Control 
                    type="number" 
                    name="seats"
                    value={formData.seats}
                    onChange={handleChange}
                    placeholder="0" 
                    min="1"
                  />
                </FloatingLabel>
              </div>
              <div className="col-md-3">
                <FloatingLabel controlId="price" label="Price ($)" className="mb-3">
                  <Form.Control 
                    type="number" 
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="0.00" 
                    min="0"
                    step="0.01"
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