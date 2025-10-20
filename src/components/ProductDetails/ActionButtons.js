import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const ActionButtons = ({ inCart, addToCart, removeFromCart, product }) => (
  <View style={styles.container}>
    {!inCart ? (
      <TouchableOpacity style={styles.addBtn} onPress={() => addToCart(product)}>
        <Text style={styles.addTxt}>Add to Cart</Text>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity style={styles.removeBtn} onPress={() => removeFromCart(product.id)}>
        <Text style={styles.removeTxt}>Remove from Cart</Text>
      </TouchableOpacity>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 16,
  },
  addBtn: {
    backgroundColor: 'black',
    flex: 1,
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  addTxt: { color: '#fff', fontWeight: '700', fontSize: 16 },
  removeBtn: {
    borderColor: colors.danger,
    borderWidth: 1.5,
    padding: 14,
    borderRadius: 12,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(255,0,0,0.1)',
  },
  removeTxt: { color: colors.danger, fontWeight: '700', fontSize: 16 },
});

export default ActionButtons;
