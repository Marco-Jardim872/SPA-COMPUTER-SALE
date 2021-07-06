import React from 'react';


export default class Footer extends React.Component{
  
  render(){
    return (
     <div className="footer">
       <div>
        <img src="/img/logoFooter.png" alt="logo"/>
       </div>
       <div>
        Endereço<br/>
        Telefone<br/>
        Email
       </div>
     </div>


  );
  }
}