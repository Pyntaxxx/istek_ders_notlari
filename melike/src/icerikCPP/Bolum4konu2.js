import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";

export default function Bolum4konu2() {
  return (
    <View>
      <ScrollView>
        <Image
          style={styles.img4_2}
          source={require("../../assets/bolum4konu2.webp")}
        />
      </ScrollView>
    </View>
  );
}

import styles from "../screens/styles";
