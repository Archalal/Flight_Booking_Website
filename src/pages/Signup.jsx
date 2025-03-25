import React from "react";

const Signup = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8f9fa",
        padding: "28px 0",
        
      }}
    >
      <div className="container">
        <div className="row shadow-lg" style={{ borderRadius: "20px", overflow: "hidden" }}>
          <div
            className="col-md-7 p-3"
            style={{
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center", 
              justifyContent: "center", 
            }}
          >
            <h2
              className="text-center mb-1"
              style={{
                color: "#ff5a1d",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "700",
                fontSize: "2rem",
              }}
            >
              𝐂𝐫𝐞𝐚𝐭𝐞 𝐀𝐧 𝐀𝐜𝐜𝐨𝐮𝐧𝐭
            </h2>
            <p className="text-center mb-4" style={{ color: "#6c757d", fontSize: "0.80rem" }}>
              Welcome! Sign up to experience our service.
            </p>
            <form style={{ width: "70%", maxWidth: "400px" }}> 
      
             

              <div className="mb-2">
                <label htmlFor="name" className="form-label" style={{ fontWeight: "500" }}>
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your full name"
                  style={{ borderRadius: "7px", padding: "5px", width: "100%" }}
                />
              </div>


              <div className="mb-2">
                <label htmlFor="name" className="form-label" style={{ fontWeight: "500" }}>
                  Picture
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="name"
                  placeholder="Enter your full name"
                  style={{ borderRadius: "7px", padding: "5px", width: "100%" }}
                />
              </div>

           
              <div className="mb-2">
                <label htmlFor="email" className="form-label" style={{ fontWeight: "500" }}>
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  style={{ borderRadius: "7px", padding: "5px", width: "100%" }}
                />
              </div>

          
              <div className="mb-2">
                <label htmlFor="dob" className="form-label" style={{ fontWeight: "500" }}>
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="dob"
                  style={{ borderRadius: "7px", padding: "5px", width: "100%" }}
                />
              </div>
              
              <div className="mb-2">
                <label htmlFor="number" className="form-label" style={{ fontWeight: "500" }}>
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="number"
                   placeholder="Enter your Phone Number"
                  style={{ borderRadius: "7px", padding: "5px", width: "100%" }}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="address" className="form-label" style={{ fontWeight: "500" }}>
                  Enter Your Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                   placeholder="Enter your Address"
                  style={{ borderRadius: "7px", padding: "5px", width: "100%" }}
                />
              </div>
              

            
              <div className="mb-2">
                <label htmlFor="password" className="form-label" style={{ fontWeight: "500" }}>
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  style={{ borderRadius: "7px", padding: "5px", width: "100%" }}
                />
              </div>

            
              <div className="mb-2">
                <label htmlFor="confirmPassword" className="form-label" style={{ fontWeight: "500" }}>
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  style={{ borderRadius: "7px", padding: "5px", width: "100%" }}
                />
              </div>

             
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn mt-3"
                  style={{
                    backgroundColor: "#ff5a1d",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    padding: "6px",
                    fontSize: "1rem",
                    fontWeight: "600",
                    transition: "background-color 0.3s ease",
                    width: "50%",
                 margin: "0 auto"

                  
                  }}
                
                >
                  Sign Up
                </button>
              </div>

             
              <div className="text-center mt-4">
                <span style={{ color: "#6c757d" }}>Already have an account? </span>
                <a href="#login" style={{ color: "#ff5a1d", fontWeight: "500" }}>
                  Login here
                </a>
              </div>
            </form>
          </div>

         
          <div className="col-md-5 p-0">
            <img
              src="https://cdn.pixabay.com/photo/2025/02/12/17/47/stewardess-9401950_1280.png"
              alt="Airplane"
              style={{ width: "100%", height: "70%", objectFit: "cover",marginTop:"90px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;