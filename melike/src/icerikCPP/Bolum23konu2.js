import { StyleSheet, Text,Image, ScrollView } from "react-native";
import React from "react";

export default function Bolum23konu2() {
  return (
    <ScrollView>
      <Text style={styles.text}>
        ●Bir struct’ın tüm üyelerine bir kerede tüm üyelere yeterli bellek
        tahsis edildiğinde erişebiliriz. {"\n"} {"\n"}● Ancak Union’larda durum
        böyle değil. Bir kerede yalnızca bir birliğin bir üyesine erişebiliriz.{" "}
        {"\n"} {"\n"}● Aynı değişkeni oluşturmak için bellekte kapladıkları
        alanlar farklıdır.{"\n"}
        {"\n"}
        Union’ları tanımlamak için union anahtar sözcüğünü kullanıyoruz.
      </Text>
      <Text style={styles.text2}>
        #include {"<iostream>"}
        {"\n"}
        {"\n"}
        using namespace std;{"\n"}
        {"\n"}
        union unionJob{"\n"}
        {"{"}
        {"\n"}
        {"\n"}
        char ad[32];{"\n"}
        {"\n"}
        float maas;{"\n"}
        {"\n"}
        int calisanNo; {"\n"} {"\n"}
        {"}"}uJob; struct structJob{"\n"}
        {"{"}
        {"\n"}
        {"\n"}
        char ad[32];{"\n"}
        {"\n"}
        float maas;{"\n"}
        {"\n"}
        int calisanNo; {"\n"} {"\n"}
        {"}"}sJob; int main(){"\n"}
        {"{"}
        {"\n"}
        {"\n"}
        cout {"<<"} "size of union = "{"<<"}sizeof(uJob){"<<"} " bytes"{"<<"}{" "}
        endl;{"\n"}
        {"\n"}
        cout {"<<"} "size of structure = " {"<<"}sizeof(sJob) {"<<"} " bytes"{" "}
        {"<<"} endl;{"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}{" "}
      </Text>
      <Image
        style={styles.img23_2}
        source={require("../../assets/bolum23konu2.webp")}
      />
    </ScrollView>
  );
}
import styles from "../screens/styles";