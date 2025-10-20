import React, { useContext } from 'react';
import {  Text } from 'react-native';
import { FlatList, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import CartHeader from '../components/CartScreen/CartHeader';
import CartItem from '../components/CartScreen/CartItem';
import CartFooter from '../components/CartScreen/CartFooter';


export default function CartScreen() {
  const { items, changeQty, removeFromCart, totalPrice, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);


  return (
    <LinearGradient colors={["#0F2027", "#203A43", "#4463d6"]} style={styles.container}>
      <CartHeader onClear={clearCart} />
      <FlatList
        data={items}
        keyExtractor={(item) => String(item.product.id)}
        renderItem={({ item }) => (
          <CartItem item={item} changeQty={changeQty} remove={removeFromCart} />
        )}
        ListEmptyComponent={<Text style={styles.empty}>Cart is empty</Text>}
        contentContainerStyle={{ paddingBottom: 90 }}
        showsVerticalScrollIndicator={false}
      />
      <CartFooter total={totalPrice}  />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  empty: { textAlign: 'center', marginTop: 40, color: '#fff' },
});
