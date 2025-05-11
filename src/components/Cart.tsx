import React from 'react';
import {Link} from "react-router-dom";

interface CartItem {
    id: number;
    name: string;
    price: string;
    quantity: number;
}

interface CartProps {
    cartItems: CartItem[];
}

const Cart: React.FC<CartProps> = ({cartItems}) => {
    return (
        <div>
            <h1>Twój koszyk</h1>
            {cartItems.length > 0 ? (
                <ul>
                    {cartItems.map((item) => (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <p>Cena: {item.price} zł</p>
                    </li>
                    ))}
                </ul>
            ) : (
                <p>Twój koszyk jest pusty!</p>
            )}
            <Link to="/">
                <button>Powrót</button>
            </Link>
        </div>
    );
}

export default Cart;
