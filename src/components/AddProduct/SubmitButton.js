import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SubmitButton = ({ onPress, isSubmitting }) => (
  <TouchableOpacity style={styles.btn} onPress={onPress} disabled={isSubmitting}>
    <Text style={styles.txt}>{isSubmitting ? 'Adding...' : 'Add Product'}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#203A43',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  txt: { color: '#fff', fontSize: 16, fontWeight: '700' },
});

export default SubmitButton;
