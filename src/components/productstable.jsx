import React from 'react'

export const ProductsTable = (props) => {

    const category = props.category;
    const products = props.products;
 
    
    return (
    <div><h1>Products Table</h1>
    <h3>{category}</h3>
    <table>
        <thead>
        <tr>
            <th>
                Name
            </th>
            <th>
                Price
            </th>
        </tr>
        </thead>
        <tbody>
        {products.map((product) => {
            return(
            <tr>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
            );
             })}
        </tbody>
    </table>
    </div>
    );
   
};
