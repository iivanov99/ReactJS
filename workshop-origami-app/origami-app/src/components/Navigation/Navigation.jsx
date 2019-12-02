import React from 'react';

import Link from '../Link/Link';
import logo from '../../images/white-origami-bird.png';
import userService from '../../services/user-service';

import './Navigation.css';
import { toast } from 'react-toastify';

const Navigation = ({ isLogged, setIsLogged }) => {

  const handleLogoutClick = async () => {
    await userService.logout();
    setIsLogged(false);
    toast.dismiss();
    toast.success('Logged out successfuly!');
  };

  return (
    <nav className="Navigation">
      <ul>
        <Link url="/">
          <img src={logo} alt="app-logo" />
        </Link>
        <Link url="/">Posts</Link>
        {isLogged ? (<Link url="/posts/create">Create Post</Link>) : null}
        {isLogged ? (<Link url="/user/profile">Profile</Link>) : null}
        {isLogged ? (<li onClick={handleLogoutClick} className="listItem"><a href="#logout">Logout</a></li>) : null}
        {!isLogged ? (<Link url="/user/register">Register</Link>) : null}
        {!isLogged ? (<Link url="/user/login">Login</Link>) : null}
      </ul>
    </nav>
  );
};

export default Navigation;