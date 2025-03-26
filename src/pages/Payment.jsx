import React from 'react';
import { toast } from 'react-toastify';

const Payment = () => {
    const payNow = (e) => {
        e.preventDefault();
        toast.success("Payment successful! Your ticket has been sent to your email.");
    };

    return (
        <div className="container py-5 d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div className="card border-0" style={{ 
                width: '100%', 
                maxWidth: '500px',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                overflow: 'hidden'
            }}>
                
                <div className="card-header p-4 text-center" style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    borderBottom: 'none'
                }}>
                    <h3 className="mb-0 fw-semibold">Complete Your Payment</h3>
                   
                </div>

               
                <div className="card-body p-4 p-md-5" style={{ backgroundColor: '#f8f9fa' }}>
                    <form onSubmit={payNow}>
                      
                        <div className="mb-4 p-3 rounded-3" style={{
                            background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
                            color: 'white',
                            height: '180px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}>
                            <div className="d-flex justify-content-between align-items-start">
                                <div>
                                    <p className="mb-1 small opacity-75">CARD NUMBER</p>
                                    <h5 className="mb-0 fw-normal">•••• •••• •••• 4242</h5>
                                </div>
                                <div className="bg-white p-1 rounded-2">
                                    <img 
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png" 
                                        alt="Card" 
                                        style={{ height: '24px' }} 
                                    />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p className="mb-1 small opacity-75">CARDHOLDER NAME</p>
                                    <h6 className="mb-0 fw-normal">JOHN DOE</h6>
                                </div>
                                <div>
                                    <p className="mb-1 small opacity-75">EXPIRES</p>
                                    <h6 className="mb-0 fw-normal">12/25</h6>
                                </div>
                            </div>
                        </div>

                        
                        <div className="mb-4">
                            <label className="form-label fw-medium text-muted mb-2">Card Number</label>
                            <div className="input-group">
                                <span className="input-group-text bg-white border-end-0">
                                    <i className="bi bi-credit-card text-primary"></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control py-3 border-start-0"
                                    placeholder="1234 5678 9012 3456"
                                    required
                                    style={{ 
                                        borderColor: '#e0e0e0',
                                        borderRadius: '0.375rem'
                                    }}
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="form-label fw-medium text-muted mb-2">Cardholder Name</label>
                            <input
                                type="text"
                                className="form-control py-3"
                                placeholder="John Doe"
                                required
                                style={{ 
                                    borderColor: '#e0e0e0',
                                    borderRadius: '0.375rem'
                                }}
                            />
                        </div>

                        <div className="row mb-4">
                            <div className="col-md-6 mb-3 mb-md-0">
                                <label className="form-label fw-medium text-muted mb-2">Expiry Date</label>
                                <input
                                    type="text"
                                    className="form-control py-3"
                                    placeholder="MM/YY"
                                    required
                                    style={{ 
                                        borderColor: '#e0e0e0',
                                        borderRadius: '0.375rem'
                                    }}
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label fw-medium text-muted mb-2">CVV</label>
                                <div className="input-group">
                                    <input
                                        type="password"
                                        className="form-control py-3"
                                        placeholder="•••"
                                        required
                                        style={{ 
                                            borderColor: '#e0e0e0',
                                            borderRadius: '0.375rem'
                                        }}
                                    />
                                    <span className="input-group-text bg-white">
                                        <i className="bi bi-lock-fill text-primary"></i>
                                    </span>
                                </div>
                            </div>
                        </div>

                        
                        <button
                            type="submit"
                            className="btn w-100 py-3 fw-bold mt-2 text-white"
                            style={{
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                border: 'none',
                                fontSize: '1rem',
                                borderRadius: '8px',
                                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                                transition: 'all 0.3s ease'
                            }}
                          
                        >
                            Pay ₹44,665
                        </button>

                       
                        <div className="text-center mt-4 pt-3">
                            <p className="text-muted small mb-3">100% secure payment. We accept:</p>
                           
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Payment;