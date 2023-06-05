import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { CartContext } from '../context/cart-context';
import { useContext, useState, useEffect } from 'react';
import Produto from '../components/product';

import { getProduto } from '../services/ProdutoService';

export default function Sacola() {
  const [produto, setProduto] = useState([]);

  useEffect(() => {
    getProduto().then((dados) => {
      setProduto(dados);
    });
  }, []);

  const [state, dispatch] = useContext(CartContext);

  const cartProducs = state.items;

  const renderProducts = cartProducs.map((product) => (
    <Produto
      key={product.id * Math.floor(Math.random() * 100)}
      size={'large'}
      product={product}
    />
  ));

  return (
    <View style={styles.container}>
      <View style={styles.block1}>
        <Image source={require('../img/sacola.png')} style={styles.sacola} />
        <Text style={styles.title}>Minha Sacola</Text>
        <Text style={styles.email}>comprador@gmail.com</Text>
      </View>

      <View style={styles.block2}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.productInformation}
        >
          {renderProducts}
        </ScrollView>
      </View>

      <TouchableOpacity style={styles.payButton}>
        <Text style={styles.payText}> Ir para o pagamento </Text>
      </TouchableOpacity>
    </View>
  );
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

  /* BLOCO INICIAL DA SACOLA, CONTÉM IMG DA SACOLA, TITULO E EMAIL DA CONTA CONECTADA */
  block1: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 8,
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
    borderRadius: 50,
  },

  sacola: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },

  /* -------------------FIM BLOCO 1-------------------- */

  /* BLOCO 2 DA SACOLA, CONTÉM IMG DO PRODUTO, NOME DO PRODUTO, SEU VALOR E BOTAR DIRECIONAL PARA FINALIZAÇÃO DE COMPRA */
  block2: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    width: '90%',
    flexGrow: 0,
    maxHeight: 330,
    marginTop: '10%',
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

  payButton: {
    backgroundColor: '#68E25A',
    paddingHorizontal: 45,
    height: '5%',
    borderRadius: 50,
    justifyContent: 'center',
    alignText: 'center',
    marginTop: '10%',
  },

  imgProduct: {
    width: 70,
    height: 70,
    marginBottom: 20,
  },

  info: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  value: {
    fontSize: 12,
  },
  productInformation: {
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 0,
    justifyContent: 'space-around',
  },

  /* -------------------FIM BLOCO 2-------------------- */
});
