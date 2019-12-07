import React, { Fragment, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../ContextWrapper/ContextWrapper';
import data from '../../data';

const ProductDetails = ({ match }) => {

  const [product, setProduct] = useState({});
  const authContext = useContext(AuthContext);

  useEffect(() => {
    const product = data.find(item => item.id === Number(match.params.id));
    setProduct(product);
  }, [match.params.id]);

  return (
    <Fragment>
      {!Object.keys(product).length ? (
        <div>Loading...</div>
      ) : (
        <div>
          Product Page - {product.title}
          <div>
            <Link to="/">Go back to homepage</Link>
          </div>
          <p>Authenticated: {`${authContext.auth}`}</p>
        </div>
      )}
    </Fragment>
  )
}

export default ProductDetails;