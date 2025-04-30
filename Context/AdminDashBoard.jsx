import React, { Children, createContext, useState } from 'react'

export const adminDashContext=createContext()

const AdminDashBoard = ({children}) => {
    const[admindash,setAdminDash]=useState([])
  return (
    <div>
        <adminDashContext.Provider
        value={{admindash,setAdminDash}}>
            {children}

        </adminDashContext.Provider>

      
    </div>
  )
}

export default AdminDashBoard
