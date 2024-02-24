import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function Bolum2konu1() {
  return (
    <ScrollView>
      <Text style={styles.text}>●Algoritma, bir problemi çözmek ya da bir görevi yerine getirmek için adım adım işlem basamaklarının tasarlanmasıdır.</Text>
      <Text style={styles.text}>●Algoritmanın bazı kriterleri sağlamak zorundadır. Bunlar:</Text>
      <Text style={styles.text}>1- Girdi: Sıfır veya daha fazla değer dışardan verilmelidir.</Text>
      <Text style={styles.text}>2- Çıktı: Algoritma en azından bir değer üretmelidir. Her çözüm bir sonuç üretir.</Text>
      <Text style={styles.text}>3- Açıklık: Her işlem(komut) açık olmalı ve farklı anlamlar içermemelidir.</Text>
      <Text style={styles.text}>4- Sonluluk: Her türlü olasılık için algoritma sonlu adımda bitmelidir.</Text>
      <Text style={styles.text}>5- Etkinlik: Her komut kişinin kalem ve kağıt ile yürütülebileceği kadar basit olmalıdır.</Text>
      <Text style={styles.text}>●Algoritmalar hazırlanırken mutlaka başla komutu ile başlanır ve bitir komutu ile sonlanır. Başla ve bitir komutları olmayan komutlar teori de yok sayılır. Bir algoritma eğer sonlanmıyorsa, bu algoritma değil sonsuz döngüdür.</Text>
      <Text style={styles.title3}>Algoritma ne işe yarar?</Text>
      <Text style={styles.text}>Yazılan her program, çalıştırılan her uygulama, oynadığımız oyunlar, mobil uygulamalar, oyunlar hepsi bir çok algoritma çerçevesinde yazılmıştır.</Text>
      </ScrollView>
  )
}

import styles from "../screens/styles";