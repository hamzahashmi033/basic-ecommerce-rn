import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

export default function SearchBar({ query, setQuery }) {
    return (
        <Animatable.View animation="fadeInUp" duration={600} style={styles.searchContainer}>
            <Ionicons name="search-outline" size={20} color="#aaa" />
            <TextInput
                placeholder="Search products..."
                placeholderTextColor="#ccc"
                value={query}
                onChangeText={setQuery}
                style={styles.input}
            />
        </Animatable.View>
    );
}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.15)',
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginHorizontal: 16,
        marginTop: 12,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.2)',
    },
    input: {
        flex: 1,
        marginLeft: 10,
        color: '#fff',
        fontSize: 15,
    }
});
