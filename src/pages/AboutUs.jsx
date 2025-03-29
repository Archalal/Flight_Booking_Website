import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about-page" style={{ overflowX: "hidden" }}>
     
      <section className="hero-section position-relative" style={{ 
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center"
      }}>
        <div className="container position-relative z-index-1">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8 " style={{marginLeft:"300px"}}>
              <h1 className="display-3 fw-bold text-white mb-4">About AeroVista</h1>
              <p className="lead text-white-50 mb-0" style={{ fontSize: "1.5rem" }}>
                Where innovation meets the skies.....
              </p>
            </div>
          </div>
        </div>
        <div className="position-absolute bottom-0 start-0 end-0" style={{ height: "150px", background: "linear-gradient(to top, #fff, transparent)" }}></div>
      </section>

      {/* Mission Section */}
      <section className="py-6">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center mb-6">
              <span className="text-primary fw-bold d-block mb-3">OUR MISSION</span>
              <h2 className="display-5 fw-bold mb-4">Redefining air travel for the modern era</h2>
              <div className="mx-auto" >
                <p className="fs-4 text-muted">
                  At AeroVista, we blend cutting-edge technology with human-centric design to create 
                  travel experiences that are seamless, intuitive, and truly enjoyable.
                </p>
              </div>
            </div>
          </div>
          
          <div className="row g-5 align-items-center mt-5">
            <div className="col-lg-6">
              <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-lg">
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

  
      <section className="py-6 bg-light mt-5">
        <div className="container">
          <div className="row justify-content-center text-center mb-6">
            <div className="col-lg-8">
              <span className="text-primary fw-bold d-block mb-3">OUR TEAM</span>
              <h2 className="display-5 fw-bold mb-3">The minds behind your journey</h2>
              <p className="text-muted fs-5">
                A diverse team united by a passion for travel innovation
              </p>
            </div>
          </div>
          
          <div className="row g-4 justify-content-center">
            {[
              {
                name: "David Wilson",
                role: "Founder & CEO",
                bio: "Aviation expert with 20+ years transforming travel experiences",
                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              },
              {
                name: "Sarah Johnson",
                role: "CTO",
                bio: "Tech visionary specializing in AI-driven travel solutions",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              },
              {
                name: "Michael Chen",
                role: "COO",
                bio: "Operations maestro with global airline partnerships",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              }
            ].map((member, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card border-0 shadow-sm h-100 overflow-hidden">
                  <div className="card-img-top overflow-hidden" style={{ height: "320px" }}>
                    <img 
                      src={member.img} 
                      alt={member.name}
                      className="w-100 h-100 object-cover"
                      style={{ transition: "transform 0.3s ease" }}
                      onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                      onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                    />
                  </div>
                  <div className="card-body p-4">
                    <h4 className="mb-1">{member.name}</h4>
                    <p className="text-primary mb-3">{member.role}</p>
                    <p className="text-muted mb-0">{member.bio}</p>
                  </div>
                  <div className="card-footer bg-transparent border-0 p-4 pt-0">
                    <div className="d-flex gap-3">
                      <a href="#" className="text-muted hover-primary"><i className="bi bi-linkedin fs-5"></i></a>
                      <a href="#" className="text-muted hover-primary"><i className="bi bi-twitter fs-5"></i></a>
                      <a href="#" className="text-muted hover-primary"><i className="bi bi-envelope fs-5"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
     

      
      <section className="py-6 bg-dark text-white position-relative mt-5" >
        <div className="container position-relative z-index-1">
          <div className="row justify-content-center text-center" style={{marginLeft:"280px"}}>
            <div className="col-lg-8">
              <h2 className="fw-bold mb-4">Ready for takeoff?</h2>
              <p className="fs-6 text-white-50 mb-5">
                Join millions of travelers experiencing the future of air travel today
              </p>
              <Link 
                to="/flights" 
                className="btn btn-primary btn-lg px-1 py-2  rounded-pill shadow"
              >
                Book Your Flight
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;