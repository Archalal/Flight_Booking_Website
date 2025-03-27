import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section py-5  text-dark" style={{ minHeight: "50px", background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',}}>
        <div className="container d-flex align-items-center justify-content-center h-100">
          <div className="text-center">
            <h4 className="fs-1  mb-3">About AeroVista</h4>
            <p className="lead mb-0">
              Elevating your travel experience with innovation and reliability
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-5">
              <h2 className="fw-bold mb-4">Our Mission</h2>
              <div className="d-flex justify-content-center">
                <p className="fs-5 text-muted" >
                  At <span className="text-primary fw-bold">AeroVista</span>, we're transforming air travel by combining cutting-edge technology with 
                  unparalleled customer service. Our goal is to make every journey seamless, affordable, 
                  and memorable.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="ratio ratio-16x9 rounded-3 overflow-hidden">
                <iframe 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  title="About AeroVista" 
                  allowFullScreen
                  className="border-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-lg-8 text-center">
              <h2 className="fw-bold mb-4">Meet Our Leadership</h2>
              <p className="text-muted fs-5 mb-5">
                The visionary team driving AeroVista's success
              </p>
            </div>
          </div>
          <div className="row justify-content-center g-4">
            {/* Team Member 1 */}
            <div className="col-md-6 col-lg-4 d-flex">
              <div className="card w-100 border-0 shadow-sm overflow-hidden">
                <div className="position-relative">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    alt="CEO"
                    className="card-img-top"
                    style={{ height: "280px", objectFit: "cover" }}
                  />
                  <div className="bg-primary bg-opacity-75 text-white p-3 position-absolute bottom-0 start-0 end-0">
                    <h5 className="mb-0">David Wilson</h5>
                    <small className="text-white-50">Founder & CEO</small>
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Former airline executive with 15+ years experience in aviation and customer experience.
                  </p>
                  <div className="d-flex gap-3">
                    <a href="#" className="text-primary"><i className="bi bi-linkedin fs-5"></i></a>
                    <a href="#" className="text-primary"><i className="bi bi-twitter fs-5"></i></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="col-md-6 col-lg-4 d-flex">
              <div className="card w-100 border-0 shadow-sm overflow-hidden">
                <div className="position-relative">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    alt="CTO"
                    className="card-img-top"
                    style={{ height: "280px", objectFit: "cover" }}
                  />
                  <div className="bg-primary bg-opacity-75 text-white p-3 position-absolute bottom-0 start-0 end-0">
                    <h5 className="mb-0">Sarah Johnson</h5>
                    <small className="text-white-50">Chief Technology Officer</small>
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Tech visionary with expertise in building scalable travel platforms and AI solutions.
                  </p>
                  <div className="d-flex gap-3">
                    <a href="#" className="text-primary"><i className="bi bi-linkedin fs-5"></i></a>
                    <a href="#" className="text-primary"><i className="bi bi-twitter fs-5"></i></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="col-md-6 col-lg-4 d-flex">
              <div className="card w-100 border-0 shadow-sm overflow-hidden">
                <div className="position-relative">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    alt="COO"
                    className="card-img-top"
                    style={{ height: "280px", objectFit: "cover" }}
                  />
                  <div className="bg-primary bg-opacity-75 text-white p-3 position-absolute bottom-0 start-0 end-0">
                    <h5 className="mb-0">Michael Chen</h5>
                    <small className="text-white-50">Chief Operations Officer</small>
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Operations specialist with extensive global airline and logistics partnerships.
                  </p>
                  <div className="d-flex gap-3">
                    <a href="#" className="text-primary"><i className="bi bi-linkedin fs-5"></i></a>
                    <a href="#" className="text-primary"><i className="bi bi-twitter fs-5"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-4">
              <h2 className="fw-bold mb-4">Our Achievements</h2>
            </div>
          </div>
          <div className="row justify-content-center g-4">
            <div className="col-6 col-md-3">
              <div className="p-4 bg-light rounded-3 text-center h-100">
                <h2 className="text-primary fw-bold mb-2">5M+</h2>
                <p className="text-muted mb-0">Happy Travelers</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-4 bg-light rounded-3 text-center h-100">
                <h2 className="text-primary fw-bold mb-2">150+</h2>
                <p className="text-muted mb-0">Destinations</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-4 bg-light rounded-3 text-center h-100">
                <h2 className="text-primary fw-bold mb-2">24/7</h2>
                <p className="text-muted mb-0">Support</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-4 bg-light rounded-3 text-center h-100">
                <h2 className="text-primary fw-bold mb-2">98%</h2>
                <p className="text-muted mb-0">On-Time Flights</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-lg-8 text-center">
              <h2 className="fw-bold mb-3">Why Choose AeroVista?</h2>
              <p className="text-muted fs-5">
                We're redefining what it means to book and experience air travel
              </p>
            </div>
          </div>
          <div className="row justify-content-center g-4">
            <div className="col-md-4 d-flex">
              <div className="p-4 bg-white rounded-3 w-100 shadow-sm">
                <div className="icon-box bg-primary bg-opacity-10 text-primary rounded-circle mb-4 d-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px" }}>
                  <i className="bi bi-lightning-charge fs-3"></i>
                </div>
                <h4 className="mb-3">Instant Booking</h4>
                <p className="text-muted mb-0">
                  Our streamlined process lets you book flights in under 60 seconds with just a few taps.
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="p-4 bg-white rounded-3 w-100 shadow-sm">
                <div className="icon-box bg-primary bg-opacity-10 text-primary rounded-circle mb-4 d-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px" }}>
                  <i className="bi bi-cash-coin fs-3"></i>
                </div>
                <h4 className="mb-3">Best Price Guarantee</h4>
                <p className="text-muted mb-0">
                  We'll match any lower fare you find or refund the difference - guaranteed.
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="p-4 bg-white rounded-3 w-100 shadow-sm">
                <div className="icon-box bg-primary bg-opacity-10 text-primary rounded-circle mb-4 d-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px" }}>
                  <i className="bi bi-globe fs-3"></i>
                </div>
                <h4 className="mb-3">Global Coverage</h4>
                <p className="text-muted mb-0">
                  Access to 150+ destinations worldwide with 500+ airline partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="fw-bold mb-3">Ready to Explore the World?</h2>
              <p className="mb-4">
                Join millions of travelers who trust AeroVista for their journeys
              </p>
              <Link 
                to="/flights" 
                className="btn btn-light px-4 py-2 fw-bold"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;