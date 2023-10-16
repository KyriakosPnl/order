import React, { useEffect, useState } from 'react';
import ChoiceProduct from '../products/ChoiceProduct';
import CoffeeProduct from '../products/CoffeeProduct';
import SingleProduct from '../products/SingleProduct';

function Init() {
    const [products, setProducts] = useState({});

    useEffect(() => {
        fetch('/JSON/data.json')
            .then((response) => response.json())
            .then((data) => setProducts(data.products))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const getProductComponent = (product) => {
        switch (product.type) {
            case 'coffee':
                return <CoffeeProduct product={product} />;
            case 'single':
                return <SingleProduct product={product} />;
            case 'choice':
                return <ChoiceProduct product={product} />;
            default:
                return null; // Or render a default component if needed
        }
    };

    // Now you can use the 'users' state variable in your component to display the data.
    return (
        <div>
            {Object.values(products).map((product) => (
                <div key={product.id}>
                    {getProductComponent(product)}
                </div>
            ))}
        </div>
    );
}

export default Init;