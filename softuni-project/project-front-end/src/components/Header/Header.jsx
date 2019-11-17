import React, { Fragment, Component } from 'react';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import './Header.css';

class Header extends Component {
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
            <Navbar.Brand href="#home">Forever<span className="deep-orange-text">Lean</span></Navbar.Brand>
            <Nav className="mr-auto nav-center">
              <Nav.Link href="#">Men</Nav.Link>
              <Nav.Link href="#">Women</Nav.Link>
              <Nav.Link href="#">Accessories</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#home">Login</Nav.Link>
              <Nav.Link href="#features">Register</Nav.Link>
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
              <Nav.Link href="#">Men</Nav.Link>
              <Nav.Link href="#">Women</Nav.Link>
              <Nav.Link href="#">Accessories</Nav.Link>
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
            <Nav.Link href="#">Men</Nav.Link>
            <Nav.Link href="#">Women</Nav.Link>
            <Nav.Link href="#">Accessories</Nav.Link>
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

export default Header;