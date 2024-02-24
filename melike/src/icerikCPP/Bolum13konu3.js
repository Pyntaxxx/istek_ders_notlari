import { StyleSheet, Text, View, Image, ScrollView} from 'react-native'
import React from 'react'

export default function Bolum13konu3() {
    return (
        <ScrollView>
          <Text style={styles.text}>
          Değişkenlere değer atamak için kullanırız.
          </Text>
          <Image
            style={styles.img13_3_1}
            source={require("../../assets/bolum13konu3.webp")}
          />
    
          <Text style={styles.text2}>
            #include {"<iostream>"}
            using namespace std;{"\n"} {"\n"}
             int main() {"{"} {"\n"} {"\n"}
             int x = 10; {"\n"} {"\n"}
             x += 5; {"\n"} {"\n"}
             cout {'<<'} x;{"\n"} {"\n"}
            return 0;{"\n"} {"\n"}
            {"}"}
          </Text>
          <Image
            style={styles.img13_3_2}
            source={require("../../assets/bolum13konu3-2.webp")}
          />
        </ScrollView>
      );
    }
    
    import styles from "../screens/styles";
    