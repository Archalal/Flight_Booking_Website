import React from 'react';
import Header from '../component/Header';
import HomeContent from './HomeContent';
import Footer from '../component/Footer';


const Home = () => {
  return (
  <div>
      <div
      style={{
        position: 'relative',
        height: '80vh',
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
        𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐭𝐨 <span style={{fontWeight:"bolder",color:"#ff5a1d"}}>𝐀𝐞𝐫𝐨 𝐕𝐢𝐬𝐭𝐚</span>
        </h1>
        <p style={{ fontSize: '1.5rem' }}>
        𝐘𝐨𝐮𝐫 𝐠𝐚𝐭𝐞𝐰𝐚𝐲 𝐭𝐨 𝐭𝐡𝐞 𝐬𝐤𝐢𝐞𝐬. 𝐁𝐨𝐨𝐤 𝐲𝐨𝐮𝐫 𝐧𝐞𝐱𝐭 𝐚𝐝𝐯𝐞𝐧𝐭𝐮𝐫𝐞 𝐰𝐢𝐭𝐡 𝐮𝐬!
        </p>
      </div>
    </div>
    <HomeContent />
    <div>
   
    <Footer />
    </div>
    
  </div>
  );
};

export default Home;
