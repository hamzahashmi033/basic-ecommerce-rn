import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import colors from '../../constants/colors';

const BackButton = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
      <Text style={styles.backTxt}>← Back</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginTop: 20 },
  backBtn: { paddingVertical: 10, paddingHorizontal: 20, borderRadius: 12, backgroundColor: "gray",color:"white" },
  backTxt: { color: "white", fontWeight: '600', fontSize: 16 },
});

export default BackButton;
