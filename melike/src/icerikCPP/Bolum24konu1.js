import { StyleSheet, Text, ScrollView } from "react-native";
import React from "react";

export default function Bolum24konu1() {
  return (
    <ScrollView>
      <Text style={styles.title3}>OOP nedir?</Text>
      <Text style={styles.text}>
      ●object oriented programming{"\n"}
        {"\n"}
        ●Dış dünyadaki nesneleri dijital ortamda somutlaştırmamıza kolaylık
        sağlayan bir yaklaşımdır.{"\n"}
      </Text>
      <Text style={styles.title3}>Avantajları</Text>
      <Text style={styles.text}>
      ●Yürütülmesi daha hızlı ve kolay{"\n"}
        {"\n"}
        ●Daha az kod ve daha kısa süreyle tamamen yeniden kullanılabilir
        uygulamalar oluşturmayı mümkün kılar
      </Text>
    </ScrollView>
  );
}
import styles from "../screens/styles";