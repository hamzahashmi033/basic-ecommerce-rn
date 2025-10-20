import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ImagePickerSection = ({ pickedImage, onPick }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.btn} onPress={onPick}>
      <Text style={styles.btnText}>Pick Image</Text>
    </TouchableOpacity>
    {pickedImage && <Image source={{ uri: pickedImage }} style={styles.preview} />}
  </View>
);

const styles = StyleSheet.create({
  container: { marginVertical: 16 },
  btn: {
    backgroundColor: '#4463d6',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center'
  },
  btnText: { color: '#fff', fontWeight: '700' },
  preview: { width: '100%', height: 200, borderRadius: 12, marginTop: 12 },
});

export default ImagePickerSection;
