import React, { useEffect, useState } from 'react';
import { deleteNotification, getNotification, singleNotification } from '../../../services/allApi';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaBell, FaEye, FaTrash } from 'react-icons/fa';

const Notification = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [allNotification, setNotifications] = useState([]);
    const [singleNot, setSingleNot] = useState([]);

    useEffect(() => {
        getAllNotification();
    }, []);

    const getAllNotification = async () => {
        try {
            const apiResponse = await getNotification();
            setNotifications(apiResponse.data);
        } catch(err) {
            alert(err);
        }
    }

    const viewNotification = async (id) => {
        try {
            const singlenotif = await singleNotification(id);
            setSingleNot(singlenotif.data);
        } catch(err) {
            console.log(err);
        }
    }

    const onDeleteNotify = async (id) => {
        try {
            await deleteNotification(id);
            getAllNotification();
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <div style={{ 
            maxWidth: '1000px', 
            padding: '20px', 
            fontFamily: "'Segoe UI', Roboto, sans-serif",
            margin: '0 auto'
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '25px',
                paddingBottom: '15px',
                borderBottom: '1px solid #eaeaea'
            }}>
                <FaBell style={{ 
                    color: '#6c5ce7', 
                    fontSize: '28px', 
                    marginRight: '15px' 
                }}/>
                <h1 style={{ 
                    color: '#2d3436',
                    fontSize: '24px',
                    fontWeight: '600',
                    margin: 0
                }}>
                    Admin Notifications
                </h1>
            </div>
            
            <div style={{
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                border: '1px solid #f0f0f0'
            }}>
                <table style={{ 
                    width: '100%', 
                    borderCollapse: 'collapse',
                    backgroundColor: 'white'
                }}>
                    <thead>
                        <tr style={{ 
                            backgroundColor: '#f8f9fa',
                            borderBottom: '2px solid #e9ecef'
                        }}>
                            <th style={{ 
                                padding: '16px 20px', 
                                textAlign: 'left', 
                                fontWeight: '600', 
                                color: '#5a5a5a',
                                fontSize: '14px',
                                letterSpacing: '0.5px'
                            }}>
                                TITLE
                            </th>
                            <th style={{ 
                                padding: '16px 20px', 
                                textAlign: 'left', 
                                fontWeight: '600', 
                                color: '#5a5a5a',
                                fontSize: '14px',
                                letterSpacing: '0.5px'
                            }}>
                                MESSAGE
                            </th>
                            <th style={{ 
                                padding: '16px 20px', 
                                textAlign: 'right', 
                                fontWeight: '600', 
                                color: '#5a5a5a',
                                fontSize: '14px',
                                letterSpacing: '0.5px'
                            }}>
                                ACTIONS
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {allNotification?.map((a) => (
                            <tr key={a._id} style={{ 
                                borderBottom: '1px solid #f8f9fa',
                                transition: 'all 0.2s ease',
                                ':hover': {
                                    backgroundColor: '#f8f9fa'
                                }
                            }}>
                                <td style={{ 
                                    padding: '16px 20px',
                                    fontWeight: '500',
                                    color: '#2d3436'
                                }}>
                                    {a.title}
                                </td>
                                <td style={{ 
                                    padding: '16px 20px',
                                    color: '#636e72',
                                    maxWidth: '400px',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                }}>
                                    {a.message}
                                </td>
                                <td style={{ 
                                    padding: '16px 20px',
                                    textAlign: 'right'
                                }}>
                                    <div style={{ display: 'inline-flex', gap: '10px' }}>
                                        <button 
                                            style={{ 
                                                padding: '8px 15px', 
                                                backgroundColor: 'transparent', 
                                                color: '#6c5ce7', 
                                                border: '1px solid #6c5ce7', 
                                                borderRadius: '6px', 
                                                cursor: 'pointer',
                                                fontSize: '14px',
                                                fontWeight: '500',
                                                transition: 'all 0.2s',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                                ':hover': {
                                                    backgroundColor: '#6c5ce7',
                                                    color: 'white'
                                                }
                                            }}
                                            onClick={() => {
                                                viewNotification(a._id);
                                                handleShow();
                                            }}
                                        >
                                            <FaEye size={14}/> View
                                        </button>
                                        <button 
                                            style={{ 
                                                padding: '8px 15px', 
                                                backgroundColor: 'transparent', 
                                                color: '#d63031', 
                                                border: '1px solid #d63031', 
                                                borderRadius: '6px', 
                                                cursor: 'pointer',
                                                fontSize: '14px',
                                                fontWeight: '500',
                                                transition: 'all 0.2s',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                                ':hover': {
                                                    backgroundColor: '#d63031',
                                                    color: 'white'
                                                }
                                            }}
                                            onClick={() => onDeleteNotify(a._id)}
                                        >
                                            <FaTrash size={14}/> Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton style={{ 
                    borderBottom: '1px solid #eaeaea',
                    padding: '20px'
                }}>
                    <Modal.Title style={{ 
                        fontWeight: '600',
                        color: '#2d3436'
                    }}>
                        {singleNot.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ 
                    padding: '20px', 
                    fontSize: '15px', 
                    lineHeight: '1.6',
                    color: '#636e72'
                }}>
                    {singleNot.message}
                </Modal.Body>
                <Modal.Footer style={{ 
                    borderTop: '1px solid #eaeaea',
                    padding: '15px 20px'
                }}>
                    <Button 
                        variant="outline-secondary" 
                        onClick={handleClose}
                        style={{
                            padding: '8px 20px',
                            borderRadius: '6px',
                            fontWeight: '500'
                        }}
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Notification;