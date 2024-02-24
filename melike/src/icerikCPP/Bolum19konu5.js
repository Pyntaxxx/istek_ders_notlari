import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

export default function Bolum19konu5() {
  return (
    <ScrollView>
      <Text style={styles.title3}>Çok Boyutlu Diziler</Text>
      <Text style={styles.text}>
      ●Çok boyutlu bir dizi bildirmek için değişken tipini tanımlarız, dizinin
        adını belirtiriz, ardından ana dizinin kaç öğeye sahip olduğunu belirten
        köşeli parantezleri ve ardından alt dizilerin kaç öğeye sahip olduğunu
        gösteren başka bir köşeli parantez kümesini belirtiriz.
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
        string harfler[2][4] = {"{"}
        {"{"} "A", "B", "C", "D" {"}"},{"{"} "E", "F", "G", "H" {"}"}
        {"}"};{"\n"}
        {"\n"}
        cout {"<< "} harfler[0][2] ;{"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}
        {"\n"}
        {"\n"}
      </Text>

      <Image
        style={styles.img19_5}
        source={require("../../assets/bolum19konu5.webp")}
      />
    </ScrollView>
  );
}

import styles from "../screens/styles";
