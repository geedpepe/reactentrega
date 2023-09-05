import React from 'react';

import backgroundImage from '../images/background.jpg'; 
import '../Home.css';

function Home() {
  return (
    <>
     
      
        
        <div
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'fluid',
            backgroundPosition: 'center',
            height: '40vh', 
          }}
        >
          
          <h1>Bienvenido a nuestra tienda</h1>
          
        </div>
      
    </>
  );
}

export default Home;
