import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CppCiktiVerme() {
  return (
    <View>
      <Text style={styles.title3}>C++ Ekrana Çıktı Verme</Text>
      <Text style={styles.text}>◆Kullanılan komut: cout{'\n'}{'\n'}
◆Ekrana vermek için “cout” komutundan sonra: {'<<'}</Text>   
      <Text style={styles.text2}>
      #include {'<iostream>'}{'\n'}{'\n'}
using namespace std;{'\n'}{'\n'}

int main() {'{'}{'\n'}{'\n'}
  cout {'<<'} {"Hello World!"} {';'}{'\n'}{'\n'}
  return 0;{'\n'}{'\n'}
{'}'}
      </Text>
    </View>
  )
}
import styles from "../screens/styles";