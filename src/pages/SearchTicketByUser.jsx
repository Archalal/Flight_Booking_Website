import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import UserDashNav from '../component/UserDashNav';
import FlightTicket from '../component/FlightTicket';
import { Container } from 'react-bootstrap';

const SearchTicketByUser = () => {
  const [tripType, setTripType] = useState("oneWay");
  const [stopType, setStopType] = useState("direct");
  const [sortBy, setSortBy] = useState("cheapest");

  const tripChange = (e) => {
    setTripType(e.target.value);
  };

  const stopChange = (e) => {
    setStopType(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div>
      <UserDashNav />
      
      <div className="py-5" style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        marginBottom: '2rem'
      }}>
        <Container>
          <h1 className="text-center fw-bold mb-4 display-5">
            Find Your Perfect Flight
          </h1>
          <p className="text-center mb-4 fs-5">
            Discover amazing deals to destinations around the world
          </p>
        </Container>
      </div>
      
      <div className="container-fluid p-4" style={{ backgroundColor: '#f8f9fa' }}>
        {/* Trip Type Section */}
        <div className="row justify-content-center mb-4">

          <div className="col-12 col-md-8 text-center">
            <div className="d-flex align-items-center justify-content-center">
              <span className="me-3 fw-bold">Trip Type:</span>
              
              <div className="btn-group" role="group">
                <input
                  type="radio"
                  className="btn-check"
                  name="tripType"
                  id="oneWay"
                  value="oneWay"
                  checked={tripType === "oneWay"}
                  onChange={tripChange}
                />
                <label 
                  className={`btn ${tripType === 'oneWay' ? 'btn-primary' : 'btn-outline-primary'}`}
                  htmlFor="oneWay"
                  style={{
                    padding: '0.375rem 1.5rem',
                    borderTopLeftRadius: '20px',
                    borderBottomLeftRadius: '20px'
                  }}
                >
                  One Way
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="tripType"
                  id="roundTrip"
                  value="roundTrip"
                  checked={tripType === "roundTrip"}
                  onChange={tripChange}
                />
                <label 
                  className={`btn ${tripType === 'roundTrip' ? 'btn-primary' : 'btn-outline-primary'}`}
                  htmlFor="roundTrip"
                  style={{
                    padding: '0.375rem 1.5rem',
                    borderTopRightRadius: '20px',
                    borderBottomRightRadius: '20px'
                  }}
                >
                  Round Trip
                </label>
              </div>
            </div>
          </div>
        </div>

      
        <div className="row justify-content-center g-3">
          <div className="col-12 col-md-2">
            <FloatingLabel controlId="floatingInput" label="From">
              <Form.Control type="text" placeholder="From" 
               className="border-2 border-primary" />
            </FloatingLabel>
          </div>
          <div className="col-12 col-md-2">
            <FloatingLabel controlId="floatingInput" label="To">
              <Form.Control type="text" placeholder="To"  className="border-2 border-primary"/>
            </FloatingLabel>
          </div>
          <div className="col-12 col-md-2">
            <FloatingLabel controlId="floatingInput" label="Depart">
              <Form.Control type="date" placeholder="Depart" className="border-2 border-primary" />
            </FloatingLabel>
          </div>
          <div className="col-12 col-md-2">
            <FloatingLabel controlId="floatingInput" label="Return">
              <Form.Control
                type="date"
                placeholder="Return"
               className="border-2 border-primary"
                disabled={tripType === "oneWay"}
              />
            </FloatingLabel>
          </div>
          <div className="col-12 col-md-2">
            <FloatingLabel controlId="floatingSelect" label="Cabin Class">
              <Form.Select aria-label="Cabin Class" className="border-2 border-primary">
                <option value="economy">Economy</option>
                <option value="premium">Premium</option>
                <option value="business">Business</option>
              </Form.Select>
            </FloatingLabel>
          </div>
          <div className="col-12 col-md-2">
            <FloatingLabel controlId="floatingInput" label="Travellers">
              <Form.Control type="number" placeholder="Travellers" className="border-2 border-primary"/>
            </FloatingLabel>
          </div>
        </div>

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

      <div className="container">
        <div className="mt-4">
          <div className="row justify-content-between align-items-center mb-4">
            <div className="col-12 col-md-4 mb-3 mb-md-0">
              <FloatingLabel controlId="floatingSelect" label="Sort by">
                <Form.Select 
                  aria-label="Sort by"
                  value={sortBy}
                  onChange={handleSortChange}
                  className="border-2 border-primary"
                  style={{
                    borderRadius: '8px',
                    backgroundColor: '#fff',
                  }}
                >
                  <option value="cheapest">Cheapest</option>
                  <option value="best">Best</option>
                  <option value="fastest">Fastest</option>
                </Form.Select>
              </FloatingLabel>
            </div>
            <div className="col-12 col-md-4">
              <div className="d-flex align-items-center">
                <span className="me-3 fw-bold">Stops:</span>
                <div className="btn-group" role="group">
                  <input
                    type="radio"
                    className="btn-check"
                    name="stops"
                    id="direct"
                    value="direct"
                    checked={stopType === "direct"}
                    onChange={stopChange}
                  />
                  <label 
                    className={`btn ${stopType === 'direct' ? 'btn-primary' : 'btn-outline-primary'}`}
                    htmlFor="direct"
                    style={{
                      padding: '0.375rem 1rem',
                      borderTopLeftRadius: '20px',
                      borderBottomLeftRadius: '20px'
                    }}
                  >
                    Direct
                  </label>

                  <input
                    type="radio"
                    className="btn-check"
                    name="stops"
                    id="oneStop"
                    value="oneStop"
                    checked={stopType === "oneStop"}
                    onChange={stopChange}
                  />
                  <label 
                    className={`btn ${stopType === 'oneStop' ? 'btn-primary' : 'btn-outline-primary'}`}
                    htmlFor="oneStop"
                    style={{
                      padding: '0.375rem 1rem',
                      borderTopRightRadius: '20px',
                      borderBottomRightRadius: '20px'
                    }}
                  >
                    One Stop
                  </label>
                </div>
              </div>
            </div>
          </div>

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