// == Import npm
import React from 'react';
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
          React et sur le CSM Wordpress(création de thèmes et de plugins).
          J'utilise également la technologie Sass pour l'intégration Css.
        </p>
        <button>Mes projets</button>
      </div>
    </div>
  </div>
);

// == Export
export default Home;
