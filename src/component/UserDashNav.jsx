import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserDashNav = () => {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      sticky="top"
      style={{
        background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
        padding: '10px 0',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
        zIndex: 1000,
      }}
    >
      <Container className="d-flex justify-content-between align-items-center">
        {/* Brand Name as a Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-1">
          {['A', 'E', 'R', 'O', 'V', 'I', 'S', 'T', 'A'].map((letter, idx) => (
            <span
              key={idx}
              style={{
                backgroundColor: '#ff5a1d',
                color: 'white',
                fontWeight: 'bold',
                padding: '4px 6px',
                borderRadius: '4px',
                fontSize: '1rem',
                boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
              }}
            >
              {letter}
            </span>
          ))}
        </Navbar.Brand>

        {/* Navigation Links */}
        <Nav className="ms-auto d-flex align-items-center gap-4">
          <Nav.Link
            as={Link}
            to="/userdashboard"
            style={{
              color: 'white',
              fontWeight: '600',
              transition: '0.3s',
            }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/userflightview"
            style={{
              color: 'white',
              fontWeight: '600',
              transition: '0.3s',
            }}
          >
            Flight Views
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/userhistory"
            style={{
              color: 'white',
              fontWeight: '600',
              transition: '0.3s',
            }}
          >
            History
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/"
            style={{
              color: '#ff5a1d',
              fontWeight: 'bold',
              border: '1px solid #ff5a1d',
              padding: '6px 14px',
              borderRadius: '20px',
              transition: '0.3s',
              backgroundColor: 'transparent',
            }}
          >
            Logout
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default UserDashNav;
