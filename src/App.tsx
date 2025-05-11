import './App.css'
import ProductList from "./components/ProductList.tsx";
import Cart from "./components/Cart.tsx";
import CartSummary from "./components/CartSummary.tsx";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useState} from "react";

interface CartItem {
    id: number;
    name: string;
    price: string;
    quantity: number;
}

const ONE_ITEM_LEFT = 1;

function App() {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const handleAddToCart = (product: { id: number; name: string; price: string }) => {
        setCartItems(cartItems => {
            const isItemAlreadyAdded = cartItems.find(item => item.id === product.id);
            if (isItemAlreadyAdded) {
                return cartItems.map(item =>
                    item.id === product.id ? {...item, quantity: item.quantity + 1} : item
                );
            } else {
                return [...cartItems, {...product, quantity: 1}];
            }
        });
    };

    const handleRemoveFromCart = (id: number) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    }

    const handleIncreaseQuantity = (id: number) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? {...item, quantity: item.quantity + 1} : item
        ));
    }

    const handleDecreaseQuantity = (id: number) => {
        const item = cartItems.find(item => item.id === id);
        if (item && item.quantity === ONE_ITEM_LEFT) {
            handleRemoveFromCart(id);
        } else {
            subtractOneItem(id);
        }
    }

    function subtractOneItem(id: number) {
        setCartItems(cartItems.map(item =>
            item.id === id ? {...item, quantity: item.quantity - 1} : item
        ));
    }

    function calculatePrice(id: number): number {
        const item = cartItems.find(item => item.id === id);
        return item ? parseFloat(item.price) * item.quantity : 0;
    }

    function calculateTotalPrice(): string {
        let totalPrice = 0;
        cartItems.forEach(item => { totalPrice += calculatePrice(item.id) });
        return totalPrice.toFixed(2);
    }

    return (
        <Router basename="/Agnieszka_Pisarek_Web_Wroclaw">
            <Routes>
                <Route path="/" element={<ProductList addToCart={handleAddToCart}/>}/>
                <Route path="/cart" element={<Cart cartItems={cartItems}
                                                   removeFromCart={handleRemoveFromCart}
                                                   increaseQuantity={handleIncreaseQuantity}
                                                   decreaseQuantity={handleDecreaseQuantity}
                                                   calculatePrice={calculatePrice}
                                                   totalPrice={calculateTotalPrice()}/>}/>
                <Route path="/summary" element={<CartSummary cartItems={cartItems}
                                                             calculatePrice={calculatePrice}
                                                             totalPrice={calculateTotalPrice()}/>}></Route>
            </Routes>
        </Router>
    );
}

export default App
