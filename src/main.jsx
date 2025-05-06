import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './App.css'; 
import AdminDashBoard from '../Context/AdminDashBoard.jsx'
import FlightContext from './component/Context/FlightContext.jsx'
import AuthContext from './component/Context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <BrowserRouter>
 <AdminDashBoard>
<FlightContext >
<AuthContext>
<App />
</AuthContext>
</FlightContext>
 </AdminDashBoard>

 </BrowserRouter>
  </StrictMode>,
)
