import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

export default function Bolum16konu1() {
  return (
    <ScrollView>
      <Text style={styles.text}>
      ●Döngüler, belirli komutları tekrar tekrar çalıştırılmasını sağlar.{" "}
        {"\n"} {"\n"}●While döngüsü verilen koşulu yerine getirdiği taktirde
        kodları tekrar çalıştırır. {"\n"} {"\n"}
        ●Ekrana 5 kere “bilgisayar” kelimesini yazdıralım. {"\n"} 
      </Text>

      <Text style={styles.text2}>
        #include {"<iostream>"}
        using namespace std;{"\n"} {"\n"}
        int main() {"{"} {"\n"} {"\n"}
        int sayac = 0; {"\n"} {"\n"}
        while(sayac{"<"}5){"{"}
        {"\n"} {"\n"}
        cout {"<<"}"bilgisayar" {"<<"}endl; {"\n"} {"\n"}
        sayac++; {"\n"} {"\n"}
        return 0;{"\n"} {"\n"}
        {"}"}
      </Text>
      <Image
        style={styles.img16}
        source={require("../../assets/bolum16konu1.webp")}
      />
      <Text style={styles.text}>
      ●Yukarıdaki örnekte gördüğünüz gibi bir sayaç değişkeni tanımladık.{"\n"} {"\n"}
      ●While koşulu olarak “sayac” değişkeni 5’ten küçük olduğu taktirde komutlar tekrar çalışsın dedik.{"\n"} {"\n"}
      ●While döngüsünün içinde “sayac” değişkenini bir artırdık.{"\n"} {"\n"}
      ●Böylece döngü her çalıştığında sayaç bir artacak ve döngü toplam 5 kere çalışmış olacaktır.{"\n"} {"\n"}
      </Text>
    </ScrollView>
  );
}
import styles from "../screens/styles";
