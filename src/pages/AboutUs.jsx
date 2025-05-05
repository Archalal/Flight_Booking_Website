import React from "react";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";

const AboutUs = () => {
  return (
    <div className="about-page">
      <Header />
      {/* Hero Section */}
      <section className="hero bg-dark text-white text-center py-5">
        <div className="container py-4">
          <h1 className="display-4 fw-bold mb-3">
            About <span className="text-primary">Aero Vista</span>
          </h1>
          <p className="lead">
            Elevating air travel through innovation and excellence
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Our Mission</h2>
          <p className="text-muted mx-auto" style={{maxWidth: "800px"}}>
            At AeroVista, we're not just transporting passengers - we're creating 
            unforgettable experiences through cutting-edge technology and 
            human-centered design.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Our Values</h2>
          <div className="row g-4">
            {['Safety', 'Comfort', 'Innovation', 'Sustainability'].map((value, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="p-4 bg-white rounded shadow-sm h-100">
                  <div className="text-primary mb-3">
                    <i className="bi bi-check-circle fs-2"></i>
                  </div>
                  <h4>{value}</h4>
                  <p className="text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Our Team</h2>
          <div className="row g-4">
            {['David Wilson - CEO', 'Sarah Johnson - CTO', 'Michael Chen - COO'].map((member, index) => (
              <div className="col-md-4" key={index}>
                <div className="card border-0 shadow-sm h-100">
                  <img 
                    src={`https://i.pravatar.cc/300?img=${index + 10}`} 
                    className="card-img-top" 
                    alt={member}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{member.split(' - ')[0]}</h5>
                    <p className="text-muted">{member.split(' - ')[1]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-dark text-white">
        <div className="container">
          <div className="row text-center">
            {[
              { value: "50+", label: "Destinations" },
              { value: "10M+", label: "Passengers" },
              { value: "98%", label: "On-Time" },
              { value: "4.9★", label: "Rating" }
            ].map((stat, index) => (
              <div className="col-6 col-md-3" key={index}>
                <div className="p-3">
                  <h3 className="fw-bold">{stat.value}</h3>
                  <p className="mb-0">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
  <Footer />
    </div>
  );
};

export default AboutUs;