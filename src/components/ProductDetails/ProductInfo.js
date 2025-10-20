import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const ProductInfo = ({ name, price, description }) => (
  <View style={styles.container}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.price}>${Number(price).toFixed(2)}</Text>
    <Text style={styles.desc}>{description}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card,
    padding: 18,
    borderRadius: 16,
    marginHorizontal: 16,
    marginTop: -40,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },
  name: { fontSize: 24, fontWeight: '700', color: colors.text, marginBottom: 8 },
  price: { fontSize: 20, color: colors.accent, fontWeight: '700' },
  desc: { fontSize: 15, color: colors.muted, marginTop: 12, lineHeight: 22 },
});

export default ProductInfo;
