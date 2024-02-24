import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CppDosyalama({ navigation }) {
  const handlePress1 = () => {
    navigation.navigate("C++ Dosyalama İşlemleri");
  };
  const handlePress2 = () => {
    navigation.navigate("Dosya oluşturma");
  };
  const handlePress3 = () => {
    navigation.navigate("Dosyaya yazma");
  };
  const handlePress4 = () => {
    navigation.navigate("Dosya okuma");
  };
  const handlePress5 = () => {
    navigation.navigate("Dosyayı kapatma");
  };
  return (
    <ScrollView> 
      <TouchableOpacity onPress={handlePress1}>
      <Text style={styles.title2}>C++ Dosyalama İşlemleri</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress2}>
      <Text style={styles.title2}>Dosya oluşturma</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress3}>
      <Text style={styles.title2}>Dosyaya yazma</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress4}>
      <Text style={styles.title2}>Dosya okuma</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress5}>
      <Text style={styles.title2}>Dosyayı kapatma</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

import styles from "../screens/styles";