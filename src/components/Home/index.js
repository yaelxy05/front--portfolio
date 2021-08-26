// == Import npm
import React from 'react';
// == Import
import './home.scss';
// == Import Img
import picture from '../../assets/images/portfolio-img.jpg';

// == Composant
const Home = () => (
  <div className="home">
    <h1 class="home_h1">Présentation</h1>
    <div class="home_presentation">
      <img className="home_picture" src={picture} alt="picture-presentation" />
      <div class="home_presentation--box">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          consequatur minus, error voluptatibus vero deserunt tempore omnis!
        </p>
        <button>Mon portfolio</button>
      </div>
    </div>
  </div>
);

// == Export
export default Home;
