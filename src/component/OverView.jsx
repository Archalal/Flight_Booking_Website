import React from 'react';
import { Button, Card, Badge, Row, Col } from "react-bootstrap";
import AdminNotification from './AdminNotification';

const OverView = () => {
  return (
    <div className="p-3" style={{ backgroundColor: '#f8fafc' }}>
      {/* Header Section */}
     <AdminNotification />
      {/* Stats Cards */}
      <Row className="mb-4 g-4">
        <Col md={6} lg={3}>
          <Card className="border-0 shadow-sm h-100" style={{ 
            background: 'linear-gradient(135deg, #55efc4 0%, #00b894 100%)'
          }}>
            <Card.Body className="d-flex flex-column text-white">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h6 className="text-uppercase text-white-50 mb-2">Total Users</h6>
                  <h2 className="mb-0">1,234</h2>
                </div>
                <div className="bg-white bg-opacity-20 p-3 rounded-circle">
                  <i className="fas fa-users fs-4"></i>
                </div>
              </div>
              <div className="mt-auto">
                <Badge bg="light" text="success" className="px-2 py-1 rounded-pill">
                  <i className="fas fa-arrow-up me-1"></i> 12.5%
                </Badge>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6} lg={3}>
          <Card className="border-0 shadow-sm h-100" style={{ 
            background: 'linear-gradient(135deg, #81ecec 0%, #00cec9 100%)'
          }}>
            <Card.Body className="d-flex flex-column text-white">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h6 className="text-uppercase text-white-50 mb-2">Total Bookings</h6>
                  <h2 className="mb-0">567</h2>
                </div>
                <div className="bg-white bg-opacity-20 p-3 rounded-circle">
                  <i className="fas fa-cart-shopping fs-4"></i>
                </div>
              </div>
              <div className="mt-auto">
                <Badge bg="light" text="success" className="px-2 py-1 rounded-pill">
                  <i className="fas fa-arrow-up me-1"></i> 8.3%
                </Badge>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6} lg={3}>
          <Card className="border-0 shadow-sm h-100" style={{ 
            background: 'linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%)'
          }}>
            <Card.Body className="d-flex flex-column text-white">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h6 className="text-uppercase text-white-50 mb-2">Total Revenue</h6>
                  <h2 className="mb-0">$12,345</h2>
                </div>
                <div className="bg-white bg-opacity-20 p-3 rounded-circle">
                  <i className="fas fa-dollar-sign fs-4"></i>
                </div>
              </div>
              <div className="mt-auto">
                <Badge bg="light" text="success" className="px-2 py-1 rounded-pill">
                  <i className="fas fa-arrow-up me-1"></i> 15.2%
                </Badge>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6} lg={3}>
          <Card className="border-0 shadow-sm h-100" style={{ 
            background: 'linear-gradient(135deg, #ffb8b8 0%, #ff7675 100%)'
          }}>
            <Card.Body className="d-flex flex-column text-white">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h6 className="text-uppercase text-white-50 mb-2">Active Flights</h6>
                  <h2 className="mb-0">45</h2>
                </div>
                <div className="bg-white bg-opacity-20 p-3 rounded-circle">
                  <i className="fas fa-plane fs-4"></i>
                </div>
              </div>
              <div className="mt-auto">
                <Badge bg="light" text="danger" className="px-2 py-1 rounded-pill">
                  <i className="fas fa-arrow-down me-1"></i> 3.2%
                </Badge>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Recent Activity Section - Simplified */}
      <Card className="border-0 shadow-sm">
  <Card.Body className="p-0">
    <div className="p-3 border-bottom">
      <h5 className="mb-0" style={{ fontWeight: '600', color: '#2d3748' }}>
        <i className="fas fa-history me-2 text-primary"></i> Recent Activity
      </h5>
    </div>
    
    <div className="list-group list-group-flush">
      {[1, 2, 3].map((item) => (
        <div key={item} className="list-group-item border-0 px-3 py-3 hover-effect">
          <div className="d-flex align-items-start">
            <div className={`flex-shrink-0 rounded-circle p-2 me-3 ${item === 1 ? 'bg-primary bg-opacity-10' : item === 2 ? 'bg-success bg-opacity-10' : 'bg-warning bg-opacity-10'}`}>
              <i className={`fas fa-fw ${item === 1 ? 'fa-user-plus text-primary' : item === 2 ? 'fa-plane-departure text-success' : 'fa-credit-card text-warning'}`}></i>
            </div>
            <div className="flex-grow-1">
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="mb-1" style={{ fontWeight: '600', color: '#2d3748' }}>
                  {item === 1 ? 'New user registered' : item === 2 ? 'Flight booking confirmed' : 'Payment received'}
                </h6>
                {item === 1 && <Badge pill bg="primary" className="bg-opacity-10 text-primary">New</Badge>}
              </div>
              <p className="mb-0 text-muted small">
                {item === 1 ? 'John Doe signed up' : item === 2 ? 'Flight #BA-245 to London' : '$450 for booking #789'}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Card.Body>
</Card>
    </div>
  )
}

export default OverView;