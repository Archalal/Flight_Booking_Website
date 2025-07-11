// Updated SearchTicketByUser with modern UI design matching the uploaded image
import React, { useEffect, useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import UserDashNav from '../component/UserDashNav';
import FlightTicket from '../component/FlightTicket';
import { FaPlaneArrival, FaPlaneDeparture, FaUserFriends, FaCalendarAlt, FaSearch, FaSortAmountDown, FaExchangeAlt } from 'react-icons/fa';
import { getSearchedFlights } from '../../services/allApi';
import { useNavigate } from 'react-router-dom';

const SearchTicketByUser = () => {
  const [tripType, setTripType] = useState("oneWay");
  const [stopType, setStopType] = useState("direct");
  const [sortBy, setSortBy] = useState("cheapest");

  const tripChange = (e) => setTripType(e.target.value);
  const stopChange = (e) => setStopType(e.target.value);
  const sortChange = (e) => setSortBy(e.target.value);

  const navigate = useNavigate();
  const query = location.search;

  useEffect(() => {
    searchedFlights();
  }, [query]);

  const [searchedData, setSearchedData] = useState([]);

  const searchParams = new URLSearchParams(location.search);
  const departureName = searchParams.get("departureName");
  const destinationName = searchParams.get("destinationName");
  const dateOfDeparture = searchParams.get("dateOfDeparture");
  const cabinClass = searchParams.get("cabinClass");
  const returnDate = searchParams.get("returnDate");
  const avaiableSeat = searchParams.get("avaiableSeat");

  const [changedFliter, setChangedFilter] = useState({
    departureName,
    destinationName,
    dateOfDeparture,
    returnDate,
    cabinClass,
    avaiableSeat
  });

  const searchedFlights = async () => {
    try {
      const apiResponse = await getSearchedFlights(query);
      if (apiResponse.status === 200) {
        setSearchedData(apiResponse.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearchSubmit = async () => {
    const queryParams = new URLSearchParams(changedFliter).toString();
    navigate(`?${queryParams}`);
    try {
      const apiResponse = await getSearchedFlights(query);
      console.log(query);
      
      if (apiResponse.status === 200) {
        console.log(apiResponse.data);
        
        setSearchedData(apiResponse.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const filteredFlights = searchedData
    .filter(flight => stopType === "direct" ? flight.stop === "direct" : flight.stop === "oneStop")
    .sort((a, b) => sortBy === "cheapest" ? a.price - b.price : b.price - a.price);

  return (
    <div className="bg-light min-vh-100">
      <UserDashNav />

      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(to right, #6e45e2, #88d3ce)',
        padding: '4rem 0',
        color: '#fff',
        textAlign: 'center'
      }}>
        <h1 className="fw-bold display-5">FIND YOUR PERFECT FLIGHT</h1>
        <p className="lead">Discover amazing deals to destinations around world</p>
      </div>

      {/* Search Box */}
      <div className="container" style={{ marginTop: '-3rem' }}>
        <div className="bg-white rounded-4 p-4 shadow-lg">
          <div className="d-flex justify-content-center gap-3 mb-4">
            <Button
              variant={tripType === "oneWay" ? "primary" : "outline-secondary"}
              onClick={() => setTripType("oneWay")}
              className="rounded-pill px-4"
            >
              One Way
            </Button>
            <Button
              variant={tripType === "roundTrip" ? "primary" : "outline-secondary"}
              onClick={() => setTripType("roundTrip")}
              className="rounded-pill px-4"
            >
              Round Trip
            </Button>
          </div>

          <div className="row g-3">
            <div className="col-md-6 position-relative">
              <FaPlaneDeparture className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary" />
              <Form.Control
                type="text"
                placeholder="From"
                value={changedFliter.departureName}
                onChange={(e) => setChangedFilter({ ...changedFliter, departureName: e.target.value })}
                className="form-control-lg rounded-3 ps-5"
              />
            </div>
            <div className="col-md-6 position-relative">
              <FaPlaneArrival className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary" />
              <Form.Control
                type="text"
                placeholder="To"
                value={changedFliter.destinationName}
                onChange={(e) => setChangedFilter({ ...changedFliter, destinationName: e.target.value })}
                className="form-control-lg rounded-3 ps-5"
              />
            </div>
            <div className="col-md-6 position-relative">
              <FaCalendarAlt className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary" />
              <Form.Control
                type="date"
                value={changedFliter.dateOfDeparture}
                onChange={(e) => setChangedFilter({ ...changedFliter, dateOfDeparture: e.target.value })}
                className="form-control-lg rounded-3 ps-5"
              />
            </div>
            <div className="col-md-6 position-relative">
              <FaCalendarAlt className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary" />
              <Form.Control
                type="date"
                disabled={tripType === "oneWay"}
                value={changedFliter.returnDate}
                onChange={(e) => setChangedFilter({ ...changedFliter, returnDate: e.target.value })}
                className="form-control-lg rounded-3 ps-5"
              />
            </div>
            <div className="col-md-6">
              <Form.Select
                value={changedFliter.cabinClass}
                onChange={(e) => setChangedFilter({ ...changedFliter, cabinClass: e.target.value })}
                className="form-control-lg rounded-3"
              >
                <option value="economy">Economy</option>
                <option value="premium">Premium</option>
                <option value="business">Business</option>
                <option value="first">First Class</option>
              </Form.Select>
            </div>
            <div className="col-md-6 position-relative">
              <FaUserFriends className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary" />
              <Form.Control
                type="number"
                min="1"
                value={changedFliter.avaiableSeat}
                onChange={(e) => setChangedFilter({ ...changedFliter, avaiableSeat: e.target.value })}
                className="form-control-lg rounded-3 ps-5"
              />
            </div>
            <div className="col-12 text-center">
              <Button
                onClick={handleSearchSubmit}
                className="w-100 py-3 rounded-3"
                style={{ background: 'linear-gradient(to right, #6e45e2, #88d3ce)', border: 'none' }}
              >
                <FaSearch className="me-2" /> Search Flights
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="container mt-5">
        <div className="bg-white p-4 rounded-4 shadow d-flex flex-column flex-md-row gap-3 align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <FaSortAmountDown />
            <Form.Select
              value={sortBy}
              onChange={sortChange}
              className="form-select-sm rounded-pill"
            >
              <option value="cheapest">Cheapest</option>
              <option value="highest">Best</option>
            </Form.Select>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span className="fw-bold">Stops:</span>
            <Button
              variant={stopType === "direct" ? "primary" : "outline-secondary"}
              className="rounded-pill"
              onClick={() => setStopType("direct")}
            >
              Direct
            </Button>
            <Button
              variant={stopType === "oneStop" ? "primary" : "outline-secondary"}
              className="rounded-pill"
              onClick={() => setStopType("oneStop")}
            >
              One Stop
            </Button>
          </div>
        </div>
      </div>

      {/* Ticket Display */}
      <div className="container mt-4">
        <FlightTicket flights={filteredFlights} />
      </div>
    </div>
  );
};

export default SearchTicketByUser;
