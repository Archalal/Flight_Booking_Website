import React, { useEffect, useState } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { Table } from 'react-bootstrap';
import { adminStaffAdd, deleteStaff, getAllUser } from '../../../services/allApi';


const AdminStaffAdd = () => {
  const[userData,setUserData]=useState([])
  useEffect(()=>{
    getUsers()
   
  },[setUserData])
 
  const[staffData,seStaffData]=useState({
    name:"",
    email:"",
    password:"",
    role:"staff"
  })

   const getUsers=async()=>{
      const apiResponse=await getAllUser()
      let filter= apiResponse.data.filter((a)=>(a.role==="staff" ))
       setUserData(filter)
     
       
  
    }

   
    const getAddAdmin=async()=>{
      try{
        const token=sessionStorage.getItem("token")
        const reqHeaders={
          "authorization":`Bearer ${token}`
        }
        const apiResponse=await adminStaffAdd(staffData,reqHeaders)
        console.log(apiResponse);
        
        alert("staff added successfully")
        seStaffData({
            name:"",
    email:"",
    password:"",
    role:"staff"
  

        })
        getUsers()
        
        

      }catch(err){
        console.log(err);
        
      }
    }

    const onDeleteStaff=async(id)=>{
      console.log(id);
      
      try{
        const token=sessionStorage.getItem("token")
       if(token){
        const reqHeaders={
          "authorization":`Bearer ${token}`
        }

        const apiResponse=await deleteStaff(id,reqHeaders)
        getUsers()
        console.log(apiResponse.data);
       
       
        
       }else{
        alert("please login")
       }



      }catch(err){
        console.log(err);
        
      }
    }

  
  return (
  <div>
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
              value={staffData.name}
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
              onChange={(e)=>seStaffData({...staffData,name:e.target.value})}
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
              value={staffData.email}
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
              onChange={(e)=>seStaffData({...staffData,email:e.target.value})}
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
              value={staffData.password}
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
              onChange={(e)=>seStaffData({...staffData,password:e.target.value})}
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
          }}
          onClick={getAddAdmin}>
            Create Staff Account
          </button>
        </form>
      </div>
    </div>


    {/* <div className="p-4">
      <div className="card shadow-sm border-0">
        <div className="card-body p-0">
          <div className="table-responsive">
            <Table hover className="mb-0">
              <thead className="bg-light">
                <tr>
                
                  <th>Name</th>
                  <th>Email</th>
                  <th>Delete</th>
                
                </tr>
              </thead>
              <tbody>
              
              {
                userData?.map((a,index)=>(
                  <tr key={index}>
                
                  <td>
                   
                  {a.name}
                  </td>
                 <td>{a.email}</td>

                 <td className="btn text-center">
                  <i className="fa-solid fa-trash" style={{color: "red", cursor: "pointer"}} 
                  onClick={()=>onDeleteStaff(a._id)}></i>
                
                </td>
                </tr>
                ))
              }
                
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div> */}

<div className="p-4">
  <div className="card shadow-sm" style={{ borderRadius: '10px', border: '1px solid #e5e7eb' }}>
    <div className="card-body p-0">
      <Table hover responsive className="mb-0">
        <thead style={{ backgroundColor: '#f9fafb' }}>
          <tr>
            <th style={{ padding: '15px', fontWeight: '600', color: '#4b5563' }}>Name</th>
            <th style={{ padding: '15px', fontWeight: '600', color: '#4b5563' }}>Email</th>
            <th style={{ padding: '15px', fontWeight: '600', color: '#4b5563', textAlign: 'center' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData?.map((a, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #f3f4f6' }}>
              <td style={{ padding: '15px', verticalAlign: 'middle' }}>
                <div className="d-flex align-items-center">
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: '#7c3aed',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '10px',
                    fontWeight: '600'
                  }}>
                    {a.name.charAt(0).toUpperCase()}
                  </div>
                  {a.name}
                </div>
              </td>
              <td style={{ padding: '15px', verticalAlign: 'middle', color: '#6b7280' }}>
                {a.email}
              </td>
              <td style={{ padding: '15px', textAlign: 'center', verticalAlign: 'middle' }}>
                <button 
                  onClick={() => onDeleteStaff(a._id)}
                 
                  style={{ 
                       background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '8px',
                    borderRadius: '6px',
                    transition: 'all 0.2s',
                    color: '#ef4444',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                   }}
                >
                  <i className="fas fa-trash-alt me-1"></i>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {userData?.length === 0 && (
        <div className="text-center py-5" style={{ backgroundColor: '#f9fafb' }}>
          <i className="fas fa-users-slash fa-2x mb-3" style={{ color: '#d1d5db' }}></i>
          <h5 className="mb-1" style={{ color: '#6b7280' }}>No staff members found</h5>
          <p className="text-muted mb-0">Add new staff members to see them listed here</p>
        </div>
      )}
    </div>
  </div>
</div>

  </div>
    
  );
};

export default AdminStaffAdd;