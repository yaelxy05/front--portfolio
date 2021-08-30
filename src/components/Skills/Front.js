// == Import npm
import React from 'react';

// == Import
import './front.scss';
// == Import img
import LogoJs from '../../assets/images/javascript-logo.png';
import LogoReact from '../../assets/images/react-logo-1.png';
import LogoCss from '../../assets/images/kisspng-web-development-cascading-style-sheets-css3-comput-css-5ada20be5eed10.7390827615242446703888.png';
import LogoSass from '../../assets/images/kisspng-sass-style-sheet-language-cascading-style-sheets-l-sass-5b4621924f1d20.6170390015313227703241.png';

const Front = () => {
  return (
    <div className="skills_front">
      <h2 className="skills_front--h2">Front</h2>
      <div className="skills_front--icon">
        <div className="skills_icons_box">
          <img className="skills_icon js" src={LogoJs} alt="logo-javascript" />
          <p>Javascript</p>
        </div>
        <div className="skills_icons_box">
          <img className="skills_icon react" src={LogoReact} alt="logo-react" />
          <p>React</p>
        </div>
        <div className="skills_icons_box">
          <img className="skills_icon css" src={LogoCss} alt="logo-css" />
          <p>Css</p>
        </div>
        <div className="skills_icons_box">
          <img className="skills_icon scss" src={LogoSass} alt="logo-scss" />
          <p>Sass</p>
        </div>
      </div>
    </div>
  );
};

export default Front;
