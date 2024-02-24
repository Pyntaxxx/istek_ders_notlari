import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

export default function Bolum20konu6() {
    return (
        <ScrollView>
            <Text style={styles.text}>●Metin içine özel bir karakter yazmak isteyip, bunu vurgulamak için çift tırnak içinde çift tırnak kullanırsak aşağıdaki gibi bir hata alırız:</Text>
          <Text style={styles.text2}>
          string metin = "Burada karakter "Thor" rolünü oynuyor.";
          </Text>
          <Text style={styles.text}>
          ●Bu sorunu önlemenin çözümü ters eğik çizgi karakterini kullanmaktır .
          </Text>
          <Text style={styles.text2}>
        #include {"<iostream>"}
        {"\n"}
        {"\n"}
        using namespace std;{"\n"}
        {"\n"}
        int main() {"{"}
        {"\n"}
        {"\n"}
        string metin1 = "Burada karakter \"Thor\" rolünün oynuyor.";{"\n"}
        {"\n"}
        cout {"<<"} metin1{"<<"} endl{"\n"}
        {"\n"}
        string metin2 = "Thor\'un çekicini yalnızca o kaldırabilir.";{"\n"}
        {"\n"}
        cout {"<<"} metin2{"<<"} endl{"\n"}
        {"\n"}
        string metin3 = "Asgard \\ Thor.";{"\n"}
        {"\n"}
        cout {"<<"} metin3{"<<"} endl{"\n"}
        {"\n"}
        string metin4 ="Asgard \\ Loki.";{"\n"}
        {"\n"}
        cout {"<<"} metin4{"<<"} endl{"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}
      </Text>
          <Image
            style={styles.img20_6}
            source={require("../../assets/bolum20konu6.webp")}
          />
        </ScrollView>
      );
    }
    import styles from "../screens/styles";
    