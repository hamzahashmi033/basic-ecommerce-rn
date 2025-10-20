
import React from 'react';
import { AuthProvider } from './AuthContext';
import { CartProvider } from './CartContext';


const providers = [
    AuthProvider,
    CartProvider,
];

export default function AppProviders({ children }) {
    return providers.reduceRight((acc, Provider) => {
        return <Provider>{acc}</Provider>;
    }, children);
}
