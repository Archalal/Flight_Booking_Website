import React from 'react';
import SideBar from './SideBar';
import TotalFlight from '../component/TotalFlight';

import AdminFlightTicketView from '../component/AdminFlightTicketView';

const AdminFlightManage = () => {
  return (
    <div style={{ display: 'flex' }}>
     
      <div style={{
        width: '250px',
        backgroundColor: '#ffffff',
        height: '100vh',
        position: 'fixed',
        padding: '20px',
        boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)'
      }}>
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