import React from 'react';

import Header from '../components/Header';

import "../styles/404.css";

import logo404 from "../assets/404.png"

export default function Home(){
    return(
        <div>
            <Header/>
            <div className='errorBody'>
              <img src={logo404}/>
              <h2 className='errorText'>Oups la page que vous demandez n'est pas disponible</h2>
              <a className='errorLink' href='/'>Retour à la page d'accueil</a>
            </div>            
        </div>
    );
}