import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const InputField = ({ label, value, onChangeText, onBlur, placeholder, error, multiline }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      value={value}
      onChangeText={onChangeText}
      onBlur={onBlur}
      placeholder={placeholder}
      placeholderTextColor="#999"
      multiline={multiline}
      style={[styles.input, multiline && { height: 100 }]}
    />
    {error && <Text style={styles.error}>{error}</Text>}
  </View>
);

const styles = StyleSheet.create({
  container: { marginBottom: 12 },
  label: { color: '#fff', fontSize: 14, marginBottom: 4 },
  input: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: 12,
    borderRadius: 10,
    fontSize: 15,
    color: '#333',
  },
  error: { color: '#ff4a4a', fontSize: 12, marginTop: 2 },
});

export default InputField;
