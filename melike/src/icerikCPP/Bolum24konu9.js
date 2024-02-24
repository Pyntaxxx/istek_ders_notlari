import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function Bolum24konu9() {
  return (
    <ScrollView>
      <Text style={styles.text}>
      ●Kapsülleme, veri güvenliği için oldukça kullanışlıdır.{"\n"} {"\n"}
      ●Kullanılan Methodlar: get ve set
      </Text>
      <Text style={styles.text2}>
        #include{" <iostream>"} {"\n"} {"\n"}
        using namespace std; {"\n"} {"\n"}
        class Calisan {"{"} {"\n"} {"\n"}
        private: {"\n"} {"\n"}
        void setMaas(int s) {"{"} {"\n"} {"\n"}
        maas = s;{"\n"} {"\n"}
        {"}"} {"\n"} {"\n"}
        int getMaas() {"{"}
        {"\n"}
        {"\n"}
        return maas;{"\n"}
        {"\n"}
        {"}"}
        {"\n"}
        {"\n"}
        {"}"};{"\n"}
        {"\n"}
        int main() {"{"}
        {"\n"}
        {"\n"}
        Calisan calisan1; {"\n"}
        {"\n"}
        calisan1.setMaas(50000);{"\n"}
        {"\n"}
        cout {"<<"} calisan1.getMaas();{"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}
      </Text>
    </ScrollView>
  );
}
import styles from "../screens/styles";