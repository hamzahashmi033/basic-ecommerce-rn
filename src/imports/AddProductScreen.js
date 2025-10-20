// ✅ Centralized imports for AddProductScreen

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Formik } from 'formik';
import * as Yup from 'yup';
import api from '../api/api';
import colors from '../constants/colors';

// ✅ Export everything so it can be used in AddProductScreen
export {
    React, useState,
    View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, Image,
    ImagePicker, Formik, Yup,
    api, colors
};
