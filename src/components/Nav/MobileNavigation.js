import React, { useState } from 'react';

import NavLinks from './NavLinks';
// == Import
import './nav.scss';

const MobileNavigation = () => {
  const [toggle, setToggle] = useState(true);
  const changeState = () => {
    //console.log(e.target.value);
    setToggle(!toggle);
  };
  return (
    <div className="nav_wrapper-mobile">
      <div className="nav_wrapper--top">
        <div className="nav_burger-icon" onClick={changeState}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </div>

      <div className={toggle ? 'header_nav-mobile' : 'actived'}>
        <ul className="header_link">
          <li className="cross" onClick={changeState}>
            <i className="fas fa-times"></i>
          </li>
          <NavLinks />
        </ul>
      </div>
    </div>
  );
};

// == Export
export default MobileNavigation;
