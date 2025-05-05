import React from 'react';
import { Button } from 'react-bootstrap';

const FlightNotification = () => {
  return (
    <div className="dashboard-header">
      <div className="d-flex justify-content-between align-items-center p-2">
        <div>
          <h2  style={{ 
            fontWeight: '700', 
            color: '#2d3748',
            fontSize: '1.75rem'
          }}>
            <i className="fas fa-tachometer-alt me-2" style={{ color: '#4e73df' }}></i> 
            Dashboard Overview
          </h2>
          <p className="text-muted m-0 mt-1" style={{ fontSize: '0.9rem' }}>
            Key metrics and statistics
          </p>
        </div>
        <div className="d-flex align-items-center">
          <Button 
            variant="light" 
            className="me-3 p-2 rounded-circle"
            style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
            }}
          >
            <i 
              className="fas fa-bell" 
              style={{
                color: '#e74a3b',
                fontSize: '1.1rem'
              }}
            ></i>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FlightNotification;