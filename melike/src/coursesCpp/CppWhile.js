import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

export default function CppWhile({ navigation }) {
  const handlePress1 = () => {
    navigation.navigate("C++ While Döngüsü");
  };
  const handlePress2 = () => {
    navigation.navigate("Do While Döngüsü");
  };
  return (
    <ScrollView>
      <TouchableOpacity onPress={handlePress1}>
        <Text style={styles.title2}>C++ While Döngüsü</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress2}>
      <Text style={styles.title2}>Do While Döngüsü</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

import styles from "../screens/styles";