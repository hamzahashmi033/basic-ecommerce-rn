import React, { useContext } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CartContext } from '../context/CartContext';
import colors from '../constants/colors';
import ImageHeader from '../components/ProductDetails/ImageHeader';
import ProductInfo from '../components/ProductDetails/ProductInfo';
import ActionButtons from '../components/ProductDetails/ActionButtons';
import BackButton from '../components/ProductDetails/BackButton';

const ProductDetailsScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const { addToCart, removeFromCart, items } = useContext(CartContext);
  const inCart = items.find(i => i.product.id === product.id);

  return (
    <LinearGradient colors={["#0F2027", "#203A43", "#4463d6"]} style={styles.gradient}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <ImageHeader image={product.image} />
        <ProductInfo name={product.name} price={product.price} description={product.description} />
        <ActionButtons inCart={inCart} addToCart={addToCart} removeFromCart={removeFromCart} product={product} />
        <BackButton navigation={navigation} />
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    paddingBottom: 40,
  },
});

export default ProductDetailsScreen;
