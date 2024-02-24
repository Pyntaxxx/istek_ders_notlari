import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CppArrays({ navigation }) {
  const handlePress1 = () => {
    navigation.navigate("C++ Diziler (Array)");
  };
  const handlePress2 = () => {
    navigation.navigate("Bir Dizi İçinde Döngü");
  };
  const handlePress3 = () => {
    navigation.navigate("foreach Döngüsü");
  };
  const handlePress4 = () => {
    navigation.navigate("Bir Dizinin Boyutunu Alma");
  };
  const handlePress5 = () => {
    navigation.navigate("Çok Boyutlu Diziler");
  };
  return (
    <ScrollView> 
      <TouchableOpacity onPress={handlePress1}>
      <Text style={styles.title2}>C++ Diziler (Array)</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress2}>
      <Text style={styles.title2}>Bir Dizi İçinde Döngü</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress3}>
      <Text style={styles.title2}>foreach Döngüsü</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress4}>
      <Text style={styles.title2}>Bir Dizinin Boyutunu Alma</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress5}>
      <Text style={styles.title2}>Çok Boyutlu Diziler</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

import styles from "../screens/styles";