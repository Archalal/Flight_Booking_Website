import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';



const FlightTicket = ({flights}) => {
  const navigate=useNavigate()


   
    const searchParams=new URLSearchParams(location.search)
  
    const departureName=searchParams.get("departureName")
    const destinationName=searchParams.get("destinationName")
    const dateOfDeparture=searchParams.get("dateOfDeparture")
    const cabinClass=searchParams.get("cabinClass")
    const returnDate=searchParams.get("returnDate")
    const avaiableSeat=searchParams.get("avaiableSeat")
    console.log(avaiableSeat);
    
    


  console.log(flights);
  const FlightTicket=(id)=>{
   const token= sessionStorage.getItem("token")

    if(token){

       let query = `?departureName=${departureName}&destinationName=${destinationName}&dateOfDeparture=${dateOfDeparture}&cabinClass=${cabinClass}&avaiableSeat=${avaiableSeat}`;
        if (returnDate) {
          query += `&returnDate=${returnDate}`;
        }
        navigate(`/bookedflight/${id}/${query}`)
      
      
       
  
      }else{
       alert("fill the form");
        
      }
  




    // sessionStorage.setItem("flightticketid",id)
    



  }
  return (
    <div className="d-flex flex-column align-items-center">
      {
        flights.map((a)=>(
         a.tripType=="return"?
         <div className='bg-white rounded-3 shadow p-4 mb-4' style={{ 
          width: '90%',
          maxWidth: '900px',
          background: "linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%)", 
          border: "1px solid #e0e0e0",
          borderLeft: "5px solid #090979",
          overflow: "hidden" 
        }}>
          
          <div className="row align-items-center g-4">
            <div className="col-md-10">
              <div className="row mb-3 align-items-center">
                <div className="col-md-1">
                  <img src="https://logos-world.net/wp-content/uploads/2023/01/AirAsia-Logo-2002.png" alt="AirAsia" className="img-fluid rounded" />
                </div>
                <div className="col-md-5 text-center">
                  <h4 className='fw-bold mb-1'>16:45 - 19:45</h4>
                  <span className="text-muted small">TRV (Thiruvanthapuram) → DXB (Dubai)</span>
                </div>
                <div className="col-md-3">
                  <h6 className='fw-bold text-success'>Direct</h6>
                </div>
                <div className="col-md-3">
                  <h6 className='fw-bold'>4h 30m</h6>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-md-1">
                  <img src="https://logos-world.net/wp-content/uploads/2023/01/AirAsia-Logo-2002.png" alt="AirAsia" className="img-fluid rounded" />
                </div>
                <div className="col-md-5 text-center">
                  <h4 className='fw-bold mb-1'>17:40 - 23:35</h4>
                  <span className="text-muted small">DXB (Dubai) → TRV (Thiruvanthapuram)</span>
                </div>
                <div className="col-md-3">
                  <h6 className='fw-bold text-success'>Direct</h6>
                </div>
                <div className="col-md-3">
                  <h6 className='fw-bold'>4h 30m</h6>
                </div>
              </div>
            </div>
            <div className="col-md-2 text-center border-start ps-4">
              <h4 className='fw-bold text-danger'>₹40,532</h4>
              <h6 className='fw-bold text-danger'>Business Class</h6>
              <p className="text-muted fw-bold small">Seats: 50</p>
            
             <Button
             onClick={()=>FlightTicket(a._id)}
                variant="primary"
                className="fw-bold"
                style={{
                  height: '40px',
                  width: '100px',
                  borderRadius: '10px',
                  backgroundColor: '#ff3a0d',
                  border: 'none',
                }}

              >
                Select
              </Button>
            </div>
          </div>
        </div>
  
                  :

                  <div className='bg-white rounded-3 shadow p-4' style={{ 
                    width: '90%',
                    maxWidth: '900px',
                    background: "linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%)", 
                    border: "1px solid #e0e0e0",
                    borderLeft: "5px solid #dc3545",
                    overflow: "hidden" 
                  }}>
                    <div className="row align-items-center g-4">
                      <div className="col-md-10">
                        <div className="row align-items-center">
                          <div className="col-md-1">
                            <img src="https://logos-world.net/wp-content/uploads/2023/01/AirAsia-Logo-2002.png" alt="AirAsia" className="img-fluid rounded" />
                          </div>
                          <div className="col-md-5 text-center">
                            <h4 className='fw-bold mb-1'>16:45 - 19:45</h4>
                            <span className="text-muted small">TRV (Thiruvanthapuram) → DXB (Dubai)</span>
                          </div>
                          <div className="col-md-3">
                            <h6 className='fw-bold text-success'>Direct</h6>
                          </div>
                          <div className="col-md-3">
                            <h6 className='fw-bold'>4h 30m</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2 text-center border-start ps-4">
                        <h4 className='fw-bold text-danger'>₹40,532</h4>
                        <h6 className='fw-bold text-danger'>Premium Economy</h6>
                        <p className="text-muted fw-bold small">Seats: 12</p>
                        <Button
                          variant="primary"
                          className="fw-bold"
                          style={{
                            height: '40px',
                            width: '100px',
                            borderRadius: '10px',
                            backgroundColor: '#ff3a0d',
                            border: 'none',
                          }}
                          onClick={()=>FlightTicket(a._id)}
                        >
                          Select
                        </Button>
                      </div>
                    </div>
                  </div>
            
            

          
        ))
      }



     

    </div>
  )
}

export default FlightTicket