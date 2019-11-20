import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import MenApparel from '../ApparelPages/MenApparel/MenApparel';
import WomenApparel from '../ApparelPages/WomenApparel/WomenApparel';
import Accessories from '../ApparelPages/Accessories/Accessories';
import Footer from '../Footer/Footer';
import HomePage from '../HomePage/HomePage';

import './App.css';
import ProductDetails from '../Products/ProductDetails/ProductDetails';

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
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;