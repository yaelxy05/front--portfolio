// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
// == Import
import './home.scss';
// == Import Img
import picture from '../../assets/images/portfolio-img.jpg';

// == Composant
const Home = () => (
  <div className="home">
    <h1 className="home_h1">Présentation</h1>
    <div className="home_presentation">
      <img className="home_picture" src={picture} alt="picture-presentation" />
      <div className="home_presentation--box">
        <p>
          Développeur Web front et back-end, je suis spécialisé sur le framework
          React et sur le CMS Wordpress(création de thèmes et de plugins).
          J'utilise également la technologie Sass pour l'intégration Css.
          <br />
          <br />
          Durant 7 mois j'ai éffectué une formation de développeur web et web
          mobile à l'école O'clock. Au début de la formation j'ai appris les
          bases du développement web (terminal,Git,Javascript,php ainsi que
          Wordpress), ensuite j'ai éffectué une spécialité en React et une
          spécialité en Wordpress.
        </p>
        <button>
          <NavLink to="/creations">Accéder à mes projets</NavLink>
        </button>
      </div>
    </div>
  </div>
);

// == Export
export default Home;
