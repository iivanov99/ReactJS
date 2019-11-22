import React from 'react';
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

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

toast.configure();

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Navigation />
        <Switch>
          <Route path="/" exact component={HomePage} />

          <Route path="/apparel/men/:id" component={ProductDetails} />
          <Route path="/apparel/men" component={MenApparel} />

          <Route path="/apparel/women/:id" component={ProductDetails} />
          <Route path="/apparel/women" component={WomenApparel} />

          <Route path="/apparel/accessories/:id" component={ProductDetails} />
          <Route path="/apparel/accessories" component={Accessories} />

          <Route path="/user/login" component={Login} />
          <Route path="/user/register" component={Register} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;