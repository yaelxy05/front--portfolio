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
  const closeMobileMenu = () => setToggle(true);
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
          <NavLinks closeMobileMenu={closeMobileMenu} />
        </ul>
      </div>
    </div>
  );
};

// == Export
export default MobileNavigation;
