import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import React from "react";

export default function CppProgramlama({ navigation }) {
  const handlePress1 = () => {
    navigation.navigate("Programlama Nedir");
  };
  const handlePress2 = () => {
    navigation.navigate("Programlama Aşamaları");
  };
  const handlePress3 = () => {
    navigation.navigate("Programlama Örneği");
  };
  const handlePress4 = () => {
    navigation.navigate("Programlama Dilleri");
  };
  return (
    <ScrollView>
      <TouchableOpacity onPress={handlePress1}>
      <Text style={styles.title2}>Programlama Nedir</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress2}>
      <Text style={styles.title2}>Programlama Aşamaları</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress3}>
      <Text style={styles.title2}>Programlama Örneği</Text>
      </TouchableOpacity >
      <TouchableOpacity onPress={handlePress4}>
      <Text style={styles.title2}>Programlama Dilleri</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

import styles from "../screens/styles";
