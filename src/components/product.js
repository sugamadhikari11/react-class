import React, { useState } from 'react';
import './product.css'
import { ProductsTable } from './productstable';


const products =[
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
    ]

export default function Product() {
  const [searchItem, setSearchItem] = useState('');
  const [instockOnly, setInStockOnly] = useState(false);

  const handleChange = (event) => {
    setSearchItem(event.target.value);
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
    const isChecked = event.target.checked;
    setInStockOnly(isChecked);
    console.log('Show only products in stock:', isChecked);
  };

  return (
    <div className='container'>
      <h1>Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          className='input'
          value={searchItem}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <input id = "checkbox" type = 'checkbox' onChange={toggleInstock} checked= {instockOnly}/>
      <label htmlFor='checkbox'>Show only products in the stock</label>
      <ProductsTable category = 'Fruits' products = {products}></ProductsTable>
    </div>
  );
}