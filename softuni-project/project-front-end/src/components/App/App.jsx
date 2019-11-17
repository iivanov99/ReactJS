import React from 'react';
import Header from '../Header/Header';
// import SiteCarousel from '../SiteCarousel/SiteCarousel';
// import MostPopularSection from '../MostPopularSection/MostPopularSection';
// import ApparelSection from '../ApparelSection/ApparelSection';
// import UserOrders from '../UserOrders/UserOrders';
import Cart from '../Cart/Cart';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Cart />
      <Footer />
    </div>
  );
}

export default App;