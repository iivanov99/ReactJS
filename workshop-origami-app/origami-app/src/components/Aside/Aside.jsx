import React from 'react';
import Link from '../Link/Link';
import './Aside.css';

const Aside = () => {
  return (
    <aside className="Aside">
      <ul>
        <Link url="/">Posts</Link>
        <Link url="/posts/create">Create Post</Link>
        <Link url="/user/register">Register</Link>
        <Link url="/user/login">Login</Link>
        <Link url="/user/profile">Profile</Link>
        <Link url="#">Going to 6</Link>
        <Link url="#">Going to 7</Link>
        <Link url="#">Going to 8</Link>
        <Link url="#">Going to 9</Link>
        <Link url="#">Going to 10</Link>
      </ul>
    </aside>
  );
};

export default Aside;