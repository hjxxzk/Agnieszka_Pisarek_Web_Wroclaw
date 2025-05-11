import './App.css'
import ProductList from "./components/ProductList.tsx";
import Cart from "./components/Cart.tsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
  );
}

export default App
