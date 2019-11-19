import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import Aside from '../Aside/Aside';
import Main from '../Main/Main';
import CreatePost from '../Posts/CreatePost/CreatePost';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
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
            <Route path="/posts/create" component={CreatePost} />
            <Route path="/user/register" component={Register} />
            <Route path="/user/login" component={Login}/>
            <Route path="/user/profile" component={Profile}/>
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;