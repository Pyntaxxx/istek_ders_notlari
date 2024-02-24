import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CppIfElse({ navigation }) {
  const handlePress1 = () => {
    navigation.navigate("C++ if-else Koşulu");
  };
  const handlePress2 = () => {
    navigation.navigate("C++ if-else Koşulu Örneği");
  };
  return (
    <ScrollView>
      <TouchableOpacity onPress={handlePress1}>
        <Text style={styles.title2}>C++ if-else Koşulu</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress2}>
      <Text style={styles.title2}>C++ if-else Koşulu Örneği</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

import styles from "../screens/styles";