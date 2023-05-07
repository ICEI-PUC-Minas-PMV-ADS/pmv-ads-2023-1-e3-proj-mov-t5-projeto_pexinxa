import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Appbar, TextInput, Button, Text } from 'react-native-paper';
import {insertCadastro, updateCadastro} from '../services/CadastroServiceDB';
import {useNavigation} from '@react-navigation/native';

const Cadastro = () => {
  
  const navigation = useNavigation();
  
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
    if(x){
      setNome(x.nome);
      setDoc(x.doc);
      setMail(x.mail);
      setSenha(x.senha);
      setCep(x.cep);
      setRua(x.rua);
      setNumero(x.numero);
      setComplemento(x.complemento);
      setBairro(x.bairro);
      setCidade(x.cidade);
      setEstado(x.estado);
      setTelefone(x.telefone);
    }
  }, [x]);

  const fetchAddress = async () => {
    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        setRua(data.logradouro);
        setBairro(data.bairro);
        setCidade(data.localidade);
        setEstado(data.uf);
        console.log(response.ok);
      } catch (error) {
        console.log(error);
      }
    }
  };
  
  const handleSalvar = () => {

    if(x){
      
      updateCadastro(
        {
          mail: mail,
          senha: senha,
          cep: cep,
          rua: rua,
          numero: numero,
          complemento: complemento,
          bairro: bairro,
          cidade: cidade,
          estado: estado,
          telefone: telefone,
          id: x.id,
        }).then();

    } else {

      insertCadastro(
        {

          nome: nome,
          doc: doc,
          mail: mail,
          senha: senha,
          cep: cep,
          rua: rua,
          numero: numero,
          complemento: complemento,
          bairro: bairro,
          cidade: cidade,
          estado: estado,
          telefone: telefone

        }).then();

    }

    navigation.goBack();
  };

  return (

    <ScrollView style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Página de Cadastro" />
      </Appbar.Header>

      <ScrollView style={styles.body}>
      <Text style={styles.titulo}>Insira os seus dados</Text>
      <Text style={styles.text}> Dados Pessoais </Text>
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
          leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
        />
        <TextInput
          style={styles.input}
          secureTextEntry
          //onFocus={<TextInput.Icon icon="eye" />}
          right={<TextInput.Icon icon="eye" />}
          label="Senha"
          value={senha}
          onChangeText={(text) => setSenha(text)}
        />
        <Text style={styles.text}>Endereço</Text>
        <ScrollView>
          <TextInput
            style={styles.input}            
            keyboardType="numeric"
            label="CEP"
            value={cep}
            onChangeText={(text) => setCep(text)}
            onBlur={fetchAddress}
          />
          <TextInput
            style={styles.input}
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
            keyboardType="phone-pad"
            label="Telefone"
            value={telefone}
            onChangeText={(text) => setTelefone(text)}
          />
        </ScrollView>

        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Cadastrar
        </Button>
        <Button mode="contained" color='red' onPress={() => navigation.goBack()}>
          Voltar
        </Button>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  body: {
    margin: 8,
  },
  input: {
    backgroundColor: '#fff',
    marginBottom: 8,
    borderColor: "#ddd"
    
  },
  titulo: {
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 8,
  },
  text: {
    textAlign: 'left',
    marginTop:32,  
    fontSize: 16, 
  },
});

export default Cadastro;


// import { Text, Button } from 'react-native';

// export default function Cadastrar({ navigation }) {
//   return (
//     <>
//       <Text>Página de Cadastro</Text>
//       <Button title="Voltar" onPress={() => navigation.goBack()}></Button>
//     </>
//   );
// }
