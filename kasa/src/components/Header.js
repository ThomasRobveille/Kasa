import React from 'react';

import "../styles/Header.css";

export default function Header(){
    return(
        <div>
          <img alt="logo"/>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About</a></li>
          </ul>
        </div>
    );
}