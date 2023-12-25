import React, { useState } from 'react';
import { ProductsTable } from './productstable';
import "./product.css"

const products = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' }
];

export default function Product() {
  const [searchItem, setSearchItem] = useState('');
  const [category, setCategory] = useState('All');
  const [instockOnly, setInStockOnly] = useState(false);

  const handleChange = (event) => {
    setSearchItem(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchItem);
  };

  const handleSearch = (searchTerm) => {
    console.log('Search term:', searchTerm);
  };

  const toggleInstock = (event) => {
    setInStockOnly(event.target.checked);
    console.log('Show only products in stock:', event.target.checked);
  };

  const filterProducts = () => {
    let filteredProducts = products;

    if (searchItem) {
      filteredProducts = filteredProducts.filter(
        (product) => product.name.toLowerCase().includes(searchItem.toLowerCase())
      );
    }

    if (category !== 'All') {
      filteredProducts = filteredProducts.filter((product) => product.category === category);
    }

    if (instockOnly) {
      filteredProducts = filteredProducts.filter((product) => product.stocked);
    }

    return filteredProducts;
  };

  const filteredProducts = filterProducts();

  return (
    <div className="product-wrapper">
      <h1>Hello I am Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          className="input"
          value={searchItem}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <input id="checkbox" type="checkbox" onChange={toggleInstock} checked={instockOnly} />
      <label htmlFor="checkbox">Show only products in stock</label>
      <select id = "selector" value={category} onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
      </select>
      <label htmlFor='selector'>Select Category</label>
      
      <ProductsTable category={category} products={filteredProducts} />
    </div>
  );
}