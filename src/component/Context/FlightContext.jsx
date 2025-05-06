import React, { createContext, useState } from 'react'

export const editFlight=createContext()

const FlightContext = ({children}) => {
    const[flightUpdate,setFlightUpdate]=useState([])
  return (
    <div>
        <editFlight.Provider 
        value={{flightUpdate,setFlightUpdate}}>

            {children}

        </editFlight.Provider>
      
    </div>
  )
}

export default FlightContext
