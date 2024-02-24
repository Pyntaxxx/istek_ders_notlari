import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function CppClass({ navigation }) {
  const handlePress1 = () => {
    navigation.navigate("C++ Classlar");
  };
  const handlePress2 = () => {
    navigation.navigate("Class ve Object");
  };
  const handlePress3 = () => {
    navigation.navigate("Class Oluşturmak");
  };
  const handlePress4 = () => {
    navigation.navigate("Nesne Oluşturmak");
  };
  const handlePress5 = () => {
    navigation.navigate("Class Methodları");
  };
  const handlePress6 = () => {
    navigation.navigate("Constructor");
  };
  const handlePress7 = () => {
    navigation.navigate("Constructor Parametreleri");
  };
  const handlePress8 = () => {
    navigation.navigate("Erişim Belirleyicileri");
  };
  const handlePress9 = () => {
    navigation.navigate("Private Üyelere Erişim (Encapsulation / Kapsülleme)");
  };
  const handlePress10 = () => {
    navigation.navigate("Inheritance (Miras)");
  };
  const handlePress11 = () => {
    navigation.navigate("Polymorphism (Polimorfizm)");
  };
  return (
    <ScrollView>
      <TouchableOpacity onPress={handlePress1}>
        <Text style={styles.title2}>C++ Classlar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress2}>
        <Text style={styles.title2}>Class ve Object</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress3}>
        <Text style={styles.title2}>Class Oluşturmak</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress4}>
        <Text style={styles.title2}>Nesne Oluşturmak</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress5}>
        <Text style={styles.title2}>Class Methodları</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress6}>
        <Text style={styles.title2}>Constructor</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress7}>
        <Text style={styles.title2}>Constructor Parametreleri</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress8}>
        <Text style={styles.title2}>Erişim Belirleyicileri</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress9}>
        <Text style={styles.title2}>Private Üyelere Erişim (Encapsulation
        / Kapsülleme)</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress10}>
        <Text style={styles.title2}>Inheritance (Miras)</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress11}>
        <Text style={styles.title2}>Polymorphism (Polimorfizm)</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

import styles from "../screens/styles";
