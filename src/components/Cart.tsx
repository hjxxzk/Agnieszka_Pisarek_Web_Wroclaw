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
    removeFromCart: (id: number) => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({cartItems, removeFromCart, increaseQuantity, decreaseQuantity}) => {
    return (
        <div>
            <h1>Twój koszyk</h1>
            {cartItems.length > 0 ? (
                <ul>
                    {cartItems.map((item) => (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <p>Cena: {item.price} zł</p>
                        <div className="container">
                            <button onClick={() => decreaseQuantity(item.id)}>-</button>
                            <p>{item.quantity}</p>
                            <button onClick={() => increaseQuantity(item.id)}>+</button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)}>Usuń z koszyka</button>
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
