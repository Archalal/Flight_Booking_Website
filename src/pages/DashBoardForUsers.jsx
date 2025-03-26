import React, { useState } from 'react';
import UserDashNav from '../component/UserDashNav';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import Footer from '../component/Footer';

const DashBoardForUsers = () => {
  const navigate = useNavigate();
  const [tripType, setTripType] = useState("oneWay");

  const tripChange = (type) => {
    setTripType(type);
  };

  const onbtnClick = () => {
    navigate('/searchticketbyuser');
  };

  return (
    <div>
      <div>
        <UserDashNav />
      </div>
      <div className="row rounded shadow p-4" style={{ backgroundColor: '#f8f9fa', margin: '20px' }}>
        <div className="col-8">
          <div className="row text-center" style={{ height: '430px' }}>
            <h2 className="fw-bold fs-3" style={{ marginTop: '29px', color: '#343a40' }}>
              The Best Flight Offers From Anywhere to Everywhere
            </h2>
            
            {/* Redesigned Trip Type Section */}
            <div className="row mb-3">
              <div className="col-12 d-flex justify-content-center align-items-center">
                <span className="me-3 fw-bold">Trip Type:</span>
                <div className="btn-group" role="group">
                  <button
                    type="button"
                    className={`btn ${tripType === 'oneWay' ? 'btn-primary' : 'btn-outline-primary'}`}
                    style={{
                      padding: '0.5rem 1.5rem',
                      borderTopLeftRadius: '20px',
                      borderBottomLeftRadius: '20px',
                      border: '1px solid #0d6efd'
                    }}
                    onClick={() => tripChange('oneWay')}
                  >
                    One Way
                  </button>
                  <button
                    type="button"
                    className={`btn ${tripType === 'roundTrip' ? 'btn-primary' : 'btn-outline-primary'}`}
                    style={{
                      padding: '0.5rem 1.5rem',
                      borderTopRightRadius: '20px',
                      borderBottomRightRadius: '20px',
                      border: '1px solid #0d6efd'
                    }}
                    onClick={() => tripChange('roundTrip')}
                  >
                    Round Trip
                  </button>
                </div>
              </div>
            </div>

            <div className="col-2">
              <FloatingLabel controlId="floatingInput" label="From" className="mb-3">
                <Form.Control 
                  type="text" 
                  placeholder="From" 
                  className="custom-input"
                />
              </FloatingLabel>
            </div>
            <div className="col-2">
              <FloatingLabel controlId="floatingInput" label="To" className="mb-3">
                <Form.Control 
                  type="text" 
                  placeholder="To" 
                  className="custom-input"
                />
              </FloatingLabel>
            </div>
            <div className="col-2">
              <FloatingLabel controlId="floatingInput" label="Depart" className="mb-3">
                <Form.Control 
                  type="date" 
                  placeholder="Depart" 
                  className="custom-input"
                />
              </FloatingLabel>
            </div>
            <div className="col-2">
              <FloatingLabel controlId="floatingInput" label="Return" className="mb-3">
                <Form.Control 
                  type="date" 
                  placeholder="Return" 
                  className="custom-input"
                  disabled={tripType === 'oneWay'}
                />
              </FloatingLabel>
            </div>
            <div className="col-2">
              <FloatingLabel controlId="floatingSelect" label="Cabin Class" className="mb-3">
                <Form.Select 
                  aria-label="Cabin Class" 
                  className="custom-input"
                >
                  <option value="economy">Economy</option>
                  <option value="premium">Premium</option>
                  <option value="business">Business</option>
                </Form.Select>
              </FloatingLabel>
            </div>
            <div className="col-2">
              <FloatingLabel controlId="floatingInput" label="Travellers" className="mb-3">
                <Form.Control 
                  type="number" 
                  placeholder="Travellers" 
                  className="custom-input"
                />
              </FloatingLabel>
            </div>
            <Button
              onClick={onbtnClick}
              variant="primary"
              style={{
                margin: '20px auto',
                height: '50px',
                width: '120px',
                borderRadius: '10px',
                backgroundColor: '#ff3a0d',
                border: 'none',
                fontSize: '16px',
              }}
            >
              Search
            </Button>
          </div>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-4">
              <img
                src="https://content.r9cdn.net/res/images/horizon/ui/horizontalSearchNavigation/Flights_02_1_5x.png?v=cf84817d025f9ddb844f88149ffa1a5e58de9f60&cluster=5"
                alt=""
                width={"100%"}
                style={{ borderRadius: '10px' }}
              />
            </div>
            <div className="col-4">
              <img
                src="https://content.r9cdn.net/res/images/horizon/ui/horizontalSearchNavigation/Flights_01_1_5x.png?v=ee132853b57d2270721b02045fff91244493846c&cluster=5"
                alt=""
                width={"100%"}
                style={{ borderRadius: '10px' }}
              />
            </div>
            <div className="col-4">
              <img
                src="https://content.r9cdn.net/res/images/horizon/ui/horizontalSearchNavigation/Generic_02_1_5x.png?v=02bc3a5dbe4926c4c3588862d8c12b1d989bdb78&cluster=5"
                alt=""
                width={"100%"}
                style={{ borderRadius: '10px' }}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-4">
              <img
                src="https://content.r9cdn.net/res/images/horizon/ui/horizontalSearchNavigation/Generic_02_1_5x.png?v=02bc3a5dbe4926c4c3588862d8c12b1d989bdb78&cluster=5"
                alt=""
                width={"100%"}
                style={{ borderRadius: '10px' }}
              />
            </div>
            <div className="col-4">
              <img
                src="https://content.r9cdn.net/res/images/horizon/ui/horizontalSearchNavigation/Flights_03_1_5x.png?v=a99eeafc7a4a5bb32ef2fddbf0238a10f747b07b&cluster=5"
                alt=""
                width={"100%"}
                style={{ borderRadius: '10px' }}
              />
            </div>
            <div className="col-4">
              <img
                src="https://content.r9cdn.net/res/images/horizon/ui/horizontalSearchNavigation/Generic_04_1_5x.png?v=d4618803b34303214c8a02de60139924b4d20ad2&cluster=5"
                alt=""
                width={"100%"}
                style={{ borderRadius: '10px' }}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-4">
              <img
                src="https://content.r9cdn.net/res/images/horizon/ui/horizontalSearchNavigation/Flights_02_1_5x.png?v=cf84817d025f9ddb844f88149ffa1a5e58de9f60&cluster=5"
                alt=""
                width={"100%"}
                style={{ borderRadius: '10px' }}
              />
            </div>
            <div className="col-4">
              <img
                src="https://content.r9cdn.net/res/images/horizon/ui/horizontalSearchNavigation/Flights_04_1_5x.png?v=6c928ab74ec32cead4649a6021313649d19d34f0&cluster=5"
                alt=""
                width={"100%"}
                style={{ borderRadius: '10px' }}
              />
            </div>
            <div className="col-4">
              <img
                src="https://content.r9cdn.net/res/images/horizon/ui/horizontalSearchNavigation/Flights_01_1_5x.png?v=ee132853b57d2270721b02045fff91244493846c&cluster=5"
                alt=""
                width={"100%"}
                style={{ borderRadius: '10px' }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div>
          <h2 style={{ display: "block", fontWeight: "bold", color: "#090979", marginTop: "30px" }}>𝐅𝐥𝐢𝐠𝐡𝐭 𝐝𝐞𝐚𝐥𝐬 𝐟𝐫𝐨𝐦 𝐈𝐧𝐝𝐢𝐚</h2>
          <br />
          <p>Here are the flight deals with the lowest prices. Act fast – they all depart within the next three months.</p>

          <Card style={{ width: '19rem', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease' }}>
            <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/11/13/12/52/kuala-lumpur-1820944_1280.jpg" style={{ height: '180px', objectFit: 'cover' }} />
            <Card.Body style={{ padding: '1.5rem' }}>
              <Card.Title style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>Kuala Lumpur</Card.Title>
              <Card.Text style={{ color: '#6c757d', marginBottom: '1.5rem' }}>Malaysia</Card.Text>
              <Card.Text>
                <div className="row" style={{ marginBottom: '1rem' }}>
                  <div className="col-3">
                    <img src="https://logos-world.net/wp-content/uploads/2023/01/AirAsia-Logo-2002.png" alt="AirAsia Logo" style={{ width: '100%', borderRadius: '8px' }} />
                  </div>
                  <div className="col-6">
                    <span style={{ fontWeight: 'bolder', fontSize: '0.95rem' }}>Thu, 20 Mar</span>
                    <br />
                    <span style={{ fontSize: '12px', color: '#6c757d' }}>IXZ-KUL with AirAsia</span>
                  </div>
                  <div className="col-3" style={{ textAlign: 'right', color: '#28a745', fontWeight: '500' }}>Direct</div>
                </div>
                <div className="row" style={{ marginBottom: '1.5rem' }}>
                  <div className="col-3">
                    <img src="https://logos-world.net/wp-content/uploads/2023/01/AirAsia-Logo-2002.png" alt="AirAsia Logo" style={{ width: '100%', borderRadius: '8px' }} />
                  </div>
                  <div className="col-6">
                    <span style={{ fontWeight: 'bolder', fontSize: '0.95rem' }}>Sat, 22 Mar</span>
                    <br />
                    <span style={{ fontSize: '12px', color: '#6c757d' }}>KUL-IXZ with AirAsia</span>
                  </div>
                  <div className="col-3" style={{ textAlign: 'right', color: '#28a745', fontWeight: '500' }}>Direct</div>
                </div>
              </Card.Text>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ color: '#ff5a1d', fontWeight: 'bolder', fontSize: '1.25rem' }}>From 7,248</span>
                <button style={{ backgroundColor: '#ff5a1d', color: 'white', border: 'none', borderRadius: '8px', padding: '8px 16px', fontSize: '0.9rem', fontWeight: '500', cursor: 'pointer', transition: 'background-color 0.3s ease' }} >Book Now</button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashBoardForUsers;