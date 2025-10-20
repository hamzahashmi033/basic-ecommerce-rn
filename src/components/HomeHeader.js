import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

export default function HomeHeader({ totalItems, navigation, logout }) {
    return (
        <Animatable.View animation="fadeInDown" duration={600} style={styles.header}>
            <Text style={styles.title}>Products</Text>

            <View style={styles.rightContainer}>
                <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Cart')}>
                    <Ionicons name="cart-outline" size={24} color="#fff" />
                    {totalItems > 0 && (
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>{totalItems}</Text>
                        </View>
                    )}
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('AddProduct')}>
                    <Ionicons name="add-circle-outline" size={26} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconButton} onPress={logout}>
                    <Ionicons name="log-out-outline" size={26} color="#fff" />
                </TouchableOpacity>
            </View>
        </Animatable.View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 50,
        paddingBottom: 15,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderBottomWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#fff',
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconButton: {
        marginLeft: 16,
        position: 'relative',
    },
    badge: {
        position: 'absolute',
        top: -5,
        right: -8,
        backgroundColor: '#e94560',
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 1,
    },
    badgeText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: '700',
    }
});
