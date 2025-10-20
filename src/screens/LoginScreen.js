import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, KeyboardAvoidingView, Platform, Image, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { AuthContext } from '../context/AuthContext';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, authLoading } = useContext(AuthContext);

    const handleLogin = async () => {
        if (!email.trim() || !password.trim()) {
            alert('Please fill both Email and Password');
            return;
        }
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            alert('Please enter a valid email address');
            return;
        }
    
        const res = await login(email.trim(), password.trim());
        if (!res.ok) {
            alert(res.message);
        }
    };
    

    return (
        <LinearGradient colors={["#0F2027", "#203A43", "#2C5364"]} style={styles.gradient} >
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} 
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView
                        contentContainerStyle={styles.container}
                        keyboardShouldPersistTaps="handled"
                        showsVerticalScrollIndicator={false}
                    >
                       
                        <Animatable.View animation="fadeInUp" duration={900} style={styles.card}>
                            <Text style={styles.title}>Welcome Back 👋</Text>
                            <Text style={styles.subtitle}>Login to access your account</Text>

                        
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Email"
                                    placeholderTextColor="#a5b1c2"
                                    value={email}
                                    onChangeText={setEmail}
                                    keyboardType="email-address"
                                    style={styles.input}
                                />
                                <TextInput
                                    placeholder="Password"
                                    placeholderTextColor="#a5b1c2"
                                    secureTextEntry
                                    value={password}
                                    onChangeText={setPassword}
                                    style={styles.input}
                                />
                            </View>

                            <TouchableOpacity
                                style={styles.button}
                                onPress={handleLogin}
                                disabled={authLoading}
                                activeOpacity={0.8}
                            >
                                {authLoading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Login</Text>}
                            </TouchableOpacity>

                           
                            
                        </Animatable.View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </LinearGradient >




    );
}

const styles = StyleSheet.create({
    gradient: { 
        flex: 1 
    },
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        paddingHorizontal: 20 
    },

    card: {
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 25,
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.2)',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 15,
        elevation: 10,
    },

    title: { 
        fontSize: 24, 
        fontWeight: '700', 
        color: '#fff', 
        textAlign: 'center' 
    },
    subtitle: { 
        fontSize: 14, 
        color: '#dfe6e9', 
        textAlign: 'center', 
        marginVertical: 8 
    },

    inputContainer: { 
        marginTop: 20 
    },
    input: {
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: 12,
        padding: 14,
        marginVertical: 8,
        fontSize: 16,
        color: '#2d3436',
        borderWidth: 1,
        borderColor: '#dcdde1',
    },

    button: {
        backgroundColor: '#2955fa',
        padding: 15,
        borderRadius: 15,
        marginTop: 20,
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },

    buttonText: {
         color: '#fff', 
         fontSize: 17, 
         fontWeight: '700' 
        },

    footerText: { 
        color: '#d1d8e0', 
        textAlign: 'center', 
        marginTop: 15 
    },
    footerLink: { 
        color: '#fff', 
        fontWeight: '700' 
    },
});

