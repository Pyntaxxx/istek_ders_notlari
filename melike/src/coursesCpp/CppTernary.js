import { StyleSheet, Text, View,ScrollView, TouchableOpacity } from "react-native";
import React from "react";

export default function CppTernary({ navigation }) {
  const handlePress1 = () => {
    navigation.navigate("C++ Ternary Operatörü Nedir?");
  };
  const handlePress2 = () => {
    navigation.navigate("C++ Ternary Operatörü Örnek");
  };
  return (
    <ScrollView>
      <TouchableOpacity onPress={handlePress1}>
        <Text style={styles.title2}>C++ Ternary Operatörü Nedir?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress2}>
        <Text style={styles.title2}>C++ Ternary Operatörü Örnek</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
import styles from "../screens/styles";