import React from 'react';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  return (
   <div>
    <div className="row ">
    <div className="card w-100 "  >
            <div className="card-body p-4 p-md-5 mt-5" style={{height:"400px",width:"500px",margin:"0 auto",textAlign:"center"}}>
              <div className="text-center mb-4">
                <h2>Forgot Password</h2>
                <p className="text-muted">Enter your email to reset your password</p>
              </div>

              <form>
                <div className="row mb-3">
                  <div className="col-12">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary w-100 py-2"
                      style={{
                        backgroundColor: '#4a00e0',
                        border: 'none',
                        fontWeight: '600'
                      }}
                    >
                      Reset Password
                    </button>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 text-center">
                    <Link to="/login" className="text-decoration-none">
                      <i className="bi bi-arrow-left me-2"></i>
                      Back to Login
                    </Link>
                  </div>
                </div>
              </form>
            </div>
</div>
    </div>
   </div>
  );
};

export default ForgetPassword;