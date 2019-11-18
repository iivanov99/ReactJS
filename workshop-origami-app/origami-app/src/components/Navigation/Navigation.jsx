import React from 'react';

import Link from '../Link/Link';
import logo from '../../images/white-origami-bird.png';

import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="Navigation">
      <ul>
        <Link url="#">
          <img src={logo} alt="app-logo" />
        </Link>
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
      </ul>
    </nav>
  );
};

export default Navigation;