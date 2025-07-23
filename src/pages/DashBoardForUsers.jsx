import React from 'react';
import UserDashNav from '../component/UserDashNav';
import Card from 'react-bootstrap/Card';
import Footer from '../component/Footer';
import FlightSearchByUser from '../component/FlightSearchByUser';



const DashBoardForUsers = () => {
  

  return (
    <div>
      <div>
        <UserDashNav />
      </div>
      <div>
        <FlightSearchByUser />
      </div>
    

      



      <div className='container mt-3'>
        <div>
          <h2 style={{ display: "block", fontWeight: "bold", color: "#090979", marginTop: "30px" }}>𝐅𝐥𝐢𝐠𝐡𝐭 𝐝𝐞𝐚𝐥𝐬 𝐟𝐫𝐨𝐦 𝐈𝐧𝐝𝐢𝐚</h2>
          <br />
          <p>Here are the flight deals with the lowest prices. Act fast – they all depart within the next three months.</p>

          <Card style={{ width: '19rem', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease' }}>
            <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/11/13/12/52/kuala-lumpur-1820944_1280.jpg" style={{ height: '180px', objectFit: 'cover' }} />
            <Card.Body style={{ padding: '1.5rem' }}>
              <Card.Title style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>Kuala Lumpur</Card.Title>
              <Card.Text style={{ color: '#6c757d', marginBottom: '1.5rem' }}>Malaysia</Card.Text>
              <Card.Text>
                <div className="row" style={{ marginBottom: '1rem' }}>
                  <div className="col-3">
                    <img src="https://logos-world.net/wp-content/uploads/2023/01/AirAsia-Logo-2002.png" alt="AirAsia Logo" style={{ width: '100%', borderRadius: '8px' }} />
                  </div>
                  <div className="col-6">
                    <span style={{ fontWeight: 'bolder', fontSize: '0.95rem' }}>Thu, 20 Mar</span>
                    <br />
                    <span style={{ fontSize: '12px', color: '#6c757d' }}>IXZ-KUL with AirAsia</span>
                  </div>
                  <div className="col-3" style={{ textAlign: 'right', color: '#28a745', fontWeight: '500' }}>Direct</div>
                </div>
                <div className="row" style={{ marginBottom: '1.5rem' }}>
                  <div className="col-3">
                    <img src="https://logos-world.net/wp-content/uploads/2023/01/AirAsia-Logo-2002.png" alt="AirAsia Logo" style={{ width: '100%', borderRadius: '8px' }} />
                  </div>
                  <div className="col-6">
                    <span style={{ fontWeight: 'bolder', fontSize: '0.95rem' }}>Sat, 22 Mar</span>
                    <br />
                    <span style={{ fontSize: '12px', color: '#6c757d' }}>KUL-IXZ with AirAsia</span>
                  </div>
                  <div className="col-3" style={{ textAlign: 'right', color: '#28a745', fontWeight: '500' }}>Direct</div>
                </div>
              </Card.Text>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ color: '#ff5a1d', fontWeight: 'bolder', fontSize: '1.25rem' }}>From 7,248</span>
                <button style={{ backgroundColor: '#ff5a1d', color: 'white', border: 'none', borderRadius: '8px', padding: '8px 16px', fontSize: '0.9rem', fontWeight: '500', cursor: 'pointer', transition: 'background-color 0.3s ease' }} >Book Now</button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashBoardForUsers;