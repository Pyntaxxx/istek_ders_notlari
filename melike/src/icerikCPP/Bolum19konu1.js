import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

export default function Bolum19konu1() {
    return (
        <ScrollView>
          <Text style={styles.text}>
          Dizileri birden fazla değeri tek bir değişkende depolamak için kullanılırız.
          </Text>
          <Text style={styles.title3}>Dizi Tanımlama</Text>
          <Text style={styles.text2}>
          string renkler[4];
          </Text>
          <Text style={styles.title3}>
          Diziye Değer Atama
          </Text>
          <Text style={styles.text2}>
          string renkler[4] = {'{'}"beyaz", "siyah", "mavi", "pembe"{'}'};
          </Text>
          <Text style={styles.title3}>
          Bir Dizinin Elemanlarına Erişim
          </Text>
          <Text style={styles.text2}>
          string renkler[4] = {'{'}"beyaz", "siyah", "mavi", "pembe"{'}'};{"\n"}{"\n"}
cout {'<< '}renkler[0];
          </Text>

          <Image
            style={styles.img19}
            source={require("../../assets/bolum19konu1.webp")}
          />
          <Text style={styles.text2}>
          string renkler[4] = {'{'}"beyaz", "siyah", "mavi", "pembe"{'}'};
          renkler[0] = "kırmızı";
cout {'<< '}renkler[0];
          </Text>
          <Image
            style={styles.img19}
            source={require("../../assets/bolum19konu1-2.webp")}
          />
        </ScrollView>
      );
      {
        ("}");
      }
    }
    import styles from "../screens/styles";
    