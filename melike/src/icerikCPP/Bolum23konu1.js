import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

export default function Bolum23konu1() {
  return (
    <ScrollView>
      <Text style={styles.text}>
      ●Union, bileşenlerine ortak bir bellek alanını kullandıran bir veri
        türüdür.{"\n"}
        {"\n"}
        ●Union’ları tanımlamak için union anahtar sözcüğünü kullanıyoruz.
      </Text>
      <Text style={styles.text2}>
        union araba{"\n"}
        {"{"}
        {"\n"}
        {"\n"}
        char ad[50];{"\n"}
        {"\n"}
        int fiyat;{"\n"}
        {"\n"}
        {"}"};
      </Text>
      <Text style={styles.title3}>Union Değişkenleri Oluşturmak</Text>
      <Text style={styles.text2}>
        union araba{"\n"}
        {"{"}
        {"\n"}
        {"\n"}
        char ad[50];{"\n"}
        {"\n"}
        int fiyat;{"\n"}
        {"\n"}
        {"}"};{"\n"}
        {"\n"}
        int main(){"\n"}
        {"{"}
        {"\n"}
        {"\n"}
        union araba araba1, araba2, *araba3;{"\n"}
        {"\n"}
        return 0;
        {"}"}
      </Text>
      <Text style={styles.text2}>
        union araba{"\n"}
        {"{"}
        {"\n"}
        {"\n"}
        char ad[50];{"\n"}
        {"\n"}
        int fiyat;{"\n"}
        {"\n"}
        {"}"}araba1, araba2, *araba3;
      </Text>
      <Text style={styles.text}>●Diğer yol;</Text>
      <Text style={styles.text2}>
        union araba{"\n"}
        {"{"}
        {"\n"}
        {"\n"}
        char ad[50];{"\n"}
        {"\n"}
        int fiyat;{"\n"}
        {"\n"}
        {"}"} araba1, araba2, *araba3;
      </Text>
    </ScrollView>
  );
}
import styles from "../screens/styles";
