import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

export default function Bolum19konu2() {
  return (
    <ScrollView>
      <Text style={styles.title3}>Bir Dizi İçinde Döngü</Text>
      <Text style={styles.text}>
        Aşağıdaki örnek, renklerdizisindeki tüm öğelerin çıktısını verir:
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
        string renkler[5] = {"{"}"pembe", "mor", "yeşil", "kırmızı", "mavi"{"}"}
        ;{"\n"}
        {"\n"}
        for (int i = 0; i {"< "} 5; i++) {"{"}
        {"\n"}
        {"\n"}
        cout {"<< "} renkler[i] {"<< "} "\n";{"\n"}
        {"\n"}
        {"}"}
        {"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}
      </Text>

      <Image
        style={styles.img19_2}
        source={require("../../assets/bolum19konu2.webp")}
      />
      <Text style={styles.title3}>
        Her Bir Öğenin İndeksini Değeriyle Birlikte Verme
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
        string renkler[5] = {"{"}"pembe", "mor", "yeşil", "kırmızı", "mavi"{"}"}
        ;{"\n"}
        {"\n"}
        for (int i = 0; i {"<"} 5; i++) {"{"}
        {"\n"}
        {"\n"}
        cout {"<< "} i {"<< "} " = " {"<< "}renkler[i] {"<< "} "\n";{"\n"}
        {"\n"}
        {"}"}
        {"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}
      </Text>
      <Image
        style={styles.img19_2}
        source={require("../../assets/bolum19konu2-2.webp")}
      />
    </ScrollView>
  );
  {
    ("}");
  }
}
import styles from "../screens/styles";
