import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

export default function CppEnum() {
  return (
    <ScrollView>
      <Text style={styles.text}>
      ●Eğer bir değişken içerisine girilecek olan veri sayılabilen yani
        sınırlıysa örneğin aylar, günler ve yönler gibi durumlarda enum yapısı
        kullanılır.
      </Text>
      <Text style={styles.text2}>
        enum günler
        {"\n"}
        {"{"}
        Pazartesi,Sali,Carsamba,Persembe,Cuma,Cumartesi,Pazar
        {"}"}
        {"\n"}
        {"\n"}
        int main() {"{"}
        {"\n"}
        {"\n"}
        //enumun kullanımı {"\n"}
        {"\n"}
        gunler gun;{"\n"}
        {"\n"}
        gun = Pazar;//Arka planda sayısal değer tutuyor.{"\n"}
        {"\n"}
        cout {"<<"}gun{"<<"} endl;{"\n"}
        {"\n"}
        {"}"}
        {"\n"}
        {"\n"}
      </Text>
      <Text style={styles.text}>
      ⚠️DİKKAT ET!!!{"\n"}
        ●Enum yapısında dizi mantığıyla 0'dan başlar, eğer 1'den başlatılırsa
        diğerleri buna göre düzenlenir.{"\n"}
        {"\n"}
        🔴 NOT: Enum yapısında değişken tanımlar gibi Türkçe karakter
        kullanılmamalıdır.{"\n"}
        {"\n"}
      </Text>
    </ScrollView>
  );
}
import styles from "../screens/styles";