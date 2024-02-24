import { StyleSheet, Text, ScrollView } from "react-native";
import React from "react";

export default function Bolum17konu4() {
  return (
    <ScrollView>
      <Text style={styles.text}>
      ●Bu fonksiyon tipi geriye değer döndürmez. {'\n'}●İlk fonksiyon ile yapı olarak
        benzese de bu fonksiyonlar parametreyi içinde bulundurur.
      </Text>
      <Text style={styles.text2}>
        //FONKSİYON YAPISI {"\n"}
        {"\n"}
        void fonksiyonAdi(parametre){"{"} {"\n"}
        {"\n"}
        //Çalıştırılacak kodlar {"\n"}
        {"\n"}
        {"}"} {"\n"}
        {"\n"}
        //Fonsiyonun çağrılması {"\n"}
        {"\n"}
        int main(){"{"} {"\n"}
        {"\n"}
        fonksiyonAdi(parametre); {"\n"}
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
