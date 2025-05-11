import React from 'react';
import products from '../data/products.json';
import Product from './Product.tsx';
import {Link} from "react-router-dom";

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
            <Link to="/cart">
                <button>Przejdź do koszyka</button>
            </Link>
        </div>
    );
}

export default ProductList;
