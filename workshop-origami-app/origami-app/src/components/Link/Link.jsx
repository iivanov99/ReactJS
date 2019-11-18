import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import './Link.css';

const Link = ({ children, url }) => {
  return (
    <li className="listItem">
      <ReactRouterLink to={url}>{children}</ReactRouterLink>
    </li>
  );
};

export default Link;