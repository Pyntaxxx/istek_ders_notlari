import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

export default function CppOperators({ navigation }) {
  const handlePress1 = () => {
    navigation.navigate("C++ Operatörleri Nedir?");
  };
  const handlePress2 = () => {
    navigation.navigate("Aritmetik operatörler");
  };
  const handlePress3 = () => {
    navigation.navigate("Atama Operatörleri");
  };
  const handlePress4 = () => {
    navigation.navigate("Karşılaştırma Operatörleri");
  };
  const handlePress5 = () => {
    navigation.navigate("Mantıksal operatörler");
  };
  return (
    <ScrollView> 
      <TouchableOpacity onPress={handlePress1}>
      <Text style={styles.title2}>C++ Operatörleri Nedir?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress2}>
      <Text style={styles.title2}>Aritmetik operatörler</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress3}>
      <Text style={styles.title2}>Atama Operatörleri</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress4}>
      <Text style={styles.title2}>Karşılaştırma Operatörleri</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress5}>
      <Text style={styles.title2}>Mantıksal operatörler</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

import styles from "../screens/styles";