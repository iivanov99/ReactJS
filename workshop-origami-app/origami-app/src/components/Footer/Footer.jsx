import React from 'react';
import Link from '../Link/Link';
import logo from '../../images/blue-origami-bird-flipped.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="Footer">
      <ul>
        <Link url="#">Going to 1</Link>
        <Link url="#">Going to 2</Link>
        <Link url="#">Going to 3</Link>
        <Link url="#">Going to 4</Link>
        <Link url="#">Going to 5</Link>
        <Link url="#">Going to 6</Link>
        <Link url="#">Going to 7</Link>
        <Link url="#">Going to 8</Link>
        <Link url="#">Going to 9</Link>
        <Link url="#">Going to 10</Link>
        <Link url="#">
          <img src={logo} alt="app-logo" />
        </Link>
      </ul>
    </footer>
  );
};

export default Footer;