import React from 'react';
import Link from '../Link/Link';
import './Aside.css';

const Aside = () => {
  return (
    <aside className="Aside">
      <ul>
        <Link url="#">Going to 1</Link>
        <Link url="#">Going to 2</Link>
        <Link url="#">Going to 3</Link>
        <Link url="#">Going to 4</Link>
        <Link url="#">Going to 5</Link>
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