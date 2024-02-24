import { StyleSheet, Text, View, ScrollView,TouchableOpacity  } from 'react-native'
import React from 'react'

export default function CppSwitchCase({ navigation }) {
  const handlePress1 = () => {
    navigation.navigate("C++ Switch-Case Yapısı");
  };
  const handlePress2 = () => {
    navigation.navigate("C++ Switch-Case Yapısı Örneği");
  };
  return (
    <ScrollView>
      <TouchableOpacity onPress={handlePress1}>
        <Text style={styles.title2}>C++ Switch-Case Yapısı</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress2}>
      <Text style={styles.title2}>C++ Switch-Case Yapısı Örneği</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}
import styles from "../screens/styles";