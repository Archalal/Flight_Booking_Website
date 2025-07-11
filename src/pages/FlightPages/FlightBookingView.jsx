import React, { useEffect, useState } from 'react';
import { Button, Card, Badge } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { flightBooked, singleBooking } from '../../../services/allApi';
import baseURL from '../../../services/baseURL';

const FlightBookingView = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    bookedUser();
  }, []);

  const bookedUser = async () => {
    try {
      let apiResponse = await flightBooked();
      setData(apiResponse.data);
      console.log(apiResponse.data);
    } catch (err) {
      console.log(err);
    }
  };

  const onUserClick = async (id) => {
    try {
      await singleBooking(id);
      navigate(`/flight/${id}/singleflightview`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-3" style={{ backgroundColor: '#f8fafc' }}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4 mt-1">
        <div>
          <h2 className="m-0" style={{ fontWeight: '300', color: '#2d3748' }}>Flight Management</h2>
          <p className="text-muted m-0">Manage all user flight bookings</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="row mb-4 g-4">
        <div className="col-md-6">
          <Card className="border-0 shadow-sm h-100" style={{
            background: 'linear-gradient(135deg, #000080 0%, #1e3a8a 100%)',
            color: 'white'
          }}>
            <Card.Body className="d-flex flex-column">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h6 className="text-uppercase text-white-50 mb-2">Total Users</h6>
                  <h2 className="mb-0">1,234</h2>
                </div>
                <div className="bg-white bg-opacity-10 p-3 rounded-circle">
                  <i className="fas fa-users fs-4"></i>
                </div>
              </div>
              <div className="mt-auto">
                <small className="text-white-50">+12% from last month</small>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6">
          <Card className="border-0 shadow-sm h-100" style={{
            background: 'linear-gradient(135deg, #0e2f44 0%, #1e3a8a 100%)',
            color: 'white'
          }}>
            <Card.Body className="d-flex flex-column">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h6 className="text-uppercase text-white-50 mb-2">Total Bookings</h6>
                  <h2 className="mb-0">567</h2>
                </div>
                <div className="bg-white bg-opacity-10 p-3 rounded-circle">
                  <i className="fas fa-plane fs-4"></i>
                </div>
              </div>
              <div className="mt-auto">
                <small className="text-white-50">+8% from last month</small>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* Booking Table */}
     <Card className="border-0 shadow-sm">
  <Card.Body className="p-0">
    <div className="table-responsive">
      <table
        className="table align-middle mb-0"
        style={{
          borderCollapse: "separate",
          borderSpacing: "0 10px",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#edf2f7", color: "#4a5568" }}>
            <th className="p-3 text-uppercase small fw-bold">Picture</th>
            <th className="p-3 text-uppercase small fw-bold">Name</th>
            <th className="p-3 text-uppercase small fw-bold">E-Mail</th>
            {/* <th className="p-3 text-uppercase small fw-bold">Address</th> */}
            <th className="p-3 text-uppercase small fw-bold">Phone</th>
            <th className="p-3 text-uppercase small fw-bold">Status</th>
            <th className="p-3 text-uppercase small fw-bold">Cancellation</th>
            <th className="p-3 text-uppercase small fw-bold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((a, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: "#ffffff",
                boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
              }}
            >
              <td className="p-3">
                <div
                  className="rounded-circle overflow-hidden border"
                  style={{ width: "55px", height: "55px" }}
                >
                  <img
                    src={`${baseURL}/uploads/${a.userId.image}`}
                    alt="Profile"
                    className="img-fluid"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              </td>
              <td className="p-3 fw-semibold text-dark">
                {a.userId?.name}
              </td>
              <td
                className="p-3 text-muted"
                style={{
                  maxWidth: "200px",
                  whiteSpace: "normal",
                  wordWrap: "break-word",
                }}
              >
                {a.userId?.email}
              </td>
              {/* <td
                className="p-3 text-muted"
                style={{
                  maxWidth: "200px",
                  whiteSpace: "normal",
                  wordWrap: "break-word",
                }}
              >
                {a.userId?.address}
              </td> */}
              <td
                className="p-3 text-muted"
                style={{
                  maxWidth: "150px",
                  whiteSpace: "normal",
                  wordWrap: "break-word",
                }}
              >
                {a.userId?.phoneNumber}
              </td>
              <td className="p-3">
                <Badge
                  bg="success"
                  className="text-white px-3 py-1 rounded-pill"
                  style={{ fontSize: "0.75rem" }}
                >
                  <i className="fas fa-check-circle me-1"></i> {a.status}
                </Badge>
              </td>
              <td className="p-3">
                <span
                  style={{
                    backgroundColor: "#e6ffe6",
                    color: "#047857",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    fontSize: "0.8rem",
                    fontWeight: "500",
                  }}
                >
                  {a.cancellationStatus}
                </span>
              </td>
              <td className="p-3">
                <Button
                  variant="primary"
                  size="sm"
                  className="d-flex align-items-center"
                  onClick={() => onUserClick(a._id)}
                  style={{
                    padding: "4px 10px",
                    fontSize: "0.75rem",
                    borderRadius: "6px",
                    fontWeight: "500",
                    whiteSpace: "nowrap",
                  }}
                >
                  <i
                    className="fas fa-eye me-1"
                    style={{ fontSize: "0.75rem" }}
                  ></i>
                  View
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Card.Body>
</Card>

    </div>
  );
};

export default FlightBookingView;
