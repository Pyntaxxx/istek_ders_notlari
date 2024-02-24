import { StyleSheet, Text, Image, ScrollView } from "react-native";
import React from "react";

export default function Bolum13konu4() {
  return (
    <ScrollView>
      <Text style={styles.text}>
      ●Karşılaştırma operatörleri iki değeri (veya değişkeni) karşılaştırmamızı
        sağlar.{"\n"}
        ● Bir karşılaştırmanın dönüş değeri ya 1'dir ya da şeklindedir 0'dır.
        {"\n"}
        ●(1) doğru , (0) yanlış anlamına gelir. Bu değerler Boolean değerleri
        olarak bilinir.
      </Text>
      <Image
        style={styles.img13_4_1}
        source={require("../../assets/bolum13konu4.webp")}
      />

      <Text style={styles.text2}>
        #include {"<iostream>"}
        using namespace std;{"\n"} {"\n"}
        int main() {"{"} {"\n"} {"\n"}
        int x = 5; {"\n"} {"\n"}int y = 3; {"\n"} {"\n"}
        cout {"<<"}(x {'>'} y); {"\n"} {"\n"}
        return 0;{"\n"} {"\n"}
        {"}"}
      </Text>
      <Image
        style={styles.img13_4_2}
        source={require("../../assets/bolum13konu4-2.webp")}
      />
    </ScrollView>
  );
}

import styles from "../screens/styles";