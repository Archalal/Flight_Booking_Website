import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle successful Google login
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      console.log(decoded)
      // In production, you would send this to your backend
      const userData = {
        email: decoded.email,
        name: decoded.name,
        role: document.getElementById('role').value || "user"
      };
    
      
      console.log("User data:", userData);
      navigate("/dashboard");
      
    } catch (error) {
      console.error("Error processing Google login:", error);
      setError("Failed to process Google login");
    }
  };

  // Handle Google login failure
  const handleGoogleFailure = () => {
    setError("Google login failed. Please try again.");
  };

  // Handle Email/Password Login
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError("");
    
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const role = document.getElementById('role').value;
      console.log("Email login attempt:", { email, password, role });
      
      // Simulate successful login
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      setError(error.message);
    }
  };

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
              alt="Login"
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
            
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            
            <GoogleOAuthProvider 
        clientId="606492950601-4tmq4mpaetsn7f1eusdg3rfiakmo3id7.apps.googleusercontent.com"
      >
        <div className="d-grid mb-4">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleFailure}
            useOneTap
            auto_select
            width="300"
            size="large"
            text="continue_with"
            shape="rectangular"
            theme="outline"
          />
        </div>
      </GoogleOAuthProvider>
            <div className="position-relative mb-4">
              <div 
                style={{
                  borderTop: "1px solid #ddd",
                  position: "relative",
                }}
              >
                <span 
                  style={{
                    backgroundColor: "white",
                    position: "absolute",
                    top: "-10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    padding: "0 10px",
                    color: "#6c757d",
                    fontSize: "14px",
                  }}
                >
                  OR
                </span>
              </div>
            </div>

            <form onSubmit={handleEmailLogin}>
              <div className="mb-2">
                <label htmlFor="role" className="form-label" style={{ fontWeight: "500" }}>
                  Role
                </label>
                <select
                  className="form-control"
                  id="role"
                  defaultValue=""
                  style={{ borderRadius: "7px", padding: "5px", width: "100%" }}
                  required
                >
                  <option value="" disabled hidden>
                    Choose Your role
                  </option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>
              
              <div className="mb-3">
                <label htmlFor="email" className="form-label" style={{ fontWeight: "500" }}>
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label" style={{ fontWeight: "500" }}>
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    backgroundColor: "#ff5a1d",
                    border: "none",
                    padding: "7px",
                    fontSize: "0.9rem",
                    width: "200px",
                    margin: "0 auto"
                  }}
                >
                  Sign In
                </button>
              </div>

              <div className="text-center mt-3">
                <Link to={'/forgetpassword'} style={{ color: "#ff5a1d" }}>Forget password?</Link>
              </div>

              <div className="text-center mt-3">
                <span>Don't have an account? </span>
                <Link to={'/signup'} style={{ color: "#ff5a1d" }}>Register here</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;