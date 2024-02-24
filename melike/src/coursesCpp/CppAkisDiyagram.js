import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

export default function CppAkisDiyagram({ navigation }) {
  const handlePress1 = () => {
    navigation.navigate("Akış Diyagramı Nedir");
  };
  const handlePress2 = () => {
    navigation.navigate("Kullanılan şekiller ve görevleri");
  };
  const handlePress3 = () => {
    navigation.navigate("Operatörler");
  };
  const handlePress4 = () => {
    navigation.navigate("Akış Şeması Örnek");
  };
  
  return (
    <ScrollView>
      <TouchableOpacity onPress={handlePress1}>
      <Text style={styles.title2}>Akış Diyagramı Nedir</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress2}>
      <Text style={styles.title2}>Kullanılan şekiller ve görevleri</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress3}>
      <Text style={styles.title2}>Operatörler</Text>
      </TouchableOpacity >
      <TouchableOpacity onPress={handlePress4}>
      <Text style={styles.title2}>Akış Şeması Örnek</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

import styles from "../screens/styles";