import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

export default function Bolum3konu4() {
  return (
    <ScrollView>
      <Text style={styles.title3}>►Programlama Dillerinin Seviyeleri:</Text>

      <Text style={styles.text}>
      ●Konuştuğumuz dile yakınsa: “yüksek seviyeli”{"\n"}
      ●makine diline yakınsa: “düşük seviyeli”{"\n"}
        {"\n"}
        ●Düşük Seviyeli: Makine Dili, Assembly{"\n"}
        Bilgisayar donanımına direkt erişim, tam hakimiyet{"\n"}
        {"\n"}
        ●Orta Seviyeli: C, C++{"\n"}
        Belleğe tam erişim, kısa ve anlaşılır program kodu{"\n"}
        {"\n"}
        ●Yüksek Seviyeli: Visual Basic, C#{"\n"}
        Veri tabanına kolay erişim, hazır modüller sayesinde kolay programlama
      </Text>
      <Text style={styles.title3}>Genel Sınıflandırma:</Text>
      <Text style={styles.text}>
      ● Temel(Imperative) Programlama Dilleri
        {"\n"}
        Fortran{"\n"}C{"\n"}
        Cobol{"\n"}
        Basic{"\n"}
        Pascal{"\n"}
        {"\n"}
        {"\n"}● Veriye Yönelik Programlama Dilleri{"\n"}
        Lisp{"\n"}
        APL{"\n"}
        Snobol{"\n"}
        Icon{"\n"}
        {"\n"}● Nesneye Yönelik(Object Oriented) Programlama Dilleri{"\n"}
        Simula{"\n"}
        C+{"\n"}
        Ada95{"\n"}
        Java{"\n"}
        Visual Basic{"\n"}
        C#{"\n"}{"\n"}
        ● Bilimsel ve Mühendislik Dilleri{"\n"}
        Fortran{"\n"}C{"\n"}
        Pascal{"\n"}
        {"\n"}●Sistem Programlama Dilleri{"\n"}C{"\n"}
      </Text>
    </ScrollView>
  );
}

import styles from "../screens/styles";
