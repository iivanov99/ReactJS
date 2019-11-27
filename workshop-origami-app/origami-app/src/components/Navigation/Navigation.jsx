import React, { Component } from 'react';

import Link from '../Link/Link';
import logo from '../../images/white-origami-bird.png';
import userService from '../../services/user-service';

import './Navigation.css';
import { toast } from 'react-toastify';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  async handleLogoutClick() {
    await userService.logout();
    this.props.changeLoggedState(false);
    toast.dismiss();
    toast.success('Logged out successfuly!');
  };

  render() {
    const { isLogged } = this.props;
    return (
      <nav className="Navigation">
        <ul>
          <Link url="/">
            <img src={logo} alt="app-logo" />
          </Link>
          <Link url="/">Posts</Link>
          {isLogged ? (<Link url="/posts/create">Create Post</Link>) : null}
          {isLogged ? (<Link url="/user/profile">Profile</Link>) : null}
          {isLogged ? (<li onClick={this.handleLogoutClick} className="listItem"><a href="#logout">Logout</a></li>) : null}
          {!isLogged ? (<Link url="/user/register">Register</Link>) : null}
          {!isLogged ? (<Link url="/user/login">Login</Link>) : null}
        </ul>
      </nav>
    );
  }
}

export default Navigation;