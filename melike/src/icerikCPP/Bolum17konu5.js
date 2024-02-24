import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

export default function Bolum17konu5() {
  return (
    <ScrollView>
      <Text style={styles.text}>
      ●Veri tipi belirlenmiş olan fonksiyonlarımız aslında int, double gibi bir
        veri tipine sahip olan fonksiyonlarımızdır.
      </Text>
      <Text style={styles.text2}>
        //FONKSİYON YAPISI {"\n"}
        {"\n"}
        veri tipi FonksiyonAdı(){"{"}
        {"\n"}
        {"\n"}
        //Çalıştırılacak kod{"\n"}
        {"\n"}
        return DöndürülecekDeğer;{"\n"}
        {"\n"}
        {"}"}
        {"\n"}
        {"\n"}
        //Fonksiyonun çağrılması{"\n"}
        {"\n"}
        int main(){"{"}
        {"\n"}
        {"\n"}
        //Belli bir değer döndürdüğü için çağrıldığı yerde tuttuğu değeri{"\n"}
        {"\n"}
        //bir değişkene atanabilir.{"\n"}
        {"\n"}
        veriTipi DeğişkenAdi = FonksiyonAdi(){"\n"}
        {"\n"}; cout {"<<"} DeğikenAdi{"<<"} endl;{"\n"}
        {"\n"}
        {"}"}
      </Text>
      <Text style={styles.text2}>
        //ÖRNEK: {"\n"}
        {"\n"}
        int OrtHesapla(int not1, int say2,int say3){"{"}
        {"\n"}
        {"\n"}
        int ort = (not1+not2+not3)/3;{"\n"}
        {"\n"}
        return ort;{"\n"}
        {"\n"}
        {"}"}
        {"\n"}
        {"\n"}
        int main(){"{"}
        {"\n"}
        {"\n"}
        int n1,n2,n3;{"\n"}
        {"\n"}
        cout {"<<"} "1.sınav notunuzu girin: ";{"\n"}
        {"\n"}
        cin {">>"} n1;{"\n"}
        {"\n"}
        cout {"<<"} "2.sınav notunuzu girin: ";{"\n"}
        {"\n"}
        cin {">>"} n2;{"\n"}
        {"\n"}
        cout {"<<"} "3.sınav notunuzu girin: ";{"\n"}
        {"\n"}
        cin {">>"} n3;{"\n"}
        {"\n"}
        //Fonsiyonun çağrılması{"\n"}
        {"\n"}
        cout {"<<"} "Not Ortalamanız: "{"<<"} OrtHesapla(n1,n2,n3){"<<"} endl;
        {"\n"}
        {"\n"}
        {"}"}
      </Text>
    </ScrollView>
  );
}
import styles from "../screens/styles";
