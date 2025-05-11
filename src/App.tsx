import './App.css'
import ProductList from "./components/ProductList.tsx";
import Cart from "./components/Cart.tsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useState} from "react";

interface CartItem {
    id: number;
    name: string;
    price: string;
    quantity: number;
}

function App() {

    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const handleAddToCart = (product: { id: number; name: string; price: string }) => {
        setCartItems(cartItems => {
            const isItemAlreadyAdded = cartItems.find(item => item.id === product.id);
            if (isItemAlreadyAdded) {
                return cartItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...cartItems, { ...product, quantity: 1 }];
            }
        });
    };

  return (
      <Router>
        <Routes>
          <Route path="/" element={<ProductList addToCart={ handleAddToCart }/>} />
          <Route path="/cart" element={<Cart cartItems={cartItems}/>} />
        </Routes>
      </Router>
  );
}

export default App
