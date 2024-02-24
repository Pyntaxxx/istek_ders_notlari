import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Bolum14konu1() {
  return (
    <View>
      <Text style={styles.text}>
      ● Koşul operatörü olarak geçer.{"\n"} {"\n"}●Tek satırda bir koşul
        satırı oluşturmak için kullanılır.{"\n"} {"\n"}
        Anlamı:{"\n"} {"\n"}● koşul true ise ifade1 dönülsün.{"\n"} {"\n"}●
        koşul false ise ifade2 dönülsün
      </Text>
    </View>
  );
}
import styles from "../screens/styles";
