import React from 'react'
import { Link } from 'react-router-dom'


const SideBar = () => {
  return (
    <div>
         <div
           
          >
            <h2 style={{ color: "#ff5a1d",textAlign:"center" }}>
            {['A', 'E', 'R', 'O', 'V', 'I', 'S', 'T', 'A'].map((letter, index) => (
              <span
                key={index}
                style={{
                  border: '1px solid #ff3a0d',
                  padding: '2px 6px',
                  gap:"1px",
                  backgroundColor: '#ff5a1d',
                  color: 'white',
                  borderRadius: '3px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  cursor: 'pointer',
                  marginLeft:"1px"
               
                }}
              >
                {letter}
              </span>
            ))}
            <hr></hr>
            </h2>
            <ul style={{ listStyle: "none", padding: "0",marginTop:"30px",marginLeft:"1px" }}>
              <li style={{ margin: "15px 0" ,marginTop:"40px"}}>
             
                <Link  to={'/admindashboard'} style={{ color: "#525f7f", textDecoration: "none" ,fontWeight:"bolder",fontSize:"20px", letterSpacing: "2px", color:"black"}}>
               DashBoard
                </Link>
              </li>
              <li style={{ margin: "15px 0",marginTop:"40px" }}>
             
             <Link to={ "/useradminmanage"} style={{ color: "#525f7f", textDecoration: "none" ,fontWeight:"bolder",fontSize:"20px", letterSpacing: "2px",color:"black"}}>
           User
             </Link>
           </li>
           <li style={{ margin: "15px 0" ,marginTop:"40px"}}>
             
             <Link  to={'/admindashboard'} style={{ color: "#525f7f", textDecoration: "none" ,fontWeight:"bolder",fontSize:"20px", letterSpacing: "2px",color:"black"}}>
            Flights
             </Link>
           </li>
           <li style={{ margin: "15px 0",marginTop:"40px" }}>
             
             <Link  to={'/admindashboard'} style={{ color: "#525f7f", textDecoration: "none" ,fontWeight:"bolder",fontSize:"20px", letterSpacing: "2px",color:"black"}}>
             Booking
             </Link>
           </li>
           <li style={{ margin: "15px 0",marginTop:"40px" }}>
             
             <Link  to={'/admindashboard'} style={{ color: "#525f7f", textDecoration: "none" ,fontWeight:"bolder",fontSize:"20px", letterSpacing: "2px",color:"black"}}>
             Revenue
             </Link>
           </li>
           <li style={{ margin: "15px 0",marginTop:"40px" }}>
             
             <Link  to={'/admindashboard'} style={{ color: "#525f7f", textDecoration: "none" ,fontWeight:"bolder",fontSize:"20px", letterSpacing: "2px",color:"black"}}>
             Logout
             </Link>
           </li>
            </ul>
          </div>
      
    </div>
  )
}

export default SideBar
