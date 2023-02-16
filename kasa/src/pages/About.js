import React from 'react';

import Header from '../components/Header';

import baniere from "../assets/baniere.png"

export default function Home(){
    return(
        <div>
            <Header/>
            <div>
                <img className='imgBaniere' src={baniere} alt='banière montagne'/>
                <div>
                    <h3>Fiabilité</h3>
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                </div>
                <div>
                    <h3>Respect</h3>
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </div>
                <div>
                    <h3>Service</h3>
                    <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                </div>
                <div>
                    <h3>Sécurité</h3>
                    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </div>
            </div>
        </div>
        
    );
}