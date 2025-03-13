import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

import Login from './pages/Login'
import Signup from './pages/Signup'
// import './App.css';




function App() {
 

  return (
    <>
    <Routes>
      <Route element={<Home />} path='/'></Route>
      <Route element={<Login />} path='/login'></Route>
      <Route element={<Signup />} path='/signup'></Route>
     
    </Routes>
    </>
  )
}

export default App
