import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Bolum13konu2() {
  return (
    <View>
      <Text style={styles.text}>
        Matematiksel işlemleri gerçekleştirmek için kullanırız.{"\n"}
      </Text>
      <Image
        style={styles.img13_2_1}
        source={require("../../assets/bolum13konu2.webp")}
      />

      <Text style={styles.text2}>
        #include {"<iostream>"}
        using namespace std; int main() {"{"} {"\n"} {"\n"}
        int toplam = 100 + 50; {"\n"} {"\n"}
        cout {"<<"} toplam; {"\n"} {"\n"}
        return 0;{"\n"} {"\n"}
        {"}"}
      </Text>
      <Image
        style={styles.img13_2_2}
        source={require("../../assets/bolum13konu2-2.webp")}
      />
    </View>
  );
}
import styles from "../screens/styles";
