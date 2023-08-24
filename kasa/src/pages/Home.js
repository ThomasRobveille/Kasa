import React from 'react';

import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';

import '../styles/Home.css';

import data from '../data/data.json';

export default function Home(){
   return(
    <div>
      <Header/>
      <div className='boxBanniere'>
        <div className='banniere'>
          <h2>Chez vous, partout et ailleurs</h2>
        </div>
      </div>
      <div className='listHouse'>
        {
          data.map((item, index) => {
            return(
              <Card key={index} data={item}/>
            )
          })
        }
      </div>
      <Footer/>
    </div>
  );
}