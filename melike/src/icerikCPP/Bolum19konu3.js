import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";

export default function Bolum19konu3() {
  return (
    <ScrollView>
      <Text style={styles.title3}>foreach Döngüsü</Text>
      <Text style={styles.text}>
        Yalnızca bir dizideki öğeler arasında döngü yapmak için kullanılırız.
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
        int main(){"{"}
        {"\n"}
        {"\n"}
        int sayilar[5] = {"{"}10, 20, 30, 40, 50{"{"};{"\n"}
        {"\n"}
        for (int i : sayilar) {"{"}
        {"\n"}
        {"\n"}
        cout {"<< "} i {"<< "} "\n";{"\n"}
        {"\n"}
        {"}"}
        {"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}
      </Text>

      <Image
        style={styles.img19_3}
        source={require("../../assets/bolum19konu3.webp")}
      />
      
    </ScrollView>
  );
}
import styles from "../screens/styles";
