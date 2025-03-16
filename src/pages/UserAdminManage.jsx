import React from "react";
import SideBar from "./SideBar";
import ReactApexChart from "react-apexcharts";
import { Button } from "react-bootstrap";

const UserAdminManage = () => {
  const [state, setState] = React.useState({
    series: [44, 55, 67, 83],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              label: "Total",
              formatter: function (w) {
                return 249;
              },
            },
          },
        },
      },
      labels: ["Apples", "Oranges", "Bananas", "Berries"],
    },
  });
  return (
    <div>
      <div>
        <div className="w-100">
          <div className="row" style={{ background: "#f8f9fa" }}>
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

            <div
              className="col-10"
              style={{
                marginLeft: "16.65%",
                overflowX: "hidden",
                backgroundColor: "#ffffff",
              }}
            >
              <div
                style={{
                  height: "50px",
                  width: "100%",
                  backgroundColor: "white",
                }}
                className="rounded shadow "
              >
                <div className="d-flex justify-content-between align-items-center p-1">
                  <i className="fa-solid fa-bell"></i>
                  <h3>Admin User Manage</h3>
                  <i className="fa-solid fa-right-from-bracket"></i>
                </div>
              </div>
              <div className="row mt-4 p-3">
                <div className="col-md-4">
                  <div
                    className="bg-white p-3 rounded shadow"
                    style={{ height: "120px" }}
                  >
                    <i
                      className="fa-solid fa-eye"
                      style={{ color: "purple" }}
                    ></i>
                    <h4 className="text-sm font-semibold">Total Users</h4>
                    <p className="text-2xl font-bold">1,234</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="bg-white p-3 rounded shadow"
                    style={{ height: "120px" }}
                  >
                    <i
                      className="fa-solid fa-eye"
                      style={{ color: "purple" }}
                    ></i>
                    <h4 className="text-sm font-semibold">Active Users</h4>
                    <p className="text-2xl font-bold">1,234</p>
                  </div>
                </div>
                

                <div className="col-md-4">
                  <div
                    className="bg-white p-3 rounded shadow"
                    style={{ height: "120px" }}
                  >
                    <i
                      className="fa-solid fa-dollar-sign"
                      style={{ color: "purple" }}
                    ></i>
                    <h4 className="text-lg font-semibold">Total Revenue</h4>
                    <p className="text-2xl font-bold">12,345</p>
                  </div>
                </div>
                <div className="col-md-3"></div>
              </div>
              <div className="row mt-5">
          <div className="col-9">
            
            <table className="table table-bordered table-striped table-hover">
              <thead className="thead-dark">
                <tr>
                  <th>Name</th>
                  <th>E-Mail</th>
                  <th>Date-of-birth</th>
                  <th colSpan={2}>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>archa</td>
                  <td>archa0002@gmail.com</td>
                  <td>31/07/2000</td>
                  <td><Button variant="success">Accept</Button></td>
                  <td><Button variant="danger">Reject</Button></td>
                </tr>
                <tr>
                  <td>John</td>
                  <td>john@example.com</td>
                  <td>15/03/1995</td>
                  <td><Button variant="success">Accept</Button></td>
                  <td><Button variant="danger">Reject</Button></td>
                </tr>
                <tr>
                  <td>Jane</td>
                  <td>jane@example.com</td>
                  <td>22/11/1988</td>
                  <td><Button variant="success">Accept</Button></td>
                  <td><Button variant="danger">Reject</Button></td>
                </tr>
              </tbody>
            </table>

          </div>
          <div className="col-3 ">
                  <div
                    className="bg-white  rounded shadow p-3"
                   
                  >
                    <div>
                      <div id="chart">
                        <ReactApexChart
                          options={state.options}
                          series={state.series}
                          type="radialBar"
                          height={350}
                        />
                      </div>
                      <div id="html-dist"></div>
                    </div>
                  </div>
                </div>
         </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default UserAdminManage;