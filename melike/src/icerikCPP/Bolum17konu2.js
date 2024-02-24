import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

export default function Bolum17konu2() {
  return (
    <ScrollView>
      <Text style={styles.text}>
      ●Eğer bir fonksiyon main() fonksiyonun altında çağrıldıysa kullanılabilir
        mi? {"\n"}●Evet kullanılabilir ancak fonksiyonu yukarıda deklare edilmesi
        gerekmektedir. Yani global alanda tanımlanmasıdır.
      </Text>
      <Text style={styles.text2}>
        #include {"<iostream>"}{"\n"}{"\n"}
        using namespace std;{"\n"} {"\n"}
        void myfunction();//fonksiyon denklerasyonu {"\n"}{"\n"}
        int main(){"{"}{"\n"}{"\n"}
        myFunction();{"\n"}{"\n"}
         return 0;{"\n"}{"\n"}
        {"}"}{"\n"}{"\n"}
        //Fonksiyon main() fonksiyonunun altında kaldı. {"\n"}{"\n"}
        void myfunction() {"{"}{"\n"}{"\n"}
        cout{"<<"} "Merhaba :))";{"\n"}{"\n"}
        {"}"}{"\n"}{"\n"}
      </Text>
    </ScrollView>
  );
}
import styles from "../screens/styles";
