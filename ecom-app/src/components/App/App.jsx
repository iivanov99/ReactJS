import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from '../ProductList/ProductList';
import ProductDetails from '../ProductDetails/ProductDetails';
import ErrorPage from '../ErrorPage/ErrorPage';
import Header from '../Header/Header';
import ContextWrapper from '../ContextWrapper/ContextWrapper';

const App = (props) => {
  return (
    <Fragment>
      <ContextWrapper>
        <Header />
        <Router>
          <Switch>
            <Route path="/" exact component={ProductList} />
            <Route path="/product/:id" component={ProductDetails} />
            <Route component={ErrorPage} />
          </Switch>
        </Router>
      </ContextWrapper>
    </Fragment>
  );
};

export default App;