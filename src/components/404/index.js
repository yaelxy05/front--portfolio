import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// == Import
import './page404.scss';
import ImgIsland from '../../assets/images/island-5523263_640.png';

const Page404 = () => {
  return (
    <div className="page404">
      <h1 className="page404_h1">Oups !</h1>
      <p className="page404_p">
        La page que vous recherchez n'existe pas ! Vous vous êtes perdu au
        millieu de l'océan !
      </p>
      <NavLink exact to="/" activeClassName="current-home">
        <p className="page404_link--home">Retour à la page d'accueil</p>
      </NavLink>
      <img className="page404_img" src={ImgIsland} alt="île" />
    </div>
  );
};

// == Export
export default Page404;
