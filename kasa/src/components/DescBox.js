import React from "react";

import "../styles/Descbox.css";

import chevron from "../assets/chevron-bas.png"

export default function DescBox(props) {
  function openDesc(window) {    
    document.getElementsByClassName('aboutPoint')[window].classList.toggle('open');
    document.getElementsByClassName('chevron')[window].classList.toggle('rotate');
  }

  return (
    <div className="descBox">
      <div className='headerPoint'>
        <h3>{props.data.title}</h3>
        <span><img className='chevron' src={chevron} onClick={() => openDesc(props.index)}/></span>
      </div> 
      <p>{props.data.description}</p>
    </div>
  )
}