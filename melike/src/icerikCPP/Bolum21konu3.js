import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

export default function Bolum21konu3() {
  return (
    <ScrollView>
      <Text style={styles.text2}>
        #include {"<iostream>"}
        #include{" <string>"}
        {"\n"}
        {"\n"}
        using namespace std;{"\n"}
        {"\n"}
        int main() {"{"}
        {"\n"}
        {"\n"}
        struct {"{"} {"\n"}
        {"\n"}
        string ad; {"\n"}
        {"\n"}
        string bolum; {"\n"}
        {"\n"}
        int no; {"\n"}
        {"\n"}
        {"}"} ogrenci1, ogrenci2; {"\n"}
        {"\n"}
        string metin2 = "Thor\'un çekicini yalnızca o kaldırabilir.";{"\n"}
        {"\n"}
        ogrenci1.ad = "Deniz"; {"\n"}
        {"\n"}
        ogrenci1.bolum = "Bilgisayar Müh"; {"\n"}
        {"\n"}
        ogrenci1.no = 799;
        {"\n"}
        {"\n"}
        ogrenci2.ad = "Furkan"; {"\n"}
        {"\n"}
        ogrenci2.bolum = "Elektrik Elektronik Müh."; {"\n"}
        {"\n"}
        ogrenci2.no = 969; {"\n"}
        {"\n"}
        cout {"<<"} ogrenci1.ad {"<<"} " " {"<<"}ogrenci1.bolum {"<<"} " "{"<<"}{" "}
        ogrenci1.no{"<<"}"\n";{"\n"}
        {"\n"}
        cout {"<<"} ogrenci2.ad {"<<"} " " {"<<"}ogrenci2.bolum{"<<"} " " {"<<"}{" "}
        ogrenci2.no {"<<"} "\n";{"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}
      </Text>
      <Image
        style={styles.img21_3}
        source={require("../../assets/bolum21konu3.webp")}
      />
    </ScrollView>
  );
}
import styles from "../screens/styles";
