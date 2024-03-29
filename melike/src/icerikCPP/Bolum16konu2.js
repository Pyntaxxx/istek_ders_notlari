import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

export default function Bolum16konu2() {
  return (
    <ScrollView>
      <Text style={styles.text}>
        ➤Do while döngüsü, while döngüsü ile neredeyse aynıdır. Tek fark do
        while döngüsü bir kere kesinlikle çalışır, sonra koşula bakar, koşul
        sağlandığı taktirde döngü tekrar çalışır.
      </Text>

      <Text style={styles.text2}>
        #include {"<iostream>"}
        using namespace std;{"\n"} {"\n"}
        int main() {"{"} {"\n"} {"\n"}
        int i = 0; {"\n"} {"\n"}
        do {"{"}
        cout {"<<"} i {"<<"} "\n"; i++;
        {"}"}
        while (i {"<"} 5); return 0;{"\n"} {"\n"}
        {"}"}
      </Text>
      <Image
        style={styles.img16_2}
        source={require("../../assets/bolum16konu2.webp")}
      />
    </ScrollView>
  );
}
import styles from "../screens/styles";
