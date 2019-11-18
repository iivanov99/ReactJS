import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import Aside from '../Aside/Aside';
import Main from '../Main/Main';
import ThoughtsSection from '../ThoughtsSection/ThoughtsSection';
import Footer from '../Footer/Footer';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <div className="Container">
          <Aside />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/thoughts" component={ThoughtsSection} />
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;