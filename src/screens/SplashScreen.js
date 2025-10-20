// screens/SplashScreen.js
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../constants/colors';


export default function SplashScreen({ navigation }) {
    const scaleAnim = useRef(new Animated.Value(0.5)).current;

    useEffect(() => {
        Animated.spring(scaleAnim, {
            toValue: 1,
            friction: 4,
            tension: 40,
            useNativeDriver: true,
        }).start();

        const timer = setTimeout(() => {
            navigation.replace('Login');
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <LinearGradient colors={[colors.primary, colors.accent]} style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
            <Text style={styles.title}>E-Commerce</Text>
            <Text style={styles.tagline}>Shop Smart. Live Better.</Text>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 36,
        fontWeight: '800',
        color: '#fff',
        letterSpacing: 2,
    },
    tagline: {
        fontSize: 14,
        color: '#fff',
        marginTop: 5,
        opacity: 0.8,
        fontStyle: 'italic',
    },
});
