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

interface ProductListProps {
    addToCart: (product: { id: number; name: string; price: string }) => void;
}

const ProductList: React.FC<ProductListProps> = ({ addToCart }) => {
    return (
        <div>
            <h1>Lista Produktów</h1>
            <ul>
                {products.map((product: ProductType) => (
                    <Product
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={`${product.price.main}.${product.price.fractional}`}
                        addToCart={addToCart}
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
