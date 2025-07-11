import React, { useEffect, useState } from 'react'
import { getAllFlights } from '../../services/allApi'
import './AllFlightView.css'

const AllFlightView = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    allFlightView()
  }, [])

  const allFlightView = async () => {
    const apiResponse = await getAllFlights()
    if (apiResponse.status === 200) {
      setData(apiResponse.data)
    } else {
      console.log("something went wrong")
    }
  }

  return (
    <div className="flight-view-container py-5 px-3">
      <div className="d-flex flex-column align-items-center">
        {data?.map((a, index) => (
          <div
            key={index}
            className={`flight-card shadow-sm mb-4 ${a.tripType === 'return' ? 'card-return' : 'card-oneway'}`}
          >
            <div className="row g-4 align-items-center">
              <div className="col-md-10">
                <div className="flight-leg d-flex align-items-center mb-4">
                  <img src="https://logos-world.net/wp-content/uploads/2023/01/AirAsia-Logo-2002.png" alt="AirAsia" className="flight-logo me-3" />
                  <div className="flex-grow-1 text-center">
                    <h5 className="fw-bold mb-1">16:45 - 19:45</h5>
                    <p className="text-muted small mb-0">TRV (Thiruvanthapuram) → DXB (Dubai)</p>
                  </div>
                  <div className="text-end me-3">
                    <span className="badge bg-success-subtle text-success fw-semibold">Direct</span>
                  </div>
                  <div className="text-end">
                    <span className="fw-semibold">4h 30m</span>
                  </div>
                </div>

                {a.tripType === 'return' && (
                  <div className="flight-leg d-flex align-items-center">
                    <img src="https://logos-world.net/wp-content/uploads/2023/01/AirAsia-Logo-2002.png" alt="AirAsia" className="flight-logo me-3" />
                    <div className="flex-grow-1 text-center">
                      <h5 className="fw-bold mb-1">17:40 - 23:35</h5>
                      <p className="text-muted small mb-0">DXB (Dubai) → TRV (Thiruvanthapuram)</p>
                    </div>
                    <div className="text-end me-3">
                      <span className="badge bg-success-subtle text-success fw-semibold">Direct</span>
                    </div>
                    <div className="text-end">
                      <span className="fw-semibold">4h 30m</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="col-md-2 text-center pricing-section">
                <h5 className="fw-bold text-danger mb-2">₹40,532</h5>
                <p className="fw-semibold text-danger mb-1">
                  {a.tripType === 'return' ? 'Business Class' : 'Premium Economy'}
                </p>
                <p className="text-muted fw-semibold small mb-0">Seats: {a.seats || (a.tripType === 'return' ? '50' : '12')}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllFlightView
