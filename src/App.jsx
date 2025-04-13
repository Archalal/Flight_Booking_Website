import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AdminDashBoard from './pages/AdminDashBoard'
import UserAdminManage from './pages/UserAdminManage'
import AdminFlightManage from './pages/AdminFlightManage'
import BookingFlights from './pages/BookingFlights'
import SingleFlightView from './pages/SingleFlightView'
import DashBoardForUsers from './pages/DashBoardForUsers'
import SearchTicketByUser from './pages/SearchTicketByUser'
import FlightTicket from './component/FlightTicket'
import BookedFlight from './pages/BookedFlight'
import FlightDashboard from './pages/FlightDashboard'
import AddFlights from './pages/AddFlights'
import AdminSingleUser from './pages/AdminSingleUser'
import FlightBookingView from './pages/FlightBookingView'
import FlightViewByFlightDash from './pages/FlightViewByFlightDash'
import Payment from './pages/Payment'
import { ToastContainer } from 'react-toastify'
import UserFlightView from './pages/UserFlightView'
import ForgetPassword from './pages/ForgetPassword'
import Revenue from './component/Revenue'
import AboutUs from './pages/AboutUs'
import Auth from './pages/Auth'








function App() {
 

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
      <Route element={<AdminDashBoard />} path='/admindashboard'> </Route>
      <Route element={<UserAdminManage />} path='/useradminmanage'></Route>
      <Route element={<AdminFlightManage />} path='/adminflightmanage'></Route>
      <Route element={<BookingFlights /> } path='/bookingflights'></Route>
      <Route element={<SingleFlightView />} path='/singleflightview'></Route>
      <Route element={<DashBoardForUsers />} path='/userdashboard'></Route>
      <Route element={<SearchTicketByUser />} path='/searchticketbyuser'></Route>
      <Route element={<FlightTicket />} path='/flightticket'></Route>
      <Route element={<BookedFlight />} path='/bookedflight'></Route>
      <Route element={<FlightDashboard />} path='/flightdashboard'></Route>
      <Route element={<AddFlights />} path='/addflights'></Route>
      <Route element={<AdminSingleUser />} path='/adminsingleuser'></Route>
      <Route element={<FlightBookingView />} path='/flightbookingview'></Route>
      <Route element={<FlightViewByFlightDash />} path='/flightviewbyFlightDash'></Route>
      <Route element={<Payment />} path='/payment'></Route>
      <Route element={<UserFlightView />} path='/userflightview'></Route>
      <Route element={<ForgetPassword />} path='/forgetpassword'></Route>
      <Route element={<Revenue />} path='/revenue'></Route>
      <Route element={<AboutUs />} path='/aboutus'></Route>
     
   
   
      
    
      
    </Routes>
    </>
  )
}

export default App
