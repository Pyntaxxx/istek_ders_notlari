import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

export default function Bolum21konu1() {
  return (
    <ScrollView>
      <Text style={styles.text}>
      ●Birçok ilgili değişkeni tek bir yerde gruplandırmamızı sağlar.{"\n"}
        {"\n"}
        ●Diziden farklı olarak bir structure, birçok farklı veri türünü (int,
        string, bool vb.) içerebilir.
      </Text>
      <Text style={styles.title3}>Struct Oluşturma</Text>
      <Text style={styles.text}>
      ● struct anahtar kelimesini kullanırız.{"\n"}
        {"\n"}● Atamalardan sonra struct değişkeninin adını belirtiriz.
      </Text>
      <Text style={styles.text2}>
        struct{"{"}
        {"\n"}
        {"\n"}
        int sayi; {"\n"}
        {"\n"}
        string metin; {"\n"}
        {"\n"}
        {"}"} myStructure; {"\n"}
        {"\n"}
      </Text>
    </ScrollView>
  );
}
import styles from "../screens/styles";
