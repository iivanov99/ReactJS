import React, { useState } from 'react';
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
import CartItems from '../Cart/CartItems';
import PendingOrders from '../PendingOrders/PendingOrders';
import CreateMens from '../CreatePages/CreateMens';
import CreateWomens from '../CreatePages/CreateWomens';
import CreateAccessories from '../CreatePages/CreateAccessories';
import PageNotFound from '../PageNotFound/PageNotFound';
import EditApparel from '../EditApparel/EditApparel';

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

const App = () => {

  const [isLogged, setIsLogged] = useState(!!parseCookies()['auth_token']);
  const [isAdmin, setIsAdmin] = useState(parseCookies()['role'] === 'admin');

  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Navigation isLogged={isLogged} isAdmin={isAdmin} setIsLogged={setIsLogged} setIsAdmin={setIsAdmin} />
        <Switch>
          <Route path="/" exact render={props => <HomePage {...props} isLogged={isLogged} isAdmin={isAdmin} />} />

          <Route path="/apparel/men/:id" render={props => <ProductDetails {...props} isLogged={isLogged} isAdmin={isAdmin} />} />
          <Route path="/apparel/men" render={props => <MenApparel {...props} isLogged={isLogged} isAdmin={isAdmin} />} />

          <Route path="/apparel/women/:id" render={props => <ProductDetails {...props} isLogged={isLogged} isAdmin={isAdmin} />} />
          <Route path="/apparel/women" render={props => <WomenApparel {...props} isLogged={isLogged} isAdmin={isAdmin} />} />

          <Route path="/apparel/accessories/:id" render={props => <ProductDetails {...props} isLogged={isLogged} isAdmin={isAdmin} />} />
          <Route path="/apparel/accessories" render={props => <Accessories {...props} isLogged={isLogged} isAdmin={isAdmin} />} />

          {!isLogged && !isAdmin ? (
            <Route path="/user/login" render={props => <Login {...props} setIsLogged={setIsLogged} setIsAdmin={setIsAdmin} />} />
          ) : null}
          {!isLogged && !isAdmin ? (<Route path="/user/register" component={Register} />) : null}

          {isLogged && !isAdmin ? (<Route path="/user/orders" component={UserOrders} />) : null}
          {isLogged && !isAdmin ? (<Route path="/user/cart" component={CartItems} />) : null}

          {isLogged && isAdmin ? (<Route path="/admin/pending-orders" component={PendingOrders} />) : null}

          {isLogged && isAdmin ? (<Route path="/apparel/create/men" component={CreateMens} />) : null}
          {isLogged && isAdmin ? (<Route path="/apparel/create/women" component={CreateWomens} />) : null}
          {isLogged && isAdmin ? (<Route path="/apparel/create/accessories" component={CreateAccessories} />) : null}

          {isLogged && isAdmin ? (<Route path="/apparel/edit/men/:id" component={EditApparel} />) : null}
          {isLogged && isAdmin ? (<Route path="/apparel/edit/women/:id" component={EditApparel} />) : null}
          {isLogged && isAdmin ? (<Route path="/apparel/edit/accessories/:id" component={EditApparel} />) : null}

          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;