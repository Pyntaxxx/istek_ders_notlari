import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

export default function Bolum20konu5() {
  return (
    <ScrollView>
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
        string myString = "Hello";{"\n"}
        {"\n"}
        myString[0] = 'J';{"\n"}
        {"\n"}
        cout {"<<"} myString;{"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}
      </Text>
      <Image
        style={styles.img20_5}
        source={require("../../assets/bolum20konu5.webp")}
      />
    </ScrollView>
  );
}
import styles from "../screens/styles";
