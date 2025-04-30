import React from 'react';
import TotalFlight from '../../component/TotalFlight';
import AdminFlightTicketView from '../../component/AdminFlightTicketView';

const AdminFlightManage = () => {
  return (
    // Remove the outer flex container - layout handles this
    <div style={{
      // Match sidebar width
     
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
      padding: '20px' // Add some breathing room
    }}>
      <TotalFlight />
      <AdminFlightTicketView />
    </div>
  );
};

export default AdminFlightManage;