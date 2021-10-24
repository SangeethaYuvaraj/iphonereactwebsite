import React from 'react';
import img1 from './max.jpg';
const iphone = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'Center',
        height: '90vh',
       
      }}
     
      
    >
 
      <body>


      <h1>  iPhone 13 Pro</h1>
      
      <h4>Oh. So. Pro</h4>
      
      <img src={img1} alt="img" class="right"/>

      
      </body>
      
      
    </div>
  );
};

export default iphone;