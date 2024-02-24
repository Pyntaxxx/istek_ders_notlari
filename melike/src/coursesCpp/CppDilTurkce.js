import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CppDilTurkce() {
  return (
    <View>
      <Text style={styles.title3}>C++ Dili Türkçe ayarlama</Text>
      <Text style={styles.text2}>
      #include {"<stdio.h>"} {'\n'}{'\n'}
#include {"<locale.h>"} // Dil ayarlamak için{'\n'}//kütüphane{'\n'}{'\n'}

int main(){'{'}   {'\n'}{'\n'}

  setlocale(LC_ALL, "Turkish"); // Dil ayarlamak için fonksiyon{'\n'}{'\n'}
 
  cout {'<<'}("Merhaba, Dünya!");{'\n'}{'\n'}

  return 0;{'\n'}{'\n'}
{'}'}
      </Text>
    </View>
  )
}
import styles from "../screens/styles";