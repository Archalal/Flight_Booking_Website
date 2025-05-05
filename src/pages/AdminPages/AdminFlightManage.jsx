import React from 'react';
import TotalFlight from '../../component/TotalFlight';
import AdminFlightTicketView from '../../component/AdminFlightTicketView';

const AdminFlightManage = () => {
  return (
    
    <div style={{
    
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
      padding: '20px' 
    }}>
      <TotalFlight />
      <AdminFlightTicketView />
    </div>
  );
};

export default AdminFlightManage;