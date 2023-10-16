import React from 'react';

const ChoiceProduct = ({ product }) => {
    return (
      <div>
        <h2>{product.title}</h2>
        <p>Price: {product.price}</p>
        {/* Add more information or UI elements as needed */}
      </div>
    );
  };

export default ChoiceProduct; 