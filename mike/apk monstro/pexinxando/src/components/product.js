import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const Produto = ({ product, size }) => {
  const navigation = useNavigation();

  const priceStringfied = product.price.toString();

  let priceFormatted = priceStringfied.replace('.', ',');

  if (priceStringfied.includes('.')) {
    if (priceStringfied.split('.')[1].length === 1) {
      priceFormatted = priceFormatted + '0';
    }
  } else {
    priceFormatted = priceFormatted + ',00';
  }

  const redirectToProduct = () => {
    navigation.navigate('Produto', { product });
  };

  const small = (
    <TouchableOpacity
      key={product.id}
      style={styles.productItem}
      onPress={redirectToProduct}
    >
      <Image style={styles.productImage} source={{ uri: product.image }} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>R${priceFormatted}</Text>
      <TouchableOpacity style={styles.button} onPress={redirectToProduct}>
        <Text style={styles.buttonText}>Ver</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  const large = (
    <View key={product.id} style={styles.product}>
      <Image source={{ uri: product.image }} style={styles.imgProduct} />
      <View>
        <Text style={styles.info}> {product.name} </Text>
        <Text style={styles.value}> R${priceFormatted} </Text>
      </View>
      <Text style={styles.del}>
        <TouchableOpacity>
          <Icon name="delete-outline" size={20} color="black" />
        </TouchableOpacity>
      </Text>
    </View>
  );

  return (
    <>
      {size === 'small' ? small : undefined}
      {size === 'large' ? large : undefined}
    </>
  );
};

const styles = StyleSheet.create({
  productItem: {
    backgroundColor: '#f2f2f2',
    width: '40%',
    borderRadius: 10,
    marginBottom: 20,
    marginRight: 20,
    padding: 10,
    textAlign: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 14,
    color: '#7893f4',
    margin: 2,
  },
  productImage: {
    width: 120,
    height: 150,
    borderRadius: 10,
    margin: 'auto',
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 20,
    width: '80%',
    height: 'auto',
    marginHorizontal: 'auto',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f2f2f2',
    textAlign: 'center',
  },
  product: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    margin: 10,
    borderRadius: 20,
    width: '85%',
  },
  imgProduct: {
    width: 70,
    height: 70,
    marginBottom: 20,
    borderRadius: 10,
  },

  info: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  value: {
    fontSize: 12,
    color: '#7893f4',
  },
});

export default Produto;
