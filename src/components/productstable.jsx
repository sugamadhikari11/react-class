import React from 'react';
import './productstable.css';

export const ProductsTable = (props) => {
  const { category, products } = props;

  return (
    <div>
      <h3>{category}</h3>
      <table className="products-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.name}>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};