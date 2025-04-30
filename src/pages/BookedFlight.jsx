import React from 'react';
import UserDashNav from '../component/UserDashNav';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const BookedFlight = () => {
  return (
    <div style={{ backgroundColor: "#f7f9fc", minHeight: "100vh" }}>
      <UserDashNav />

      <div className="container mt-5">
        <div className="row">
          <h5 className='mb-1' style={{ fontWeight: "800", color: "#1a202c" }}>Thiruvanthapuram to Dubai</h5>
          <span className='mb-4 fs-6 text-muted'>Return • 2 Passengers</span>

          <div className="row mb-5">
            <div className="col-8">
              <h2 style={{ fontStyle: "italic", fontWeight: "bold", color: "#2d3748" }}>Choose your Outbound Flight</h2>
              <h6 className='text-muted'>Thiruvanthapuram to Dubai</h6>
            </div>
            <div className="col-4 text-end">
              <h6>Lowest total price for 2 passengers</h6>
              <h3 style={{ color: "#10b981", fontWeight: "bold", fontSize: "32px" }}>₹44,665</h3>
              <span className='text-muted'>Includes taxes, fees & carrier charges</span>
            </div>
          </div>

          <hr className="mb-4" />

          {/* Outbound Flight */}
          <div className="card p-4 mb-4 flight-card">
            <div className="row align-items-center">
              <div className="col-3">
                <h3 style={{ color: '#2d3748', fontWeight: '700' }}>TVM</h3>
                <span className="text-muted">Thu, 27 Mar 25</span>
              </div>
              <div className="col-6 text-center">
                <div className="d-flex align-items-center justify-content-center">
                  <i className="fas fa-plane-departure me-2" style={{ color: "#ff3a0d", fontSize: "20px" }}></i>
                  <div style={{
                    flexGrow: 1,
                    height: '2px',
                    background: 'linear-gradient(to right, #ff3a0d, #ffa07a)',
                    margin: '0 10px',
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '-4px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: '#ff3a0d',
                      border: '2px solid white'
                    }} />
                  </div>
                  <i className="fas fa-plane-arrival ms-2" style={{ color: "#ff3a0d", fontSize: "20px" }}></i>
                </div>
                <div className="mt-2" style={{ color: '#4a5568', fontWeight: '600' }}>
                  Direct • 4h 30m
                </div>
              </div>
              <div className="col-3 text-end">
                <h3 style={{ color: '#2d3748', fontWeight: '700' }}>DXB</h3>
                <span className="text-muted">Thu, 27 Mar 25</span>
              </div>
            </div>
          </div>

          {/* Return Flight */}
          <div className="card p-4 flight-card">
            <div className="row align-items-center">
              <div className="col-3">
                <h3 style={{ color: '#2d3748', fontWeight: '700' }}>DXB</h3>
                <span className="text-muted">Thu, 3 Apr 25</span>
              </div>
              <div className="col-6 text-center">
                <div className="d-flex align-items-center justify-content-center">
                  <i className="fas fa-plane-departure me-2" style={{ color: "#ff3a0d", fontSize: "20px" }}></i>
                  <div style={{
                    flexGrow: 1,
                    height: '2px',
                    background: 'linear-gradient(to right, #ff3a0d, #ffa07a)',
                    margin: '0 10px',
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '-4px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: '#ff3a0d',
                      border: '2px solid white'
                    }} />
                  </div>
                  <i className="fas fa-plane-arrival ms-2" style={{ color: "#ff3a0d", fontSize: "20px" }}></i>
                </div>
                <div className="mt-2" style={{ color: '#4a5568', fontWeight: '600' }}>
                  Direct • 4h 30m
                </div>
              </div>
              <div className="col-3 text-end">
                <h3 style={{ color: '#2d3748', fontWeight: '700' }}>TVM</h3>
                <span className="text-muted">Thu, 2 Apr 25</span>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="d-flex justify-content-center mt-4">
            <Link to={'/payment'}>
              <Button
                variant="primary"
                style={{
                  height: '50px',
                  width: '130px',
                  borderRadius: '12px',
                  background: 'linear-gradient(to right, #ff3a0d, #ff7e5f)',
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: '600',
                  boxShadow: '0 4px 12px rgba(255, 58, 13, 0.3)',
                  transition: 'all 0.3s ease-in-out'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                Book Now
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookedFlight;
