import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";

export default function Bolum25konu2() {
  return (
    <ScrollView>
      <Text style={styles.text}>
      ●Dosyaya veri yazdırmak için ofstream sınıfı kullanılır.
      </Text>
      <Text style={styles.text2}>
        int main(){"{"}
        {"\n"} {"\n"}
        ofstream dosyaYaz("cikti.dat",ios::out);{"\n"} {"\n"}
        return 0;{"\n"} {"\n"}
        {"}"}
      </Text>
      <Image
        style={styles.img25_2}
        source={require("../../assets/bolum25konu2.webp")}
      />
      <Text style={styles.text}>
      ●Çıktı dosyaları aşağıdaki farklı dosya açama modları kullanılarak
        açılabilir.{"\n"} {"\n"}
        ●ios::out : Yazma işlemi dosyanın başından başlayarak yapılır ve daha
        önceden veri girilmişse yeni veriler bu verilerin üstüne yazılır.{
          "\n"
        }{" "}
        {"\n"}
        ●ios::app : Yazma işlemi dosyanın en son verisin olduğu yerden başlayarak
        yapılır ve daha önceden veri girilmişse herhangi bir veri kaybı
        yaşanmaz.{"\n"} {"\n"}
        🔴Not: Eğer dosya tanımında dosya açma modu kullanmazsak varsayılan mod
        ios::out olacaktır.{"\n"} {"\n"}
      </Text>
    </ScrollView>
  );
}
import styles from "../screens/styles";