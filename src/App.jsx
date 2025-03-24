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
import UserTicketBooking from './pages/UserTicketBooking'
import SearchTicketByUser from './pages/SearchTicketByUser'
import FlightTicket from './component/FlightTicket'
import BookedFlight from './pages/BookedFlight'
import FlightDashboard from './pages/FlightDashboard'
import AddFlights from './pages/AddFlights'






function App() {
 

  return (
    <>
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
      <Route element={<UserTicketBooking />} path='/userticketbooking'></Route>
      <Route element={<SearchTicketByUser />} path='/searchticketbyuser'></Route>
      <Route element={<FlightTicket />} path='/flightticket'></Route>
      <Route element={<BookedFlight />} path='/bookedflight'></Route>
      <Route element={<FlightDashboard />} path='/flightdashboard'></Route>
      <Route element={<AddFlights />} path='/addflights'></Route>
   
      
    
      
    </Routes>
    </>
  )
}

export default App
