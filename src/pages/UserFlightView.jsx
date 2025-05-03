import React from 'react'
import UserDashNav from '../component/UserDashNav'
import AllFlightView from '../component/AllFlightView'


const UserFlightView = () => {
  return (
    <div>
        <UserDashNav />

      <div className="mt-5">
        <AllFlightView />
      
      
      </div>   
    </div>
  )
}

export default UserFlightView
