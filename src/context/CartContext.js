// context/CartContext.js
import React, { createContext, useContext, useState } from 'react';
import { AuthContext } from './AuthContext';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]); // {product, qty}
    const { user } = useContext(AuthContext);

    const addToCart = (product) => {
        setItems(prev => {
            const existing = prev.find(i => i.product.id === product.id);
            if (existing) {
                return prev.map(i => i.product.id === product.id ? { ...i, qty: i.qty + 1,userId:user.id } : {i, userId: user.id});
            } else {
                return [...prev, { product, qty: 1, userId: user.id }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setItems(prev => prev.filter(i => i.product.id !== productId));
    };

    const changeQty = (productId, qty) => {
        if (qty <= 0) {
            removeFromCart(productId);
            return;
        }
        setItems(prev => prev.map(i => i.product.id === productId ? { ...i, qty } : i));
    };

    const clearCart = () => setItems([]);

    const totalItems = items.reduce((s, i) => s + i.qty, 0);
    const totalPrice = items.reduce((s, i) => s + i.qty * Number(i.product.price), 0);

    return (
        <CartContext.Provider value={{
            items,
            addToCart,
            removeFromCart,
            changeQty,
            clearCart,
            totalItems,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    );
};
