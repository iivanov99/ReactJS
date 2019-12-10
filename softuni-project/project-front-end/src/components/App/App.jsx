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
import UserOrders from '../UserOrders/UserOrders';
import CartItems from '../Cart/CartItems';
import PendingOrders from '../PendingOrders/PendingOrders';
import CreateMens from '../CreatePages/CreateMens';
import CreateWomens from '../CreatePages/CreateWomens';
import CreateAccessories from '../CreatePages/CreateAccessories';
import PageNotFound from '../PageNotFound/PageNotFound';
import EditApparel from '../EditApparel/EditApparel';
import ContextWrapper from '../ContextWrapper/ContextWrapper';
import { UserContext } from '../ContextWrapper/ContextWrapper';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

toast.configure();

const App = () => {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <ContextWrapper>
          <Navigation />
          <UserContext.Consumer>
            {({ isLogged, isAdmin }) => (
              <Switch>
                <Route path="/" exact component={HomePage} />

                <Route path="/apparel/men/:id" component={ProductDetails} />
                <Route path="/apparel/men" component={MenApparel} />

                <Route path="/apparel/women/:id" component={ProductDetails} />
                <Route path="/apparel/women" component={WomenApparel} />

                <Route path="/apparel/accessories/:id" component={ProductDetails} />} />
                <Route path="/apparel/accessories" component={Accessories} />

                {!isLogged && !isAdmin ? (<Route path="/user/login" component={Login} />) : null}
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
            )}
          </UserContext.Consumer>
          <Footer />
        </ContextWrapper>
      </div>
    </BrowserRouter>
  );
};

export default App;