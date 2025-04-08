import React from 'react';
import { Button, Card, Badge } from "react-bootstrap";
import { Link } from 'react-router-dom';
import AdminNotification from './AdminNotification';

const FlightBookedByUser = () => {
  return (
    <div className="p-3" style={{ backgroundColor: '#f8fafc' }}>
     <AdminNotification />
      <div className="d-flex justify-content-between align-items-center mb-4 mt-1">
        <div>
          <h2 className="m-0" style={{ fontWeight: '300', color: '#2d3748' }}>Flight Management</h2>
          <p className="text-muted m-0">Manage all user flight bookings</p>
        </div>
        
      </div>

      {/* Stats Cards */}
      <div className="row mb-4 g-4">
        <div className="col-md-6">
          <Card className="border-0 shadow-sm h-100" style={{ 
            background: 'linear-gradient(135deg, #000080 0%, #1e3a8a 100%)',
            color: 'white'
          }}>
            <Card.Body className="d-flex flex-column">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h6 className="text-uppercase text-white-50 mb-2">Total Users</h6>
                  <h2 className="mb-0">1,234</h2>
                </div>
                <div className="bg-white bg-opacity-10 p-3 rounded-circle">
                  <i className="fas fa-users fs-4"></i>
                </div>
              </div>
              <div className="mt-auto">
                <small className="text-white-50">+12% from last month</small>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6">
          <Card className="border-0 shadow-sm h-100" style={{ 
            background: 'linear-gradient(135deg, #0e2f44 0%, #1e3a8a 100%)',
            color: 'white'
          }}>
            <Card.Body className="d-flex flex-column">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h6 className="text-uppercase text-white-50 mb-2">Total Bookings</h6>
                  <h2 className="mb-0">567</h2>
                </div>
                <div className="bg-white bg-opacity-10 p-3 rounded-circle">
                  <i className="fas fa-plane fs-4"></i>
                </div>
              </div>
              <div className="mt-auto">
                <small className="text-white-50">+8% from last month</small>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* Bookings Table */}
      <Card className="border-0 shadow-sm">
        <Card.Body className="p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead style={{ backgroundColor: '#f8f9fa' }}>
                <tr>
                  <th className="p-3 text-uppercase text-muted fw-semibold small">Picture</th>
                  <th className="p-3 text-uppercase text-muted fw-semibold small">Name</th>
                  <th className="p-3 text-uppercase text-muted fw-semibold small">E-Mail</th>
                  <th className="p-3 text-uppercase text-muted fw-semibold small">Date of Birth</th>
                  <th className="p-3 text-uppercase text-muted fw-semibold small">Address</th>
                  <th className="p-3 text-uppercase text-muted fw-semibold small">Phone</th>
                  <th className="p-3 text-uppercase text-muted fw-semibold small">Status</th>
                  <th className="p-3 text-uppercase text-muted fw-semibold small">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3">
                    <div className="rounded-circle overflow-hidden" style={{ width: '60px', height: '60px' }}>
                      <img 
                        src="https://static.vecteezy.com/system/resources/previews/024/558/262/non_2x/businessman-isolated-illustration-ai-generative-free-png.png" 
                        alt="Profile" 
                        className="img-fluid"
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                      />
                    </div>
                  </td>
                  <td className="p-3 fw-semibold">Reha P</td>
                  <td className="p-3">reha0002@gmail.com</td>
                  <td className="p-3">31/07/2000</td>
                  <td className="p-3">Tvm, India</td>
                  <td className="p-3">9876543212</td>
                  <td className="p-3">
                    <Badge bg="success" className="bg-opacity-10 text-success px-3 py-2 rounded-pill">
                      <i className="fas fa-check-circle me-1"></i> Paid
                    </Badge>
                  </td>
                  <td className="p-3">
                    <Link to={'/singleflightview'}>
                      <Button 
                        variant="outline-primary" 
                        size="sm" 
                        className="rounded-pill px-3 d-flex align-items-center"
                        style={{ borderWidth: "1.5px" }}
                      >
                        <i className="fas fa-eye me-2"></i> View Booking
                      </Button>
                    </Link>
                  </td>
                </tr>
                {/* Additional rows would go here */}
              </tbody>
            </table>
          </div>
        </Card.Body>
      </Card>

    
     
    </div>
  )
}

export default FlightBookedByUser;