//import React from 'react';
import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Appbar, TextInput, Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const CadastrarProduto = () => {
  
  const [nomeProduto, setNomeProduto] = useState('');
  const [valorProduto, setValorProduto] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descricao, setDescricao] = useState('');


  return (    

    <ScrollView style={styles.container}>

      <Appbar.Header>
          <Appbar.Content title="Novo Produto" />
      </Appbar.Header>

      <View style={styles.body}>

        <Button style={styles.botao} 
          title='Mudar Foto' 
          icon="camera-burst" 
          mode="contained"
          color='#A9A9A9'
          onPress={() => console.log('Pressed')} />
        <Text style={styles.textimagem}>Foto Principal</Text>

       <View style={styles.cadastro}>
          <Text style={styles.tituloInput}> Nome do Produto</Text>
          <TextInput 
            style={styles.input}
            value={categoria}
            onChangeText={(text) => setCategoria(text)}
          />

          <Text style={styles.tituloInput}> Valor </Text>
          <TextInput 
            style={styles.input}
            value={valorProduto}
            keyboardType="decimal-pad"
            onChangeText={(text) => setValorProduto(text)}
          />

          <Text style={styles.tituloInput}> Categoria </Text>
          <TextInput 
            style={styles.input}
            value={nomeProduto}
            onChangeText={(text) => setNomeProduto(text)}
          />

          <Text style={styles.tituloInput}> Descrição </Text>
          <TextInput 
            style={styles.inputDescricao}
            onChangeText={(text) => setDescricao(text)}
            value={descricao}
          />
      </View>

      <Text style={styles.tituloInput}> Fotos </Text>
       <View style={styles.fixToText}>
        <Button
          title="Left button"
          icon="camera-burst"
          color='#A9A9A9'
          onPress={() => Alert.alert('Adicionar foto')}
        />
        <Button
          title="Right button"
          icon="gamepad-round" 
          color='#A9A9A9'
          onPress={() => Alert.alert('Adicionar foto')}
        />
        <Button
          title="Right button"
          icon="gamepad-round" 
          color='#A9A9A9'
          onPress={() => Alert.alert('adicionar foto')}
        />
        <Button
          title="Right button"
          icon="gamepad-round" 
          color='#A9A9A9'
          onPress={() => Alert.alert('adicionar foto')}
        />
      </View>

      <Button style={styles.cadastrar} 
        title='Cadastrar Produto'
        mode="contained"
        color='#A9A9A9'
        onPress={() => console.log('Cadastrado')}>

        <Text> Cadastrar Produto </Text>
      </Button>

      </View>
      
    </ScrollView>

  );

  
}

const styles = StyleSheet.create({
  container:{
    flex:1, 
    backgroundColor: '#FFF',
  },
  body:{
    backgroundColor: '#FFF', 
    alignItems:'left', 
    paddingTop: 30,
    padding: 20
  },
  botao: {
    marginBottom: 8,
    borderRadius: 100,
    height: 70,
    width: 70,
    justifyContent: 'center',
    marginHorizontal: 110,
    marginTop: 25
  },
  textimagem:{
    fontSize: 20,
    paddingLeft: 78
  },
  cadastro: {
    fontSize: 24,
    paddingTop: 50,
  },
  tituloInput:{
    //padding: 10
  },
  input:{
    backgroundColor: '#DCDCDC',
    height: 30,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    //padding: 10
  },
  inputDescricao:{
    backgroundColor: '#DCDCDC',
    height: 70,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
   fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 18
  },
  cadastrar:{
    //marginBottom: 8,
    marginVertical: 30,
    borderRadius: 100,
    height: 40,
    textAlign: 'center',
    paddingTop: 5
  }
});

export default CadastrarProduto;

