import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
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
          <div className="col-md-6 p-0">
            <img
              src="https://cdn.pixabay.com/photo/2016/11/02/10/04/brooklyn-bridge-1791001_1280.jpg"
              alt="Airplane"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div className="col-md-6 p-5" style={{ backgroundColor: "white" }}>
            <h2
              className="text-center mb-4"
              style={{
                color: "#ff5a1d",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "600",
              }}
            >
              𝐋𝐨𝐠𝐢𝐧
            </h2>
            <p className="text-center mb-4" style={{ color: "#6c757d" }}>
              Welcome back! Login to experience our service.
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

              <div className="text-center mt-3">
                <a href="#forgot-password" style={{ color: "#ff5a1d" }}>
                  Forgot password?
                </a>
              </div>

              <div className="text-center mt-3">
                <span>Don't have an account? </span>
                <Link to={'/signup'} style={{ color: "#ff5a1d" }}>    Register here</Link>
               
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;