import React from 'react';

interface ProductProps {
    name: string,
    price: string
}

const Product: React.FC<ProductProps> = (props) => {
    return (
        <div className="product">
            <h2>{ props.name }</h2>
            <p>Cena: { props.price } zł</p>
            <button className="addToCartButton">Dodaj do koszyka</button>
        </div>
    );
}
export default Product;