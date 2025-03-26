import React from 'react';

import { toast } from 'react-toastify';



const Payment = () => {
    const payNow=(e)=>{
        e.preventDefault()
        toast.success("payment sucess and you ticket has been sended to your respective email")

    }
    
  return (
    <div className="container py-5">
      <div className="row justify-content-center " style={{margin:"0 auto"}}>
        <div className="col-lg-12 col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-body p-4">
              <h3 className="text-center mb-4">Payment Information</h3>
              
              <form>
                <div className="row mb-3">
                  <div className="col-12">
                    <label className="form-label">Card Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-12">
                    <label className="form-label">Cardholder Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="John "
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="form-label">Expiry Date</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">CVV</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="123"
                    />
                  </div>
                </div>

                

                <div className="row mt-5">
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-2"
                      style={{
                        backgroundColor: '#4a00e0',
                        border: 'none',
                        fontWeight: '600'
                      }}
                      onClick={(e)=>payNow(e)}
                    >
                      Pay Now
                    </button>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-12 text-center">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png" 
                      alt="Mastercard" 
                      className="me-3"
                      style={{ height: '30px' }} 
                    />
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/800px-Visa_Inc._logo.svg.png" 
                      alt="Visa" 
                      className="me-3"
                      style={{ height: '30px' }} 
                    />
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png" 
                      alt="Amex" 
                      style={{ height: '30px' }} 
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;