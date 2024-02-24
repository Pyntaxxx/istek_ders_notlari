import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function CppYeniSatir() {
  return (
    <ScrollView>
      <Text style={styles.title3}>C++ Yeni Satır</Text>
      <Text style={styles.text}>
        ◆ \n{"\n"}
        {"\n"}
        veya{"\n"}
        {"\n"}◆ endl
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
        cout {"<<"} "Hello World! \n"{";"}
        {"\n"}
        {"\n"}
        cout {"<<"} "I am learning C++"{";"}
        {"\n"}
        {"\n"}
        return 0{";"}
        {"\n"}
        {"\n"}
        {"{"}
      </Text>
      <Text style={styles.text2}>
        #include {"<iostream>"}
        {"\n"}
        {"\n"}
        using namespace std; int main() {"{"}
        {"\n"}
        {"\n"}
        cout {"<<"} "Hello World!" {"<<"} endl{";"}
        {"\n"}
        {"\n"}
        cout {"<<"} "I am learning C++"{";"}
        {"\n"}
        {"\n"}
        return 0{";"}
        {"\n"}
        {"\n"}
        {"{"}
      </Text>
    </ScrollView>
  );
}
import styles from "../screens/styles";