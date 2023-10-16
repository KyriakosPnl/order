import React from 'react';

const CofeeProduct = ({ product }) => {
  return (
    <div>
      <button>
        <h2>{product.title}</h2>

        {/* Add more information or UI elements as needed */}
      </button>
      <p>Price: {product.price}</p>
    </div>
  );
};

export default CofeeProduct;   