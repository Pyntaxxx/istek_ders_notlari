import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  img: {
    width: 160,
    height: 100,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#e6e6fa',
  },
  title: {
    alignItems: 'flex-start',
    marginLeft: 20,
    marginTop: 0,
    fontSize: 18,
    fontWeight: 'bold',
  },
  textDesc: {
    fontSize: 10,
  },
  wrapper: {
    flexDirection: 'row',
    marginVertical: 15,
    borderWidth: 0.7,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#e6e6fa',
    backgroundColor: '#e6e6fa',
  },
  wrapper2: {},
  AntDesign: {
    marginLeft: 17,
    marginTop: 10,
  },
  icerik: {
    marginLeft: 31,
    marginTop: -23,
    fontSize: 17,
    color: '#696969',
  },
  icerik2: {
    marginLeft: -90,
    marginTop: 60,
    fontSize: 17,
    color: '#696969',
  },

  wrapperAll: {
    backgroundColor: 'black',
  },
  text1: {
    fontSize: 30,
    color: 'black',
    alignSelf: 'center',
    marginVertical: 240,
  },
  title2: {
    fontSize: 20,
    marginVertical: 7,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#e6e6fa',
    color: 'black',
    borderWidth: 4,
    borderColor: 'black',
    borderRadius: 15,
  },
  title3: {
    fontSize: 22,
    marginHorizontal: 10,
    color: 'red',
  },
  main: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    marginHorizontal: 10,
    marginVertical: 7,
    color: 'black',
  },
  text2: {
    fontSize: 15,
    margin: 20,
    borderWidth: 2,
    padding: 5,
    color: 'black',
    fontWeight: 'bold',
  },
  img4_2: {
    width: 430,
    height: 520,
    marginTop: 70,
    alignSelf: 'center',
  },
  img4_4_1: {
    width: 200,
    height: 650,
    marginTop: 20,
    alignSelf: 'center',
  },
  img4_4_2: {
    height: 600,
    marginTop: 20,
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  img4_4_3: {
    width: 270,
    height: 700,
    marginTop: 20,
    alignSelf: 'center',
  },
  img10_4: {
    width: 400,
    height: 250,
    marginTop: 20,
    marginBottom: 20,
  },
  img11_2: {
    width: 350,
    height: 100,
    alignSelf: 'center',
    margin: 5,
  },
  img12_2: {
    width: 200,
    height: 60,
    alignSelf: 'center',
    margin: 5,
  },
  img13_2_1: {
    width: 400,
    height: 220,
    alignSelf: 'center',
    marginVertical: 5,
    marginBottom: 10,
  },
  img13_2_2: {
    width: 160,
    height: 64,
    alignSelf: 'center',
    marginVertical: 5,
    marginBottom: 10,
  },
  img13_3_1: {
    width: '100%',
    height: 220,
    marginVertical: 5,
    marginBottom: 10,
  },
  img13_3_2: {
    width: 150,
    height: 90,
    alignSelf: 'center',
    marginVertical: 5,
    marginBottom: 10,
  },
  img13_4_1: {
    width: 380,
    height: 165,
    marginVertical: 5,
    marginBottom: 10,
    alignSelf: 'center',
  },
  img13_4_2: {
    width: 100,
    height: 40,
    alignSelf: 'center',
    marginVertical: 5,
    marginBottom: 10,
  },
  img13_5_1: {
    width: '100%',
    height: 126,
    marginVertical: 5,
    marginBottom: 10,
    alignSelf: 'center',
  },
  img13_5_2: {
    width: 100,
    height: 40,
    alignSelf: 'center',
    marginVertical: 5,
    marginBottom: 10,
  },
  img14: {
    width: 100,
    height: 40,
    alignSelf: 'center',
    marginVertical: 5,
    marginBottom: 10,
  },
  img15: {
    width: 200,
    height: 140,
    alignSelf: 'center',
    marginVertical: 5,
    marginBottom: 10,
  },
  img16: {
    width: 195,
    height: 250,
    alignSelf: 'center',
    marginVertical: 5,
    marginBottom: 10,
  },
  img16_2: {
    width: 100,
    height: 210,
    alignSelf: 'center',
    marginVertical: 5,
    marginBottom: 10,
  },
  img17_1: {
    width: '100%',
    height: 126,
    marginVertical: 5,
    marginBottom: 10,
    alignSelf: 'center',
  },
  img17_2: {
    width: 100,
    height: 40,
    alignSelf: 'center',
    marginVertical: 5,
    marginBottom: 10,
  },
  img17: {
    width: 250,
    height: 110,
    alignSelf: 'center',
    marginVertical: 5,
    marginBottom: 10,
  },
  img19: {
    width: 250,
    height: 110,
    alignSelf: 'center',
    marginVertical: 5,
    marginBottom: 10,
  },
  img19_2: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginVertical: 5,
    marginBottom: 10,
  },
  img19_3: {
    width: 160,
    height: 190,
    alignSelf: 'center',
    marginVertical: 5,
    marginBottom: 10,
  },
  img19_4: {
    width: 165,
    height: 80,
    alignSelf: 'center',
    marginVertical: 5,
    marginBottom: 10,
  },
  img19_5: {
    width: 85,
    height: 90,
    alignSelf: 'center',
    marginVertical: 5,
    marginBottom: 10,
  },
  img20_2: {
    width: 300,
    height: 110,
    alignSelf: 'center',
    marginVertical: 5,
    marginBottom: 10,
  },
  img20_3: {
    width: 200,
    height: 110,
    alignSelf: 'center',
    marginVertical: 5,
    marginBottom: 10,
  },
  img20_3: {
    width: 300,
    height: 96,
    marginVertical: 5,
    marginBottom: 10,
    alignSelf: 'center',
  },
  img20_4: {
    width: 100,
    height: 70,
    marginVertical: 5,
    marginBottom: 10,
    alignSelf: 'center',
  },
  img20_5: {
    width: 140,
    height: 76,
    marginVertical: 5,
    marginBottom: 10,
    alignSelf: 'center',
  },
  img20_6: {
    width: 350,
    height: 110,
    marginVertical: 5,
    marginBottom: 10,
    alignSelf: 'center',
  },
  img21_2: {
    width: 180,
    height: 120,
    marginVertical: 5,
    marginBottom: 10,
    alignSelf: 'center',
  },
  img21_3: {
    width: 340,
    height: 70,
    marginVertical: 5,
    marginBottom: 10,
    alignSelf: 'center',
  },
  img21_4: {
    width: 230,
    height: 100,
    marginVertical: 5,
    marginBottom: 10,
    alignSelf: 'center',
  },
  img23_2: {
    width: 340,
    height: 90,
    marginVertical: 5,
    marginBottom: 10,
    alignSelf: 'center',
  },
  img24_2: {
    width: 400,
    height: 100,
    marginVertical: 5,
    marginBottom: 10,
    alignSelf: 'center',
  },
  img24_4: {
    width: 300,
    height: 96,
    marginVertical: 5,
    marginBottom: 10,
    alignSelf: 'center',
  },
  img24_7: {
    width: 300,
    height: 96,
    marginVertical: 5,
    marginBottom: 10,
    alignSelf: 'center',
  },
  img24_8: {
    width: 200,
    height: 40,
    marginVertical: 5,
    marginBottom: 10,
    alignSelf: "center",
  },
  img24_10: {
    width: 200,
    height: 86,
    marginVertical: 5,
    marginBottom: 10,
    alignSelf: "center",
  },
  img24_11: {
    width: 400,
    height: 86,
    marginVertical: 5,
    marginBottom: 10,
    alignSelf: "center",
  },
  img25_2: {
    width: 390,
    height: 126,
    marginVertical: 5,
    marginBottom: 10,
    alignSelf: "center",
  },
  img25_4: {
    width: 390,
    height: 150,
    marginVertical: 5,
    marginBottom: 10,
    alignSelf: "center",
  },
});
export default styles;
