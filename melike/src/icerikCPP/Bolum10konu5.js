import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Bolum10konu5() {
    return (
        <View>
          <Text style={styles.text}>
          ●Mevcut değişken değerlerinin değiştirilemediği değişkenlere sabit değişken denir. 
          {'\n'}{'\n'}●Değişkeni sabit değişken olarak tanımlamak için değişkenin en başına “const” ifadesi yazılır.
          </Text>
          <Text style={styles.text2}>
          const int minutesPerHour = 60; {"\n"} {"\n"}
          const float PI = 3.14; {"\n"} {"\n"}
          </Text>
        </View>
      );
    }
    
    import styles from "../screens/styles";