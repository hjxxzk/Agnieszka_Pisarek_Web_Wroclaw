import React from "react";
import {Link} from "react-router-dom";


const CartSummary: React.FC = () => {
    return (
        <div>
            <Link to="/cart">
                <button>Przejdź do koszyka</button>
            </Link>
        </div>
    );
}

export default CartSummary;