import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar, TextInput, Button, Text } from 'react-native-paper';

const App = () => {
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
  const [pais, setPais] = useState('');
  
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Cadastro" />
      </Appbar.Header>

      <View style={styles.body}>
        <TextInput
          style={styles.input}
          label="Nome completo"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          label="CPF/CNPJ"
          value={doc}
          onChangeText={(text) => setDoc(text)}
        />
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          label="E-mail"
          value={mail}
          onChangeText={(text) => setMail(text)}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          label="Senha"
          value={senha}
          onChangeText={(text) => setSenha(text)}
        />

        <View>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          label="CEP"
          value={cep}
          onChangeText={(text) => setCep(text)}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          label="Rua"
          value={rua}
          onChangeText={(text) => setRua(text)}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          label="Número"
          value={numero}
          onChangeText={(text) => setNumero(text)}
        />
        <TextInput
          style={styles.input}
          label="Complemento"
          value={complemento}
          onChangeText={(text) => setComplemento(text)}
        />
        <TextInput
          style={styles.input}
          label="Bairro"
          value={bairro}
          onChangeText={(text) => setBairro(text)}
        />
        <TextInput
          style={styles.input}          
          label="Cidade"
          value={cidade}
          onChangeText={(text) => setCidade(text)}
        />
        <TextInput
          style={styles.input}
          label="Estado"
          value={estado}
          onChangeText={(text) => setEstado(text)}
        />
        <TextInput
          style={styles.input}
          label="Pais"
          value={pais}
          onChangeText={(text) => setPais(text)}
        />
        </View>

        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Cadastrar
        </Button>

        <Text style={styles.text}>{nome}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  body: {
    margin: 8,
  },
  input: {
    backgroundColor: '#fff',
    marginBottom: 8,
  },
  text: {
    textAlign: 'center',
    margin: 8,
  },
});

export default Cadastro;
