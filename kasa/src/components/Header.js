import React from 'react';

import "../styles/Header.css";

import logo from "../assets/logo.png";

export default function Header(){
    return(
      <div className='header'>
        <img src={logo} alt="logo" className='logoHeader'/>
        <ul>
          <li><a href='/'>Accueil</a></li>
          <li><a href='/about'>A propos</a></li>
        </ul>
      </div>
    );
}