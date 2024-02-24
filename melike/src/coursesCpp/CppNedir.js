import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import React from "react";

export default function CppNedir({ navigation }) {
  const handlePress1 = () => {
    navigation.navigate("C++ Nedir");
  };
  const handlePress2 = () => {
    navigation.navigate("C++ Özellikleri");
  };
  const handlePress3 = () => {
    navigation.navigate("Neden C++ Kullanmalıyız?");
  };
  const handlePress4 = () => {
    navigation.navigate("C++ nerelerde kullanılır?");
  };
  const handlePress5 = () => {
    navigation.navigate("C++ Hangi IDE’ler kullanılabilir");
  };
  return (
    <ScrollView style={styles.main}> 
      <TouchableOpacity onPress={handlePress1}>
      <Text style={styles.title2}>C++ Nedir?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress2}>
      <Text style={styles.title2}>Özellikleri</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress3}>
      <Text style={styles.title2}>Neden C++ Kullanmalıyız?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress4}>
      <Text style={styles.title2}>C++ nerelerde kullanılır?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress5}>
      <Text style={styles.title2}>Hangi IDE’ler kullanılabilir?</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

import styles from "../screens/styles";
