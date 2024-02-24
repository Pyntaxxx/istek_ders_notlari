import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

export default function Bolum17konu1() {
  return (
    <ScrollView>
      <Text style={styles.text}>
      ●Programın herhangi bir noktasından çağırılabilen kod bloklarıdır.
      {'\n'}●Fonksiyonlar yeniden kullanılabilir özellikte yapılardır. {'\n'}●Bu sayede eğer
        bir işlemin aynı proje içerişinde çok sayıda tekrarlanması gerekiyorsa o
        işlemi gerçekleştirmek için bir fonksiyon oluşturmak kurtarıcı
        olacaktır.
      </Text>

      <Text style={styles.text2}>
        //Fonksiyon yapısı veri-türü fonksiyon-adı (parametreler){"\n"}
        {"\n"}
        {"{"}
        {"\n"}
        {"\n"}
        //işlem satırı return ifade;{"\n"}
        {"\n"}
        {"}"}
        {"\n"}
        {"\n"}
      </Text>
      <Text style={styles.text2}>
        //ÖRNEK 1:{"\n"}
        {"\n"}
        // Create a function{"{"} {"\n"}
        {"\n"}
        void myfunction() {"{"}{"\n"}{"\n"}
        cout {"<<"} "Merhaba :))";{"\n"}{"\n"}
        {"}"}{"\n"}{"\n"}
        int main() {"{"}{"\n"}{"\n"}
        myFunction(); //Fonsiyonun çağrılması{"\n"}{"\n"}
         return 0;{"\n"}{"\n"}
        {"}"}{"\n"}{"\n"}
        // Çıkışı "Merhaba :))"
      </Text>
    </ScrollView>
  );
}
import styles from "../screens/styles";