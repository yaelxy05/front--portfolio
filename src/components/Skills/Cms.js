// == Import npm
import React from 'react';

// == Import
import './cms.scss';
// == Import img
import LogoWp from '../../assets/images/5a2305db957432.8491074815122446996122.png';
import LogoWebPack from '../../assets/images/Format-blog.png';
import LogoNpm from '../../assets/images/kisspng-npm-node-js-computer-icons-computer-software-insta-5b278c9a7f3538.4925424915293185545211.png';
import LogoLinux from '../../assets/images/kisspng-tux-transparency-adobe-illustrator-file-format-cubecoders-limited-5d465baec748d8.8024592315648920788163.png';

const Cms = () => {
  return (
    <div className="skills_cms">
      <h2 className="skills_cms--h2">Cms et outils</h2>
      <div className="skills_cms--icon">
        <div className="skills_icons_box">
          <img className="skills_icon wp" src={LogoWp} alt="logo-wordpress" />
          <p>Wordpress</p>
        </div>
        <div className="skills_icons_box">
          <img
            className="skills_icon webpack"
            src={LogoWebPack}
            alt="logo-webpack"
          />
          <p>Webpack</p>
        </div>
        <div className="skills_icons_box">
          <img className="skills_icon npm" src={LogoNpm} alt="logo-npm" />
          <p>Npm</p>
        </div>
        <div className="skills_icons_box">
          <img className="skills_icon linux" src={LogoLinux} alt="logo-npm" />
          <p>Linux</p>
        </div>
      </div>
    </div>
  );
};

export default Cms;
