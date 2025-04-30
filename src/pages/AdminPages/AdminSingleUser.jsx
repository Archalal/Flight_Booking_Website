import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { getSingleUserId } from '../../../services/allApi';
import baseURL from '../../../services/baseURL';



const AdminSingleUser = () => {
  const navigate = useNavigate();
  const[singleUserData,setSingleUserData]=useState({})

  useEffect(()=>{
    singleUser()
  },[])

 let userSingleId= sessionStorage.getItem("singleUserId")
 console.log(userSingleId);

 const singleUser=async()=>{
  const apiResponse=await getSingleUserId(userSingleId)
  
  if(apiResponse.status==200){
    setSingleUserData(apiResponse.data)

  }
  else{
    console.log("something went wrong");
    
  }
  
 }
 

  

  return (
    <div className="min-vh-100 d-flex flex-column" style={{ 
      backgroundColor: '#f0f2f5',
      backgroundImage: 'radial-gradient(at top right, #e6e9f0 0%, #f0f2f5 70%)'
    }}>
    
      
      <div className="container py-4 flex-grow-1 d-flex align-items-center">
        <div className="row justify-content-center w-100">
          <div className="col-xl-9">
            {/* Darker Gradient Card */}
            <div className="card border-0 shadow-lg mx-auto overflow-hidden" style={{ 
              borderRadius: '14px',
              maxWidth: '1000px',
              border: '1px solid rgba(0,0,0,0.05)',
              background: 'linear-gradient(to bottom right, #ffffff 0%, #f8f9fa 100%)',
              boxShadow: '0 12px 35px -10px rgba(0,0,0,0.15)'
            }}>
              {/* Card Header with Dark Gradient and Back Button */}
              <div className="card-header py-3 px-4 border-0 d-flex justify-content-between align-items-center" style={{ 
                background: 'linear-gradient(135deg, #5a4fcf 0%, #3a2e8f 100%)',
                color: 'white'
              }}>
                <button 
                  onClick={() => navigate(-1)}
                  className="btn btn-outline-light btn-sm d-flex align-items-center"
                  style={{
                    borderRadius: '20px',
                    padding: '0.25rem 0.75rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <i className="bi bi-arrow-left me-1"></i>
                  Back
                </button>
                <h3 className="mb-0 fw-semibold text-center flex-grow-1">
                  <i className="bi bi-person-rolodex me-2"></i>
                  User Profile Management
                </h3>
                <span className="badge bg-white text-dark opacity-85" style={{ minWidth: '85px' }}>Admin View</span>
              </div>
              
              <div className="card-body p-4 p-xl-5">
                <div className="row align-items-center">
                  {/* Profile Image with Darker Frame */}
                  <div className="col-md-5 text-center mb-4 mb-md-0">
                    <div className="position-relative d-inline-block">
                      <div style={{
                        width: '240px',
                        height: '240px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #8e54e9 0%, #4776E6 100%)',
                        padding: '6px',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
                      }}>
                        <img
                          src={`${baseURL}/uploads/${singleUserData.image}`}
                          alt="Profile"
                          className="img-fluid rounded-circle border border-4 border-white"
                          style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* User Details with Darker Gradient Icons */}
                  <div className="col-md-7">
                    <div className="user-details ps-xl-4">
                      <h2 className="mb-4" style={{ 
                        background: 'linear-gradient(135deg, #5a4fcf 0%, #3a2e8f 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: '600'
                      }}>
                      {singleUserData.name}
                      </h2>
                      
                      <div className="detail-item mb-3 p-3 rounded" style={{
                        background: 'rgba(255,255,255,0.8)',
                        backdropFilter: 'blur(5px)',
                        border: '1px solid rgba(0,0,0,0.08)'
                      }}>
                        <div className="d-flex align-items-center">
                          <div className="icon-circle me-3" style={{ 
                            background: 'linear-gradient(135deg, #7b4fcf 0%, #a855f7 100%)'
                          }}>
                            <i className="bi bi-envelope-fill fs-5 text-white"></i>
                          </div>
                          <div>
                            <small className="text-muted d-block" style={{ fontSize: '0.8rem' }}>Email Address</small>
                            <span className="fw-medium">{singleUserData.email}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="detail-item mb-3 p-3 rounded" style={{
                        background: 'rgba(255,255,255,0.8)',
                        backdropFilter: 'blur(5px)',
                        border: '1px solid rgba(0,0,0,0.08)'
                      }}>
                        <div className="d-flex align-items-center">
                          <div className="icon-circle me-3" style={{ 
                            background: 'linear-gradient(135deg, #d946ef 0%, #a855f7 100%)'
                          }}>
                            <i className="bi bi-calendar-fill fs-5 text-white"></i>
                          </div>
                          <div>
                            <small className="text-muted d-block" style={{ fontSize: '0.8rem' }}>Date of Birth</small>
                            <span className="fw-medium">{singleUserData.dob}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="detail-item mb-3 p-3 rounded" style={{
                        background: 'rgba(255,255,255,0.8)',
                        backdropFilter: 'blur(5px)',
                        border: '1px solid rgba(0,0,0,0.08)'
                      }}>
                        <div className="d-flex align-items-center">
                          <div className="icon-circle me-3" style={{ 
                            background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)'
                          }}>
                            <i className="bi bi-geo-alt-fill fs-5 text-white"></i>
                          </div>
                          <div>
                            <small className="text-muted d-block" style={{ fontSize: '0.8rem' }}>Location</small>
                            <span className="fw-medium">{singleUserData.address}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="detail-item mb-4 p-3 rounded" style={{
                        background: 'rgba(255,255,255,0.8)',
                        backdropFilter: 'blur(5px)',
                        border: '1px solid rgba(0,0,0,0.08)'
                      }}>
                        <div className="d-flex align-items-center">
                          <div className="icon-circle me-3" style={{ 
                            background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'
                          }}>
                            <i className="bi bi-telephone-fill fs-5 text-white"></i>
                          </div>
                          <div>
                            <small className="text-muted d-block" style={{ fontSize: '0.8rem' }}>Contact Number</small>
                            <span className="fw-medium">{singleUserData.phoneNumber}</span>
                          </div>
                        </div>
                      </div>
                      
                    
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bootstrap Icons CSS */}
      <link 
        rel="stylesheet" 
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css" 
      />
      
      {/* Custom CSS */}
      <style jsx>{`
        .icon-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          boxShadow: 0 3px 8px rgba(0,0,0,0.15);
        }
        .detail-item {
          transition: all 0.3s ease;
        }
        .detail-item:hover {
          background: white !important;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          transform: translateY(-3px);
        }
        .detail-item:hover .icon-circle {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        }
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 7px 20px rgba(0,0,0,0.2);
        }
        .card-header .btn-outline-light:hover {
          background: rgba(255,255,255,0.1);
          transform: translateX(-2px);
        }
      `}</style>
    </div>
  );
};

export default AdminSingleUser;