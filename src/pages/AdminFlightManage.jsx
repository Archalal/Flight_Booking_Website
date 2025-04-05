import React from 'react';
import SideBar from './SideBar';
import TotalFlight from '../component/TotalFlight';

import AdminFlightTicketView from '../component/AdminFlightTicketView';

const AdminFlightManage = () => {
  return (
    <div style={{ display: 'flex' }}>
     
     <div
              className="col-2"
              style={{
                backgroundColor: "#ffffff",
                height: "100vh",
                position: "fixed",
                top: "0",
                left: "0",
                padding: "10px",
                color: "#525f7f",
                boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
                zIndex: "1",
              }}
            >
              <SideBar />
            </div>

      
      <div style={{
        marginLeft: '250px',
        padding: '20px',
        width: 'calc(100% - 250px)',
        backgroundColor: '#f8f9fa',
        minHeight: '100vh'
      }}>
        <TotalFlight />
        
       <AdminFlightTicketView />





      </div>
    </div>
  );
};

export default AdminFlightManage;