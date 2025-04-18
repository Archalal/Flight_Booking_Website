import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/allApi";



const Signup = () => {
  const navigate=useNavigate()
 const[userData,setUserData]=useState({
  name:"",
  image:"",
  email:"",
  dob:"",
  phoneNumber:"",
  address:"",
  password:""

 })
 const[validEmail,setValidEmail]=useState(false)
 const[validNumber,setValidNumber]=useState(false)

 console.log(userData);
 const[confirmPassword,setConfirmPassword]=useState("")
 console.log(confirmPassword);
 

 const onRegisterSubmit=async(e)=>{
  e.preventDefault(); // Prevent default form submission

  if(userData.name&&userData.image&&userData.email&&userData.dob&&userData.phoneNumber&&userData.address&&userData.password&&confirmPassword){
  
 try{
  if(userData.email.endsWith('@gmail.com')) {
    setValidEmail(true)
   if(userData.phoneNumber.length==10){
    setValidNumber(true)
    if(userData.password===confirmPassword){

      const payload = new FormData();
      payload.append("name",userData.name)
      payload.append("image",userData.image)
      payload.append("email",userData.email)
      payload.append("dob",userData.dob)
      payload.append("phoneNumber",userData.phoneNumber)
      payload.append("address",userData.address)
      payload.append("password",userData.password)
      console.log(payload);
      
  
      const reqHeaders={
        "Content-Type":"multipart/form-data"
      }
     
      const apiResponse= await registerUser(payload,reqHeaders)
    if(apiResponse.status==200){
      alert("Registered sucessful")
      navigate('/login')
    }
    else{
      alert("already registered please login")
      navigate('/login')
    }
      
    
  }else{
    alert("password doesn't match")

  }

   }else{
    setValidNumber(false)
    
   }

  }else{
    setValidEmail(false)
    alert("please fill valid email Id")
  }
  
 }
 catch(err){
  console.log(err);
  
 }
   

  }else{
    alert("fill the form")
  }
 }
 

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
                onChange={((e)=>(setUserData({...userData,name:e.target.value})))}
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your full name"
                  style={{ borderRadius: "7px", padding: "5px", width: "100%" }}
                />
              </div>

              <div className="mb-2">
                <label htmlFor="picture" className="form-label" style={{ fontWeight: "500" }}>
                  Picture
                </label>
                <input
                onChange={((e)=>(setUserData({...userData,image:e.target.files[0]})))}
                  type="file"
                  className="form-control"
                  id="picture"
                  style={{ borderRadius: "7px", padding: "5px", width: "100%" }}
                />
              </div>

              <div className="mb-2">
              <label style={{ fontWeight: "500" }}>
              Email address
             </label>
                <input
                 onChange={((e)=>(setUserData({...userData,email:e.target.value})))}
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  style={{ borderRadius: "7px", padding: "5px", width: "100%" }}
                 
                />
                 {
                   validEmail?"":<span style={{color:"red"}}>Enter valid email id</span>
                  }
              </div>

              <div className="mb-2">
                <label htmlFor="dob" className="form-label" style={{ fontWeight: "500" }}>
                  Date of Birth
                </label>
                <input
                 onChange={((e)=>(setUserData({...userData,dob:e.target.value})))}
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
                 onChange={((e)=>(setUserData({...userData,phoneNumber:e.target.value})))}
                  type="tel"
                  className="form-control"
                  id="number"
                  placeholder="Enter your Phone Number"
                  style={{ borderRadius: "7px", padding: "5px", width: "100%" }}
                />
                  {
                    validNumber?"":<span style={{color:"red"}}>Enter valid  Number</span>
                  }
              </div>

              <div className="mb-2">
                <label htmlFor="address" className="form-label" style={{ fontWeight: "500" }}>
                  Address
                </label>
                <input
                 onChange={((e)=>(setUserData({...userData,address:e.target.value})))}
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
                 onChange={((e)=>(setUserData({...userData,password:e.target.value})))}
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
                onChange={((e)=>(setConfirmPassword(e.target.value)))}
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  style={{ borderRadius: "7px", padding: "5px", width: "100%" }}
                />
              </div>

            

              <div className="d-grid">
                <button
                onClick={onRegisterSubmit}
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
                <Link to={'/login'} style={{ color: "#ff5a1d" }}> Login</Link>  
              </div>
            </form>
          </div>

          <div className="col-md-5 p-0">
            <img
              src="https://cdn.pixabay.com/photo/2025/02/12/17/47/stewardess-9401950_1280.png"
              alt="Airplane"
              style={{ width: "100%", height: "70%", objectFit: "cover", marginTop: "90px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;