import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const UserDashNav = () => {
  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '15px',
        position: 'sticky',
        top: 0,
        zIndex: 999,
        borderRadius: '0 0 16px 16px',
      }}
    >
      <Container fluid style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand */}
        <Navbar.Brand style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          {['A', 'E', 'R', 'O', 'V', 'I', 'S', 'T', 'A'].map((letter, index) => (
            <span
              key={index}
              style={{
                 border: '1px solid #ff5a1d',
                padding: '2px 6px',
                backgroundColor: '#ff5a1d',
                color: 'white',
                borderRadius: '4px',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
              }}
            >
              {letter}
            </span>
          ))}
        </Navbar.Brand>

        {/* Nav Links */}
        <Nav className="ml-auto" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <Nav.Link as={Link} to="/userdashboard" style={navLinkStyle}>Home</Nav.Link>
          <Nav.Link as={Link} to="/userflightview" style={navLinkStyle}>Flight Views</Nav.Link>
          <Nav.Link as={Link} to="/userhistory" style={navLinkStyle}>History</Nav.Link>
          <Nav.Link as={Link} to="/userprofile" style={navLinkStyle}>Profile Update</Nav.Link>
          <Nav.Link
            as={Link}
            to="/"
            style={{
               backgroundColor: '#ff5a1d',
  color: 'white',
  fontWeight: 'bold',
  border: 'none',
  borderRadius: '8px',
  padding: '10px 16px',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            }}
        
          >
            Logout
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

// Style for regular nav links
const navLinkStyle = {
  fontWeight: '600',
  color: '#333',
  textDecoration: 'none',
  fontSize: '17px',
  padding: '8px 14px',
  borderRadius: '8px',
  transition: 'all 0.3s ease',
  backgroundColor: 'transparent',
  cursor: 'pointer',
};

// Style for Logout button


export default UserDashNav;
