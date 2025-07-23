import React, { useEffect, useState } from 'react';
import './UserProfile.css';
import { findByUser } from '../../services/allApi';
import baseURL from '../../services/baseURL';
import UserDashNav from '../component/UserDashNav';


const UserProfile = () => {

  const[data,setData]=useState({})
  const[updatedData,setUpdatedData]=useState({
    id:"",
    name:"",
    email: '',
    image:"",
    dob: '',
    phoneNumber: '',
    address: '',
    password: '',
  
  })
  const[preview,setPreview]=useState('')
  console.log(updatedData.name);
  console.log(updatedData.image);
  
  

  useEffect(()=>{
    updateUser()
  },[])
  console.log(data);
  useEffect(() => {
    if (data?.name) {
      setUpdatedData({
        id:data._id,
        name: data.name || '',
        email: data.email || '',
        image:data.image||"",
        dob: data.dob || '',
        phoneNumber: data.phoneNumber || '',
        address: data.address || '',
        password:data.password|| '',
       
      });
    }
  }, [data]);
  useEffect(()=>{
    if(updatedData.image){
        if(updatedData.image.type=="image/jpeg" || updatedData.image.type=="image/png"||updatedData.image.type=="image/jpeg"){
      
     setPreview(URL.createObjectURL(updatedData.image))
        }
    }
  },[updatedData.image])
  

  const updateUser=async()=>{
    let token=sessionStorage.getItem("token")
   
    try{
       let reqHeaders={
      "Authorization":`Bearer ${token}`
    }
      let apiResponse= await findByUser(reqHeaders)
      setData(apiResponse.data);
      

    }catch{
      alert("Something went wrong")
    }
  }

  const allUpdatedData=async()=>{
    if(updatedData.name&&updatedData.email&&updatedData.image&&updatedData.dob&&updatedData.phoneNumber&&updatedData.address&&updatedData.password){
      {
        console.log("hi");
        
      }
    }
  }
  
  return (
    <div>
      <UserDashNav />
      <div className="profile-container">
      <div className="profile-card">
        <div className="avatar-section">
          <div className="avatar">
            
             <label>
               <input type="file" 
             
                    style={{ display: "none" }}
                    onChange={(e) =>
                      setUpdatedData({
                        ...updatedData,
                        image: e.target.files[0],
                      })
                    }/><img src={preview||`${baseURL}/uploads/${data.image}`} alt="" width={"100%"} />
             </label>
          </div>
        </div>
        
        <div className="header-text">
          <h2>Update Profile</h2>
          <p>Keep your information up to date</p>
        </div>

      {
        data?.name?
          <form className="profile-form">
          <div className="input-group">
            <label>Full Name</label>
            <div className="input-field">
              <span>👤</span>
              <input
              value={updatedData.name}
              onChange={(e)=>{
                setUpdatedData({...updatedData,name:e.target.value})
              }}
               type="text" placeholder="Enter your name" />
               
            </div>
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <div className="input-field">
              <span>✉️</span>
              <input type="email" placeholder="enter your email addres"
                value={data.email}
              // onChange={(e)=>{
              //   setUpdatedData({...updatedData,email:e.target.value})
              // }}
               />
            </div>
          </div>
          <div className="input-group">
            <label>Date of Birth</label>
            <div className="input-field">
              <span>✉️</span>
              <input type="date" placeholder=""
                value={updatedData.dob}
              onChange={(e)=>{
                setUpdatedData({...updatedData,dob:e.target.value})
              }}/>
            </div>
          </div>
          <div className="input-group">
            <label>Phone Number</label>
            <div className="input-field">
              <span>✉️</span>
              <input type="number" placeholder="Enter your phone number"
               value={updatedData.phoneNumber}
              onChange={(e)=>{
                setUpdatedData({...updatedData,phoneNumber:e.target.value})
              }} />
            </div>
          </div>
          <div className="input-group">
            <label> Address</label>
            <div className="input-field">
              <span>✉️</span>
              <input type="text" placeholder="Enter your Address"
                value={updatedData.address}
              onChange={(e)=>{
                setUpdatedData({...updatedData,address:e.target.value})
              }} />
            </div>
          </div>

          <div className="input-group">
            <label>New Password</label>
            <div className="input-field">
              <span>🔒</span>
              <input 
               value={updatedData.password}
              onChange={(e)=>{
                setUpdatedData({...updatedData,password:e.target.value})
              }}
             
              
              type="password" placeholder="••••••••" />
            </div>
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <div className="input-field">
              <span>🔒</span>
              <input type="password" placeholder="••••••••" />
            </div>
          </div>

          <button type="submit">Save Changes</button>
        </form>:""
      }
      </div>
    </div>
    </div>
  );
};

export default UserProfile;