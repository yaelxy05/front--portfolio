// == Import npm
import React, { useState } from 'react';

import NavLinks from './NavLinks';
// == Import
import './nav.scss';
const Navigation = () => {
  return (
    <div className="nav_bar">
      <ul>
        <NavLinks />
      </ul>
    </div>
  );
};

// == Export
export default Navigation;
