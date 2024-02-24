import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";

export default function Bolum4konu4() {
  return (
    <ScrollView>
      <Text style={styles.text}>
        🔶Verilen iki sayının toplamını bulan program:
      </Text>
      <Image
        style={styles.img4_4_1}
        source={require("../../assets/akisSemaOrnek1.webp")}
      />
      <Text style={styles.text}>
        🔶Girilen sayının tek mi çift mi olduğunu gösteren akış diyagramı:
      </Text>
      <Image
        style={styles.img4_4_2}
        source={require("../../assets/akisSemaOrnek2.webp")}
      />
      <Text style={styles.text}>
        🔶)Girilen 10 adet sayının toplamını bularak ekranda gösteren akış
        diyagramı:
      </Text>
      <Image
        style={styles.img4_4_3}
        source={require("../../assets/akisSemaOrnek3.webp")}
      />
    </ScrollView>
  );
}

import styles from "../screens/styles";
