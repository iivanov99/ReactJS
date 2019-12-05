import React, { Fragment, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import userService from '../../services/user-service';
import './Navigation.css';
import { toast } from 'react-toastify';

const Navigation = ({ isLogged, isAdmin, setIsLogged, setIsAdmin }) => {

  const handleLogoutClick = useCallback(async () => {
    await userService.logout();
    setIsLogged(false);
    setIsAdmin(false);
    toast.dismiss();
    toast.success('Logged out successfuly!');
  }, [setIsAdmin, setIsLogged]);

  return (
    <Fragment>
      <Navbar className="navbar-dark" variant="dark">
        <Link className="navbar-brand" to="/">Forever<span className="deep-orange-text">Lean</span></Link>
        <Nav className="mr-auto nav-center">
          <Link className="nav-link" to="/apparel/men">Men</Link>
          <Link className="nav-link" to="/apparel/women">Women</Link>
          <Link className="nav-link" to="/apparel/accessories">Accessories</Link>

          {isLogged && !isAdmin ? (<Link className="nav-link" to="/user/orders">My Orders</Link>) : null}
          {isLogged && !isAdmin ? (<Link className="nav-link" to="/user/cart">Cart</Link>) : null}

          {isLogged && isAdmin ? (<Link className="nav-link" to="/admin/pending-orders">Pending Orders</Link>) : null}
          {isLogged && isAdmin ? (<NavDropdown title="Add New" id="basic-nav-dropdown">
            <Link className="dropdown-item" to="/apparel/create/men">Men</Link>
            <Link className="dropdown-item" to="/apparel/create/women">Women</Link>
            <Link className="dropdown-item" to="/apparel/create/accessories">Accessories</Link>
          </NavDropdown>) : null}

        </Nav>
        <Nav>
          {!isLogged ? (<Link className="nav-link" to="/user/login">Login</Link>) : null}
          {!isLogged ? (<Link className="nav-link" to="/user/register">Register</Link>) : null}

          {isLogged ? (<Link className="nav-link" to="/user/profile">Profile</Link>) : null}
          {isLogged ? (<Link onClick={handleLogoutClick} className="nav-link" to="">Logout</Link>) : null}
        </Nav>
      </Navbar>
    </Fragment>
  );
}

export default Navigation;