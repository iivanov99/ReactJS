import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductList from './components/ProductList/ProductList';
import data from './data';

ReactDOM.render(<ProductList products={data} />, document.getElementById('root'));