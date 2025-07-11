import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/allApi";

const Signup = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    role: "user",
    name: "",
    image: "",
    email: "",
    dob: "",
    phoneNumber: "",
    address: "",
    password: ""
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [validNumber, setValidNumber] = useState(false);

  useEffect(() => {
    if (userData.email) {
      setValidEmail(userData.email.endsWith("@gmail.com"));
    }
  }, [userData.email]);

  useEffect(() => {
    if (userData.phoneNumber) {
      setValidNumber(/^\d{10}$/.test(userData.phoneNumber));
    }
  }, [userData.phoneNumber]);

  const onRegisterSubmit = async (e) => {
    e.preventDefault();

    if (
      userData.name && userData.image && userData.email && userData.dob &&
      userData.phoneNumber && userData.address && userData.password && confirmPassword
    ) {
      try {
        if (userData.password === confirmPassword) {
          const payload = new FormData();
          for (const key in userData) {
            payload.append(key, userData[key]);
          }

          const reqHeaders = { "Content-Type": "multipart/form-data" };
          const apiResponse = await registerUser(payload, reqHeaders);

          if (apiResponse.status === 201) {
            alert("Registered successfully");
            navigate('/login');
          } else {
            alert("Already registered. Please login.");
            navigate('/login');
          }
        } else {
          alert("Passwords do not match");
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Please fill the entire form");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8f9fa",
        padding: "28px 0",
        minHeight: "100vh"
      }}
    >
      <div className="container" style={{ maxWidth: "850px" }}>
        <div className="row shadow-lg" style={{ borderRadius: "20px", overflow: "hidden" }}>
          <div
            className="col-md-7 p-3"
            style={{
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h2 className="text-center mb-1" style={{ color: "#ff5a1d", fontWeight: "700", fontSize: "1.6rem" }}>
              𝐂𝐫𝐞𝐚𝐭𝐞 𝐀𝐧 𝐀𝐜𝐜𝐨𝐮𝐧𝐭
            </h2>
            <p className="text-center mb-3" style={{ color: "#6c757d", fontSize: "0.75rem" }}>
              Welcome! Sign up to experience our service.
            </p>
            <form style={{ width: "100%", maxWidth: "400px" }}>
              {[
                { id: "name", label: "Full Name", type: "text", value: userData.name },
                { id: "email", label: "Email address", type: "text", value: userData.email },
                { id: "dob", label: "Date of Birth", type: "date", value: userData.dob },
                { id: "number", label: "Phone Number", type: "tel", value: userData.phoneNumber },
                { id: "address", label: "Address", type: "text", value: userData.address },
                { id: "password", label: "Password", type: "password", value: userData.password },
                { id: "confirmPassword", label: "Confirm Password", type: "password", value: confirmPassword }
              ].map(({ id, label, type, value }) => (
                <div key={id} className="mb-2">
                  <label htmlFor={id} className="form-label" style={{ fontSize: "0.75rem", fontWeight: "500" }}>
                    {label}
                  </label>
                  <input
                    type={type}
                    className="form-control"
                    id={id}
                    value={id === "confirmPassword" ? confirmPassword : value}
                    onChange={(e) => {
                      if (id === "confirmPassword") setConfirmPassword(e.target.value);
                      else setUserData({ ...userData, [id === "number" ? "phoneNumber" : id]: e.target.value });
                    }}
                    placeholder={`Enter your ${label.toLowerCase()}`}
                    style={{ fontSize: "0.7rem", padding: "3px 7px", borderRadius: "8px" }}
                  />
                  {id === "email" && !validEmail && userData.email && (
                    <span style={{ color: "blue", fontSize: "11px" }}>Enter a valid email (e.g., elena@gmail.com)</span>
                  )}
                  {id === "number" && !validNumber && userData.phoneNumber && (
                    <span style={{ color: "blue", fontSize: "11px" }}>Enter a valid 10-digit number</span>
                  )}
                </div>
              ))}

              <div className="mb-2">
                <label htmlFor="picture" className="form-label" style={{ fontSize: "0.75rem", fontWeight: "500" }}>
                  Picture
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="picture"
                  onChange={(e) => setUserData({ ...userData, image: e.target.files[0] })}
                  style={{ fontSize: "0.7rem", padding: "3px", borderRadius: "8px" }}
                />
              </div>

              <div className="d-grid">
                <button
                  onClick={onRegisterSubmit}
                  type="submit"
                  className="btn mt-3"
                  style={{
                    backgroundColor: "#ff5a1d",
                    color: "white",
                    border: "none",
                    borderRadius: "20px",
                    padding: "6px",
                    fontSize: "0.9rem",
                    fontWeight: "600",
                    width: "50%",
                    margin: "0 auto"
                  }}
                >
                  Sign Up
                </button>
              </div>

              <div className="text-center mt-3" style={{ fontSize: "0.75rem" }}>
                Already have an account?{" "}
                <Link to="/login" style={{ color: "#ff5a1d", fontWeight: "500" }}>
                  Login
                </Link>
              </div>
            </form>
          </div>

          <div className="col-md-5 p-0">
            <img
              src="https://cdn.pixabay.com/photo/2025/02/12/17/47/stewardess-9401950_1280.png"
              alt="Airplane"
              style={{ width: "100%", height: "70%", objectFit: "cover", marginTop: "90px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
