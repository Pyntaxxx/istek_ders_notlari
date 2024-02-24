import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

export default function Bolum25konu1() {
  return (
    <ScrollView>
      <Text style={styles.text}>
      ●Dosya işlemleri için fstream kütüphanesinde yer alan ifstream ve
        ofstream sınıfları kullanılır.{"\n"} {"\n"}
        ⚠️Dikkat!⚠️{"\n"} 
        Dosyayı;{"\n"}
        ●txt olarak kaydedince text formatında kaydetmiş oluruz (erişilebilir)
        {"\n"} 
        ●binery formatında kaydedince erişilemez, şifrelidir. (.dat){"\n"} {"\n"}
      </Text>
      <Text style={styles.text2}>
        //Yukarıda belirtilen kütüphaneyi kullanmak için tanımlanması gerekir.
        {"\n"} {"\n"}
        #include {"<iostream>"}
        {"\n"} {"\n"}
        #include {"<fstream>"}
      </Text>
    </ScrollView>
  );
}
import styles from "../screens/styles";