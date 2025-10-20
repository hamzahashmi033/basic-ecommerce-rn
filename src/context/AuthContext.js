// context/AuthContext.js
import React, { createContext, useState } from 'react';
import api from '../api/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(false);

    const login = async (email, password) => {
    setAuthLoading(true);
    try {
        const res = await api.get(`/users?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);
        
        const found = res.data && res.data[0];
       
        
        if (found) {
            setUser(found);
            setAuthLoading(false);
            return { ok: true, user: found };
        } else {
            setAuthLoading(false);
            return { ok: false, message: 'Invalid email or password' };
        }
    } catch (err) {
        setAuthLoading(false);
        return { ok: false, message: 'Network error' };
    }
};


    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, authLoading }}>
            {children}
        </AuthContext.Provider>
    );
};
