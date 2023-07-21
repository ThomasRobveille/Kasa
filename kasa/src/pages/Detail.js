import React, {useState } from 'react';

import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import '../styles/Detail.css';
import starColor from '../assets/starColor.png';
import starGrey from '../assets/starGrey.png';
import chevron from '../assets/chevron-bas.png';

import data from '../data/data.json';

export default function Detail(){
  const [imgPosition, setImgPosition] = useState(0);

  const handleImgPosition = (plusMoins) => {

    let distance = document.querySelector('.imgCaroussel').clientWidth 
    console.log(imgPosition)
    console.log(-distance * (house.pictures.length - 1))
    if(plusMoins === 'moins'){
      if(imgPosition !== 0){
        let position = imgPosition + distance;
        setImgPosition(position);
      }
    } else {
      if(imgPosition === -distance * (house.pictures.length - 1)){        
        return setImgPosition(imgPosition);
      }
      let position = imgPosition - distance;
      setImgPosition(position);
    }
  };

  const { id } = useParams();
  
  let house = data.find((item) => {
    return item.id === id;
  });

  function imgPrec(){
    handleImgPosition('moins');
    console.log('imgPrec');
  };

  function imgSuiv(){
    handleImgPosition('plus');
    console.log('imgSuiv');
  }

  function rating(){
    let rating = [];
    for(let i = 0; i < 5; i++){
      if(i < house.rating){
        rating.push(<img src={starColor} className='ratingImg'/>)
      } else {
        rating.push(<img src={starGrey} className='ratingImg'/>)
      }
    }
    return rating;
  }

  function openDesc(window) {    
    document.getElementsByClassName('descBox')[window].classList.toggle('open');
    document.getElementsByClassName('chevron')[window].classList.toggle('rotate');
  }

  return(
    <div className='Detail'>
      <Header/>
      <div className='imgContainer'>
        <button className='btn btnPrec' onClick={() => imgPrec()}></button>
        <div className='pictures'>
        {
          house.pictures.map((item, index) => {
            return(
              <img key={index} src={item} alt={house.title} className='imgCaroussel' style={{left: imgPosition}}/>
            )
          })
        }
        </div>      
        <button className='btn btnSuiv' onClick={() => imgSuiv()}></button>
      </div>
      
      <div className='DetailTextContainer'>
        <div className='headerDesc'>
          <div>
            <h1>{house.title}</h1>
            <p>{house.location}</p>
          </div>
          <div className='hostInfo'>
            <p>{house.host.name}</p>
            <img src={house.host.picture} className='hostImg'/>
          </div>
          
        </div>
        <div className='addInfo'>
          <ul className='tagsList'>
          {
            house.tags.map((item, index) => {
              return(
                <li key={index}>{item}</li>
              )
            })
          }
          </ul>  
          <div className='rating'>
          {
            rating()
          }  
          </div>              
        </div>      
        
        <div className='descItems'>
          <div className='descBox descText'>
            <div>
              <h2>Description</h2>
              <span><img className='chevron' src={chevron} onClick={() => openDesc(1)}/></span>
            </div>            
            <p>{house.description}</p>
          </div>          
          <div className='descEquip'>
            <div>
              <h2>Equipements</h2>
              <span><img className='chevron' src={chevron} onClick={() => openDesc(2)}/></span>
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
    </div>
  );
};