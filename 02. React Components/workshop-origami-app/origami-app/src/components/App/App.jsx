import React from 'react';
import Navigation from '../Navigation/Navigation';
import Aside from '../Aside/Aside';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Navigation />
      <div className="Container">
        <Aside />
        <Main />
      </div>
      <Footer />
    </div>
  );
};

export default App;