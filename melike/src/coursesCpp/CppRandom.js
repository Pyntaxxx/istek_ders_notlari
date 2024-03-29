import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

export default function CppRandom() {
  return (
    <ScrollView>
      <Text style={styles.text}>
      Rastgele sayı üretme
        C++ ile rastgele sayı üretme işlemi için rand ve srand fonksiyonları
        kullanılır.{"\n"}
        {"\n"}● rand() fonksiyonu her programın çalıştırılmasında BENZER sayılar
        üretir.{"\n"}
        {"\n"}● rand() fonksiyonunu kullanabilmek için {"<stdlib.h>"}{" "}
        kütüphanesi tanımlanmalısın.{"\n"}
        {"\n"}
        ●Aşağıda program bize 0 ile 100 arasında rastgele 10 tane sayı üretecek.
        {"\n"}
        {"\n"}
      </Text>
      <Text style={styles.text2}>
        #include {"<iostream>"}
        {"\n"}
        {"\n"}
        #include {"<stdlib.h>"}
        {"\n"}
        {"\n"}
        using namespace std;{"\n"}
        {"\n"}
        int main() {"{"}
        {"\n"}
        {"\n"}
        for(int i = 0; i{"<"} 10; i++){"{"}
        {"\n"}
        {"\n"}
        cout {"<<"} rand()%100 {"<<"} endl;{"\n"}
        {"\n"}
        {"}"}
        {"\n"}
        {"\n"}
        return 0;{"\n"}
        {"\n"}
        {"}"}
      </Text>
      <Image
        source={require("../../assets/random1.webp")}
      />
      <Text style={styles.text}>
      ● rand() fonksiyonunun BENZER sayılar üretmesine çözüm olarak srand() fonksiyonu kullanırız.{"\n"}{"\n"}

      ●srand() fonksiyonunu kullanabilmek için “ctime” kütüphanesini eklemelisin.{"\n"}{"\n"}
      </Text>
      <Text style={styles.text2}>
      #include {'<iostream>'}{"\n"}
        {"\n"}
#include {'<stdlib.h>'}{"\n"}
        {"\n"}
#include {'<ctime>'}{"\n"}
        {"\n"}

using namespace std;{"\n"}
        {"\n"}

int main(){"{"}{"\n"}
        {"\n"}

  srand(time(0));{"\n"}
        {"\n"}
  
  for(int i = 0; i {"<"} 10; i++){"{"}{"\n"}
        {"\n"}
    cout {"<<"} rand()%100 {"<<"} endl;{"\n"}
        {"\n"}
    {"}"}

  return 0;{"\n"}
        {"\n"}
  {"}"}
      </Text>
      <Image
        source={require("../../assets/random2.webp")}
      />
    </ScrollView>
  );
}
import styles from "../screens/styles";