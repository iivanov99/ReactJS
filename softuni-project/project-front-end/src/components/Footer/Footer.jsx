import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGooglePlus, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <h2><span className="footer-underline">Nav</span></h2>
            <nav className="footer-nav">
              <ul>
                <li><Link to="/apparel/men">Men</Link></li>
                <li><Link to="/apparel/women">Women</Link></li>
                <li><Link to="/apparel/accessories">Accessories</Link></li>
              </ul>
            </nav>
          </div>
          <div className="col-md-4">
            <h2><span className="footer-underline">About Us</span></h2>
            <p>World's top class fitness apparel store! The perfect place for people looking for comforable, sweat
            proof, high quality men and women apparel as well as awesome and unique accessories!</p>
          </div>
          <div className="col-md-4 social-wrapper">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            <FontAwesomeIcon icon={faTwitter} size="2x" />
            <FontAwesomeIcon icon={faGooglePlus} size="2x" />
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;