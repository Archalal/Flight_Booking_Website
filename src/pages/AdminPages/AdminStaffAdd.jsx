import React from 'react';
import { FaUserPlus } from 'react-icons/fa';

const AdminStaffAdd = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)',
      fontFamily: "'Segoe UI', Roboto, sans-serif",
      padding: '20px'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '450px',
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
        padding: '40px',
        border: '1px solid rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '30px'
        }}>
          <FaUserPlus style={{
            color: '#7c3aed',
            fontSize: '36px',
            marginBottom: '12px'
          }} />
          <h2 style={{
            color: '#1f2937',
            fontSize: '24px',
            fontWeight: '600',
            margin: '0'
          }}>Add New Staff</h2>
          <p style={{
            color: '#6b7280',
            fontSize: '14px',
            marginTop: '8px'
          }}>Enter staff details below</p>
        </div>

        <form>
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              color: '#4b5563',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '8px'
            }}>Username</label>
            <input
              type="text"
              placeholder="john_doe"
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '15px',
                color: '#111827',
                transition: 'all 0.2s',
                background: 'white'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              color: '#4b5563',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '8px'
            }}>Email</label>
            <input
              type="email"
              placeholder="john@company.com"
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '15px',
                color: '#111827',
                transition: 'all 0.2s',
                background: 'white'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              color: '#4b5563',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '8px'
            }}>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '15px',
                color: '#111827',
                transition: 'all 0.2s',
                background: 'white'
              }}
            />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={{
              display: 'block',
              color: '#4b5563',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '8px'
            }}>Role</label>
            <select style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              fontSize: '15px',
              color: '#111827',
              background: 'white',
              appearance: 'none',
              backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 12px center',
              backgroundSize: '16px'
            }}>
              <option>Staff</option>
           
            </select>
          </div>

          <button type="button" style={{
            width: '100%',
            background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
            color: 'white',
            border: 'none',
            padding: '14px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '500',
            marginTop: '10px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            boxShadow: '0 4px 6px rgba(124, 58, 237, 0.2)'
          }}>
            Create Staff Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminStaffAdd;