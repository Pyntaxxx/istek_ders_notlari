import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CppFunction({ navigation }) {
  const handlePress1 = () => {
    navigation.navigate("C++ Fonksiyonlar");
  };
  const handlePress2 = () => {
    navigation.navigate("Fonksiyonun Deklarasyonu");
  };
  const handlePress3 = () => {
    navigation.navigate("1) Geriye Değer Döndürmeyen Fonksiyon");
  };
  const handlePress4 = () => {
    navigation.navigate("2) Kendisine Parametre Gönderilen Fonksiyon");
  };
  const handlePress5 = () => {
    navigation.navigate("3) Geriye Değer Döndüren Fonksiyon");
  };
  const handlePress6 = () => {
    navigation.navigate("4) Referans Olarak Parametre Gönderen Fonksiyon");
  };
  return (
    <ScrollView> 
      <TouchableOpacity onPress={handlePress1}>
      <Text style={styles.title2}>C++ Fonksiyonlar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress2}>
      <Text style={styles.title2}>Fonksiyonun Deklarasyonu</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress3}>
      <Text style={styles.title2}>1) Geriye Değer Döndürmeyen Fonksiyon</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress4}>
      <Text style={styles.title2}>2) Kendisine Parametre Gönderilen Fonksiyon</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress5}>
      <Text style={styles.title2}>3) Geriye Değer Döndüren Fonksiyon</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress6}>
      <Text style={styles.title2}>4) Referans Olarak Parametre Gönderen Fonksiyon</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

import styles from "../screens/styles";