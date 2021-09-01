import React, { useState } from 'react';

import NavLinks from './NavLinks';
// == Import
import './nav.scss';

const MobileNavigation = () => {
  const [toggle, setToggle] = useState(false);
  const changeState = () => {
    //console.log(e.target.value);
    setToggle(!toggle);
  };
  const closeMobileMenu = () => setToggle(false);
  return (
    <div className="nav_wrapper-mobile">
      <div className="nav_wrapper--top">
        <div
          className={toggle ? 'nav_burger-icon--open' : 'nav_burger-icon'}
          onClick={changeState}
        >
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </div>

      <div className={toggle ? 'actived' : 'header_nav-mobile'}>
        <ul className="header_link">
          {toggle && (
            <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />
          )}
        </ul>
      </div>
    </div>
  );
};

// == Export
export default MobileNavigation;
