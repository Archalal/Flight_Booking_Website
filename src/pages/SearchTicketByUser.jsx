import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import UserDashNav from '../component/UserDashNav';
import FlightTicket from '../component/FlightTicket';

const SearchTicketByUser = () => {
  const [tripType, setTripType] = useState("oneWay");

  const tripChange = (e) => {
    setTripType(e.target.value);
  };

  return (
    <div>
      <UserDashNav />

      {/* Search Section */}
      <div className="container-fluid p-4" style={{ backgroundColor: '#f8f9fa' }}>
        <h2 className="text-center fw-bold mb-4" style={{ color: '#343a40' }}>
          The Best Flight Offers From Anywhere to Everywhere
        </h2>

        {/* Trip Type Radio Buttons */}
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-md-8 text-center">
            <Form.Group controlId="tripType">
              <Form.Label className="me-3 fw-bold">Trip Type:</Form.Label>
              <Form.Check
                inline
                type="radio"
                label="One Way"
                name="tripType"
                id="oneWay"
                value="oneWay"
                checked={tripType === "oneWay"}
                onChange={tripChange}
                className="me-3"
              />
              <Form.Check
                inline
                type="radio"
                label="Round Trip"
                name="tripType"
                id="roundTrip"
                value="roundTrip"
                checked={tripType === "roundTrip"}
                onChange={tripChange}
              />
            </Form.Group>
          </div>
        </div>

        {/* Search Form */}
        <div className="row justify-content-center g-3">
          <div className="col-12 col-md-2">
            <FloatingLabel controlId="floatingInput" label="From">
              <Form.Control type="text" placeholder="From" className="custom-input" />
            </FloatingLabel>
          </div>
          <div className="col-12 col-md-2">
            <FloatingLabel controlId="floatingInput" label="To">
              <Form.Control type="text" placeholder="To" className="custom-input" />
            </FloatingLabel>
          </div>
          <div className="col-12 col-md-2">
            <FloatingLabel controlId="floatingInput" label="Depart">
              <Form.Control type="date" placeholder="Depart" className="custom-input" />
            </FloatingLabel>
          </div>
          <div className="col-12 col-md-2">
            <FloatingLabel controlId="floatingInput" label="Return">
              <Form.Control
                type="date"
                placeholder="Return"
                className="custom-input"
                disabled={tripType === "oneWay"}
              />
            </FloatingLabel>
          </div>
          <div className="col-12 col-md-2">
            <FloatingLabel controlId="floatingSelect" label="Cabin Class">
              <Form.Select aria-label="Cabin Class" className="custom-input">
                <option value="economy">Economy</option>
                <option value="premium">Premium</option>
                <option value="business">Business</option>
              </Form.Select>
            </FloatingLabel>
          </div>
          <div className="col-12 col-md-2">
            <FloatingLabel controlId="floatingInput" label="Travellers">
              <Form.Control type="number" placeholder="Travellers" className="custom-input" />
            </FloatingLabel>
          </div>
        </div>

        {/* Search Button */}
        <div className="row justify-content-center mt-4">
          <div className="col-12 col-md-2 text-center">
            <Button
              variant="primary"
              style={{
                height: '50px',
                width: '100%',
                borderRadius: '10px',
                backgroundColor: '#ff3a0d',
                border: 'none',
                fontSize: '16px',
                fontWeight: 'bold',
              }}
            >
              Search
            </Button>
          </div>
        </div>
      </div>

      <hr className="my-4" />

      {/* Filters and Flight Tickets */}

    <div className="container">
    <div className="row">
        <div className="col-4"></div>
        <div className="col-8"></div>
      </div>


      <div className=" mt-4">
        <div className="row justify-content-between align-items-center mb-4">
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <FloatingLabel controlId="floatingSelect" label="Sort by">
              <Form.Select
                style={{
                  height: '40px',
                  width: '100%',
                  borderRadius: '8px',
                  border: '1px solid #ced4da',
                  backgroundColor: '#fff',
                }}
                aria-label="Sort by"
              >
                <option value="choose" hidden>Choose</option>
                <option value="Cheapest">Cheapest</option>
                <option value="Best">Best</option>
              </Form.Select>
            </FloatingLabel>
          </div>
          <div className="col-12 col-md-4">
            <Form.Group controlId="stops">
              <Form.Label className="me-3 fw-bold">Stops:</Form.Label>
              <Form.Check
                inline
                type="radio"
                label="Direct"
                name="stops"
                id="direct"
                value="direct"
                className="me-3"
              />
              <Form.Check
                inline
                type="radio"
                label="One Stop"
                name="stops"
                id="oneStop"
                value="oneStop"
              />
            </Form.Group>
          </div>
        </div>

        {/* Flight Tickets */}
        <div className="row">
          <div className="col-12">
            <FlightTicket />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SearchTicketByUser;