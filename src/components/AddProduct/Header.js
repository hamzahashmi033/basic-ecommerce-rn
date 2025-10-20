import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Header = () => (
  <Animatable.View animation="fadeInDown" duration={800} style={styles.header}>
    <Text style={styles.title}>Add New Product</Text>
  </Animatable.View>
);

const styles = StyleSheet.create({
  header: { marginBottom: 20, alignItems: 'center' },
  title: { fontSize: 28, fontWeight: '800', color: '#fff', letterSpacing: 1 },
});

export default Header;
