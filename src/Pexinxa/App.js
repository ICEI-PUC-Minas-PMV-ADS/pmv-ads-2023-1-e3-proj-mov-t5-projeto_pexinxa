import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity style={{ marginRight: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Menu Principal</Text>
        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Pexinxa</Text>
      </View>
      <Text style={{ marginTop: 10 }}>Seja bem-vindo ao melhor aplicativo de compras e vendas!</Text>
      <TextInput style={{ marginTop: 20 }} placeholder="Digite aqui o termo da sua busca" />
      <Button title="Buscar" />
      <Text style={{ fontWeight: 'bold', marginTop: 10 }}>Categorias</Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={{ marginRight: 10 }}>
          <Text style={{ color: 'blue' }}>Smartphones</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginRight: 10 }}>
          <Text style={{ color: 'blue' }}>Eletrodomésticos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginRight: 10 }}>
          <Text style={{ color: 'blue' }}>Notebooks e Desktops</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginRight: 10 }}>
          <Text style={{ color: 'blue' }}>Cama, Mesa e Banho</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginRight: 10 }}>
          <Text style={{ color: 'blue' }}>Moda</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ fontWeight: 'bold', fontSize: 16, marginTop: 20 }}>Os melhores produtos da semana:</Text>
      <ScrollView style={{ marginTop: 10 }}>
        {produtos.map((produto, index) => (
          <View key={index} style={{ marginBottom: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>{produto.nome}</Text>
            <Text>{produto.descricao}</Text>
            <Text style={{ fontWeight: 'bold' }}>R${produto.preco.toFixed(2)}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const produtos = [
  {
    nome: 'Produto 1',
    descricao: 'Descrição do Produto 1',
    preco: 20.5
  },
  {
    nome: 'Produto 2',
    descricao: 'Descrição do Produto 2',
    preco: 30.5
  },
  {
    nome: 'Produto 3',
    descricao: 'Descrição do Produto 3',
    preco: 40.5
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20
  },
});
