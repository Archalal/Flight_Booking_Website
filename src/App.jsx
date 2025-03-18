import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AdminDashBoard from './pages/AdminDashBoard'
import UserAdminManage from './pages/UserAdminManage'
import AdminFlightManage from './pages/AdminFlightManage'





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
    
      
    </Routes>
    </>
  )
}

export default App
