import {
  Text,
  View,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Perfil() {
  return (
    <View style={styles.container}>
      <View style={styles.perfil}>
        <Text style={styles.user}>
          <Icon name="account-tie" size={50} color="black" />
        </Text>
        <Text style={styles.title}>Nome Usuário</Text>
        <Text style={styles.email}>usuário@gmail.com</Text>
      </View>

      <ScrollView style={styles.infos}>
        <View style={styles.lastBuy}>
          <Text style={styles.titleLbuy}>Última compra</Text>
          <View style={styles.venda}>
            <Image
              source={require("../img/iphone.png")}
              style={styles.imgProduct}
            />
            <Text style={styles.info}> Iphone 12 </Text>
          </View>
        </View>

        <View style={styles.myProducts}>
          <Text style={styles.titleMyProducts}>Meus produtos</Text>
          <View style={styles.product}>
            <Image
              source={require("../img/iphone.png")}
              style={styles.imgProduct}
            />
          </View>
        </View>

        <View style={styles.address}>
          <Text style={styles.titleAddress}>Endereço</Text>
          <View style={styles.infoAddress}>
            <Text>LINKAR O ENDEREÇO AQUI</Text>
          </View>
        </View>

        <View style={styles.contact}>
          <Text style={styles.titleContact}>Contato</Text>
          <View style={styles.infoContact}>
            <Text>LINKAR CONTATO AQUI</Text>
          </View>
        </View>

        <View style={styles.button}>
          <TouchableOpacity style={styles.exitButton}>
            <Text style={styles.textButton}> Sair </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#E5E5E5",
    padding: 8,
    minWidth: "100%",
  },

  infos: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 25,
    width: "105%",
  },
  /* -------------------PERFIL-------------------- */
  perfil: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "30%",
  },

  title: {
    margin: 0,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  email: {
    textAlign: "center",
    marginTop: 4,
    fontSize: 12,
    backgroundColor: "#DEDEDE",
    paddingHorizontal: 10,
    borderRadius: 50,
  },

  user: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },

  /* -------------------ÚLTIMA COMPRA-------------------- */

  lastBuy: {
    borderRadius: 20,
    width: "100%",
  },

  titleLbuy: {
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 12,
    marginBottom: 5,
  },

  venda: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    padding: 10,
  },

  imgProduct: {
    width: 70,
    height: 70,
  },

  info: {
    fontWeight: "bold",
    fontSize: 20,
  },

  /* -------------------MEUS PRODUTOS-------------------- */

  myProducts: {
    flexDirection: "column",
    marginTop: "5%",
    borderRadius: 20,
    width: "100%",
  },

  titleMyProducts: {
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 12,
    marginBottom: 5,
  },

  product: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    padding: 10,
  },

  /* -------------------ENDEREÇO-------------------- */

  address: {
    flexDirection: "column",
    marginTop: "5%",
    width: "100%",
  },

  titleAddress: {
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 12,
    marginBottom: 5,
  },

  infoAddress: {
    backgroundColor: "#F6f6f6",
    maxHeight: 280,
    borderRadius: 15,
    padding: 10,
  },

  /* -------------------CONTATO-------------------- */

  contact: {
    flexDirection: "column",
    marginTop: "5%",
    width: "100%",
  },

  titleContact: {
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 12,
    marginBottom: 5,
  },

  infoContact: {
    backgroundColor: "#F6f6f6",
    maxHeight: 280,
    borderRadius: 15,
    padding: 10,
  },

  /* -------------------BOTÃO-------------------- */

  button: {
    alignItems: "center",
    marginTop: "5%",
  },

  exitButton: {
    backgroundColor: "#242424",
    width: 250,
    height: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  textButton: {
    color: "white",
    fontWeight: "bold",
    letterSpacing: 2,
  },
});
