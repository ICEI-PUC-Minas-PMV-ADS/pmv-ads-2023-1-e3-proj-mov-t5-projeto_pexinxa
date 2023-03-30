import React from 'react';
import {View, Image, StyleSheet , Text, Button} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 125,
    height: 125,
  },
  fonte: {
    fontWeight: '800'
  },
  botoes: {
    width: 5,
    height: 40,
  }
  
});

const Produto = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.fonte}>Notebook Exemplo</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://img.kalunga.com.br/fotosdeprodutos/218288z_1.jpg',
        }}
      />
      <Text>  R$1500</Text>
      <Button style={styles.botoes}
        title="Comprar"
        color="green"
        accessibilityLabel="Comprar produto"
      />
      <Button style={styles.botoes}
        title="Adicionar ao carrinho"
        color="blue"
        accessibilityLabel="Adicionar produto ao carrinho"
      />
    </View>
  );
};

export default Produto;