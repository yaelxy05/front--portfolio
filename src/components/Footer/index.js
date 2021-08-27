// == Import npm
import React from 'react';

// == Import
import './footer.scss';

// == Composant
const Footer = () => (
  <div className="footer">
    <div className="footer_info">
      <div className="footer_info--box footer_local">
        <i className="fas fa-map-marker-alt"></i>
        <p>
          236 Route de Rabou <br />
          05400 La Roche des Arnauds <br />
          France
        </p>
      </div>
      <div className="footer_info--box footer_mail">
        <i className="far fa-envelope"></i>
        <p>yaelhue@gmail.com</p>
      </div>
      <div className="footer_info--box footer_phone">
        <i className="fas fa-mobile-alt"></i>
        <p>07.81.28.51.47</p>
      </div>
    </div>
  </div>
);

// == Export
export default Footer;
