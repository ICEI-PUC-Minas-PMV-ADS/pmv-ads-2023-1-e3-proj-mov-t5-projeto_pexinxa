import { useContext } from 'react';
import { CartContext } from '../context/cart-context';

import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import {insertProduto, updateProduto, deleteProduto, getProduto} from '../services/ProdutoService';
import {useNavigation} from '@react-navigation/native';

const Product1 = () => {
  
  const navigation = useNavigation();
  
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [imagem, setImagem] = useState('');
  const [categoria, setCategoria] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [data_cadastro, setDataCadastro] = useState('');
  const [vendedor, setVendedor] = useState('');

  useEffect(() => {
    if(item){
      setNome(item.nome);
      setDescricao(item.descricao);
      setPreco(item.preco);
      setImagem(item.imagem);
      setCategoria(item.categoria);
      setQuantidade(item.quantidade);
      setData_cadastro(item.data_cadastro);
      setVendedor(item.vendedor);
    }
  }, [item]);

  const handleSalvar = () => {

    if(item){

      updateProduto(
        {
          nome: nome,
          descricao: descricao,
          preco: preco,
          imagem: imagem,
          categoria: categoria,
          quantidade: quantidade,
          data_cadastro: data_cadastro,
          vendedor: vendedor,
          id: item.id,
        }).then();

    } else {

      insertProduto(
        {

          nome: nome,
          descricao: descricao,
          preco: preco,
          imagem: imagem,
          categoria: categoria,
          quantidade: quantidade,
          data_cadastro: data_cadastro,
          vendedor: vendedor

        }).then();

    }

    navigation.goBack();
  };

  const handleExcluir = () => {

    deleteProduto(item.id).then();
    navigation.goBack();
  };
}

export default function Produto({ route, params }) {
  
  const navigation = useNavigation();

  const [produto, setProduto] = useState([]);

  useEffect(() => {
    getProduto().then((dados) => {
      setProduto(dados);
    });
  },[]);
  
  
  const { product } = route.params;

  const [state, dispatch] = useContext(CartContext);

  const priceStringfied = product.price.toString();

  let priceFormatted = priceStringfied.replace('.', ',');

  if (priceStringfied.includes('.')) {
    if (priceStringfied.split('.')[1].length === 1) {
      priceFormatted = priceFormatted + '0';
    }
  } else {
    priceFormatted = priceFormatted + ',00';
  }

  return (
    <View style={styles.productView}>
      <Image style={styles.productImage} source={{ uri: product.image }} />
      <View style={styles.productCard}>
        <Text style={styles.productName}>{product.name}</Text>

        <Text style={styles.productPrice}>R${priceFormatted}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dispatch({ type: 'add_item', payload: product });
        }}
      >
        <Text style={styles.buttonText}>Adicionar a sacola</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  productView: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: '60%',
    height: '40%',
    borderRadius: 10,
    borderWidth: 10,
    borderColor: '#fff',
  },
  productCard: {
    backgroundColor: '#fff',
    width: '80%',
    marginTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  productName: {
    fontSize: 30,
  },
  productPrice: {
    color: '#7893F4',
    margin: 5,
  },
  productDescription: {
    margin: 5,
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 20,
    width: '60%',
    marginHorizontal: 'auto',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f2f2f2',
    textAlign: 'center',
  },
});
