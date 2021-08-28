// == Import npm
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// == Import Img
import logoNav from '../../assets/images/logov4.png';
// == Import
import './nav.scss';

// == Composant
const Nav = () => {
  const [toggle, setToggle] = useState(true);
  const changeState = () => {
    //console.log(e.target.value);
    setToggle(!toggle);
  };
  return (
    <div className="nav">
      <div className="nav_banner--top">
        <div className="nav_logo--box">
          <img className="nav_logo" src={logoNav} alt="logo" />
        </div>

        <div className="nav_bar">
          <ul>
            <li>
              <NavLink to="/">
                <i className="fas fa-home"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills">Compétences</NavLink>
            </li>
            <li>
              <NavLink to="/creations">Mes créations</NavLink>
            </li>
            <li>A propos</li>
            <li>Contact</li>
            <li>Mon CV</li>
            <li>
              <NavLink to="/test">Test</NavLink>
            </li>
          </ul>
        </div>
        <div className="nav_wrapper-mobile">
          <div className="nav_burger-icon" onClick={changeState}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
          <div className={toggle ? 'header_nav-mobile' : 'actived'}>
            <ul className="header_link">
              <li className="cross" onClick={changeState}>
                <i className="fas fa-times"></i>
              </li>
              <li>
                <NavLink to="/">
                  <i className="fas fa-home"></i>
                </NavLink>
              </li>
              <li>
                <NavLink to="/skills">Compétences</NavLink>
              </li>
              <li>
                <NavLink to="/creations">Mes créations</NavLink>
              </li>
              <li>A propos</li>
              <li>Contact</li>
              <li>Mon CV</li>
              <li>
                <NavLink to="/test">Test</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="nav_banner">
        <p>Bonjour, </p>
        <p>Je suis Yaël HUE</p>
        <p>Développeur web Fullstack</p>
      </div>
    </div>
  );
};
// == Export
export default Nav;
