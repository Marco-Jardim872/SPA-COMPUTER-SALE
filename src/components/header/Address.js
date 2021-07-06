import React from 'react';


export default class Address extends React.Component{
  
  render(){
    return (
     <div className="address">
       <img src="./img/zap.png" alt="WhatsApp"/> <strong>(xx) xxxx-xxxx</strong><br/>
       valor:<br/>
       <strong>R$ 3.700,00</strong>
     </div>


  );
  }
}