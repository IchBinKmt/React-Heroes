import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

const heroImages = require.context('../../assets/heroes', true);

export const HeroesScreen = ({history}) => {

    const {heroId} =useParams();
    const hero = getHeroById(heroId);
    if(!hero) {
        return <Redirect to="/" />
    }
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    const handleReturn = () => {
        if(history.length <= 2) {
            history.push('/');
        } else {
            history.goBack();
        }
        

    }
    return (
        <div className="row mt-5">
             <div className="col-4">
                 <img 
                    // src={`../assets/heroes/${heroId}.jpg`} //Recurso obtenido desde public/assets
                    src={heroImages(`./${heroId}.jpg`).default}
                    alt={superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                 />
             </div>
             <div className="col-8">
                 <h3>{superhero}</h3>
                 <ul className="list-group list-group-flush">
                     <li className="list-group-item">
                         <b>Alter ego: </b> 
                         {alter_ego}
                     </li>
                     <li className="list-group-item">
                         <b>Publisher: </b> 
                         {publisher}
                     </li>
                     <li className="list-group-item">
                         <b>First appearence: </b> 
                         {first_appearance}
                     </li>
                 </ul>
                 <h5 className="mt-3">Characters</h5>
                 <p>{characters}</p>

                 <button 
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                 >
                     Return
                 </button>

             </div>
        </div>
    )
}
