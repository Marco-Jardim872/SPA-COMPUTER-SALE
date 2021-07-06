import React from 'react';
import '../../index.css';

export default class Information extends React.Component{
  
  render(){
    return (
      <div className="information" id="information">
        <ul>
          <li><p> Marca: Acer Sistema Operacional: Windows 10 Home 64-Bit</p></li>
          <li><p>CPU e Chipset: AMD Ryzen™ 7-3700U Quad core (8 threads) 
          Frequência: 2,30 GHz até 4,00 GHz 4 MB Cache</p></li>
          <li><p>Memória RAM:12 GB RAM DDR4 (4 GB soldada + 8GB Módulo) DDR4 2400MHz
          Expansível até 12 GB</p></li>
          <li><p>Placa de Vídeo:AMD Radeon™ RX Vega 10 com memória compartilhada com a memória RAM</p></li>
        </ul>
      </div>


  );
  }
}