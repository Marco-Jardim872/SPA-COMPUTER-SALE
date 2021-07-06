import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import '../../index.css';

export default class Nav extends React.Component{
  
  render(){
    return (
      <div className="nav">
        <AnchorLink href='#home'>Home</AnchorLink>
        <AnchorLink href='#mapa'>Mapas</AnchorLink>
        <AnchorLink href='#information'>Informações</AnchorLink>
        <AnchorLink href='#contact'>Contato</AnchorLink>
      </div>

  );
  }
}