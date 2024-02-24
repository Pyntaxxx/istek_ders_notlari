import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CppUnion({ navigation }) {
  const handlePress1 = () => {
    navigation.navigate("C++ Unions");
  };
  const handlePress2 = () => {
    navigation.navigate("Union ve Struct arasındaki farklar");
  };
  return (
    <ScrollView>
      <TouchableOpacity onPress={handlePress1}>
        <Text style={styles.title2}>C++ Unions</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress2}>
      <Text style={styles.title2}>Union ve Struct arasındaki farklar</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

import styles from "../screens/styles";