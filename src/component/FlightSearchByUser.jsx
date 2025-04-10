import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaPlane, FaExchangeAlt, FaMapMarkerAlt, FaCalendarDay, FaUserFriends } from 'react-icons/fa';
import { GiCommercialAirplane } from 'react-icons/gi';
import { MdFlight } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const FlightSearchByUser = () => {
  const navigate = useNavigate();
  const [tripType, setTripType] = useState("oneWay");

  const tripChange = (type) => setTripType(type);
  const onbtnClick = () => navigate('/searchticketbyuser');

  const travelImages = [
    "https://content.r9cdn.net/res/images/horizon/ui/horizontalSearchNavigation/Flights_02_1_5x.png",
    "https://content.r9cdn.net/res/images/horizon/ui/horizontalSearchNavigation/Flights_01_1_5x.png",
    "https://content.r9cdn.net/res/images/horizon/ui/horizontalSearchNavigation/Generic_02_1_5x.png",
    "https://content.r9cdn.net/res/images/horizon/ui/horizontalSearchNavigation/Flights_03_1_5x.png",
    "https://content.r9cdn.net/res/images/horizon/ui/horizontalSearchNavigation/Generic_04_1_5x.png",
    "https://content.r9cdn.net/res/images/horizon/ui/horizontalSearchNavigation/Flights_04_1_5x.png"
  ];

  return (
    <div className="flight-search-container">
      <div className="search-card">
        <div className="search-content">
          <div className="search-header">
            <GiCommercialAirplane className="airplane-icon" />
            <h2>The Best Flight Offers From Anywhere to Everywhere</h2>
          </div>

          {/* Trip Type Selector */}
          <div className="trip-selector">
            <button
              className={`trip-btn ${tripType === 'oneWay' ? 'active' : ''}`}
              onClick={() => tripChange('oneWay')}
            >
              <FaPlane className="me-2" />
              One Way
            </button>
            <button
              className={`trip-btn ${tripType === 'roundTrip' ? 'active' : ''}`}
              onClick={() => tripChange('roundTrip')}
            >
              <FaExchangeAlt className="me-2" />
              Round Trip
            </button>
          </div>

          {/* Search Form */}
          <div className="search-form">
            <div className="form-row">
              <div className="form-group">
                <FloatingLabel controlId="floatingFrom" label={
                  <span className="label-with-icon">
                    <FaMapMarkerAlt className="me-2" />
                    From
                  </span>
                }>
                  <Form.Control type="text" placeholder="City or Airport" />
                </FloatingLabel>
              </div>

              <div className="form-group">
                <FloatingLabel controlId="floatingTo" label={
                  <span className="label-with-icon">
                    <FaMapMarkerAlt className="me-2" />
                    To
                  </span>
                }>
                  <Form.Control type="text" placeholder="City or Airport" />
                </FloatingLabel>
              </div>

              <div className="form-group">
                <FloatingLabel controlId="floatingDepart" label={
                  <span className="label-with-icon">
                    <FaCalendarDay className="me-2" />
                    Depart
                  </span>
                }>
                  <Form.Control type="date" placeholder="Departure" />
                </FloatingLabel>
              </div>

              <div className="form-group">
                <FloatingLabel controlId="floatingReturn" label={
                  <span className="label-with-icon">
                    <FaCalendarDay className="me-2" />
                    Return
                  </span>
                }>
                  <Form.Control 
                    type="date" 
                    placeholder="Return" 
                    disabled={tripType === 'oneWay'}
                  />
                </FloatingLabel>
              </div>

              <div className="form-group">
                <FloatingLabel controlId="floatingClass" label="Cabin Class">
                  <Form.Select>
                    <option value="economy">Economy</option>
                    <option value="premium">Premium</option>
                    <option value="business">Business</option>
                  </Form.Select>
                </FloatingLabel>
              </div>

              <div className="form-group">
                <FloatingLabel controlId="floatingTravellers" label={
                  <span className="label-with-icon">
                    <FaUserFriends className="me-2" />
                    Passengers
                  </span>
                }>
                  <Form.Control 
                    type="number" 
                    placeholder="1" 
                    min="1"
                    defaultValue="1"
                  />
                </FloatingLabel>
              </div>
            </div>

            <Button
              onClick={onbtnClick}
              className="search-button"
            >
              <MdFlight className="me-2" />
              Search Flights
            </Button>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="image-gallery">
          {travelImages.map((img, index) => (
            <div key={index} className="gallery-item">
              <img
                src={img}
                alt="Travel destination"
                className="gallery-image"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .flight-search-container {
          max-width: 1200px;
          margin: 2rem auto;
          padding: 0 1rem;
        }
        
        .search-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          overflow: hidden;
          display: grid;
          grid-template-columns: 2fr 1fr;
          min-height: 500px;
        }
        
        .search-content {
          padding: 2rem;
        }
        
        .search-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .search-header h2 {
          color: #2c3e50;
          font-weight: 700;
          margin: 0.5rem 0;
          font-size: 1.8rem;
        }
        
        .airplane-icon {
          color: #e74c3c;
          font-size: 2.5rem;
        }
        
        .trip-selector {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        
        .trip-btn {
          padding: 0.75rem 2rem;
          border-radius: 30px;
          border: none;
          background: #ecf0f1;
          color: #2c3e50;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
        }
        
        .trip-btn.active {
          background: #3498db;
          color: white;
          box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
        }
        
        .search-form {
          background: rgba(255,255,255,0.8);
          border-radius: 8px;
          padding: 1.5rem;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        
        .form-group :global(.form-control),
        .form-group :global(.form-select) {
          height: 50px;
          border-radius: 8px;
          border: 1px solid #dfe6e9;
        }
        
        .label-with-icon {
          display: flex;
          align-items: center;
        }
        
        .search-button {
          width: 100%;
          padding: 12px;
          border-radius: 30px;
          background: #e74c3c;
          border: none;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        .search-button:hover {
          background: #c0392b;
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(231, 76, 60, 0.4);
        }
        
        .image-gallery {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 10px;
          padding: 15px;
          background: #f8f9fa;
        }
        
        .gallery-item {
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }
        
        .gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .gallery-item:hover {
          transform: translateY(-5px);
        }
        
        .gallery-item:hover .gallery-image {
          transform: scale(1.05);
        }
        
        @media (max-width: 992px) {
          .search-card {
            grid-template-columns: 1fr;
          }
          
          .image-gallery {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          
          .trip-selector {
            flex-direction: column;
            align-items: center;
          }
          
          .trip-btn {
            width: 100%;
            justify-content: center;
          }
          
          .image-gallery {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default FlightSearchByUser;