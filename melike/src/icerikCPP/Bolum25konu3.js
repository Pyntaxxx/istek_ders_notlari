import { StyleSheet, Text, ScrollView } from "react-native";
import React from "react";

export default function Bolum25konu3() {
  return (
    <ScrollView>
      <Text style={styles.text}>
      ●Dosya yazma işleminde yazılacak değerin ofstream değişkenine
        yönlendirilmesi yeterli olacaktır.
      </Text>
      <Text style={styles.text2}>
        int main(){"{"}
        {"\n"} {"\n"}
        ofstream dosyaYaz("cikti.dat",ios::out);{"\n"} {"\n"}
        int x = 123;{"\n"} {"\n"}
        string isim = "Sedef";{"\n"} {"\n"}
        dosyaYaz {"<<"} x {"<<"}" " {"<<"}isim {"<<"} endl;{"\n"} {"\n"}
        return 0;{"\n"} {"\n"}
        {"}"}
      </Text>
      <Text style={styles.text}>
      ●Dosyanın var olup olmadığı ve açılabilir olup olmadığının is_open()
        metodu ile kontrol edilmesi faydalı olacaktır.
      </Text>
      <Text style={styles.text2}>
        int main(){"{"}
        {"\n"}
        {"\n"}
        ofstream dosyaYaz("cikti.dat",ios::out);{"\n"}
        {"\n"}
        if(dosyaYaz.is_open()){"{"}
        {"\n"}
        {"\n"}
        cout {"<<"} "Dosya açıldı." {"<<"} endl;{"\n"}
        {"\n"}
        {"}"}
        {"\n"}
        {"\n"}
        {"}"}
      </Text>
    </ScrollView>
  );
}
import styles from "../screens/styles";