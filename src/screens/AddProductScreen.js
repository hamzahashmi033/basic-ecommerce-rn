import React, { useState } from 'react';
import { StyleSheet, ScrollView, KeyboardAvoidingView, Platform, Alert, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Formik } from 'formik';
import * as ImagePicker from 'expo-image-picker';
import * as Animatable from 'react-native-animatable';
import * as Yup from 'yup';
import api from '../api/api';
import colors from '../constants/colors';

import Header from '../components/AddProduct/Header';
import InputField from '../components/AddProduct/InputField';
import ImagePickerSection from '../components/AddProduct/ImagePickerSection';
import SubmitButton from '../components/AddProduct/SubmitButton';

const ProductSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Min 3 chars').required('Required'),
  price: Yup.number().positive('Must be > 0').required('Required'),
  description: Yup.string().min(10, 'Min 10 chars').required('Required'),
  image: Yup.string().required('Image is required'),
});

const AddProductScreen = ({ navigation }) => {
  const [pickedImage, setPickedImage] = useState(null);

  const openImagePicker = async (setFieldValue) => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      return Alert.alert('Permission Denied', 'Please allow gallery access.');
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setPickedImage(uri);
      setFieldValue('image', uri);
    }
  };

  const handleAdd = async (values, { setSubmitting }) => {
    try {
      await api.post('/products', {
        ...values,
        price: Number(values.price),
      });
      setSubmitting(false);
      Alert.alert('Success', 'Product added!', [
        { text: 'OK', onPress: () => navigation.navigate('Home') },
      ]);
    } catch (err) {
      setSubmitting(false);
      Alert.alert('Error', 'Failed to add product');
    }
  };

  return (
    <LinearGradient colors={["#0F2027", "#203A43", "#4463d6"]} style={styles.gradient}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
          
          <Animatable.View animation="fadeInUp" duration={800} style={styles.card}>
            <Header />

            <Formik
              initialValues={{ name: '', price: '', description: '', image: '' }}
              validationSchema={ProductSchema}
              onSubmit={handleAdd}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting, setFieldValue }) => (
                <View>

                  <InputField
                    label="Product Name"
                    value={values.name}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    placeholder="Enter product name"
                    error={touched.name && errors.name}
                  />

                  <InputField
                    label="Price ($)"
                    value={values.price}
                    onChangeText={handleChange('price')}
                    onBlur={handleBlur('price')}
                    placeholder="Enter price"
                    error={touched.price && errors.price}
                  />

                  <InputField
                    label="Description"
                    value={values.description}
                    onChangeText={handleChange('description')}
                    onBlur={handleBlur('description')}
                    placeholder="Enter product description"
                    multiline
                    error={touched.description && errors.description}
                  />

                  <ImagePickerSection pickedImage={pickedImage} onPick={() => openImagePicker(setFieldValue)} />
                  {touched.image && errors.image && <Text style={styles.err}>{errors.image}</Text>}

                  <SubmitButton onPress={handleSubmit} isSubmitting={isSubmitting} />
                </View>
              )}
            </Formik>

          </Animatable.View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
    gradient: { flex: 1 },
  
    scroll: {
      flexGrow: 1,
      justifyContent: 'center',  
      alignItems: 'center',      
      padding: 20,
    },
  
    card: {
      width: '100%',
      maxWidth: 400,             
      backgroundColor: 'rgba(255,255,255,0.12)',
      padding: 20,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,0.2)',
      shadowColor: '#000',
      shadowOpacity: 0.3,
      elevation: 8,
    },
  
    err: { color: '#ff4a4a', fontSize: 12, marginTop: -5, marginBottom: 10 },
  });
  

export default AddProductScreen;
