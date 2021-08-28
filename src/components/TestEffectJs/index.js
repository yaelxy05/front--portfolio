// == Import npm
import React, { useState } from 'react';
// == Import
import './testEffectJs.scss';

// == Composant
const TestEffectJs = () => {
  const [toggle, setToggle] = useState(true);
  const changeState = () => {
    //console.log(e.target.value);
    setToggle(!toggle);
  };
  return (
    <div className="creations">
      <div className="navbar_logo">Logo</div>
      <ul className="navbar_links">
        <li className="navbar_item">
          <a href="/" className="navbar_link">
            Home
          </a>
        </li>
        <li className="navbar_item">
          <a href="/" className="navbar_link">
            test1
          </a>
        </li>
        <li className="navbar_item">
          <a href="/" className="navbar_link">
            test2
          </a>
        </li>
      </ul>
    </div>
  );
};

// == Export
export default TestEffectJs;
