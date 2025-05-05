import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { verifyUser } from "../../services/allApi";

const Login = () => {
  const[userVerify,setUserVerify]=useState({
    email:"",
    password:""
  })
  // const [error, setError] = useState("");
  const navigate = useNavigate();
  

  // Handle successful Google login
  const handleGoogleSuccess = async (credentialResponse) => {
    console.log(credentialResponse)
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      console.log(decoded)
  
      const userData = {
        email: decoded.email,
        name: decoded.name,
       
      };
        if(userData.email){
          let apiResponse= await verifyUser(userData)
          console.log(apiResponse.data);
          
          if(apiResponse.status==200){
            sessionStorage.setItem("token",apiResponse.data.token)
            sessionStorage.setItem("username",apiResponse.data.username)
            sessionStorage.setItem("role",apiResponse.data.role)
          
            if(apiResponse.data.role=="user"){
              navigate('/userdashboard')
            }
            else if(apiResponse.data.role=="staff"){
              navigate('/Flight')
            }
              
  

          }else{
            alert("invalid emailId/not registered")
          }
          
        
          
          
          
        }
      
      // console.log("User data:", userData);
     
      
    } catch (error) {
      console.error("Error processing Google login:", error);
      alert("Failed to process Google login");
    }
  };

  // Handle Google login failure
  const handleGoogleFailure = () => {
    alert("Google login failed. Please try again.");
  };

  // Handle Email/Password Login
  const handleEmailLogin = async (e) => {
    e.preventDefault();

    if(userVerify.email &&userVerify.password  ){
      let apiResponse= await verifyUser(userVerify)
      console.log(apiResponse.data);
      let token=sessionStorage.setItem("token",apiResponse.data.token)
      let name=sessionStorage.setItem("username",apiResponse.data.username)
    console.log(name);
    
      console.log(token)
      
     if(apiResponse.data.role=="admin"){
    
      navigate('/admin')
     }
     else if(apiResponse.data.role=="user"){
      navigate('/userdashboard')

     }
     else if(apiResponse.data.role=="flight"){
    

      navigate('/flightdashboard')

     }
     else{
      console.log("Not found please registeror invalid username/password");
      
     }
      

    }else{
      console.log("fill the form");
      
    }
  }
   
    
   
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
            
            
            
            <GoogleOAuthProvider 
        clientId="606492950601-4tmq4mpaetsn7f1eusdg3rfiakmo3id7.apps.googleusercontent.com"
      >
        <div className="d-grid mb-4">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleFailure}
            useOneTap
            auto_select
            width="100%"
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
             
              
              <div className="mb-3">
                <label htmlFor="email" className="form-label" style={{ fontWeight: "500" }}>
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={userVerify.email}
                  onChange={(e) => setUserVerify({...userVerify,email:e.target.value})}
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
                  value={userVerify.password}
                  onChange={(e) => setUserVerify({...userVerify,password:e.target.value})}
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