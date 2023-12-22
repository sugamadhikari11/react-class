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
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/todolist">Todo List</Link>
        </li>
        <li>
          <Link to ="/product">Category Product</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Navigation;