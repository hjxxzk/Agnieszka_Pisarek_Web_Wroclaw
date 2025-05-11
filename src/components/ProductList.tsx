import React from 'react';
import products from '../data/products.json';
import Product from './Product.tsx';

interface ProductType {
    id: number;
    name: string;
    price: {
        main: number;
        fractional: number;
    };
}

const ProductList: React.FC = () => {
    return (
        <div>
            <h1>Lista Produktów</h1>
            <ul>
                {products.map((product: ProductType) => (
                    <Product
                        key={product.id}
                        name={product.name}
                        price={`${product.price.main}.${product.price.fractional}`}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
