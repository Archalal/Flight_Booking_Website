import React from "react";
import { Link, Links } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <div className="container">
        <div className="row">
        
          <div className="col-md-4 mb-4">
            <div>
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
                    marginLeft:"3px"
                  }}
                >
                  {letter}
                </span>
              ))}
            </div>
            <p className="mt-2">
              Your gateway to the skies. Book your next adventure with us!
            </p>
          </div>

         
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-decoration-none text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-decoration-none text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-decoration-none text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-decoration-none text-white">
                  Login
                </Link>
              </li>
            </ul>
          </div>

        
          <div className="col-md-4 mb-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: support@aerovista.com</li>
              <li>Phone: +91 123 456 7890</li>
              <li>Address: 123 Skyline Avenue, Mumbai, India</li>
            </ul>
         
            <div className="mt-3">
             <Link to={''}><i className="fa-brands fa-linkedin-in" style={{marginLeft:"3px"}}></i></Link>
             <Link to={''}><i className="fa-brands fa-twitter" style={{marginLeft:"20px"}}></i></Link>
             <Link to={''}><i className="fa-brands fa-instagram" style={{marginLeft:"20px"}}></i></Link>
             <Link to={''}><i className="fa-brands fa-facebook-f" style={{marginLeft:"20px"}}></i></Link>
            </div>
          </div>
        </div>

       
        <div className="row">
          <div className="col text-center mt-4">
            <p className="mb-0" style={{ fontSize: '0.9rem' }}>
              &copy; {new Date().getFullYear()} Aero Vista. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
