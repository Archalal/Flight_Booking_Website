import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
        color: "#fff",
        padding: "4rem 0",
        fontSize: "0.95rem",
      }}
    >
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Logo + Description */}
          <div className="col-md-4 mb-4">
            <div className="mb-3 d-flex justify-content-center justify-content-md-start">
              {["A", "E", "R", "O", "V", "I", "S", "T", "A"].map((letter, index) => (
                <span
                  key={index}
                  style={{
                    backgroundColor: "#ff5a1d",
                    color: "white",
                    fontWeight: "bold",
                    padding: "6px",
                    borderRadius: "4px",
                    marginRight: "4px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
                    fontSize: "1rem",
                  }}
                >
                  {letter}
                </span>
              ))}
            </div>
            <p>
              Your gateway to the skies. Book your next adventure with AeroVista.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-3" style={{ color: "#ffb347" }}>Quick Links</h5>
            <ul className="list-unstyled">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/aboutus" },
                { label: "Admin Dashboard", path: "/admin" },
                { label: "User Dashboard", path: "/userdashboard" },
                { label: "Flight Dashboard", path: "/flight" },
                { label: "Login", path: "/login" },
              ].map((link, idx) => (
                <li key={idx} className="mb-2">
                  <Link to={link.path} className="text-decoration-none text-light">
                    • {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-3" style={{ color: "#ffb347" }}>Contact Us</h5>
            <ul className="list-unstyled">
              <li className="mb-2">📧 support@aerovista.com</li>
              <li className="mb-2">📞 +91 123 456 7890</li>
              <li className="mb-2">📍 123 Skyline Avenue, Mumbai, India</li>
            </ul>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start mt-3">
              <Link to="#">
                <i className="fa-brands fa-linkedin-in text-light fs-5"></i>
              </Link>
              <Link to="#">
                <i className="fa-brands fa-twitter text-light fs-5"></i>
              </Link>
              <Link to="#">
                <i className="fa-brands fa-instagram text-light fs-5"></i>
              </Link>
              <Link to="#">
                <i className="fa-brands fa-facebook-f text-light fs-5"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-4">
          <div className="col text-center">
            <p className="mb-0 text-light" style={{ fontSize: "0.85rem" }}>
              &copy; {new Date().getFullYear()} <strong>AeroVista</strong>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
