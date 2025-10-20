import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';

const CartHeader = ({ onClear }) => (
  <View style={styles.header}>
    <Text style={styles.title}>Your Cart</Text>
    <TouchableOpacity onPress={onClear}>
      <Text style={styles.clear}>Clear</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  header: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Platform.OS == 'ios' ? 40 : 25
  },
  title: {
    fontSize: Platform.OS === 'ios' ? 24 : 22,
    fontWeight: '700',
    color: '#fff',
  },
  clear: {
    fontSize: Platform.OS === 'ios' ? 16 : 15,
    fontWeight: '600',
    color: '#f56262',
  },
});

export default CartHeader;
