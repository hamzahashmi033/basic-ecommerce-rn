import React, { useEffect, useState, useContext } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import api from '../api/api';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import HomeHeader from '../components/HomeHeader';
import SearchBar from '../components/SeachBar';
import ProductCard from '../components/ProductCard';

export default function HomeScreen({ navigation }) {
    const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('');
    const { totalItems } = useContext(CartContext);
    const { logout } = useContext(AuthContext);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await api.get('/products');
            setProducts(response.data);
            setFiltered(response.data);
        } catch {
            alert('Failed to load products');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        navigation.addListener('focus', fetchProducts);
        fetchProducts();
    }, []);

    useEffect(() => {
        if (!query) return setFiltered(products);
        const term = query.toLowerCase();
        setFiltered(products.filter(p => p.name.toLowerCase().includes(term)));
    }, [query, products]);

    return (
        <LinearGradient colors={["#141E30", "#243B55", "#3C5BCE"]} style={styles.container}>
            <HomeHeader totalItems={totalItems} navigation={navigation} logout={logout} />
            <SearchBar query={query} setQuery={setQuery} />

            {loading ? (
                <ActivityIndicator style={{ marginTop: 30 }} color="#fff" size="large" />
            ) : (
                <FlatList
                    data={filtered}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item, index }) => (
                        <Animatable.View animation="fadeInUp" duration={500} delay={index * 80}>
                            <ProductCard product={item} onView={() => navigation.navigate('ProductDetails', { product: item })} />
                        </Animatable.View>
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listContainer}
                />
            )}
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1 
    },
    listContainer: { 
        paddingBottom: 80, 
        paddingTop: 10 
    }
});
