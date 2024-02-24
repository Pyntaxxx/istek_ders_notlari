import { StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CppVeriTipleri({ navigation }) {
  const handlePress1 = () => {
    navigation.navigate("C++ Veri Tipleri");
  };
  const handlePress2 = () => {
    navigation.navigate("C++ da Değişken Tanımlama");
  };
  const handlePress3 = () => {
    navigation.navigate("Değişken İsimlendirme");
  };
  const handlePress4 = () => {
    navigation.navigate("Değişkene Değer Atama");
  };
  const handlePress5 = () => {
    navigation.navigate("Sabitler");
  };
  return (
    <ScrollView> 
      <TouchableOpacity onPress={handlePress1}>
      <Text style={styles.title2}>C++ Veri Tipleri</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress2}>
      <Text style={styles.title2}>C++ da Değişken Tanımlama</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress3}>
      <Text style={styles.title2}>Değişken İsimlendirme</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress4}>
      <Text style={styles.title2}>Değişkene Değer Atama</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress5}>
      <Text style={styles.title2}>Sabitler</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

import styles from "../screens/styles";