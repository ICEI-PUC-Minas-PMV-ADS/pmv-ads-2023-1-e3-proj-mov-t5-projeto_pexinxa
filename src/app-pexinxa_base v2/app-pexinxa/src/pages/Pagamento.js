import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Pagamento() {
  return; /* (
    <View style={styles.container}>
      <View style={styles.bloco1}>
        <Image source={require('./assets/cifrao.png')} style={styles.imgPay} />
        <Text style={styles.title}>Pagamento</Text>
        <Text style={styles.email}>comprador@gmail.com</Text>
      </View>

      <View style={styles.block2}>
        <View style={styles.product}>
          <View style={styles.infoProd}>
            <Image
              source={require('./assets/sacola.png')}
              style={styles.imgProduct}
            />
            <Text style={styles.nameProduct}> Informações do produto </Text>
          </View>

          <Text style={styles.value}>Valor total:</Text>

          <View style={styles.payment}>
            <TouchableOpacity>
              <Icon name="credit-card-outline" size={40} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="barcode" size={49} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="cash" size={48} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.payButton}>
        <Text style={styles.searchButtonText}>Finalizar Pagamento</Text>
      </TouchableOpacity>
    </View>
  ); */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    padding: 8,
  },

  bloco1: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 8,
  },

  imgPay: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },

  title: {
    margin: 0,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  email: {
    textAlign: 'center',
    marginTop: 4,
    fontSize: 12,
    backgroundColor: '#DEDEDE',
    paddingHorizontal: 10,
    borderRadius: '20px',
  },

  block2: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginTop: '15%',
    borderRadius: '20px',
    width: '90%',
  },

  product: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginTop: '10%',
    borderRadius: '20px',
    width: '90%',
  },

  payButton: {
    backgroundColor: '#68E25A',
    paddingHorizontal: 45,
    height: '5%',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignText: 'center',
    fontWeight: 'bold',
    marginTop: '10%',
  },

  infoProd: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 15,
    padding: 10,
    marginTop: 25,
  },

  imgProduct: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },

  nameProduct: {
    fontWeight: 'bold',
  },

  value: {
    padding: 7,
    margin: 10,
    borderWidth: 1,
    borderRadius: 15,
  },

  payment: {
    alignItems: 'center',
    flexDirection: 'row',
    rowGap: 10,
    marginBottom: 15,
    width: 200,
    justifyContent: 'space-between',
  },
});
