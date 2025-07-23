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

  const popularDestinations = [
    { name: "Paris", price: "$299", image: "https://media.istockphoto.com/id/155381519/photo/romantic-paris-with-tour-eiffel.webp?a=1&b=1&s=612x612&w=0&k=20&c=Bm1gOrWoll0R3ZPzVeM5md0b7FSJ_TZ1kEkV5zVSqlY=" },
    { name: "Tokyo", price: "$599", image: "https://media.istockphoto.com/id/476461402/photo/tokyo-skyline-at-night.webp?a=1&b=1&s=612x612&w=0&k=20&c=LFrhv338wP6Mo_vgFNc3E1wHMCtrbQfjQa_6FIG3EaU=" },
    { name: "New York", price: "$349", image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D" },
    { name: "Bali", price: "$499", image: "https://media.istockphoto.com/id/504985756/photo/bali-water-temple-tanah-lot.webp?a=1&b=1&s=612x612&w=0&k=20&c=sqlFEF23pUk2pDbnwItpAjhj0ROheBdSLFDiYBKcqIE=" }
  ];

  return (
    <div className="flight-search-wrapper">
      <div className="search-hero">
        <div className="hero-overlay">
          <GiCommercialAirplane className="hero-icon" />
          <h1 style={{color:"white"}}>Discover Your Next Journey</h1>
          <p style={{color:"white"}}>Find the best flight deals worldwide</p>
        </div>
      </div>

      <div className="search-container">
        <div className="search-card">
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
                    className="form-input"
                  />
                </FloatingLabel>
                <datalist id="cityOptions">
                  <option value="Thiruvanthapuram" />
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
                    className="form-input"
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
                    className="form-input"
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
                    className="form-input"
                  />
                </FloatingLabel>
              </div>

              <div className="form-group">
                <FloatingLabel controlId="floatingClass" label="Cabin Class">
                  <Form.Select
                    onChange={(e) => setCabinSearch(e.target.value)}
                    defaultValue="economy"
                    className="form-input"
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
                    className="form-input"
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

        <div className="popular-destinations">
          <h2>Explore Popular Destinations</h2>
          <p className="subtitle">Find inspiration for your next adventure</p>
          <div className="destination-grid">
            {popularDestinations.map((destination, index) => (
              <div key={index} className="destination-card">
                <img src={destination.image} alt={destination.name} />
                <div className="destination-overlay">
                  <h3>{destination.name}</h3>
                  <p>From {destination.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightSearchByUser;