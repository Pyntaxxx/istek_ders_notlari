import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CppFor({ navigation }) {
  const handlePress1 = () => {
    navigation.navigate("C++ da For Döngüsü Nedir?");
  };
  const handlePress2 = () => {
    navigation.navigate("İç İçe Döngüler");
  };
  const handlePress3 = () => {
    navigation.navigate("Break ve Continue Komutları");
  };
  const handlePress4 = () => {
    navigation.navigate("C++ da For Döngüsü Örnek 1");
  };
  const handlePress5 = () => {
    navigation.navigate("C++ da For Döngüsü Örnek 2");
  };
  return (
    <ScrollView> 
      <TouchableOpacity onPress={handlePress1}>
      <Text style={styles.title2}>C++ da For Döngüsü Nedir?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress2}>
      <Text style={styles.title2}>İç İçe Döngüler</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress3}>
      <Text style={styles.title2}>Break ve Continue Komutları</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress4}>
      <Text style={styles.title2}>C++ da For Döngüsü Örnek 1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress5}>
      <Text style={styles.title2}>C++ da For Döngüsü Örnek 2</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

import styles from "../screens/styles";