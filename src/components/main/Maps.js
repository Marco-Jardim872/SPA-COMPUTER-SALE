import React from 'react';


export default class Maps extends React.Component{
  
  render(){
    return (
     <div className="mapsLoja" id="mapa">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.605650132245!2d-43.12103638448811!3d-22.891021543064795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9983c109e75fb1%3A0x9838edf48509400d!2zUi4gU8OjbyBKb8OjbyAtIENlbnRybywgTml0ZXLDs2kgLSBSSg!5e0!3m2!1spt-BR!2sbr!4v1625534064818!5m2!1spt-BR!2sbr" title="Endereço Loja" allowfullscreen="" loading="lazy"></iframe>
     </div>


  );
  }
}