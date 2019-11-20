import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import './Navigation.css';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isAdmin: false
    }
  }

  render() {
    const { isLoggedIn } = this.state;
    const { isAdmin } = this.state;

    if (!isLoggedIn) {
      return (
        <Fragment>
          <Navbar className="navbar-dark" variant="dark">
            <Link className="navbar-brand" to="/">Forever<span className="deep-orange-text">Lean</span></Link>
            <Nav className="mr-auto nav-center">
              <Link className="nav-link" to="/apparel/men">Men</Link>
              <Link className="nav-link" to="/apparel/women">Women</Link>
              <Link className="nav-link" to="/apparel/accessories">Accessories</Link>
            </Nav>
            <Nav>
              <Link className="nav-link" to="/user/login">Login</Link>
              <Link className="nav-link" to="/user/register">Register</Link>
            </Nav>
          </Navbar>
        </Fragment>
      );
    }

    if (!isAdmin) {
      return (
        <Fragment>
          <Navbar className="navbar-dark" variant="dark">
            <Navbar.Brand href="#home">Forever<span className="deep-orange-text">Lean</span></Navbar.Brand>
            <Nav className="mr-auto nav-center">
              <Link className="nav-link" to="/apparel/men">Men</Link>
              <Link className="nav-link" to="/apparel/women">Women</Link>
              <Link className="nav-link" to="/apparel/accessories">Accessories</Link>
              <Nav.Link href="#">My Orders</Nav.Link>
              <Nav.Link href="#">Cart</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#home">Profile</Nav.Link>
              <Nav.Link href="#features">Logout</Nav.Link>
            </Nav>
          </Navbar>
        </Fragment>
      )
    }

    return (
      <Fragment>
        <Navbar className="navbar-dark" variant="dark">
          <Navbar.Brand href="#home">Forever<span className="deep-orange-text">Lean</span></Navbar.Brand>
          <Nav className="mr-auto nav-center">
            <Link className="nav-link" to="/apparel/men">Men</Link>
            <Link className="nav-link" to="/apparel/women">Women</Link>
            <Link className="nav-link" to="/apparel/accessories">Accessories</Link>
            <Nav.Link href="#">Pending Orders</Nav.Link>
            <NavDropdown title="Add New" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Men</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Women</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Accessories</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#home">Profile</Nav.Link>
            <Nav.Link href="#features">Logout</Nav.Link>
          </Nav>
        </Navbar>
      </Fragment>
    );
  }
}

export default Navigation;