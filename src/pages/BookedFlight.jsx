import React from 'react';
import UserDashNav from '../component/UserDashNav';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const BookedFlight = () => {
  return (
    <div>
      <div>
        <UserDashNav />
      </div>

      <div className="container mt-5">
        <div className="row">
          <h5 className='mb-3' style={{ fontWeight: "bolder" }}>Thiruvanthapuram to Dubai</h5>
          <span className='mb-4 fs-6'>return, 2 passengers</span>
          <div className="row mb-5">
            <div className="col-8">
              <h2 style={{ fontStyle: "italic", fontWeight: "bolder" }}>Choose your Outbounded Flight</h2>
              <h6>Thiruvanthapuram to Dubai</h6>
            </div>
            <div className="col-4 text-end">
              <h6>Lowest total price for 2 passengers INR <span style={{ color: "green", fontSize: "30px" }}>44,665</span></h6>
              <span>Inclusive of airfare taxes, fees, and carrier imposed charges</span>
            </div>
          </div>
          <br />
          <hr />
          
         
          <div className="mt-4">
            
            <div className="card p-4 mb-4" style={{
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              borderLeft: '4px solid #ff3a0d'
            }}>
              <div className="row align-items-center">
                <div className="col-3">
                  <h3 style={{ color: '#2d3748', fontWeight: '700' }}>TVM</h3>
                  <span className="text-muted">Thu, 27 Mar 25</span>
                </div>
                <div className="col-6 text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <i className="fas fa-plane-departure me-2" style={{ color: "#ff3a0d" }}></i>
                    <div style={{
                      flexGrow: 1,
                      height: '1px',
                      background: 'linear-gradient(to right, transparent, #ddd, transparent)',
                      margin: '0 10px',
                      position: 'relative'
                    }}>
                      <div style={{
                        position: 'absolute',
                        top: '-4px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: '#ff3a0d'
                      }}></div>
                    </div>
                    <i className="fas fa-plane-arrival ms-2" style={{ color: "#ff3a0d" }}></i>
                  </div>
                  <div className="mt-2" style={{ color: '#4a5568', fontWeight: '500' }}>
                    Direct • 4h 30m
                  </div>
                </div>
                <div className="col-3 text-end">
                  <h3 style={{ color: '#2d3748', fontWeight: '700' }}>DXB</h3>
                  <span className="text-muted">Thu, 27 Mar 25</span>
                </div>
              </div>
            </div>

           
            <div className="card p-4" style={{
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              borderLeft: '4px solid #ff3a0d'
            }}>
              <div className="row align-items-center">
                <div className="col-3">
                  <h3 style={{ color: '#2d3748', fontWeight: '700' }}>DXB</h3>
                  <span className="text-muted">Thu, 3 Apr 25</span>
                </div>
                <div className="col-6 text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <i className="fas fa-plane-departure me-2" style={{ color: "#ff3a0d" }}></i>
                    <div style={{
                      flexGrow: 1,
                      height: '1px',
                      background: 'linear-gradient(to right, transparent, #ddd, transparent)',
                      margin: '0 10px',
                      position: 'relative'
                    }}>
                      <div style={{
                        position: 'absolute',
                        top: '-4px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: '#ff3a0d'
                      }}></div>
                    </div>
                    <i className="fas fa-plane-arrival ms-2" style={{ color: "#ff3a0d" }}></i>
                  </div>
                  <div className="mt-2" style={{ color: '#4a5568', fontWeight: '500' }}>
                    Direct • 4h 30m
                  </div>
                </div>
                <div className="col-3 text-end">
                  <h3 style={{ color: '#2d3748', fontWeight: '700' }}>TVM</h3>
                  <span className="text-muted">Thu, 2 Apr 25</span>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-4">
          <Link to={'/payment'}>
          <Button
              variant="primary"
              style={{
                height: '50px',
                width: '90px',
                borderRadius: '10px',
                backgroundColor: '#ff3a0d',
                border: 'none',
                fontSize: '16px',
              }}
            >
              BookNow
            </Button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookedFlight;