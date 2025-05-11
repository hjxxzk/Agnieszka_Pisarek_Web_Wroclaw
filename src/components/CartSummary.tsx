import React from "react";
import {Link} from "react-router-dom";

interface CartItem {
    id: number;
    name: string;
    price: string;
    quantity: number;
}

interface CartSummaryProps {
    cartItems: CartItem[];
    calculatePrice: (id: number) => number;
    totalPrice: string;
}

const CartSummary: React.FC<CartSummaryProps> = ({ cartItems, calculatePrice, totalPrice }) => {
    return (
        <div>
            <h1>Podsumowanie:</h1>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <p>Cena: {item.price} zł</p>
                        <p>Ilość: {item.quantity}</p>
                        <p>Suma częściowa: {calculatePrice(item.id).toFixed(2)} zł</p>
                    </li>
                ))}
            </ul>
            <h1>Suma: {totalPrice} zł</h1>
            <Link to="/cart">
                <button>Przejdź do koszyka</button>
            </Link>
            <button>Złóż zamówienie!</button>
        </div>
    );
}

export default CartSummary;