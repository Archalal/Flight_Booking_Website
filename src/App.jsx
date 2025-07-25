import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import SingleFlightView from './pages/SingleFlightView'
import DashBoardForUsers from './pages/DashBoardForUsers'
import SearchTicketByUser from './pages/SearchTicketByUser'
import FlightTicket from './component/FlightTicket'
import BookedFlight from './pages/BookedFlight'
import Payment from './pages/Payment'
import { ToastContainer } from 'react-toastify'
import UserFlightView from './pages/UserFlightView'
import ForgetPassword from './pages/ForgetPassword'
import Revenue from './component/Revenue'
import AboutUs from './pages/AboutUs'
import DashBoard from './pages/DashBoard'
import AdminDashBoard from './pages/AdminPages/AdminDashBoard'
import UserAdminManage from './pages/AdminPages/UserAdminManage'
import AdminFlightManage from './pages/AdminPages/AdminFlightManage'
import BookingFlights from './pages/AdminPages/BookingFlights'
import AdminRevenue from './pages/AdminPages/AdminRevenue'
import FlightDashboard from './pages/FlightPages/FlightDashboard'
import FlightOverview from './pages/FlightPages/FlightOverview'
import AddFlights from './pages/FlightPages/AddFlights'
import FlightViewByFlightDash from './pages/FlightPages/FlightViewByFlightDash'
import FlightBookingView from './pages/FlightPages/FlightBookingView'
import AdminStaffAdd from './pages/AdminPages/AdminStaffAdd'
import AdminSingleUser from './pages/AdminPages/AdminSingleUser'
import Notification from './pages/AdminPages/Notification'
import UserHistory from './pages/UserHistory'
import NotificationFlight from './pages/FlightPages/NotificationFlight'
import { useContext } from 'react'
import { LoginContext } from './component/Context/AuthContext'
import UserProfile from './pages/UserProfile'


function App() {
 
 const {isLoggined,setIsLoginned}=useContext(LoginContext)
  return (
    <>
     <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
// transition={Bounce}
/>
    <Routes>
   
      <Route element={<Home />} path='/'></Route>
      <Route element={<Login />} path='/login'></Route>
      <Route element={<Signup />} path='/signup'></Route>
      

      <Route path="/admin" element={isLoggined ? <AdminDashBoard /> : <Navigate to="/login" />}
>
      <Route index element={<DashBoard />} />  
      <Route path='useradminmanage' element={<UserAdminManage />} /> 
      <Route path='adminflightmanage' element={<AdminFlightManage />} />
      <Route path='bookingflights' element={<BookingFlights />} />
      <Route element={<AdminStaffAdd />} path='adminstaffadd'></Route>
      <Route element={<AdminSingleUser />} path='useradminmanage/:id/adminsingleuser'></Route>
      <Route element={<SingleFlightView />} path='useradminmanage/:id/singleflightview'></Route>
      <Route element ={<Notification />} path='notification'></Route>
      <Route path='revenue' element={<AdminRevenue />}/> 
    </Route>

     
     
     
    <Route path="/Flight" element={isLoggined ? <FlightDashboard /> : <Navigate to="/login" />}>
      <Route index element={<FlightOverview />} />
      <Route element={<AddFlights />} path='addflights'></Route>
      <Route element={<FlightViewByFlightDash />} path='flightviewbyFlightDash'></Route>
      <Route element={<FlightBookingView />} path='flightbookingview'></Route>
      <Route element={<AdminSingleUser />} path='flightbookingview/adminsingleuser'></Route>
      <Route element={<SingleFlightView />} path=':id/singleflightview'></Route>
      <Route element ={<NotificationFlight />} path='notification'></Route>
      <Route element={<Revenue />} path='revenue'></Route>
      </Route>

    
      <Route path="/userdashboard" element={isLoggined ? <DashBoardForUsers /> : <Navigate to="/login" />}></Route>
      {/* <Route element={<DashBoardForUsers />} path='/userdashboard'></Route> */}
      <Route path="/searchticketbyuser" element={<SearchTicketByUser />} />
      <Route element={<FlightTicket />} path='/flightticket'></Route>
      <Route element={<BookedFlight />} path='/bookedflight/:id'></Route>
      <Route element={<Payment />} path='/payment'></Route>
      <Route element={<UserFlightView />} path='/userflightview'></Route>
      <Route element={<ForgetPassword />} path='/forgetpassword'></Route>
      <Route element={<UserHistory />} path='/userhistory'></Route>
      <Route element={<AboutUs />} path='/aboutus'></Route>
      <Route element={<UserProfile />} path='/userprofile'></Route>
     
   
   
      
    
      
    </Routes>
    </>
  )
}

export default App
