import React from 'react';
import Header from '../component/Header';
import HomeContent from './HomeContent';

const Home = () => {
  return (
  <div>
      <div
      style={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        backgroundImage: 'url("https://images.unsplash.com/photo-1521727857535-28d2047314ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
    
      <Header />

   
      <div
        style={{
          position: 'absolute',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'white',
          zIndex: 1,
        }}
      >
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}>
          Welcome to Aero Vista
        </h1>
        <p style={{ fontSize: '1.5rem' }}>
          Your gateway to the skies. Book your next adventure with us!
        </p>
      </div>
    </div>
    <HomeContent />
  </div>
  );
};

export default Home;
