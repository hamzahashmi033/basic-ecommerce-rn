// screens/LoginScreen.js
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native';
import colors from '../constants/colors';
import { AuthContext } from '../context/AuthContext';

export default function LoginScreen() {
    const { login, authLoading } = useContext(AuthContext);
    const [email, setEmail] = useState('test@test.com');
    const [password, setPassword] = useState('123456');
    const [error, setError] = useState(null);

    const handleLogin = async () => {
        setError(null);
        const res = await login(email.trim(), password);
        if (!res.ok) setError(res.message || 'Login failed');
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>Welcome</Text>
                <Text style={styles.subtitle}>Sign in to continue</Text>

                <TextInput
                    placeholder="Email"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    keyboardType="email-address"
                />
                <TextInput
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                />

                {error ? <Text style={styles.error}>{error}</Text> : null}

                <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={authLoading}>
                    {authLoading ? <ActivityIndicator color="#fff" /> : <Text style={styles.btnText}>Sign In</Text>}
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.background, justifyContent: 'center', padding: 20 },
    box: { backgroundColor: colors.card, borderRadius: 10, padding: 20, elevation: 4 },
    title: { fontSize: 28, fontWeight: '700', color: colors.primary },
    subtitle: { marginBottom: 10, color: colors.muted },
    input: {
        backgroundColor: '#fff',
        marginVertical: 8,
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E5E7EB'
    },
    button: {
        marginTop: 12,
        backgroundColor: colors.accent,
        padding: 12,
        borderRadius: 8,
        alignItems: 'center'
    },
    btnText: { color: '#fff', fontWeight: '700' },
    error: { color: colors.danger, marginTop: 6 }
});
