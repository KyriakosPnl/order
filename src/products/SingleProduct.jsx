import React from 'react';

const SingleProduct = ({ product }) => {
    return (
      <div className='product single-product'> 
        <h2>{product.title}</h2>
        <p>Price: {product.price}</p>
        {/* Add more information or UI elements as needed */}
      </div>
    );
  };


  export default SingleProduct; 