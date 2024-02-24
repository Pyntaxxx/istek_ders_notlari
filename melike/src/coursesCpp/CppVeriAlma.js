import { ScrollView, StyleSheet, Text, View,} from 'react-native'
import React from 'react'

export default function CppVeriAlma() {
  return (
    <ScrollView>
      <Text style={styles.title3}>C++ Kullanıcıdan Veri Alma</Text>
      <Text style={styles.text}>◆Kullanılan komut: cin{'\n'}{'\n'}
      ◆Kullanıcıdan almak için “cin” komutundan sonra: {'>>'}</Text>   
      <Text style={styles.text2}>
      #include {'<iostream>'}{'\n'}{'\n'}
      #include {'<locale.h>'}{'\n'}{'\n'}
using namespace std;{'\n'}{'\n'}

int main() {'{'}{'\n'}{'\n'}
setlocale(LC_ALL,"Turkish");{'\n'}{'\n'}
int yas;{'\n'}{'\n'}
  cout {'<<'} {"Yaşınızı giriniz: "} {';'}{'\n'}{'\n'}
  cin {'>>'} x;{'\n'}{'\n'}
  cout {'<<'} "Yaşınız: " {'<<'} yas;{'\n'}{'\n'}
  return 0;{'\n'}{'\n'}
{'}'}
      </Text>
    </ScrollView>
  )
}
import styles from "../screens/styles";