import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

export default function Bolum20konu3() {
  return (
    <ScrollView>
      <Text style={styles.text}>
      ●Kullanılan fonksiyon: length() veya size()
      </Text>
      <Text style={styles.text2}>
        #include {"<iostream>"}
        {"\n"}
        {"\n"}
        #include {"<string>"}
        {"\n"}
        {"\n"}
        using namespace std;{"\n"}
        {"\n"}
        int main() {"{"}
        {"\n"}
        {"\n"}
        string metin = "SELAM";{"\n"}
        {"\n"}
        cout {"<<"} "Metnin Uzunluğu : " {"<<"} metin.length() {"<<"}endl;{"\n"}
        {"\n"}
        cout {"<<"} "Metnin Uzunluğu : " {"<<"} metin.size();{"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}
      </Text>
      <Image
        style={styles.img20_3}
        source={require("../../assets/bolum20konu3.webp")}
      />
    </ScrollView>
  );
}

import styles from "../screens/styles";
