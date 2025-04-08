import React from 'react';
import { Card,Badge } from 'react-bootstrap';


const TotalDisplay = () => {
  return (
      <div className="row mb-4 g-4">
        <div className="col-md-4">
          <Card className="border-0 shadow-sm h-100" style={{ 
            background: 'linear-gradient(135deg, #d3ffce 0%, #2ecc71 100%)',
            color: '#2d3748'
          }}>
            <Card.Body className="d-flex flex-column">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h6 className="text-uppercase text-muted mb-2">Total Users</h6>
                  <h2 className="mb-0">1,234</h2>
                </div>
                <div className="bg-white bg-opacity-30 p-3 rounded-circle">
                  <i className="fas fa-plane-departure fs-4" style={{ color: '#27ae60' }}></i>
                </div>
              </div>
              <div className="mt-auto">
                <Badge bg="light" text="success" className="px-2 py-1 rounded-pill">
                  <i className="fas fa-arrow-up me-1"></i> 12%
                </Badge>
                <small className="text-muted ms-2">from last month</small>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="border-0 shadow-sm h-100" style={{ 
            background: 'linear-gradient(135deg, #c6e2ff 0%, #3498db 100%)',
            color: '#2d3748'
          }}>
            <Card.Body className="d-flex flex-column">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h6 className="text-uppercase text-muted mb-2">Total Bookings</h6>
                  <h2 className="mb-0">567</h2>
                </div>
                <div className="bg-white bg-opacity-30 p-3 rounded-circle">
                  <i className="fas fa-calendar-check fs-4" style={{ color: '#2980b9' }}></i>
                </div>
              </div>
              <div className="mt-auto">
                <Badge bg="light" text="success" className="px-2 py-1 rounded-pill">
                  <i className="fas fa-arrow-up me-1"></i> 8%
                </Badge>
                <small className="text-muted ms-2">from last month</small>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="border-0 shadow-sm h-100" style={{ 
          background: "linear-gradient(135deg, #0ba360 0%, #3cba92 100%)",
            color: '#2d3748'
          }}>
            <Card.Body className="d-flex flex-column">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h6 className="text-uppercase text-muted mb-2">Total Bookings</h6>
                  <h2 className="mb-0">567</h2>
                </div>
                <div className="bg-white bg-opacity-30 p-3 rounded-circle">
                  <i className="fas fa-calendar-check fs-4" style={{ color: '#2980b9' }}></i>
                </div>
              </div>
              <div className="mt-auto">
                <Badge bg="light" text="success" className="px-2 py-1 rounded-pill">
                  <i className="fas fa-arrow-up me-1"></i> 8%
                </Badge>
                <small className="text-muted ms-2">from last month</small>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>

  
  );
};

export default TotalDisplay;