import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";

export default function Bolum10konu4() {
  return (
    <ScrollView>
      <Text style={styles.text}>
      ●Değişkene değer atamak için eşittir (=) sembolünü kullanmalıyız.
      </Text>
      <Text style={styles.text2}>
        int sayi1 = 3; {"\n"} {"\n"}
        double sayi = 3.1343;{"\n"} {"\n"}
        string kelime = "yazilim"; {"\n"} {"\n"}
      </Text>
      <Text style={styles.text}>
      ●Eğer aynı veri tipinde birden çok değişken tanımlamak istersek şu
        şekilde tanımlamalar da yapabiliriz.
      </Text>
      <Text style={styles.text2}>
        int sayi1, sayi2, sayi3; {"\n"} {"\n"}
        string kelime1; kelime2;
      </Text>
      <Image
        style={styles.img10_4}
        source={require("../../assets/bolum4konu4.webp")}
      />
    </ScrollView>
  );
}

import styles from "../screens/styles";
