import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Alert, View } from 'react-native';
import { Appbar, TextInput, Button, Text } from 'react-native-paper';
import * as SQLite from 'expo-sqlite';
import { registerUser, initDb, dropTable } from '../../database/db';

const db = SQLite.openDatabase('myDatabase.db');

const Cadastrar = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [doc, setDoc] = useState('');
  const [mail, setMail] = useState('');
  const [senha, setSenha] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [telefone, setTelefone] = useState('');

  useEffect(() => {
    dropTable()
      .then(() => {
        return initDb();
      })
      .catch((error) => {
        console.log('Error dropping and initializing database:', error);
      });
  }, []);

  const fetchAddress = async () => {
    // Implemente aqui a função para buscar o endereço com base no CEP.
  };

const handleRegister = () => {
  console.log('handleRegister called');
  console.log('Values:', nome, doc, mail, senha, cep, rua, numero, complemento, bairro, cidade, estado, telefone);
  if (
    !nome ||
    !doc ||
    !mail ||
    !senha ||
    !cep ||
    !rua ||
    !numero ||
    !complemento ||
    !bairro ||
    !cidade ||
    !estado ||
    !telefone
  ) {
    Alert.alert('Por favor, preencha todos os campos.');
    return;
  }

  if (!mail.includes('@') || !mail.includes('.')) {
    Alert.alert('Por favor, insira um endereço de email válido.');
    return;
  }

  registerUser(nome, doc, mail, senha, cep, rua, numero, complemento, bairro, cidade, estado, telefone)
    .then(() => {
      Alert.alert('Cadastro realizado com sucesso!');
      navigation.replace('Login');
    })
    .catch(() => {
      Alert.alert('Erro ao realizar cadastro.');
    });
};


  return (
    <>
      <ScrollView style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="Página de Cadastro" />
        </Appbar.Header>
        <View style={styles.body}>
          <TextInput
            label="Nome"
            value={nome}
            onChangeText={setNome}
          />
          <TextInput
            label="Documento"
            value={doc}
            onChangeText={setDoc}
          />
          <TextInput
            label="Email"
            value={mail}
            onChangeText={setMail}
          />
          <TextInput
            label="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />
          <TextInput
            label="CEP"
            value={cep}
            onChangeText={setCep}
          />
          <TextInput
            label="Rua"
            value={rua}
            onChangeText={setRua}
          />
          <TextInput
            label="Número"
            value={numero}
            onChangeText={setNumero}
          />
          <TextInput
            label="Complemento"
            value={complemento}
            onChangeText={setComplemento}
          />
          <TextInput
            label="Bairro"
            value={bairro}
            onChangeText={setBairro}
          />
          <TextInput
            label="Cidade"
            value={cidade}
            onChangeText={setCidade}
          />
          <TextInput
            label="Estado"
            value={estado}
            onChangeText={setEstado}
          />
          <TextInput
            label="Telefone"
            value={telefone}
            onChangeText={setTelefone}
          />
          <Button
            mode="contained"
            onPress={fetchAddress}
            style={styles.button}
          >
            Buscar Endereço
          </Button>
          <Button
            mode="contained"
            onPress={handleRegister}
            style={styles.button}
          >
            Cadastrar
          </Button>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  button: {
    marginVertical: 10,
  },
});

export default Cadastrar;
