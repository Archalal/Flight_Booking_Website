import React from 'react';
import UserDashNav from '../component/UserDashNav';
import { Button } from 'react-bootstrap';

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
          <div>
            <div className="row mt-3 align-items-center">
              <div className="col-3">
                <h3>TVM</h3>
                <span>Thu, 27 Mar 25</span>
              </div>
              <div className="col-6 text-center">
                <span><i className="fa-solid fa-plane-departure" style={{ color: "red" }}></i>----- Departure -----<i className="fa-solid fa-plane-arrival" style={{ color: "red" }}></i></span>
              </div>
              <div className="col-3 text-end">
                <h3>DXB</h3>
                <span>Thu, 27 Mar 25</span>
              </div>
            </div>

            <div className="row mt-5 align-items-center">
              <div className="col-3">
                <h3>DXB</h3>
                <span>Thu, 3 Apr 25</span>
              </div>
              <div className="col-6 text-center">
                <span><i className="fa-solid fa-plane-departure" style={{ color: "red" }}></i>----- Departure -----<i className="fa-solid fa-plane-arrival" style={{ color: "red" }}></i></span>
              </div>
              <div className="col-3 text-end">
                <h3>TVM</h3>
                <span>Thu, 2 Apr 25</span>
              </div>
            </div>

            <div className="d-flex justify-content-center mt-4">
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
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookedFlight;