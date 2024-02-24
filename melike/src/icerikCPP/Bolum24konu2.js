import { StyleSheet, Text, ScrollView, Image } from 'react-native'
import React from 'react'

export default function Bolum24konu2() {
    return (
        <ScrollView>
          <Text style={styles.text}>
          ●Sınıflar ve nesneler, nesne yönelimli programlamanın iki ana yönüdür.
            {"\n"}
          </Text>
          <Image
            style={styles.img24_2}
            source={require("../../assets/bolum24konu2.webp")}
          />
          <Image
            style={styles.img24_2}
            source={require("../../assets/bolum24konu2-2.webp")}
          />
        </ScrollView>
      );
    }
    import styles from "../screens/styles";
    