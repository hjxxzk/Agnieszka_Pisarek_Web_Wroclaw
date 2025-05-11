import React from 'react';
import {Link} from "react-router-dom";

const Cart: React.FC = () => {
    return (
        <div>
            <Link to="/">
                <button>Powrót</button>
            </Link>
        </div>
    );
}

export default Cart;
