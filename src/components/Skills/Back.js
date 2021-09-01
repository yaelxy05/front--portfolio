// == Import npm
import React from 'react';

// == Import
import './back.scss';
// == Import img
import LogoPhp from '../../assets/images/kisspng-modern-php-new-features-and-good-practices-comput-php-from-scratch-por-jason-stafford-5c05ac6052cc74.1344655915438756803392.png';
import LogoNodeJs from '../../assets/images/kisspng-node-js-javascript-react-logo-express-js-javascript-logo-5b4ca5c70f0195.6239386615317498310615.png';

const Back = () => {
  return (
    <div className="skills_back">
      <h2 className="skills_back--h2">Back</h2>
      <div className="skills_back--icon">
        <div className="skills_icons_box">
          <img className="skills_icon php" src={LogoPhp} alt="logo-php" />
          <p>Php</p>
        </div>
        <div className="skills_icons_box">
          <img
            className="skills_icon nodejs"
            src={LogoNodeJs}
            alt="logo-nodejs"
          />
          <p>NodeJs</p>
        </div>
      </div>
    </div>
  );
};

export default Back;
