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
             
                <Link  to={'/admin'} style={{ color: "black", textDecoration: "none" ,fontWeight:"bolder",fontSize:"17px", letterSpacing: "2px"}}>
                <i class="fa-solid fa-house"></i><span className='ms-2'>OverView</span>
                </Link>
              </li>
              <li style={{ margin: "15px 0",marginTop:"50px" }}>
             
             <Link to={ "/admin/useradminmanage"} style={{ color: "black", textDecoration: "none" ,fontWeight:"bolder",fontSize:"17px", letterSpacing: "2px"}}>
             <i class="fa-solid fa-user"></i><span className='ms-2'>Users Manage</span>
             </Link>
           </li>
           <li style={{ margin: "15px 0" ,marginTop:"50px"}}>
             
             <Link  to={'/admin/adminflightmanage'} style={{ color: "black", textDecoration: "none" ,fontWeight:"bolder",fontSize:"17px", letterSpacing: "2px"}}>
             <i class="fa-solid fa-plane-departure"></i><span className='ms-2'>Flight details</span>
             </Link>
           </li>
           <li style={{ margin: "15px 0",marginTop:"50px" }}>
             
             <Link  to={'/admin/bookingflights'} style={{ color: "black", textDecoration: "none" ,fontWeight:"bolder",fontSize:"17px", letterSpacing: "2px"}}>
             <i class="fa-solid fa-cart-shopping"></i> <span className='ms-2'>Booking Flights</span>
             </Link>
           </li>

           <li style={{ margin: "15px 0",marginTop:"50px" }}>
             
             <Link  to={'/admin/adminstaffadd'} style={{ color: "black", textDecoration: "none" ,fontWeight:"bolder",fontSize:"17px", letterSpacing: "2px"}}>
             <i class="fa-solid fa-right-from-bracket"></i> <span className='ms-2'>Staff Add</span>
             </Link>
           </li>
           <li style={{ margin: "15px 0",marginTop:"50px" }}>
             
             <Link  to={'/admin/revenue'} style={{ color: "black", textDecoration: "none" ,fontWeight:"bolder",fontSize:"17px", letterSpacing: "2px"}}>
             <i class="fa-solid fa-sack-dollar"></i>  <span className='ms-2'>Revenue Details</span>
             </Link>
           </li>
           <li style={{ margin: "15px 0",marginTop:"50px" }}
           >
             
             <Link  to={'/'} style={{ color: "black", textDecoration: "none" ,fontWeight:"bolder",fontSize:"17px", letterSpacing: "2px"}}>
             <i class="fa-solid fa-right-from-bracket"></i> <span className='ms-2'>Logout</span>
             </Link>
           </li>
            </ul>
          </div>
      
    </div>
  )
}

export default SideBar
