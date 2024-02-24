import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";

export default function Bolum19konu4() {
  return (
    <ScrollView>
      <Text style={styles.title3}>Bir Dizinin Boyutunu Alma</Text>
      <Text style={styles.text}>
      ●Bunu sağlayan fonksiyon: sizeof(){"\n"}
        {"\n"}
        ●Bir dizinin kaç öğeye sahip olduğunu bulmak için dizinin boyutunu,
        içerdiği veri türünün boyutuna bölmemiz gerekir.
      </Text>
      <Text style={styles.text2}>
        #include {"<iostream>"}
        {"\n"}
        {"\n"}
        using namespace std;{"\n"}
        {"\n"}
        int main() {"{"}
        {"\n"}
        {"\n"}
        int sayilar[5] = {"{"}10, 20, 30, 40, 50 {"}"};{"\n"}
        {"\n"}
        cout {"<< "}sizeof(sayilar) / sizeof(int) ;{"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}
        {"\n"}
        {"\n"}
      </Text>

      <Image
        style={styles.img19_4}
        source={require("../../assets/bolum19konu4.webp")}
      />
    </ScrollView>
  );
}

import styles from "../screens/styles";