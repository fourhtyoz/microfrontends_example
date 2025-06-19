import { useState } from 'react';

export default function ShoppingCart() {
    const [cart, setCart] = useState([]);

    const addToCart = () => {
        setCart([...cart, { id: Date.now(), name: `Item ${cart.length + 1}` }]);
    };

    return (
        <div>
            <h2>Cart</h2>
            <button onClick={addToCart}>Add Item</button>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}
