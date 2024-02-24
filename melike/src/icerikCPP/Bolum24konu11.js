import { StyleSheet, Text, ScrollView, Image } from "react-native";
import React from "react";

export default function Bolum24konu11() {
  return (
    <ScrollView>
      <Text style={styles.text}>
      ●Miras yoluyla birbiriyle ilişkili birçok sınıfa sahip olduğumuzda ortaya
        çıkar.
      </Text>
      <Text style={styles.text2}>
        #include{" <iostream>"} {"\n"} {"\n"}
        #include{" <string>"}
        {"\n"} {"\n"}
        using namespace std; {"\n"} {"\n"}
        // Base class{"\n"} {"\n"}
        class Hayvanlar {"{"} {"\n"} {"\n"}
        public: {"\n"} {"\n"}
        void hayvanSesi() {"{"} {"\n"} {"\n"}
        cout {"<<"} "Hayvaların kendine özgü sesleri vardır \n"; {"\n"} {"\n"}
        {"}"} {"\n"} {"\n"}
        {"}"};{"\n"}
        {"\n"}
        class Domuz : public Hayvanlar {"{"} {"\n"} {"\n"}
        public: {"\n"} {"\n"}
        void hayvanSesi() {"{"} {"\n"} {"\n"}
        cout{"<<"} "Domuzlar şöyle ses çıkarır : wee wee \n"; {"\n"} {"\n"}
        {"}"} {"\n"} {"\n"}
        {"}"}; class Kopek : public Hayvanlar {"{"} {"\n"} {"\n"}
        public: {"\n"} {"\n"}
        void hayvanSesi() {"{"} {"\n"} {"\n"}
        cout{"<<"} "Köpekler şöyle ses çıkarır: bow wow \n"; {"\n"} {"\n"}
        {"}"} {"\n"} {"\n"}
        {"}"};{"\n"} {"\n"}
        int main() {"{"}
        {"\n"}
        {"\n"}
        Hayvanlar hayvanim; {"\n"} {"\n"}
        Domuz domuz1; {"\n"} {"\n"}
        Kopek kopek1; {"\n"} {"\n"}
        hayvanim.hayvanSesi(); {"\n"} {"\n"}
        domuz1.hayvanSesi(); {"\n"} {"\n"}
        kopek1.hayvanSesi();{"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}
      </Text>
      <Image
        style={styles.img24_11}
        source={require("../../assets/bolum24konu11.webp")}
      />
    </ScrollView>
  );
}
import styles from "../screens/styles";
