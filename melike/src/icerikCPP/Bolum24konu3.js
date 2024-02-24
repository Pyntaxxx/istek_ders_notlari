import { StyleSheet, Text, ScrollView } from "react-native";
import React from "react";

export default function Bolum24konu3() {
  return (
    <ScrollView>
      <Text style={styles.text}>
      ●Kullanacağımız anahtar kelime : class{"\n"}
        {"\n"}
        ●Sınıfın üyelerine (özniteliklere ve yöntemlere) sınıf dışından
        erişilebileceğini belirtmek için: public
      </Text>
      <Text style={styles.text2}>
        class MyClass {"{"} {"\n"} {"\n"}
        public: {"\n"} {"\n"}
        int sayi; {"\n"} {"\n"}
        string metin; {"\n"} {"\n"}
        {"}"};
      </Text>
    </ScrollView>
  );
}
import styles from "../screens/styles";
