import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function HomeScreen({ navigation }) {
  const handlePress1 = () => {
    navigation.navigate("ISUBÜ BM");
  };
  const handlePress2 = () => {
    navigation.navigate("ISUBÜ EEM");
  };
  const handlePress3 = () => {
    navigation.navigate("ISUBÜ BİM");
  };
  const handlePress4 = () => {
    navigation.navigate("ISUBÜ İM");
  };
  const handlePress5 = () => {
    navigation.navigate("ISUBÜ MM");
  };
  const handlePress6 = () => {
    navigation.navigate("ISUBÜ MEM");
  };
  
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.card} onPress={handlePress1}>
        <Image
          style={styles.img1}
          source={require("../../assets/bilgisayarMuhendislik.jpg")}
        />
        <Text style={styles.cardText}>Bilgisayar Müh</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={handlePress2}>
        <Image
          style={styles.img2}
          source={require("../../assets/elektrikMuhendislik.jpg")}
        />
        <Text style={styles.cardText}>E. Elektronik Müh</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={handlePress3}>
        <Image
          style={styles.img1}
          source={require("../../assets/biyomedikalMuhendislik.jpg")}
        />
        <Text style={styles.cardText}>Biyomedikal Müh</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={handlePress4}>
        <Image
          style={styles.img1}
          source={require("../../assets/insaatMühendislik.jpg")}
        />
        <Text style={styles.cardText}>İnşaat Müh</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={handlePress5}>
        <Image
          style={styles.img1}
          source={require("../../assets/makineMuhendislik.jpg")}
        />
        <Text style={styles.cardText}>Makine Müh</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={handlePress6}>
        <Image
          style={styles.img1}
          source={require("../../assets/mekatronikMuhendis.jpg")}
        />
        <Text style={styles.cardText}>Mekatronik Müh</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "black",
  },
  card: {
    width: 170,
    height: 250,
    backgroundColor: "white",
    borderRadius: 30,
    marginBottom: 20,
    alignItems: "center",
    overflow: "hidden",
  },
  img1: {
    width: "100%",
    height: "88.4%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  img2: {
    width: "100%",
    height: "88.4%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardText: {
    backgroundColor: "#8a2be2",
    color: "white",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: "100%",
    textAlign: "center",
  },
});
