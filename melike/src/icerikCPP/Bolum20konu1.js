import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

export default function Bolum20konu1() {
  return (
    <ScrollView>
      <Text style={styles.text}>
      ●Metin depolamak için kullanırız.{"\n"}
        {"\n"}
        ●Bir stringdeğişkene atanan değer, çift tırnak içine alınır.{"\n"}
        {"\n"}
        ●String fonksiyonlarını kullanabilmek için şu kütüphaneyi dahi etmemiz
        gerekli: {"<string>"}
      </Text>
      <Text style={styles.text2}>string selam = "SELAM!!!";</Text>
    </ScrollView>
  );
}

import styles from "../screens/styles";
