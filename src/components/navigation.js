import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <aside>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/counter">Class Project</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Navigation;