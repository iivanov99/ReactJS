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
        <Link url="/">Posts</Link>
        <Link url="/posts/create">Create Post</Link>
        <Link url="/user/register">Register</Link>
        <Link url="/user/login">Login</Link>
        <Link url="/user/profile">Profile</Link>
      </ul>
    </nav>
  );
};

export default Navigation;