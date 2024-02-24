import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

export default function Bolum24konu6() {
  return (
    <ScrollView>
      <Text style={styles.text}>
        ●Bir class nesnesi oluşturulduğunda otomatik olarak çağrılan özel bir
        methottur.
      </Text>
      <Text style={styles.text2}>
        #include {"<iostream>"}
        {"\n"}
        {"\n"}
        using namespace std;{"\n"}
        {"\n"}
        class MyClass {"{"} // The class{"\n"}
        {"\n"}
        public: // Access specifier{"\n"}
        {"\n"}
        MyClass() {"{"} // Constructor{"\n"}
        {"\n"}
        cout{"<<"} "Hello World!";{"\n"}
        {"\n"}
        {"}"}
        {"\n"}
        {"\n"}
        {"}"};{"\n"}
        {"\n"}
        int main() {"{"}
        {"\n"}
        {"\n"}
        MyClass myObj; // Create an object of MyClass (this will call the
        constructor){"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}
      </Text>
      <Image
        style={styles.img24_4}
        source={require("../../assets/bolum24konu6.webp")}
      />
    </ScrollView>
  );
}
import styles from "../screens/styles";
