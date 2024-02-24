import { StyleSheet, Text, Image, ScrollView, View } from "react-native";
import React from "react";

export default function Bolum25konu4() {
  return (
    <ScrollView>
      <Text style={styles.text}>
      ●Okunacak dosya programda bir nesne olarak tanımlanır.{"\n"}
        {"\n"}
        ●Dosya okuma işlemi için ifstream sınıfının kurucu metoduna dosya adının
        verilmesi ve okuma biçimine göre getline veya get metodunun kullanılması
        yeterli olacaktır.
      </Text>
      <Text style={styles.text2}>
        int main(){"{"}
        {"\n"}
        {"\n"}
        ifstream dosyaOku("cikti.dat",ios::in);{"\n"}
        {"\n"}
        string satir = "";{"\n"}
        {"\n"}
        if (dosyaOku.is_open()){"{"}
        {"\n"}
        {"\n"}
        while(getline(dosyaOku, satir) ){"{"}
        {"\n"}
        {"\n"}
        cout {"<<"}satir {"<<"}endl;{"\n"}
        {"\n"}
        {"}"}
        {"\n"}
        {"\n"}
        {"}"}
        {"\n"}
        {"\n"}
        dosyaOku.close();{"\n"}
        {"\n"}
        {"}"}
      </Text>
      <Image
        style={styles.img25_4}
        source={require("../../assets/bolum25konu4.webp")}
      />
    </ScrollView>
  );
}
import styles from "../screens/styles";