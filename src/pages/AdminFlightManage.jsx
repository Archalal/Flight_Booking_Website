import React from 'react'
import SideBar from './SideBar'
import TotalFlight from '../component/TotalFlight'
// import { Button } from 'react-bootstrap'
// import Card from 'react-bootstrap/Card';
// import './AdminFlightManage.css';



const AdminFlightManage = () => {
  return (
    <div>
        <div>
      <div>
        <div className="w-100">
          <div className="row" style={{ background: "#f8f9fa" }}>
            <div
              className="col-2"
              style={{
                backgroundColor: "#ffffff",
                height: "100vh",
                position: "fixed",
                top: "0",
                left: "0",
                padding: "10px",
                color: "#525f7f",
                boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
                zIndex: "1",
              }}
            >
              <SideBar />
            </div>

            <div
              className="col-10"
              style={{
                marginLeft: "16.65%",
                overflowX: "hidden",
                backgroundColor: "#ffffff",
              }}
            >
          
             <TotalFlight />

    
     <div className='container'>
        <div>
          <h2 style={{ display: "block", fontWeight: "bold", color: "#090979", marginTop: "30px" }}>𝐅𝐥𝐢𝐠𝐡𝐭  Details</h2>
          <br />
       
        </div>
        
      </div>
      <div className='bg-white rounded shadow p-3' style={{ 
  background: "linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%)", 
  border: "1px solid #e0e0e0", 
  position: "relative", 
  overflow: "hidden" 
}}>
  <div className="row align-items-center">
    <div className="col-10">
      <div className="row mb-3">
        <div className="col-1">
          <img src="https://logos-world.net/wp-content/uploads/2023/01/AirAsia-Logo-2002.png" alt="" width={"100%"} className="rounded" />
        </div>
        <div className="col-5" style={{ textAlign: "center" }}>
          <h4 className='fw-bolder mb-1'>16:45 - 19:45</h4>
          <span style={{ fontSize: "12px", color: "#6c757d" }}>TRV (Thiruvanthapuram) - DXB (Dubai)</span>
        </div>
        <div className="col">
          <h6 className='fw-bolder text-success'>Direct</h6>
        </div>
        <div className="col">
          <h6 className='fw-bolder'>4h 30m</h6>
        </div>
      </div>
      <div className="row">
        <div className="col-1">
          <img src="https://logos-world.net/wp-content/uploads/2023/01/AirAsia-Logo-2002.png" alt="" width={"100%"} className="rounded" />
        </div>
        <div className="col-5" style={{ textAlign: "center" }}>
          <h4 className='fw-bolder mb-1'>17:40 - 23:35</h4>
          <span style={{ fontSize: "12px", color: "#6c757d" }}>DXB (Dubai) - TRV (Thiruvanthapuram)</span>
        </div>
        <div className="col">
          <h6 className='fw-bolder text-success'>Direct</h6>
        </div>
        <div className="col">
          <h6 className='fw-bolder'>4h 30m</h6>
        </div>
      </div>
    </div>
    <div className="col-2" style={{ textAlign: "center" }}>
      <h4 className='fw-bolder text-danger'>40,532</h4>
      <h6 className='fw-bolder text-danger'>Business Class</h6>
      <p style={{ fontSize: "12px", color: "#6c757d",fontWeight:"bold" }}>Seats: 50</p>
    </div>
  </div>
  <div style={{ 
    position: "absolute", 
    top: "-50px", 
    right: "-50px", 
    width: "100px", 
    height: "100px", 
    background: "#008080", 
    borderRadius: "50%", 
    zIndex: "0" 
  }}></div>
  <div style={{ 
    position: "absolute", 
    bottom: "-50px", 
    left: "-50px", 
    width: "100px", 
    height: "100px", 
    background: "#660066", 
    borderRadius: "50%", 
    zIndex: "0" 
  }}></div>
</div>





      <div className=' mt-5 bg-white rounded shadow p-3 mb-5' style={{ 
  background: "linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%)", 
  border: "1px solid #e0e0e0", 
  position: "relative", 
  overflow: "hidden" 
}}>
  <div className="row align-items-center">
    <div className="col-10">
      <div className="row mb-3">
        <div className="col-1">
          <img src="https://logos-world.net/wp-content/uploads/2023/01/AirAsia-Logo-2002.png" alt="" width={"100%"} className="rounded" />
        </div>
        <div className="col-5" style={{ textAlign: "center" }}>
          <h4 className='fw-bolder mb-1'>16:45 - 19:45</h4>
          <span style={{ fontSize: "12px", color: "#6c757d" }}>TRV (Thiruvanthapuram) - DXB (Dubai)</span>
        </div>
        <div className="col">
          <h6 className='fw-bolder text-success'>Direct</h6>
        </div>
        <div className="col">
          <h6 className='fw-bolder'>4h 30m</h6>
        </div>
      </div>
      
    </div>
    <div className="col-2" style={{ textAlign: "center" }}>
      <h4 className='fw-bolder text-danger'>40,532</h4>
      <h6 className='fw-bolder text-danger'>Premium Economy</h6>
      <p style={{ fontSize: "12px", color: "#6c757d",fontWeight:"bold"  }}>Seats: 50</p>
    </div>
  </div>
  <div style={{ 
    position: "absolute", 
    top: "-50px", 
    right: "-50px", 
    width: "100px", 
    height: "100px", 
    background: "#660066", 
    borderRadius: "50%", 
    zIndex: "0" 
  }}></div>
  <div style={{ 
    position: "absolute", 
    bottom: "-50px", 
    left: "-50px", 
    width: "100px", 
    height: "100px", 
    background: "#008080", 
    borderRadius: "50%", 
    zIndex: "0" 
  }}></div>
</div>

     


 


</div>
            
          </div>
        
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default AdminFlightManage
