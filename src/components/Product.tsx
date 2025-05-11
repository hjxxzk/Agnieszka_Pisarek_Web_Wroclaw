import React from 'react';

interface ProductProps {
    id: number,
    name: string,
    price: string
    addToCart: (product: { id: number, name: string, price: string }) => void
}

const Product: React.FC<ProductProps> = ({ id, name, price, addToCart }) => {
    return (
        <div>
            <h2>{ name }</h2>
            <p>Cena: { price } zł</p>
            <button onClick={() => addToCart({ id, name, price })} >Dodaj do koszyka</button>
        </div>
    );
}
export default Product;