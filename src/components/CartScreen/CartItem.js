import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';

const CartItem = ({ item, changeQty, remove }) => (
  <View style={styles.card}>
    <View style={styles.info}>
      <Text style={styles.name}>{item.product.name}</Text>
      <Text style={styles.price}>${Number(item.product.price).toFixed(2)}</Text>
    </View>

    <View style={styles.qtyBox}>
      <TouchableOpacity style={styles.qtyBtn} onPress={() => changeQty(item.product.id, item.qty - 1)}>
        <Text>-</Text>
      </TouchableOpacity>
      <Text style={styles.qtyText}>{item.qty}</Text>
      <TouchableOpacity style={styles.qtyBtn} onPress={() => changeQty(item.product.id, item.qty + 1)}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>

    <TouchableOpacity style={styles.remove} onPress={() => remove(item.product.id)}>
      <Text style={styles.removeText}>Remove</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'rgba(255,255,255,0.08)',
    marginHorizontal: 16,
    marginVertical: 6,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },
  info: { flex: 1 },
  name: {
    fontSize: Platform.OS === 'ios' ? 17 : 15,
    fontWeight: '700',
    color: '#fff',
  },
  price: {
    color: '#bfc5d0',
    fontSize: Platform.OS === 'ios' ? 14 : 13,
  },
  qtyBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  qtyBtn: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 6,
    borderRadius: 6,
  },
  qtyText: {
    color: '#fff',
    paddingHorizontal: 8,
    fontSize: Platform.OS === 'ios' ? 16 : 14,
  },
  remove: { paddingHorizontal: 8 },
  removeText: { color: '#ff4a4a', fontWeight: '600' },
});

export default CartItem;
