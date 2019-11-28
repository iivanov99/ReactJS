import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { toast } from 'react-toastify';

import Navigation from '../Navigation/Navigation';
import MenApparel from '../ApparelPages/MenApparel';
import WomenApparel from '../ApparelPages/WomenApparel';
import Accessories from '../ApparelPages/Accessories';
import ProductDetails from '../Products/ProductDetails/ProductDetails';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Footer from '../Footer/Footer';
import HomePage from '../HomePage/HomePage';
import UserOrders from '../UserOrders/UserOrders';
import CartItems from '../Cart/CartItems/CartItems';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

toast.configure();

const parseCookies = () => {
  return document.cookie.split('; ').reduce((acc, cookie) => {
    const [cookieName, cookieValue] = cookie.split('=');
    acc[cookieName] = cookieValue;
    return acc;
  }, {});
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: !!parseCookies()['auth_token'],
      isAdmin: false
    }
    this.changeLoggedState = this.changeLoggedState.bind(this);
  }

  changeLoggedState(newState) {
    this.setState({
      isLogged: newState
    });
  }

  render() {
    const { isLogged, isAdmin } = this.state;

    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Navigation isLogged={isLogged} isAdmin={isAdmin} changeLoggedState={this.changeLoggedState} />
          <Switch>
            <Route path="/" exact render={(props) => <HomePage {...props} isLogged={isLogged} />} />

            <Route path="/apparel/men/:id" component={ProductDetails} />
            <Route path="/apparel/men" component={MenApparel} />

            <Route path="/apparel/women/:id" component={ProductDetails} />
            <Route path="/apparel/women" component={WomenApparel} />

            <Route path="/apparel/accessories/:id" component={ProductDetails} />
            <Route path="/apparel/accessories" component={Accessories} />

            <Route path="/user/login" render={(props) => <Login {...props} changeLoggedState={this.changeLoggedState} />} />
            <Route path="/user/register" component={Register} />

            <Route path="/user/orders" component={UserOrders} />
            <Route path="/user/cart" component={CartItems} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;