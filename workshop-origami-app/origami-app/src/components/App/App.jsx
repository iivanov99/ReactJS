import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { toast } from 'react-toastify';

import Navigation from '../Navigation/Navigation';
import Aside from '../Aside/Aside';
import Main from '../Main/Main';
import CreatePost from '../Posts/CreatePost/CreatePost';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import PageNotFound from '../PageNotFount/PageNotFound';

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

  const [isLogged, setIsLogged] = useState(!!parseCookies()['x-auth-token']);

  return (
    <BrowserRouter>
      <div>
        <Navigation isLogged={isLogged} setIsLogged={setIsLogged} />
        <div className="Container">
          <Aside />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/posts/create" component={CreatePost} />
            <Route path="/user/register" component={Register} />
            <Route path="/user/login" render={(props) => <Login {...props} setIsLogged={setIsLogged} />} />
            <Route path="/user/profile" component={Profile} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;