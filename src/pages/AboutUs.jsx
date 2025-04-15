import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Modern Hero Section */}
      <section className="hero-section position-relative overflow-hidden">
        <div className="container py-8 py-lg-10">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8 position-relative z-index-1">
              <h1 className="display-2 fw-bold text-white mb-4 animate__animated animate__fadeInDown">
                About <span className="text-primary">Aero Vista</span>
              </h1>
              <p className="lead text-white-70 mb-0 fs-3">
                Elevating air travel through innovation and excellence
              </p>
              <div className="d-flex justify-content-center mt-5">
                <div className="scroll-indicator"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-shape-1"></div>
        <div className="hero-shape-2"></div>
      </section>

      {/* Mission Statement */}
      <section className="py-6 py-lg-8">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <div className="mb-6">
                <span className="section-badge">OUR MISSION</span>
                <h2 className="display-5 fw-bold mb-4">
                  Redefining what it means to fly
                </h2>
                <div className="mx-auto" style={{ maxWidth: "800px" }}>
                  <p className="fs-4 text-muted">
                    At AeroVista, we're not just transporting passengers - we're creating 
                    unforgettable experiences. Through cutting-edge technology and 
                    human-centered design, we're setting new standards in aviation.
                  </p>
                </div>
              </div>
              
              <div className="video-container rounded-4 shadow-lg overflow-hidden">
                <iframe 
                  src="https://www.youtube.com/embed/airline-video" 
                  title="AeroVista Experience"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-6 py-lg-8 bg-light">
        <div className="container">
          <div className="row justify-content-center mb-6">
            <div className="col-lg-8 text-center">
              <span className="section-badge">OUR VALUES</span>
              <h2 className="display-5 fw-bold mb-4">
                The principles that guide our journey
              </h2>
            </div>
          </div>
          
          <div className="row g-4">
            {[
              {
                icon: "bi-shield-check",
                title: "Safety Above All",
                description: "Rigorous standards and continuous training ensure your peace of mind"
              },
              {
                icon: "bi-emoji-smile",
                title: "Passenger Comfort",
                description: "Every detail designed for your relaxation and convenience"
              },
              {
                icon: "bi-lightning-charge",
                title: "Innovation",
                description: "Pioneering new technologies to enhance your experience"
              },
              {
                icon: "bi-globe",
                title: "Sustainability",
                description: "Committed to eco-friendly operations and carbon reduction"
              }
            ].map((item, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="value-card p-4 h-100">
                  <div className="value-icon mb-4">
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <h4 className="mb-3">{item.title}</h4>
                  <p className="text-muted mb-0">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-6 py-lg-8">
        <div className="container">
          <div className="row justify-content-center mb-6">
            <div className="col-lg-8 text-center">
              <span className="section-badge">LEADERSHIP</span>
              <h2 className="display-5 fw-bold mb-4">
                Meet the visionaries guiding AeroVista
              </h2>
              <p className="text-muted fs-5">
                A team of industry experts passionate about transforming air travel
              </p>
            </div>
          </div>
          
          <div className="row g-4 justify-content-center">
            {[
              {
                name: "David Wilson",
                role: "Founder & CEO",
                bio: "25+ years revolutionizing aviation experiences worldwide",
                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              },
              {
                name: "Sarah Johnson",
                role: "Chief Technology Officer",
                bio: "Tech visionary specializing in AI-driven travel solutions",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              },
              {
                name: "Michael Chen",
                role: "Chief Operations Officer",
                bio: "Operations expert with global airline partnerships",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              }
            ].map((member, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="team-card">
                  <div className="team-img-container">
                    <img 
                      src={member.img} 
                      alt={member.name}
                      className="team-img"
                      loading="lazy"
                    />
                  </div>
                  <div className="team-info">
                    <h4 className="mb-1">{member.name}</h4>
                    <p className="text-primary mb-3">{member.role}</p>
                    <p className="text-muted mb-0">{member.bio}</p>
                  </div>
                  <div className="team-social">
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                    <a href="#"><i className="bi bi-twitter"></i></a>
                    <a href="#"><i className="bi bi-envelope"></i></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-6 py-lg-8 bg-dark text-white">
        <div className="container">
          <div className="row g-4 text-center">
            {[
              { number: "50+", label: "Global Destinations" },
              { number: "10M+", label: "Happy Passengers" },
              { number: "98%", label: "On-Time Flights" },
              { number: "4.9★", label: "Average Rating" }
            ].map((stat, index) => (
              <div className="col-6 col-md-3" key={index}>
                <div className="stat-item">
                  <h3 className="stat-number">{stat.number}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 py-lg-8">
        <div className="container">
          <div className="cta-box bg-primary text-white rounded-4 p-6 p-lg-8">
            <div className="row align-items-center">
              <div className="col-lg-8 mb-4 mb-lg-0">
                <h2 className="display-5 fw-bold mb-3">Ready to experience the difference?</h2>
                <p className="mb-0 fs-5 text-white-80">
                  Join millions who've discovered the AeroVista advantage
                </p>
              </div>
              <div className="col-lg-4 text-lg-end">
                <Link 
                  to="/flights" 
                  className="btn btn-light btn-lg px-5 py-3 rounded-pill fw-bold shadow-sm"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <h3 className="text-white mb-4">AeroVista</h3>
              <p className="text-white-60">
                Pioneering the future of air travel with innovation, comfort, and sustainability.
              </p>
              <div className="social-links mt-4">
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-twitter"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-md-4 mb-4 mb-md-0">
                  <h4 className="text-white mb-4">Company</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2"><a href="#" className="text-white-60">About Us</a></li>
                    <li className="mb-2"><a href="#" className="text-white-60">Careers</a></li>
                    <li className="mb-2"><a href="#" className="text-white-60">News</a></li>
                  </ul>
                </div>
                <div className="col-md-4 mb-4 mb-md-0">
                  <h4 className="text-white mb-4">Support</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2"><a href="#" className="text-white-60">Contact Us</a></li>
                    <li className="mb-2"><a href="#" className="text-white-60">FAQs</a></li>
                    <li className="mb-2"><a href="#" className="text-white-60">Feedback</a></li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h4 className="text-white mb-4">Legal</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2"><a href="#" className="text-white-60">Terms</a></li>
                    <li className="mb-2"><a href="#" className="text-white-60">Privacy</a></li>
                    <li className="mb-2"><a href="#" className="text-white-60">Cookies</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="border-top border-dark mt-5 pt-4">
            <div className="row align-items-center">
              <div className="col-md-6 mb-3 mb-md-0">
                <p className="mb-0 text-white-60">
                  © {new Date().getFullYear()} AeroVista. All rights reserved.
                </p>
              </div>
              <div className="col-md-6 text-md-end">
                <div className="d-flex justify-content-md-end gap-3">
                  <a href="#" className="text-white-60">Accessibility</a>
                  <a href="#" className="text-white-60">Sitemap</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom CSS would be needed for the animations and some visual elements */}
      <style jsx>{`
        .hero-section {
          background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%);
          min-height: 70vh;
          position: relative;
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
        }
        .section-badge {
          display: inline-block;
          background: rgba(13, 110, 253, 0.1);
          color: #0d6efd;
          padding: 8px 16px;
          border-radius: 50px;
          font-weight: 600;
          margin-bottom: 16px;
          text-transform: uppercase;
          font-size: 14px;
          letter-spacing: 1px;
        }
        .value-card {
          background: white;
          border-radius: 12px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-align: center;
        }
        .value-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        .value-icon {
          width: 60px;
          height: 60px;
          background: rgba(13, 110, 253, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
        }
        .value-icon i {
          font-size: 24px;
          color: #0d6efd;
        }
        .team-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
          height: 100%;
        }
        .team-card:hover {
          transform: translateY(-5px);
        }
        .team-img-container {
          height: 300px;
          overflow: hidden;
        }
        .team-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .team-card:hover .team-img {
          transform: scale(1.05);
        }
        .team-info {
          padding: 24px;
        }
        .team-social {
          padding: 16px 24px;
          border-top: 1px solid #eee;
          display: flex;
          gap: 16px;
        }
        .team-social a {
          color: #6c757d;
          transition: color 0.3s ease;
        }
        .team-social a:hover {
          color: #0d6efd;
        }
        .stat-item {
          padding: 24px;
        }
        .stat-number {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 8px;
          color: white;
        }
        .stat-label {
          color: rgba(255, 255, 255, 0.7);
          font-size: 18px;
          margin-bottom: 0;
        }
        .cta-box {
          background: linear-gradient(135deg, #0d6efd 0%, #0b5ed7 100%);
          box-shadow: 0 10px 30px rgba(13, 110, 253, 0.2);
        }
        .social-links a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: white;
          margin-right: 12px;
          transition: background 0.3s ease;
        }
        .social-links a:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
};

export default AboutUs;