import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const HomeContent = () => {
  const booknow=()=>{
    alert("please login")
  }
  return (
    <div >
   

{/* <div className='container mt-3'>
    <div className="row" style={{textAlign:"justify", fontSize:"12px",fontWeight:"bolder",marginLeft:"1px"}}>
        <div className="col-4" style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', padding: '15px', borderRadius: '5px'}}>
            <div className="row">
                <div className="col-1"> <i className="fa-solid fa-plane-departure" style={{color:"red"}}></i></div>
                <div className="col-11">
                    <p>Explore the best flight deals from anywhere, to everywhere, then book with no fees</p>
                </div>
            </div>
        </div>
        <div className="col-4" style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', padding: '15px', borderRadius: '5px'}}>
            <div className="row">
                <div className="col-1">
                    <i className="fa-solid fa-calendar-days" style={{color:"red"}} ></i>
                </div>
                <div className="col-11">
                    <p>Compare Flights deals from over 100 providers and choose the cheapest or fastest or lowest-emission tickets</p>
                </div>
            </div>
        </div>
        <div className="col-4" style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', padding: '15px', borderRadius: '5px'}}>
            <div className="row">
                <div className="col-1"><i className="fa-solid fa-tag" style={{color:"red"}}></i></div>
                <div className="col-11">
                    <p>Find the cheapest month -or even day -to fly, and set up price alert to book when the price is right</p>
                </div>
            </div>
        </div>
    </div>
</div> */}
<div style={{textAlign:"center",marginTop:"40px"}} >
  <h2 style={{fontWeight:"bolder",color:"#090979"}}>Plan your Trip with us!</h2>
  <p>Find help with you bookings and travel plans,and see what to expect along your journey</p>
</div>
 
 <div className=" container shadow rounded p-5 mt-5">
    <div className="col-6">
      <span className='border p-1 rounded '  style={{backgroundColor:"#fc466b",color:"white"}}>01</span>
      <h4 style={{fontWeight:"bolder"}} className='mt-3'>Travel requirements for portugala</h4>
      <p >Mamando is by far one of the best travel websites for sourcing travel deals</p>
      <span className='border p-1 rounded'  style={{backgroundColor:"purple",color:"white"}}>02</span>
      <h4 style={{fontWeight:"bolder"}} className='mt-3'>Our Mission</h4>
      <p >Anything from startegy to troubleshotting,improvement ,analysis process engineering contracts or optimization</p>
      <span className='border p-1 rounded'  style={{backgroundColor:"#090979",color:"white"}}>03</span>
      <h4 style={{fontWeight:"bolder"}} className='mt-3'>Travel requirement by destination</h4>
      <p > Best travel websites for sourcing travel deals & enjouy your trip withoout worrying happy journey</p>
    </div>
    <div className="col-6"> 
      <div className="row  mt-5"  >
        <div className="col-4"><img className='image-fluid ' style={{borderRadius:"5%"}} src="https://i.pinimg.com/736x/7c/58/fd/7c58fdc433c9dce8cd47b43952d2c6fd.jpg" alt="" width={"100%"} /></div>
        <div className="col-4">
          <img src="https://i.pinimg.com/736x/54/16/7e/54167e6e30f5da6bc810bd457b4c081b.jpg " style={{borderRadius:"5%"}} alt="" width={"100%"} />
        </div>
        <div className="col-4">
          <img src="https://i.pinimg.com/736x/35/ce/51/35ce5159a316b6232066a28b2919e0d2.jpg" style={{borderRadius:"5%"}} alt="" width={"100%"} />
        </div>
      </div>
    </div>
  </div>
 
  <div className='container mt-5'>
<h2 style={{fontWeight:"bolder",color:"#090979",margin:"0 auto"}}>𝐓𝐡𝐞 𝐛𝐞𝐬𝐭 𝐟𝐥𝐢𝐠𝐡𝐭 𝐨𝐟𝐟𝐞𝐫𝐬 𝐟𝐫𝐨𝐦 𝐚𝐧𝐲𝐰𝐡𝐞𝐫𝐞, 𝐭𝐨 𝐞𝐯𝐞𝐫𝐲𝐰𝐡𝐞𝐫𝐞</h2>

    </div>
      <div className="container mt-2 p-5" style={{marginBottom:"90px",height:"300px"}}>
        <div className="item"
        >
          <div className="image-container">
            <img
              src="https://airindia.scene7.com/is/image/airindia/Mumbai_to_NYC_Mob_Clr"
              alt="Mumbai to NYC"
              className="image"
            />
            <div className="hidden-text">Best Time to Travel!</div>
          </div>
        </div>
        <div className="item">
          <div className="image-container">
            <img
              src="https://airindia.scene7.com/is/image/airindia/landing-loyalty-nudge"
              alt="Mumbai to NYC"
              className="image"
            />
            <div className="hidden-text">Explore the World!</div>
          </div>
        </div>
        <div className="item">
          <div className="image-container">
            <img
              src="https://airindia.scene7.com/is/image/airindia/star-alliance-2"
              alt="Mumbai to NYC"
              className="image"
            />
            <div className="hidden-text">Trips:Keep all your plans in one place!</div>
          </div>
        </div>
        <div className="item">
          <div className="image-container">
            <img
              src="https://airindia.scene7.com/is/image/airindia/AIEstore-1"
              alt="Mumbai to NYC"
              className="image"
            />
            <div className="hidden-text">Price Alert:Know when prices change</div>
          </div>
        </div>
        <div className="item">
          <div className="image-container">
            <img
              src="https://airindia.scene7.com/is/image/airindia/Ask_Agent-1"
              alt="Mumbai to NYC"
              className="image"
            />
            <div className="hidden-text">Explore the World!</div>
          </div>
        </div>
      </div>
      <h2 style={{fontWeight:"bolder",color:"#090979",textAlign:"center"}} > Make Memories With Us</h2>
      <div className="container">
       
      <div className="row mt-3">
        <div className="col-3  " >
          <img src="https://i.pinimg.com/736x/e1/e1/fc/e1e1fca861c375a3afa892d1052d43d3.jpg" className=' shadow'style={{borderRadius:"100px"}} alt=""  width={"100%"}/>
        </div>
        <div className="col-3">
          <img src="https://i.pinimg.com/736x/98/6d/14/986d14d98dad278c41116c94f73fe434.jpg" alt="" className=' shadow'style={{borderRadius:"100px"}} width={"100%"} />
        </div>
        <div className="col-3">
          <img src="https://i.pinimg.com/736x/79/3f/ec/793fecb0551786b132650c93d34c3188.jpg" alt=""  className=' shadow'style={{borderRadius:"100px"}}width={"100%"} />
        </div>
        <div className="col-3">
          <img src="https://i.pinimg.com/736x/b6/a6/69/b6a669910b46d34f660cd5a0d28bb130.jpg" alt="" className=' shadow'style={{borderRadius:"100px"}}  width={"100%"}/>
        </div>
      </div>
    </div>
      <div className='container' >
      
       <div>
       <h2 style={{display:"block",fontWeight:"bold",color:"#090979",marginTop:"30px"}}>𝐅𝐥𝐢𝐠𝐡𝐭 𝐝𝐞𝐚𝐥𝐬 𝐟𝐫𝐨𝐦 𝐈𝐧𝐝𝐢𝐚</h2> <br />
     
     <p>Here are the flight deals with the lowest prices. Act fast – they all depart within the next three months.</p>

       
       
     <Card style={{ width: '19rem', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease' }}>
  <Card.Img
    variant="top"
    src="https://cdn.pixabay.com/photo/2016/11/13/12/52/kuala-lumpur-1820944_1280.jpg"
    style={{ height: '180px', objectFit: 'cover' }}
  />
  <Card.Body style={{ padding: '1.5rem' }}>
    <Card.Title style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>Kuala Lumpur</Card.Title>
    <Card.Text style={{ color: '#6c757d', marginBottom: '1.5rem' }}>Malaysia</Card.Text>
    <Card.Text>
      <div className="row" style={{ marginBottom: '1rem' }}>
        <div className="col-3">
          <img
            src="https://logos-world.net/wp-content/uploads/2023/01/AirAsia-Logo-2002.png"
            alt="AirAsia Logo"
            style={{ width: '100%', borderRadius: '8px' }}
          />
        </div>
        <div className="col-6">
          <span style={{ fontWeight: 'bolder', fontSize: '0.95rem' }}>Thu, 20 Mar</span>
          <br />
          <span style={{ fontSize: '12px', color: '#6c757d' }}>IXZ-KUL with AirAsia</span>
        </div>
        <div className="col-3" style={{ textAlign: 'right', color: '#28a745', fontWeight: '500' }}>
          Direct
        </div>
      </div>
      <div className="row" style={{ marginBottom: '1.5rem' }}>
        <div className="col-3">
          <img
            src="https://logos-world.net/wp-content/uploads/2023/01/AirAsia-Logo-2002.png"
            alt="AirAsia Logo"
            style={{ width: '100%', borderRadius: '8px' }}
          />
        </div>
        <div className="col-6">
          <span style={{ fontWeight: 'bolder', fontSize: '0.95rem' }}>Sat, 22 Mar</span>
          <br />
          <span style={{ fontSize: '12px', color: '#6c757d' }}>KUL-IXZ with AirAsia</span>
        </div>
        <div className="col-3" style={{ textAlign: 'right', color: '#28a745', fontWeight: '500' }}>
          Direct
        </div>
      </div>
    </Card.Text>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span style={{ color: '#ff5a1d', fontWeight: 'bolder', fontSize: '1.25rem' }}>From 7,248</span>
      <button
        style={{
          backgroundColor: '#ff5a1d',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          padding: '8px 16px',
          fontSize: '0.9rem',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
        onClick={booknow}
      
      >
        Book Now
      </button>
    </div>
  </Card.Body>
</Card>
    </div>
   

   
      
      </div>
     
    
    </div>
  );
};

export default HomeContent;