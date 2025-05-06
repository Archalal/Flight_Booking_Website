import React, { useContext, useEffect, useState } from "react";
import { Button, Modal, FloatingLabel, Form } from "react-bootstrap";
import TotalFlight from '../../component/TotalFlight'
import { addingFlights, getallViewFlights } from "../../../services/allApi";
import Card from 'react-bootstrap/Card';
import baseURL from "../../../services/baseURL";
import FlightEdit from "../FlightEdit";
import { editFlight } from "../../component/Context/FlightContext";








const AddFlights = () => {
  const{flightUpdate,setFlightUpdate}=useContext(editFlight)

   const [show, setShow] = useState(false);
    const [tripType, setTripType] = useState("oneStop");
    
    const handleClose = () => {
      setShow(false);
      clearContent()
    }
    const handleShow = () => setShow(true);
    const[preview,setPreview]=useState()
    const[data,setData]=useState([])

    const[flightData,setFlightData]=useState({
      tripType:"",
      airlineName:"",
      flightNumber:"",
      departureAirportCode:"",
      departureName:"",
      dateOfDeparture:"",
      timeOfDeparture:"",
      destinationAirportCode:"",
      destinationImg:"",
      destinationName:"",
      dateOfDestination:"",
      timeOfDestination:"",
      flightDuration:"",
      refundable:"",
      cabinClass:"",
      price:"",
      returnDate:"",
      returnTime:"",
      avaiableSeat:"",
      stop:""

    }
    
  )
  console.log(flightData);
  
    useEffect(()=>{
      allFlightView()
    },[flightUpdate])

    useEffect(()=>{

      if(flightData.destinationImg){
        if(flightData.destinationImg.type=="image/jpeg" ||flightData.destinationImg.type=="image/png")
          setPreview(URL.createObjectURL(flightData.destinationImg))
      }





    },[flightData.destinationImg])
    console.log(flightData);

   
    

    const saveFlights=async(e)=>{
      e.preventDefault()
      const token=sessionStorage.getItem("token")
      if(token){
        
          if(flightData.tripType&&flightData.airlineName&&flightData.avaiableSeat&&flightData.cabinClass&&flightData.dateOfDeparture&&flightData.dateOfDestination&&flightData.departureAirportCode&&flightData.departureName&&flightData.destinationAirportCode&&flightData.destinationImg&&flightData.flightDuration&&flightData.flightNumber)
          {
            const payload = new FormData();
            payload.append("tripType", flightData.tripType);
            payload.append("airlineName", flightData.airlineName);
            payload.append("flightNumber", flightData.flightNumber);
            payload.append("departureAirportCode", flightData.departureAirportCode);
            payload.append("departureName", flightData.departureName);
            payload.append("dateOfDeparture", flightData.dateOfDeparture);
            payload.append("timeOfDeparture", flightData.timeOfDeparture);
            payload.append("destinationAirportCode", flightData.destinationAirportCode);
            payload.append("destinationImg", flightData.destinationImg);
            payload.append("destinationName", flightData.destinationName);
            payload.append("dateOfDestination", flightData.dateOfDestination);
            payload.append("timeOfDestination", flightData.timeOfDestination);
            payload.append("flightDuration", flightData.flightDuration);
            payload.append("refundable", flightData.refundable);
            payload.append("cabinClass", flightData.cabinClass);
            payload.append("price", flightData.price);
            payload.append("returnDate", flightData.returnDate);
            payload.append("returnTime", flightData.returnTime);
            payload.append("avaiableSeat", flightData.avaiableSeat);
            payload.append("stop", flightData.stop);
            const reqHeaders={
              "authorization":`Bearer ${token}`,
              "Content-Type":"multipart/form-data"
            }
            try{
              const apiResponse=await addingFlights(payload,reqHeaders)
            if(apiResponse.status==201){
              console.log(apiResponse.data);
              alert("Flight Added Successfully")
              handleClose()
              
            }else{
              alert("something went wrong")
            }
              

            }catch(err){
              console.log(err);
              
            }
          }
        
        else{
          alert("fill the form")
        

        }
          
          
           
          
          

      }else{
        alert("please login")
      }

    }

    const allFlightView=async()=>{
      try{
        let apiResponse=await getallViewFlights()
        console.log(apiResponse);
        setData(apiResponse.data)
        

      }catch(err){
        console.log(err);
        
      }
    }
    const clearContent=()=>{
      setFlightData(
        {
          tripType:"",
          airlineName:"",
          flightNumber:"",
          departureAirportCode:"",
          departureName:"",
          dateOfDeparture:"",
          timeOfDeparture:"",
          destinationAirportCode:"",
          destinationImg:"",
          destinationName:"",
          dateOfDestination:"",
          timeOfDestination:"",
          flightDuration:"",
          refundable:"",
          cabinClass:"",
          price:"",
          returnDate:"",
          returnTime:"",
          avaiableSeat:"",
          stop:""

        }
      )
      setPreview("")
      

    }
    
 
  return (
    <div>


    <TotalFlight />



    <div className="container-fluid p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="m-0" style={{ fontWeight: '600', color: '#2d3748' }}>
          <i className="fas fa-plane me-2 text-primary"></i> Flight Management
        </h3>
        <Button 
          variant="primary" 
          onClick={handleShow}
          className="rounded-pill px-4"
          style={{ boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}
        >
          <i className="fas fa-plus me-2"></i> Add New Flight
        </Button>
      </div>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton className="border-0 pb-0">
          <Modal.Title className="w-100">
            <h4 className="text-center mb-3" style={{ color: '#2d3748', fontWeight: '600' }}>
              <i className="fas fa-plane-circle-plus me-2 text-primary"></i>
              Add New Flight Details
            </h4>
          </Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body className="pt-0">
            <div className="row">
              <div className="col-md-6">
              <div sty>
                <label>
                <input type='file' style={{display:"none"}}
                onChange={((e)=>(setFlightData({...flightData,destinationImg:e.target.files[0]})))} />
                <img src={preview?preview:"https://e7.pngegg.com/pngimages/899/315/png-clipart-nature-painting-drawing-beautiful-scenery-leaf-cloud-thumbnail.png"} alt="" className='img-fluid' />
                </label>
                </div>
                <FloatingLabel controlId="tripType" label="Trip Type" className="mb-3">
                  <Form.Select 
                    name="tripType"
                    className="border-2"
                    value={tripType}
                    onChange={(e) => {
                      setTripType(e.target.value);
                      setFlightData({ ...flightData, tripType: e.target.value });
                    }}
                    
                  >
                    <option value="oneWay">One Way</option>
                    <option value="return">Return</option>
                  </Form.Select>
                </FloatingLabel>

                <FloatingLabel controlId="airlineName" label="Airline Name" className="mb-3">
                  <Form.Control 
                    type="text" 
                    name="airlineName"
                    placeholder="Enter airline name" 
                    required
                    onChange={(e)=>(
                      setFlightData({...flightData,airlineName:e.target.value})
                    )}
                  />
                </FloatingLabel>

                <FloatingLabel controlId="flightNumber" label="Flight Number" className="mb-3">
                  <Form.Control 
                    type="text" 
                    name="flightNumber"
                    placeholder="Enter flight number" 
                    required
                    onChange={(e)=>(
                      setFlightData({...flightData,flightNumber:e.target.value})
                    )}
                  />
                </FloatingLabel>
              </div>

              <div className="col-md-6">
                <FloatingLabel controlId="departureDate" label="Date of Departure" className="mb-3">
                  <Form.Control 
                    type="date" 
                    name="departureDate"
                    required
                    onChange={(e)=>(
                      setFlightData({...flightData,dateOfDeparture:e.target.value})
                    )}
                  />
                </FloatingLabel>

                <FloatingLabel controlId="departureTime" label="Departure Time" className="mb-3">
                  <Form.Control 
                    type="time" 
                    name="timeOfDeparture"
                    required
                    onChange={(e)=>(
                      setFlightData({...flightData,timeOfDeparture:e.target.value})
                    )}
                  />
                </FloatingLabel>
                <FloatingLabel controlId="detinationTime" label="Destination Time" className="mb-3">
                  <Form.Control 
                    type="time" 
                    name="timeOfDestination"
                    required
                    onChange={(e)=>(
                      setFlightData({...flightData,timeOfDestination:e.target.value})
                    )}
                  />
                </FloatingLabel>
                <FloatingLabel controlId="dateOfDestination" label="Destination Date" className="mb-3">
                  <Form.Control 
                    type="date" 
                    name="dateOfDestination"
                    required
                    onChange={(e)=>(
                      setFlightData({...flightData,dateOfDestination:e.target.value})
                    )}
                  />
                </FloatingLabel>

                <FloatingLabel controlId="flightDuration" label="Flight Duration (hours)" className="mb-3">
                  <Form.Control 
                    type="number" 
                    name="flightDuration"
                    placeholder="Enter flight duration" 
                    min="0"
                    step="0.1"
                    required
                    onChange={(e)=>(
                      setFlightData({...flightData,flightDuration:e.target.value})
                    )}
                  />
                </FloatingLabel>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <FloatingLabel controlId="departureAirport" label="Departure Airport Code" className="mb-3">
                  <Form.Control 
                    type="text" 
                    name="departureAirport"
                    placeholder="e.g., JFK" 
                    required
                    onChange={(e)=>(
                      setFlightData({...flightData,departureAirportCode:e.target.value})
                    )}
                  />
                </FloatingLabel>

                <FloatingLabel controlId="departureCity" label="Departure City" className="mb-3">
                  <Form.Control 
                    type="text" 
                    name="departureCity"
                    placeholder="Enter departure city" 
                    required
                    onChange={(e)=>(
                      setFlightData({...flightData,departureName:e.target.value})
                    )}
                  />
                </FloatingLabel>
              
              </div>
              

              <div className="col-md-6">
                <FloatingLabel controlId="destinationAirport" label="Destination Airport Code" className="mb-3">
                  <Form.Control 
                    type="text" 
                    name="destinationAirport"
                    placeholder="e.g., LAX" 
                    required
                    onChange={(e)=>(
                      setFlightData({...flightData,destinationAirportCode:e.target.value})
                    )}
                  />
                </FloatingLabel>

                <FloatingLabel controlId="destinationCity" label="Destination City" className="mb-3">
                  <Form.Control 
                    type="text" 
                    name="destinationCity"
                    placeholder="Enter destination city" 
                    required
                    onChange={(e)=>(
                      setFlightData({...flightData,destinationName:e.target.value})
                    )}
                  />
                </FloatingLabel>
              </div>
            </div>

            {tripType === "return" && (
              <div className="row">
                <div className="col-md-6">
                  <FloatingLabel controlId="returnDate" label="Return Date" className="mb-3">
                    <Form.Control 
                      type="date" 
                      name="returnDate"
                      required
                      onChange={(e)=>(
                        setFlightData({...flightData,returnDate:e.target.value})
                      )}
                    />
                  </FloatingLabel>
                </div>
                <div className="col-md-6">
                  <FloatingLabel controlId="returnTime" label="Return Time" className="mb-3">
                    <Form.Control 
                      type="time" 
                      name="returnTime"
                      required
                      onChange={(e)=>(
                        setFlightData({...flightData,returnTime:e.target.value})
                      )}
                    />
                  </FloatingLabel>
                </div>
              </div>
            )}

            <div className="row mt-1">
              <div className="col-md-3">
                <FloatingLabel controlId="cabinClass" label="Cabin Class" className="mb-3"
                 name="cabinClass"
                 onChange={(e) => setFlightData({ ...flightData, cabinClass: e.target.value })}>
                  <Form.Select name="cabinClass">
                    <option value="business">Business class</option>
                    <option value="premium">Premium Economy</option>
                    <option value="economy">Economy class</option>
                  
                  </Form.Select>
                </FloatingLabel>
              </div>
              <div className="col-md-3">
                <Form.Select name="stop" onChange={(e) => setFlightData({...flightData, stop: e.target.value})}>
                 <option value="direct">Direct</option>
                 <option value="oneStop">One Stop</option>
                 </Form.Select>

              </div>
              
              <div className="col-md-3">
                <FloatingLabel controlId="refundable" label="Refundable" className="mb-3"
                 onChange={(e)=>(
                  setFlightData({...flightData,refundable:e.target.value})
                )}>
                  <Form.Select name="refundable">
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </Form.Select>
                </FloatingLabel>
              </div>
              
              <div className="col-md-3">
                <FloatingLabel controlId="price" label="Price ($)" className="mb-3">
                  <Form.Control 
                    type="number" 
                    name="price"
                    placeholder="0.00" 
                    min="0"
                    step="0.01"
                    required
                    onChange={(e)=>(
                      setFlightData({...flightData,price:e.target.value})
                    )}
                  />
                </FloatingLabel>
              </div>
              
              <div className="col-md-3">
                <FloatingLabel controlId="seats" label="Available Seats" className="mb-3">
                  <Form.Control 
                    type="number" 
                    name="seats"
                    placeholder="0" 
                    min="1"
                    required
                    onChange={(e)=>(
                      setFlightData({...flightData,avaiableSeat:e.target.value})
                    )}
                  />
                </FloatingLabel>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="border-0">
            <Button variant="outline-secondary" onClick={handleClose} className="px-4">
              Cancel
            </Button>
            <Button variant="primary" type="submit" className="px-4"
            onClick={saveFlights}>
              Save Flight
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
   

    <div className='mt-5 p-3 d-flex flex-wrap gap-4'>
        {
          data.map((a,index)=>(
           <div className="">
             <Card  key={index} style={{ width: '19rem', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease' ,height:"500px"}}>
            <Card.Img variant="top" src={`${baseURL}/uploads/${a.destinationImg}`} style={{ height: '180px', objectFit: 'cover' }} />
            <Card.Body style={{ padding: '1.5rem' }}>
              <Card.Title style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>{a.departureName}</Card.Title>
              <Card.Text style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '0.5rem' }}>{a.destinationName}</Card.Text>
              <Card.Text>
                <div className="row" style={{ marginBottom: '1rem' }}>
                  <div className="col-3">
                    <img src="https://logos-world.net/wp-content/uploads/2023/01/AirAsia-Logo-2002.png" alt="AirAsia Logo" style={{ width: '100%', borderRadius: '8px' }} />
                  </div>
                  <div className="col-6">
                    <span style={{ fontWeight: 'bolder', fontSize: '0.95rem' }}>
                    {new Date(a.dateOfDeparture).toLocaleDateString('en-US', {
                      weekday: 'short',
                      day: '2-digit',
                      month: 'short',
                    })}

                    </span>
                    <br />
                    <span style={{ fontSize: '12px', color: '#6c757d' }}> AirAsia</span>
                  </div>
                  <div className="col-3" style={{ textAlign: 'right', color: '#28a745', fontWeight: '500' }}>{a.stop}</div>
                </div>
               {
                a.returnDate?
                <div className="row" style={{ marginBottom: '1.5rem' }}>
                <div className="col-3">
                  <img src="https://logos-world.net/wp-content/uploads/2023/01/AirAsia-Logo-2002.png" alt="AirAsia Logo" style={{ width: '100%', borderRadius: '8px' }} />
                </div>
                <div className="col-6">
                  <span style={{ fontWeight: 'bolder', fontSize: '0.95rem' }}>
                    {new Date(a.dateOfDestination).toLocaleDateString('en-US', {
                    weekday: 'short',
                    day: '2-digit',
                    month: 'short',
                  })}
                  </span>
                  <br />
                  <span style={{ fontSize: '12px', color: '#6c757d' }}> with AirAsia</span>
                </div>
                <div className="col-3" style={{ textAlign: 'right', color: '#28a745', fontWeight: '500' }}>Direct</div>
              </div>:""
               }
              </Card.Text>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
           
                <span style={{ color: '#ff5a1d', fontWeight: 'bolder', fontSize: '1.25rem' }}>{a.price}</span>
                <FlightEdit flights={a} />
              
                <button style={{ backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '8px', padding: '8px 16px', fontSize: '0.9rem', fontWeight: '500', cursor: 'pointer', transition: 'background-color 0.3s ease' }} ><i className="fa-solid fa-trash"></i></button>
              </div>
            </Card.Body>
          </Card>

           </div>
          ))
        }
      
    </div>





   
   


    
      
      
    </div>
  )
}

export default AddFlights
