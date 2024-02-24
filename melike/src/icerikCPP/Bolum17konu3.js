import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

export default function Bolum17konu3() {
  return (
    <ScrollView>
      <Text style={styles.text}>
      ●Programlama dillerinde “void” kelimesi tipsiz , tipi belirtilmemiş
        olarak aktırılır.{'\n'} ●Burada kastedilen ise fonksiyonun herhangi bir veri
        tipine sahip olmadığıdır.
      </Text>
      <Text style={styles.text2}>
        //FONKSİYON YAPISI{"\n"}
        {"\n"}
        void FonksiyonAdi(){"{"}
        {"\n"}
        {"\n"}
        //Çalıştırılacak kod {"\n"}
        {"\n"}
        {"}"}
        {"\n"}
        {"\n"}
        //Fonksiyonun çağrılması{"\n"}
        {"\n"}
        int main(){"{"}
        {"\n"}
        {"\n"}
        FonksiyonAdi();{"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}
      </Text>
      <Text style={styles.text2}>
        //ÖRNEK:{"\n"}
        {"\n"}
        void yazdir(){"{"}
        {"\n"}
        {"\n"}
        cout {"<<"} "Sedef Altunay" {"<<"} endl;{"\n"}
        {"\n"}
        {"}"}
        {"\n"}
        {"\n"}
        int main(){"{"}
        {"\n"}
        {"\n"}
        yazdir();{"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}
      </Text>
    </ScrollView>
  );
  {
    ("}");
  }
}
import styles from "../screens/styles";
