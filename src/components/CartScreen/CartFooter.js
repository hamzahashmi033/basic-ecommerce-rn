import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';

const CartFooter = ({ total }) => (
  <View style={styles.footer}>
    <Text style={styles.total}>Total: ${Number(total).toFixed(2)}</Text>
    <TouchableOpacity style={styles.checkout}>
      <Text style={styles.checkoutText}>Checkout</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.15)',
    backgroundColor: 'rgba(255,255,255,0.1)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  total: {
    fontSize: Platform.OS === 'ios' ? 19 : 17,
    fontWeight: '700',
    color: '#fff',
  },
  checkout: {
    backgroundColor: '#3C5BCE',
    paddingVertical: Platform.OS === 'ios' ? 14 : 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  checkoutText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: Platform.OS === 'ios' ? 17 : 15,
  },
});

export default CartFooter;
