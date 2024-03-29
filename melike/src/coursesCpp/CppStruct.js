import { StyleSheet, Text, View , ScrollView, TouchableOpacity  } from 'react-native'
import React from 'react'

export default function CppStruct({ navigation }) {
  const handlePress1 = () => {
    navigation.navigate("C++ Structures (struct)");
  };
  const handlePress2 = () => {
    navigation.navigate("Struct Üyelerine Erişim");
  };
  const handlePress3 = () => {
    navigation.navigate("Çoklu Değişkenlerde Tek Struct");
  };
  const handlePress4 = () => {
    navigation.navigate("Adlandırılmış Struct");
  };
  return (
    <ScrollView> 
      <TouchableOpacity onPress={handlePress1}>
      <Text style={styles.title2}>C++ Structures (struct)</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress2}>
      <Text style={styles.title2}>Struct Üyelerine Erişim</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress3}>
      <Text style={styles.title2}>Çoklu Değişkenlerde Tek Struct</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress4}>
      <Text style={styles.title2}>Adlandırılmış Struct</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

import styles from "../screens/styles";