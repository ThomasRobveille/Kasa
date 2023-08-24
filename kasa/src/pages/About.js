import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import DescBox from '../components/DescBox';

import '../styles/About.css';
import baniere from "../assets/baniere.png"
import chevron from "../assets/chevron-bas.png"

export default function Home(){
  function openDesc(window) {    
    document.getElementsByClassName('aboutPoint')[window].classList.toggle('open');
    document.getElementsByClassName('chevron')[window].classList.toggle('rotate');
  }

  const data = [
    {
      title: 'Fiabilité',
      description: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
    },
    {
      title: 'Respect',
      description: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
    },
    {
      title: 'Service',
      description: 'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.'
    },
    {
      title: 'Sécurité',
      description: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'
    }
  ]

  return(
      <div>
          <Header/>
          <div>
              <img className='imgBaniere' src={baniere} alt='banière montagne'/>
              <div className="aboutPoint">
                <DescBox data={data[0]} index={0}/>
              </div>
              <div className="aboutPoint">
                <DescBox data={data[1]} index={1}/>
              </div>
              <div className="aboutPoint">
                <DescBox data={data[2]} index={2}/>
              </div>
              <div className="aboutPoint">
                <DescBox data={data[3]} index={3}/>
              </div>
              {/* <div className='aboutPoint'>
                <div className='headerPoint'>
                  <h3>Fiabilité</h3>
                  <span><img className='chevron' src={chevron} onClick={() => openDesc(0)}/></span>
                </div>  
                <div className='description'>
                  <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                </div>                  
              </div> 
              <div className='aboutPoint'>
                <div className='headerPoint'>
                  <h3>Respect</h3>
                  <span><img className='chevron' src={chevron} onClick={() => openDesc(1)}/></span>
                </div>     
                <div className='description'>
                  <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </div>                
              </div>
              <div className='aboutPoint'>
                <div className='headerPoint'>
                  <h3>Service</h3>
                  <span><img className='chevron' src={chevron} onClick={() => openDesc(2)}/></span>
                </div>  
                <div className='description'>
                  <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                </div>
              </div>
              <div className='aboutPoint'>
                <div className='headerPoint'>
                  <h3>Sécurité</h3>
                  <span><img className='chevron' src={chevron} onClick={() => openDesc(3)}/></span>
                </div> 
                <div className='description secure'>
                  <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </div>
              </div>*/}
          </div>
          <Footer/>
      </div>
      
  );
}