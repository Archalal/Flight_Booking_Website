import React, { createContext, useState } from 'react'

export const editFlight=createContext()
export const addFlight=createContext()

const FlightContext = ({children}) => {
    const[flightUpdate,setFlightUpdate]=useState([])
    const[flightAdd,setFlightAdd]=useState([])
  return (
    <div>
        <editFlight.Provider 
        value={{flightUpdate,setFlightUpdate}}>

         <addFlight.Provider value={{flightAdd,setFlightAdd}}>
         {children}
         </addFlight.Provider>

        </editFlight.Provider>
      
    </div>
  )
}

export default FlightContext
