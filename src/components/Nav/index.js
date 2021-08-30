// == Import npm
import React, { useState } from 'react';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';
// == Import Img
import logoNav from '../../assets/images/logov4.png';

// == Import
import './nav.scss';

// == Composant
const Nav = () => {
  return (
    <div className="nav">
      <div className="nav_banner--top">
        <div className="nav_logo--box">
          <img className="nav_logo" src={logoNav} alt="logo" />
        </div>
        <Navigation />
        <MobileNavigation />
      </div>
    </div>
  );
};
// == Export
export default Nav;
