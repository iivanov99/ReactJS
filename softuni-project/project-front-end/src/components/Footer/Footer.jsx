import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGooglePlus, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer class="site-footer">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4">
            <h2><span class="footer-underline">Nav</span></h2>
            <nav class="footer-nav">
              <ul>
                <li><a href="./men-apparel.html">Men</a></li>
                <li><a href="./women-apparel.html">Women</a></li>
                <li><a href="./accessories.html">Accessories</a></li>
              </ul>
            </nav>
          </div>
          <div class="col-md-4">
            <h2><span class="footer-underline">About Us</span></h2>
            <p>World's top class fitness apparel store! The perfect place for people looking for comforable, sweat
            proof, high quality men and women apparel as well as awesome and unique accessories!</p>
          </div>
          <div class="col-md-4 social-wrapper">
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