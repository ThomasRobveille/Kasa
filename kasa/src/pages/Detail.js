import React, { useState, useEffect } from 'react';

import { useParams, Navigate } from 'react-router-dom';

import Error from './404'

import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Detail.css';
import starColor from '../assets/starColor.png';
import starGrey from '../assets/starGrey.png';
import chevron from '../assets/chevron-bas.png';

import data from '../data/data.json';

export default function Detail(){
  const [imgPosition, setImgPosition] = useState(0);

  const handleImgPosition = (plusMoins) => {
    let distance = document.querySelector('.imgCaroussel').clientWidth 
    if(distance > 300){
      if(plusMoins === 'moins'){
        if(imgPosition !== 0){
          let position = imgPosition + distance;
          setImgPosition(position + 15);
        }
      } else {
        if(imgPosition === -distance * (house.pictures.length - 1)){        
          return setImgPosition(imgPosition);
        }
        let position = imgPosition - distance;
        setImgPosition(position - 15);
      }
    } else {
      if(plusMoins === 'moins'){
        if(imgPosition !== 0){
          let position = imgPosition + 375;
          setImgPosition(position);
        }
      } else {
        if(imgPosition === -distance * (house.pictures.length - 1)){        
          return setImgPosition(imgPosition);
        }
        let position = imgPosition - 375;
        setImgPosition(position);
      }
    }
  };

  const { id } = useParams();

  const isIdPresent = data.some((item) => item.id === id);
  let house = data.find((item) => item.id === id);

  if(isIdPresent){
    house = data.find((item) => {
      return item.id === id;    
    });
  } else {
    console.log('error')
    return <Navigate to='*' replace={true}/>
  }

  function imgPrec(){
    handleImgPosition('moins');
  };

  function imgSuiv(){
    handleImgPosition('plus');
  }

  function rating(){
    let rating = [];
    for(let i = 0; i < 5; i++){
      if(i < house.rating){
        rating.push(<img key={i} src={starColor} className='ratingImg'/>)
      } else {
        rating.push(<img key={i} src={starGrey} className='ratingImg'/>)
      }
    }
    return rating;
  }

  function openDesc(window) {    
    document.getElementsByClassName('descDetail')[window].classList.toggle('open');
    document.getElementsByClassName('chevron')[window].classList.toggle('rotate');
  }

  return(
    <div className='Detail'>
      <Header/>
      <div className='imgContainer'>
        <button className='btn btnPrec' onClick={() => imgPrec()}>
          <img alt='chevronPrec' src={chevron}/>
        </button>
        <div className='pictures'>
        {
          house.pictures.map((item, index) => {
            return(
              <div className='cardImg'>
                <img key={index} src={item} alt={house.title} className='imgCaroussel' style={{left: imgPosition}}/>
              </div>
            )
          })
        }
        </div>      
        <button className='btn btnSuiv' onClick={() => imgSuiv()}>
          <img alt='chevronSuiv' src={chevron}/>
        </button>
      </div>
      
      <div className='DetailTextContainer'>
        <div className='headerInfo'>
          <div className='headerInfoLeft'>
            <h1>{house.title}</h1>
            <p>{house.location}</p>
            <ul className='tagsList'>
            {
              house.tags.map((item, index) => {
                return(
                  <li key={index}>{item}</li>
                )
              })
            }
            </ul>
          </div>
          <div className='headerInfoRight'>
            <div className='hostInfo'>
              <p>{house.host.name}</p>
              <img src={house.host.picture} className='hostImg'/>
            </div>
            <div className='rating'>
            {
              rating()
            }  
            </div> 
          </div>
        </div>
                
        <div className='descItems'>
          <div className='descDetail descText'>
            <div>
              <h2>Description</h2>
              <span><img className='chevron' src={chevron} onClick={() => openDesc(0)}/></span>
            </div>            
            <p>{house.description}</p>
          </div>          
          <div className='descDetail descEquip'>
            <div>
              <h2>Equipements</h2>
              <span><img className='chevron' src={chevron} onClick={() => openDesc(1)}/></span>
            </div>
            {
              house.equipments.map((item, index) => {
                return(
                  <p key={index}>{item}</p>
                )
              })
            } 
          </div>      
        </div>
      </div>   
      <Footer/>        
    </div>
  );
};