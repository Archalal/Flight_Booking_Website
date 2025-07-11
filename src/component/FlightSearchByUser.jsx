import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaPlane, FaExchangeAlt } from 'react-icons/fa';
import { GiCommercialAirplane } from 'react-icons/gi';
import { MdFlight } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import './FlightSearchByUser.css';

const FlightSearchByUser = () => {
  const navigate = useNavigate();
  const [tripType, setTripType] = useState("oneWay");

  const tripChange = (type) => setTripType(type);

  const [toSearch, setToSearch] = useState("");
  const [fromSearch, setFromSearch] = useState("");
  const [departureSearch, setDepartureSearch] = useState("");
  const [returnSearch, setReturnSearch] = useState("");
  const [cabinSearch, setCabinSearch] = useState("economy");
  const [passengersSearch, setSearchPassenger] = useState("1");

  const onBtnClick = () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      if (toSearch && fromSearch && departureSearch && cabinSearch && passengersSearch) {
        let query = `?departureName=${fromSearch}&destinationName=${toSearch}&dateOfDeparture=${departureSearch}&cabinClass=${cabinSearch}&avaiableSeat=${passengersSearch}`;
        navigate(`/searchticketbyuser${query}`);
        if (tripType == "roundTrip") {
          if (toSearch && fromSearch && departureSearch && returnSearch && cabinSearch && passengersSearch) {
            query += `&returnDate=${returnSearch}`;
            navigate(`/searchticketbyuser${query}`);
          } else {
            alert("Please fill the return date");
          }
        }
      } else {
        alert("Please fill all required fields");
      }
    } else {
      alert("Please login first");
    }
  };

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
            <div className="icon-wrapper">
              <GiCommercialAirplane className="airplane-icon" />
            </div>
            <h2>Discover Your Next Journey</h2>
            <p className="subtitle">Find the best flight deals worldwide</p>
          </div>

          <div className="trip-selector">
            <button
              className={`trip-btn ${tripType === 'oneWay' ? 'active' : ''}`}
              onClick={() => tripChange('oneWay')}
            >
              <FaPlane className="icon" />
              One Way
            </button>
            <button
              className={`trip-btn ${tripType === 'roundTrip' ? 'active' : ''}`}
              onClick={() => tripChange('roundTrip')}
            >
              <FaExchangeAlt className="icon" />
              Round Trip
            </button>
          </div>

          <div className="search-form">
            <div className="form-grid">
              <div className="form-group">
                <FloatingLabel controlId="floatingFrom" label="From">
                  <Form.Control 
                    type="text" 
                    placeholder="City or Airport" 
                    list="cityOptions"
                    onChange={(e) => setFromSearch(e.target.value)}
                    className="compact-input"
                  />
                </FloatingLabel>
                <datalist id="cityOptions">
                  <option value="Thiruvananthapuram" />
                  <option value="Kochi" />
                  <option value="New Delhi" />
                  <option value="Mumbai" />
                  <option value="Dubai" />
                  <option value="Doha" />
                  <option value="New York" />
                  <option value="Paris" />
                  <option value="London" />
                  <option value="Sydney" />
                  <option value="Toronto" />
                </datalist>
              </div>

              <div className="form-group">
                <FloatingLabel controlId="floatingTo" label="To">
                  <Form.Control 
                    type="text" 
                    placeholder="City or Airport"
                    list="cityOption"
                    onChange={(e) => setToSearch(e.target.value)}
                    className="compact-input"
                  />
                </FloatingLabel>
                <datalist id="cityOption">
                  <option value="Thiruvananthapuram" />
                  <option value="Kochi" />
                  <option value="New Delhi" />
                  <option value="Mumbai" />
                  <option value="Dubai" />
                  <option value="Doha" />
                  <option value="New York" />
                  <option value="Paris" />
                  <option value="London" />
                  <option value="Sydney" />
                  <option value="Toronto" />
                </datalist>
              </div>

              <div className="form-group">
                <FloatingLabel controlId="floatingDepart" label="Departure">
                  <Form.Control 
                    type="date" 
                    placeholder="Departure" 
                    onChange={(e) => setDepartureSearch(e.target.value)}
                    className="compact-input"
                  />
                </FloatingLabel>
              </div>

              <div className="form-group">
                <FloatingLabel controlId="floatingReturn" label="Return">
                  <Form.Control 
                    type="date" 
                    placeholder="Return" 
                    disabled={tripType === 'oneWay'}
                    onChange={(e) => setReturnSearch(e.target.value)}
                    className="compact-input"
                  />
                </FloatingLabel>
              </div>

              <div className="form-group">
                <FloatingLabel controlId="floatingClass" label="Cabin Class">
                  <Form.Select
                    onChange={(e) => setCabinSearch(e.target.value)}
                    defaultValue="economy"
                    className="compact-input"
                  >
                    <option value="economy">Economy</option>
                    <option value="premium">Premium Economy</option>
                    <option value="business">Business</option>
                  </Form.Select>
                </FloatingLabel>
              </div>

              <div className="form-group">
                <FloatingLabel controlId="floatingTravellers" label="Passengers">
                  <Form.Control 
                    type="number" 
                    placeholder="1" 
                    min="1"
                    defaultValue={1}
                    onChange={(e) => setSearchPassenger(e.target.value)}
                    className="compact-input"
                  />
                </FloatingLabel>
              </div>
            </div>

            <Button
              onClick={onBtnClick}
              className="search-button"
              variant="primary"
            >
              <MdFlight className="icon" />
              Search Flights
            </Button>
          </div>
        </div>

        <div className="image-gallery">
          {travelImages.map((img, index) => (
            <div key={index} className="gallery-item">
              <img
                src={img}
                alt="Travel destination"
                className="gallery-image"
              />
              <div className="image-overlay">
                <span className="destination-name">
                  {['Paris', 'Tokyo', 'New York', 'Bali', 'London', 'Sydney'][index]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlightSearchByUser;