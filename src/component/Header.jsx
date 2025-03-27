import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar className="bg-transparent" style={{ padding: '8px 0' }}>
      <Container>
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginLeft: "20px" }}>
          <Navbar.Brand style={{ display: 'flex', gap: '2px', alignItems: 'center', marginRight: 'auto' }}>
            {['A', 'E', 'R', 'O', 'V', 'I', 'S', 'T', 'A'].map((letter, index) => (
              <span
                key={index}
                style={{
                  border: '1px solid #ff5a1d',
                  padding: '2px 4px',
                  backgroundColor: '#ff5a1d',
                  color: 'white',
                  borderRadius: '3px',
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

          <Nav style={{ display: 'flex', gap: '20px', marginRight: "50px" }}>
            <Nav.Link to='/' style={{ textDecoration: "none", color: "white" }}>Home</Nav.Link>
            <Nav.Link  as={Link}  to='/aboutus' style={{ textDecoration: "none", color: "white" }}>About us</Nav.Link>
            <Nav.Link as={Link}   to={'/login'}
            style={{ textDecoration: "none", color: "white", paddingLeft: "2px" }}>
              <i className="fa-regular fa-user"></i> Login
            </Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
    </div>
  );
};

export default Header;
