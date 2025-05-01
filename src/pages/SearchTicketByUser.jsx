import React, { useEffect, useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import UserDashNav from '../component/UserDashNav';
import FlightTicket from '../component/FlightTicket';
import {  FaPlane, FaPlaneArrival, FaPlaneDeparture, FaUserFriends, FaCalendarAlt, FaSearch,FaSortAmountDown,FaExchangeAlt} from 'react-icons/fa';
import { getSearchedFlights } from '../../services/allApi';
import { useNavigate } from 'react-router-dom';

const SearchTicketByUser = () => {
  const [tripType, setTripType] = useState("oneWay");
  const [stopType, setStopType] = useState("direct");
  

  const tripChange = (e) => {
    setTripType(e.target.value);
  };

  const stopChange = (e) => {
    setStopType(e.target.value);
  };

  const navigate=useNavigate()
  const query=location.search
  
useEffect(()=>{ 
  searchedFlights()
},[query])

  const[searchedData,setSearchedData]=useState([])
  const searchParams=new URLSearchParams(location.search)

  const departureName=searchParams.get("departureName")
  const destinationName=searchParams.get("destinationName")
  const dateOfDeparture=searchParams.get("dateOfDeparture")
  const cabinClass=searchParams.get("cabinClass")
  const returnDate=searchParams.get("returnDate")
  const avaiableSeat=searchParams.get("avaiableSeat")
  


   const[changedFliter,setChangedFilter]=useState({
    departureName:departureName,
    destinationName:destinationName,
    dateOfDeparture:dateOfDeparture,
    returnDate:returnDate,
    cabinClass:cabinClass,
    avaiableSeat:avaiableSeat

   })

 
   
    


  
  console.log(query);
  const searchedFlights=async()=>{
    try{

      let apiResponse=await  getSearchedFlights(query)
      console.log(apiResponse);
      
    if(apiResponse.status==200){
      setSearchedData(apiResponse.data)

    }else{
      console.log("something went wrong");
      
    }

    }catch(err){
      console.log(err);
      
    }
   
    
  }

  const handleSearchSubmit =async () => {
    const queryParams = new URLSearchParams(changedFliter).toString();
    navigate(`?${queryParams}`);
    try{

      let apiResponse=await  getSearchedFlights(query)
    if(apiResponse.status==200){
      setSearchedData(apiResponse.data)

    }else{
      console.log("something went wrong");
      
    }

    }catch(err){
      console.log(err);
      
    }
   
  };
  

  return (
    <div className="bg-light min-vh-100">
      <UserDashNav />
      
      {/* Hero Section */}
      <div className="py-5 position-relative" style={{ 
        background: 'linear-gradient(135deg, #6e45e2 0%, #88d3ce 100%)',
        color: 'white',
        marginBottom: '2rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        overflow: 'hidden'
      }}>
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
          backgroundSize: 'cover',
          opacity: 0.1
        }}></div>
        <div className="container text-center position-relative">
          <h1 className="fw-bold mb-4 display-4" style={{ 
            textShadow: '0 2px 4px rgba(0,0,0,0.2)',
            letterSpacing: '1px'
          }}>
            Find Your Perfect Flight
          </h1>
          <p className="mb-4 fs-4" style={{ 
            opacity: 0.9,
            fontWeight: 300
          }}>
            Discover amazing deals to destinations around the world
          </p>
        </div>
      </div>
      
      {/* Search Form */}
      <div className="container mb-5">
        <div className="bg-white p-4 rounded-4 shadow" style={{ 
          marginTop: '-80px',
          border: 'none',
          position: 'relative',
          zIndex: 2
        }}>
          {/* Trip Type Toggle */}
          <div className="row justify-content-center mb-4">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="d-flex align-items-center justify-content-center">
                <div className="btn-group w-100" role="group" style={{ 
                  backgroundColor: 'rgba(110, 69, 226, 0.1)',
                  borderRadius: '50px',
                  padding: '4px'
                }}>
                  <input
                    type="radio"
                    className="btn-check"
                    name="tripType"
                    id="oneWay"
                    value="oneWay"
                    checked={tripType === "oneWay"}
                    onChange={tripChange}
                  />
                  <label 
                    className={`btn ${tripType === 'oneWay' ? 'btn-primary' : 'btn-transparent'}`}
                    htmlFor="oneWay"
                    style={{
                      padding: '0.75rem 0',
                      borderRadius: '50px',
                      fontWeight: '600',
                      border: 'none',
                      flex: 1,
                      transition: 'all 0.3s ease',
                      backgroundColor: tripType === 'oneWay' ? '#6e45e2' : 'transparent',
                      color: tripType === 'oneWay' ? 'white' : '#6e45e2'
                    }}
                  >
                    One Way
                  </label>

                  <input
                    type="radio"
                    className="btn-check"
                    name="tripType"
                    id="roundTrip"
                    value="roundTrip"
                    checked={tripType === "roundTrip"}
                    onChange={tripChange}
                  />
                  <label 
                    className={`btn ${tripType === 'roundTrip' ? 'btn-primary' : 'btn-transparent'}`}
                    htmlFor="roundTrip"
                    style={{
                      padding: '0.75rem 0',
                      borderRadius: '50px',
                      fontWeight: '600',
                      border: 'none',
                      flex: 1,
                      transition: 'all 0.3s ease',
                      backgroundColor: tripType === 'roundTrip' ? '#6e45e2' : 'transparent',
                      color: tripType === 'roundTrip' ? 'white' : '#6e45e2'
                    }}
                  >
                    Round Trip
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Search Fields */}
          <div className="row g-3 align-items-end">
            <div className="col-12 col-md-3">
              <FloatingLabel controlId="floatingFrom" label={
                <span className="d-flex align-items-center text-muted">
                  <FaPlaneDeparture className="me-2" /> From
                </span>
              }>
                <Form.Control 
                  type="text" 
                  placeholder="From" 
                  className="border-2 ps-4"
                  style={{ 
                    height: '58px',
                    borderColor: '#6e45e2'
                  }}
                  value={changedFliter.departureName}
                  onChange={(e) => setChangedFilter({...changedFliter,departureName:e.target.value})}
                />
              </FloatingLabel>
            </div>
            
            <div className="col-12 col-md-3 position-relative">
              <div 
                className="position-absolute top-0 start-50 translate-middle bg-white p-2 rounded-circle shadow-sm cursor-pointer"
                style={{
                  zIndex: 3,
                  border: '2px solid #6e45e2',
                  cursor: 'pointer'
                }}
              
              >
                <FaExchangeAlt style={{ color: '#6e45e2' }} />
              </div>
              <FloatingLabel controlId="floatingTo" label={
                <span className="d-flex align-items-center text-muted">
                  <FaPlaneArrival className="me-2" /> To
                </span>
              }>
                <Form.Control 
                  type="text" 
                  placeholder="To"  
                  className="border-2 ps-4"
                  style={{ 
                    height: '58px',
                    borderColor: '#6e45e2'
                  }}
                  value={changedFliter.destinationName}
                  onChange={(e) => setChangedFilter({...changedFliter,destinationName:e.target.value})}
                />
              </FloatingLabel>
            </div>
            
            <div className="col-6 col-md-2">
              <FloatingLabel controlId="floatingDepart" label={
                <span className="d-flex align-items-center text-muted">
                  <FaCalendarAlt className="me-2" /> Depart
                </span>
              }>
                <Form.Control 
                  type="date" 
                  placeholder="Depart" 
                  className="border-2 ps-4"
                  style={{ 
                    height: '58px',
                    borderColor: '#6e45e2'
                  }}
                  value={changedFliter.dateOfDeparture}
                  onChange={(e) => setChangedFilter({...changedFliter,dateOfDeparture:e.target.value})}
                />
              </FloatingLabel>
            </div>
            
            <div className="col-6 col-md-2">
              <FloatingLabel controlId="floatingReturn" label={
                <span className="d-flex align-items-center text-muted">
                  <FaCalendarAlt className="me-2" /> Return
                </span>
              }>
                <Form.Control
                  type="date"
                  placeholder="Return"
                  className="border-2 ps-4"
                  style={{ 
                    height: '58px',
                    borderColor: '#6e45e2'
                  }}
                  disabled={tripType === "oneWay"}
                  value={changedFliter.returnDate}
                  onChange={(e) => setChangedFilter({...changedFliter,returnDate:e.target.value})}
                />
              </FloatingLabel>
            </div>
            
            <div className="col-6 col-md-1">
              <FloatingLabel controlId="floatingClass" label={
                <span className="text-muted">Class</span>
              }>
                <Form.Select 
                  aria-label="Cabin Class" 
                  className="border-2"
                  style={{ 
                    height: '58px',
                    borderColor: '#6e45e2'
                    
                  }}
                  value={changedFliter.cabinClass}
                  onChange={(e) => setChangedFilter({...changedFliter,cabinClass:e.target.value})}
                >
                  <option value="economy">Economy</option>
                  <option value="premium">Premium</option>
                  <option value="business">Business</option>
                  <option value="first">First Class</option>
                </Form.Select>
              </FloatingLabel>
            </div>
            
            <div className="col-6 col-md-1">
              <FloatingLabel controlId="floatingPassengers" label={
                <span className="d-flex align-items-center text-muted">
                  <FaUserFriends />
                </span>
              }>
                <Form.Control 
                  type="number" 
                  placeholder="1" 
                  defaultValue="1"
                  min="1"
                  className="border-2 text-center"
                  style={{ 
                    height: '58px',
                    borderColor: '#6e45e2'
                  }}
                  value={changedFliter.avaiableSeat}
                  onChange={(e) => setChangedFilter({...changedFliter,avaiableSeat:e.target.value})}
                />
              </FloatingLabel>
            </div>
          </div>

          {/* Search Button */}
          <div className="row mt-4">
            <div className="col-12 text-center">
              <Button
                variant="primary"
                size="lg"
                className="px-5 py-3"
                style={{
                  borderRadius: '50px',
                  background: 'linear-gradient(135deg, #6e45e2 0%, #88d3ce 100%)',
                  border: 'none',
                  fontSize: '18px',
                  fontWeight: '600',
                  boxShadow: '0 4px 15px rgba(110, 69, 226, 0.4)',
                  transition: 'all 0.3s ease',
                  minWidth: '250px'
                }}
                onClick={handleSearchSubmit}
              >
                <FaSearch className="me-2" /> Search Flights
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="container mb-5 me-1">
        <div className="bg-white p-4 rounded-4 shadow">
          {/* Filters */}
          <div className="row justify-content-between align-items-center mb-4 g-3">
            <div className="col-12 col-md-5 col-lg-4">
              <FloatingLabel controlId="floatingSort" label={
                <span className="d-flex align-items-center text-muted">
                  <FaSortAmountDown className="me-2" /> Sort by
                </span>
              }>
                <Form.Select 
                  aria-label="Sort by"
                 
                  className="border-2"
                  style={{
                    borderRadius: '8px',
                    backgroundColor: '#fff',
                    height: '58px',
                    borderColor: '#6e45e2'
                  }}
                >
                  <option value="cheapest">Cheapest</option>
                  <option value="best">Best</option>
                  <option value="fastest">Fastest</option>
                  <option value="earliest">Earliest</option>
                </Form.Select>
              </FloatingLabel>
            </div>
            
            <div className="col-12 col-md-7 col-lg-5">
              <div className="row align-items-center g-2">
                <div className="col-12 col-sm-auto">
                  <span className="fw-bold text-muted">Stops:</span>
                </div>
                <div className="col-12 col-sm">
                  <div className="btn-group w-100" role="group" style={{ 
                    backgroundColor: 'rgba(110, 69, 226, 0.1)',
                    borderRadius: '50px',
                    padding: '4px'
                  }}>
                    <input
                      type="radio"
                      className="btn-check"
                      name="stops"
                      id="direct"
                      value="direct"
                      checked={stopType === "direct"}
                      onChange={stopChange}
                    />
                    <label 
                      className={`btn ${stopType === 'direct' ? 'btn-primary' : 'btn-transparent'}`}
                      htmlFor="direct"
                      style={{
                        padding: '0.5rem 0',
                        borderRadius: '50px',
                        fontWeight: '600',
                        border: 'none',
                        flex: 1,
                        backgroundColor: stopType === 'direct' ? '#6e45e2' : 'transparent',
                        color: stopType === 'direct' ? 'white' : '#6e45e2'
                      }}
                    >
                      Direct
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="stops"
                      id="oneStop"
                      value="oneStop"
                      checked={stopType === "oneStop"}
                      onChange={stopChange}
                    />
                    <label 
                      className={`btn ${stopType === 'oneStop' ? 'btn-primary' : 'btn-transparent'}`}
                      htmlFor="oneStop"
                      style={{
                        padding: '0.5rem 0',
                        borderRadius: '50px',
                        fontWeight: '600',
                        border: 'none',
                        flex: 1,
                        backgroundColor: stopType === 'oneStop' ? '#6e45e2' : 'transparent',
                        color: stopType === 'oneStop' ? 'white' : '#6e45e2'
                      }}
                    >
                      One Stop
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Flight Results */}
          <div className="row ">
            <div className="col-12">
              <FlightTicket  flights={searchedData} />
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchTicketByUser;