import { StyleSheet, Text, Image, ScrollView } from "react-native";
import React from "react";

export default function Bolum24konu5() {
  return (
    <ScrollView>
      <Text style={styles.text2}>
        Sınıf içi tanımı
      </Text>
      <Text style={styles.text}>
        #include{" <iostream>"} {"\n"} {"\n"}
        using namespace std; {"\n"} {"\n"}
        class MyClass {"{"} {"\n"} {"\n"}
        public: {"\n"} {"\n"}
        void selam() {"{"} {"\n"} {"\n"}
        cout {"<<"} "Selam Dünya!"; {"\n"} {"\n"}
        {"}"} {"\n"} {"\n"}
        {"}"};{"\n"}
        {"\n"}
        int main() {"{"}
        {"\n"}
        {"\n"}
        MyClass myObj; {"\n"}
        {"\n"}
        myObj.selam();{"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}
      </Text>
      <Image
        style={styles.img24_4}
        source={require("../../assets/bolum24konu4.webp")}
      />
      <Text style={styles.title3}>
        Sınıf dışı tanımı
      </Text>
      <Text style={styles.text}>
      ●Bunun için class adı ardından ::operatörünü ve ardından method adını
        belirtiriz.
      </Text>
      <Text style={styles.text2}>
        #include{" <iostream>"} {"\n"} {"\n"}
        using namespace std; {"\n"} {"\n"}
        class MyClass {"{"} {"\n"} {"\n"}
        public: {"\n"} {"\n"}
        void selam();{"\n"}
        {"\n"}
        void MyClass::selam() {"{"}
        {"\n"}
        {"\n"}
        cout{"<<"} "Selam Dünya!";{"\n"}
        {"\n"}
        {"}"}
        int main() {"{"}
        {"\n"}
        {"\n"}
        MyClass myObj; {"\n"}
        {"\n"}
        myObj.selam();{"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
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
