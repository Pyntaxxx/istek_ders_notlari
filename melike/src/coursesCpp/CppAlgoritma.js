import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CppAlgoritma({ navigation }) {
  const handlePress1 = () => {
    navigation.navigate("Algoritma Nedir");
  };
  const handlePress2 = () => {
    navigation.navigate("Algoritma Örnek");
  };
  return (
    <ScrollView style={styles.main}>
      <TouchableOpacity onPress={handlePress1}>
        <Text style={styles.title2}>Algoritma Nedir</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress2}>
      <Text style={styles.title2}>Algoritma Örnek</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

import styles from "../screens/styles";