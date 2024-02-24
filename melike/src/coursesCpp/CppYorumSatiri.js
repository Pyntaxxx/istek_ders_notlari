import { StyleSheet, Text, ScrollView } from 'react-native'
import React from 'react'

export default function CppYorumSatiri() {
  return (
    <ScrollView>
      <Text style={styles.title3}>C++ Yorum Satırı</Text>
      <Text style={styles.text}>
      Yorum satırı oluşturmak için önce şu ifadeyi kullan: “//”
      </Text>
      <Text style={styles.text2}>
      // This is a comment{"\n"}{"\n"}
      cout {"<<"} "Hello World!" {"<<"} endl{";"}
      </Text>
    </ScrollView>
  );
}
import styles from "../screens/styles";