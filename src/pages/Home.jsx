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
        height: '100vh',
        overflow: 'hidden',
        backgroundImage: 'url(" https://images7.alphacoders.com/742/742688.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment:"fixed"
       
        //https://static.vecteezy.com/system/resources/previews/037/236/480/non_2x/ai-generated-airplane-advertisment-background-with-copy-space-free-photo.jpg
      }}
    >
    
      <Header />

   
      <div
        style={{
          position: 'absolute',
          top: '30%',
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
