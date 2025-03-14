import React from 'react'
import { Link } from 'react-router-dom'


const SideBar = () => {
  return (
    <div>
         <div
           
          >
            <h2 style={{ color: "#ff5a1d" }}>AeroVista</h2>
            <ul style={{ listStyle: "none", padding: "0",marginTop:"30px" }}>
              <li style={{ margin: "15px 0" ,marginTop:"40px"}}>
             
                <Link  to={'/admindashboard'} style={{ color: "#525f7f", textDecoration: "none" ,fontFamily:"cursive",fontWeight:"bolder",fontSize:"20px", letterSpacing: "2px", color:"black"}}>
                <i class="fa-regular fa-heart"></i> DashBoard
                </Link>
              </li>
              <li style={{ margin: "15px 0",marginTop:"40px" }}>
             
             <Link  to={'/admindashboard'} style={{ color: "#525f7f", textDecoration: "none" ,fontFamily:"cursive",fontWeight:"bolder",fontSize:"20px", letterSpacing: "2px",color:"black"}}>
             <i class="fa-regular fa-user"></i> User
             </Link>
           </li>
           <li style={{ margin: "15px 0" ,marginTop:"40px"}}>
             
             <Link  to={'/admindashboard'} style={{ color: "#525f7f", textDecoration: "none" ,fontFamily:"cursive",fontWeight:"bolder",fontSize:"20px", letterSpacing: "2px",color:"black"}}>
             <i class="fa-solid fa-plane-up"></i>Flights
             </Link>
           </li>
           <li style={{ margin: "15px 0",marginTop:"40px" }}>
             
             <Link  to={'/admindashboard'} style={{ color: "#525f7f", textDecoration: "none" ,fontFamily:"cursive",fontWeight:"bolder",fontSize:"20px", letterSpacing: "2px",color:"black"}}>
             Booking
             </Link>
           </li>
           <li style={{ margin: "15px 0",marginTop:"40px" }}>
             
             <Link  to={'/admindashboard'} style={{ color: "#525f7f", textDecoration: "none" ,fontFamily:"cursive",fontWeight:"bolder",fontSize:"20px", letterSpacing: "2px",color:"black"}}>
             Revenue
             </Link>
           </li>
           <li style={{ margin: "15px 0",marginTop:"40px" }}>
             
             <Link  to={'/admindashboard'} style={{ color: "#525f7f", textDecoration: "none" ,fontFamily:"cursive",fontWeight:"bolder",fontSize:"20px", letterSpacing: "2px",color:"black"}}>
             <i class="fa-solid fa-right-from-bracket"></i>logout
             </Link>
           </li>
            </ul>
          </div>
      
    </div>
  )
}

export default SideBar
