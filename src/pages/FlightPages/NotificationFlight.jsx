import React, { useEffect, useState } from 'react';
import { deleteNotification, getNotification, singleNotification } from '../../../services/allApi';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const NotificationFlight = () => {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const[allNotification,setNotifications]=useState([])
    const[singleNot,setSingleNot]=useState([])
   
    useEffect(()=>{
      
        getStaffNotification()
    },[])
   
    


   

    const getStaffNotification=async()=>{
      try{

          const apiResponse =await getNotification()
          let filteredResponse=apiResponse.data.filter((a)=>a.userType=="userBooked")
          console.log("hi",filteredResponse);
          
          setNotifications(filteredResponse)


      }catch(err){
          alert(err)
      }
  }

    const viewNotification=async(id)=>{

        try{

            const singlenotif=await singleNotification(id)
            console.log(singlenotif);
            setSingleNot(singlenotif.data)
            

        }
       catch(err){
        console.log(err);
        
       }
        

    }

    const onDeleteNotify=async(id)=>{
        try{
            let apiResponse=await deleteNotification(id)
            getStaffNotification()
            console.log(apiResponse);
            

        }catch(err){
            console.log(err);
            
        }
    }
   




  return (
    <div style={{  maxWidth: '1000px', padding: '20px', fontFamily: 'Arial, sans-serif' 
    }}>
      <h1 style={{  color: '#2c3e50',  marginBottom: '20px',fontSize: '24px'}}>
        Admin Notifications
      </h1>
      
      <table style={{ width: '100%', borderCollapse: 'collapse',backgroundColor: 'white'}}>
        <thead>
          <tr style={{ backgroundColor: '#f8f9fa',borderBottom: '2px solid #dee2e6'
          }}>
            <th style={{  padding: '12px 16px',  textAlign: 'left',  fontWeight: '600',  color: '#495057'
            }}>
              Title
            </th>
            <th style={{  padding: '12px 16px',  textAlign: 'left',  fontWeight: '600',  color: '#495057'
            }}>
              Message
            </th>
            <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '600', color: '#495057'
            }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
         {
            allNotification?.map((a)=>(
                <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                <td style={{ padding: '12px 16px' }}>
                 {a.title}
                </td>
                <td style={{ padding: '12px 16px' }}>
                {a.message}
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <button 
                  
                  style={{ 
                    padding: '6px 12px', 
                    backgroundColor: '#007bff', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px', 
                    marginRight: '8px', 
                    cursor: 'pointer',
                    fontSize: '14px' }}
                    onClick={()=>{
                        viewNotification(a._id)
                        handleShow()
                    }
                    }
                    >
                    View
                  </button>
                  <button style={{ 
                    padding: '6px 12px', 
                    backgroundColor: '#dc3545', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px', 
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                  onClick={()=>
                   onDeleteNotify(a._id)
                
                }
                  >
                    Delete

                  </button>
                </td>
              </tr>
            ))
         }

         
        
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{singleNot.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{singleNot.message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NotificationFlight;