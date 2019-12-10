import React, { Fragment } from 'react';
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
import ContextWrapper from '../ContextWrapper/ContextWrapper';
import { UserContext } from '../ContextWrapper/ContextWrapper';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

toast.configure();

const App = () => {
  return (
    <BrowserRouter>
      <ContextWrapper>
        <div>
          <Navigation />
          <div className="Container">
            <Aside />
            <Switch>
              <UserContext.Consumer>
                {({ isLogged }) => (
                  <Fragment>
                    <Route path="/" exact component={Main} />
                    {!isLogged ? (<Route path="/user/register" component={Register} />) : null}
                    {!isLogged ? (<Route path="/user/login" component={Login} />) : null}
                    {isLogged ? (<Route path="/posts/create" component={CreatePost} />) : null}
                    {isLogged ? (<Route path="/user/profile" component={Profile} />) : null}
                    <Route component={PageNotFound} />
                  </Fragment>
                )}
              </UserContext.Consumer>
            </Switch>
          </div>
          <Footer />
        </div>
      </ContextWrapper>
    </BrowserRouter>
  );
};

export default App;