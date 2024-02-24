import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

export default function Bolum13konu5() {
    return (
        <ScrollView>
          <Text style={styles.text}>Karşılaştırma operatörlerinde olduğu gibi , mantıksal operatörlerle de doğru ( 1) veya yanlış ( 0) değerlerini test edebiliriz .
          </Text>
          <Image
            style={styles.img13_5_1}
            source={require("../../assets/bolum13konu5.webp")}
          />
    
          <Text style={styles.text2}>
            #include {"<iostream>"}
            using namespace std;{"\n"} {"\n"}
            int main() {"{"} {"\n"} {"\n"}
            int x = 5; {"\n"} {"\n"}int y = 3; {"\n"} {"\n"}
            cout {"<<"}(x{' >'} 3 || x {'< '}4); ; {"\n"} {"\n"}
            return 0;{"\n"} {"\n"}
            {"}"}
          </Text>
          <Image
            style={styles.img13_5_2}
            source={require("../../assets/bolum13konu4-2.webp")}
          />
        </ScrollView>
      );
    }
    
    import styles from "../screens/styles";