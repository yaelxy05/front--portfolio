// == Import npm
import React, { useState } from 'react';
// == Import
import './creations.scss';
// Import img
import screenDpm from '../../assets/images/screenshot_creations/desktop_screenshot-dpm.png';
import screenPortfolio from '../../assets/images/screenshot_creations/desktop_screenshot-yaelcreations.png';
// == Composant
const Creations = () => {
  return (
    <div className="creations">
      <h1 className="creations_h1">Mes créations</h1>

      <div className="creations_box">
        <div className="creations_item">
          <div className="img_creations img_dpm">
            <p>Découvrez le site</p>
          </div>
          <div className="creations_title--box">
            <h2>Dressing des petites mains</h2>
            <i className="fab fa-github"></i>
          </div>
        </div>
        <div className="creations_item dpm">
          <div className="img_creations img_portfolio">
            <p>Découvrez le site</p>
          </div>
          <div className="creations_title--box">
            <h2>Mon portfolio</h2>
            <i className="fab fa-github"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

// == Export
export default Creations;
