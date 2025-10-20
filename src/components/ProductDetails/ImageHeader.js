import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const ImageHeader = ({ image }) => (
  <View style={styles.container}>
    <Image source={{ uri: image }} style={styles.image} />
  </View>
);

const styles = StyleSheet.create({
  container: { width: '100%', height: 350, overflow: 'hidden' },
  image: { width: '100%', height: '100%', resizeMode: 'cover' },
});

export default ImageHeader;
