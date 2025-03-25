import React from 'react'
import Header from '../component/Header'

const AdminSingleUser = () => {
  return (
    <div>
        <Header />
          <div className="container my-2">

      <div className="row gx-4 gx-lg-5 align-items-center">
        
        <div className="col-md-6">
          <img
            className="img-fluid rounded"
            src="https://static.vecteezy.com/system/resources/previews/024/558/262/non_2x/businessman-isolated-illustration-ai-generative-free-png.png"
            alt="Product"
            style={{ maxHeight: "600px", width: "100%", objectFit: "cover" }}
          />
        </div>

     
       
        <div className="col-md-6">
        
          <h1 className=" fs-3 fw-bold mb-4">Name   :   <span className='text-danger'>Philip</span></h1>
          <div className="fs-3 mb-4 ">
          <h4 className='mb-4'>Email   :     philip2gmail.com</h4>
          <h5 className='mb-4'>DOB     :     31/07/2000</h5>
          <h5 className='mb-4'>Address :     Tvm,India</h5>
          <h5 className='mb-4'>PhoneNumber  :  +91 6735738922</h5>
          </div>
          <p className="lead mb-4"></p>

         
          <div className="d-flex align-items-center gap-3 mt-5">
            
            <button
              className="btn btn-warning btn-lg flex-shrink-0"
        
            >
              <i className="bi-cart-fill me-1"></i>
            Accept 
            </button>
            <button
              className="btn btn-outline-danger btn-lg flex-shrink-0"
             
            
            >
              <i className="bi-cart-fill me-1"></i>
                Reject
            </button>
          
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default AdminSingleUser
