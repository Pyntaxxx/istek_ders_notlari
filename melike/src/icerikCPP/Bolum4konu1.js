import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Bolum4konu1() {
  return (
    <View>
      <Text style={styles.text}>●Akış şeması, algoritması hazırlanan bir programın(problemin) çeşitli şekillerle birbirine bağlanarak ortaya çıkan, neden sonuç ilişkisini gösteren şema tipidir.{'\n'}{'\n'}
      ●Akış diyagramı çizerken şu kurallara dikkat edilmesi gerekir. Bunlar:{'\n'}
      — Algoritmanın adımları belirlenmelidir.{'\n'}
      — Algoritmanın adımlarına uygun akış diyagram şekilleri belirlenir.{'\n'}
      — Ayrıntıya inmeden diyagram oluşturulur.
      </Text>
    </View>
  )
}

import styles from "../screens/styles";