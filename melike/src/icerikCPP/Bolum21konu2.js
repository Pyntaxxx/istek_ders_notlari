import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

export default function Bolum21konu2() {
  return (
    <ScrollView>
      <Text style={styles.text}> ●Bunlara nokta(.) ile erişebiliriz.</Text>
      <Text style={styles.text2}>
        #include {"<iostream>"}
        #include {"<string>"}
        {"\n"}
        {"\n"}
        using namespace std;{"\n"}
        {"\n"}
        int main() {"{"}
        {"\n"}
        {"\n"}
        struct {"{"} {"\n"}
        {"\n"}
        int sayi; {"\n"}
        {"\n"}
        string metin; {"\n"}
        {"\n"}
        {"}"} myStructure;{"\n"}
        {"\n"}
        myStructure.sayi= 1;{"\n"}
        {"\n"}
        myStructure.metin = "Merhaba Dünya!";
        {"\n"}
        {"\n"}
        cout {"<<"} myStructure.sayi {"<<"} endl{"\n"}
        {"\n"}
        cout {"<<"} myStructure.sayi {"<<"} endl{"\n"}
        {"\n"}
        cout {"<<"} myStructure.metin{"<<"} endl{"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}
      </Text>
      <Image
        style={styles.img21_2}
        source={require("../../assets/bolum21konu2.webp")}
      />
    </ScrollView>
  );
}
import styles from "../screens/styles";