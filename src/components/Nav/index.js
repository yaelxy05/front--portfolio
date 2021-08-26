// == Import npm
import React from 'react';
// == Import Img
import logoNav from '../../assets/images/logov4.png';
// == Import
import './nav.scss';

// == Composant
const Nav = () => (
  <div className="nav">
    <div class="nav_logo--box">
      <img className="nav_logo" src={logoNav} alt="logo" />
    </div>

    <div class="nav_bar">
      <ul>
        <li>
          <i class="fas fa-home"></i>
        </li>
        <li>Compétences</li>
        <li>Mes créations</li>
        <li>A propos</li>
        <li>Contact</li>
      </ul>
    </div>
    <div class="nav_banner">
      <p class="nav_banner--p">
        Bonjour, Je suis Yaël HUE Développeur web Fullstack
      </p>
    </div>
  </div>
);

// == Export
export default Nav;
