import React from 'react'
import UserDashNav from '../component/UserDashNav'
import FlightTicket from '../component/FlightTicket'

const UserFlightView = () => {
  return (
    <div>
        <UserDashNav />
      <div className="mt-5">
      <FlightTicket />   </div>   
    </div>
  )
}

export default UserFlightView
