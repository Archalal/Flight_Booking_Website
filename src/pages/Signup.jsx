import React from "react";

const Signup = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div className="container">
        <div className="row shadow" style={{ borderRadius: "15px", overflow: "hidden" }}>
         

          <div className="col-md-6 p-5" style={{ backgroundColor: "white" }}>
            <h2
              className="text-center mb-4"
              style={{
                color: "#ff5a1d",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "600",
              }}
            >
            𝐒𝐢𝐠𝐧 𝐔𝐩
            </h2>
            <p className="text-center mb-4" style={{ color: "#6c757d" }}>
              Welcome ! SignUp to experience our service.
            </p>
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder=" Confirm  password"
                />
              </div>

              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    backgroundColor: "#ff5a1d",
                    border: "none",
                    padding: "8px 16px",
                    fontSize: "0.9rem",
                  }}
                >
                  Sign In
                </button>
              </div>

            

             
            </form>
          </div>
          <div className="col-md-6 p-0">
            <img
              src="https://cdn.pixabay.com/photo/2025/02/12/17/47/stewardess-9401950_1280.png"
              alt="Airplane"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;