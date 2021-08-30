// == Import npm
import React, { useState } from 'react';

import NavLinks from './NavLinks';
// == Import
import './nav.scss';
const Navigation = () => {
  return (
    <div className="nav_bar">
      <>
        <NavLinks />
      </>
    </div>
  );
};

// == Export
export default Navigation;
