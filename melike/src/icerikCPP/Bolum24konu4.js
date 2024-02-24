import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

export default function Bolum24konu4() {
    return (
        <ScrollView>
          <Text style={styles.text}>
          ●Bir nesne oluşturmak için class adından sonra nesne adını belirtin.
          </Text>
          <Text style={styles.text2}>
          #include{' <iostream>'} {"\n"} {"\n"}
#include {'<string>'} {"\n"} {"\n"}
using namespace std; {"\n"} {"\n"}

            class MyClass {"{"} {"\n"} {"\n"}
            public: {"\n"} {"\n"}
            int sayi; {"\n"} {"\n"}
            string metin; {"\n"} {"\n"}
            {"}"};{"\n"}{"\n"}
            int main() {"{"}{"\n"}{"\n"}
  MyClass myObj;  // nesne oluşturmak{"\n"}{"\n"}

  
  myObj.sayi = 15;{"\n"}{"\n"}
  myObj.metin = "Merhaba";{"\n"}{"\n"}

  
  cout {'<<'} myObj.sayi{'<<'}"\n"; {"\n"}{"\n"}
  cout {'<<'} myObj.metin; {"\n"}{"\n"}
  return 0;{"\n"}{"\n"}
  {"}"}
          </Text>
          <Image
            style={styles.img24_4}
            source={require("../../assets/bolum24konu4.webp")}
          />
        </ScrollView>
      );
    }
    import styles from "../screens/styles";
    