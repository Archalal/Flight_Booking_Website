import React from "react";
import SideBar from "./SideBar";
import { Button, Badge, Table, Card } from "react-bootstrap";
import TotalDisplay from "../component/TotalDisplay";
import { Link } from "react-router-dom";
import AdminNotification from "../component/AdminNotification";

const UserAdminManage = () => {
  return (
    <div className="admin-dashboard" style={{ backgroundColor: "#f8f9fa" }}>
      {/* Sidebar */}
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

      {/* Main Content */}
      <div className="main-content" style={{ 
        marginLeft: '220px',
        padding: "20px",
        width: 'calc(100% - 250px)',
      }}>
        {/* Header */}
        <AdminNotification />
        
        {/* Page Title */}
        <div className="d-flex justify-content-between align-items-center mb-4 mt-3">
          <h2 className="m-0" style={{ fontWeight: "300", color: "#2d3748" }}>
            <i className="fas fa-users me-2 text-primary"></i> User Management
          </h2>
       
        </div>

        {/* Stats Cards */}
        <TotalDisplay />

        {/* Users Table */}
        <Card className="border-0 shadow-sm mt-4">
          <Card.Body className="p-0">
            <div className="p-3 border-bottom bg-white">
              <h5 className="mb-0" style={{ fontWeight: "600", color: "#2d3748" }}>
                <i className="fas fa-list me-2 text-primary"></i> All Users Details
              </h5>
            </div>
            
            <div className="table-responsive">
              <Table hover className="mb-0">
                <thead style={{ backgroundColor: "#f8f9fa" }}>
                  <tr>
                    <th className="text-center p-3">Picture</th>
                    <th className="p-3">Name</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Phone</th>
                    <th className="p-3">Status</th>
                    <th className="text-center p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center p-3">
                      <div className="rounded-circle overflow-hidden mx-auto" style={{ width: "50px", height: "50px" }}>
                        <img 
                          src="https://static.vecteezy.com/system/resources/previews/024/558/262/non_2x/businessman-isolated-illustration-ai-generative-free-png.png" 
                          alt="User" 
                          className="img-fluid"
                          style={{ objectFit: "cover", width: "100%", height: "100%" }}
                        />
                      </div>
                    </td>
                    <td className="p-3 fw-semibold">Philip P</td>
                    <td className="p-3">philip@gmail.com</td>
                    <td className="p-3">9876543212</td>
                    <td className="p-3">
                      <Badge bg="success" className="bg-opacity-10 text-success px-3 py-2 rounded-pill">
                        <i className="fas fa-check-circle me-1"></i> Active
                      </Badge>
                    </td>
                    <td className="text-center p-3">
                      <div className="d-flex justify-content-center">
                        <Link to="/adminsingleuser" className="me-2">
                          <Button 
                            variant="outline-primary" 
                            size="sm" 
                            className="rounded-pill px-3"
                          >
                            <i className="fas fa-eye me-1"></i> View
                          </Button>
                        </Link>
                        <Button 
                          variant="outline-success" 
                          size="sm" 
                          className="rounded-pill px-3 me-2"
                        >
                          <i className="fas fa-check me-1"></i> Accept
                        </Button>
                        <Button 
                          variant="outline-danger" 
                          size="sm" 
                          className="rounded-pill px-3"
                        >
                          <i className="fas fa-times me-1"></i> Reject
                        </Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default UserAdminManage;