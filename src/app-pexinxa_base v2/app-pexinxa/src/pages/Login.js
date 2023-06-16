import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/auth-context';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { getUser } from '../../database/db';

const Login = ({ navigation }) => {
  console.log('Renderizando a página de Login...');
  const [state, dispatch] = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authenticate = async () => {
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Por favor, preencha os campos de email e senha');
      return;
    }

    try {
      const user = await getUser(email, password);
      if (user) {
        dispatch({ type: 'user_login', payload: true });
        navigation.navigate('Home');
      } else {
        Alert.alert('Usuário ou senha inválidos');
      }
    } catch (error) {
      console.error('Error authenticating user:', error);
      Alert.alert('Erro ao autenticar usuário');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          resizeMode="contain"
          style={styles.tinyLogo}
          source={require('../img/Logo_PX.png')}
        />
      </View>

      <Animatable.View
        delay={600}
        animation="fadeInUp"
        style={styles.containerForm}
      >
        <Animatable.Text animation="flipInY" delay={600} style={styles.title}>
          Pexinxa!{' '}
        </Animatable.Text>
        <Text style={styles.text}>Faça o login para continuar :)</Text>
        <Text style={styles.titleUser}>Email</Text>
        <TextInput
          style={styles.textUser}
          icon={'home'}
          placeholder="Insira seu email.."
          placeholderTextColor={'#fff'}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Text style={styles.titleUser}>Senha</Text>
        <TextInput
          style={styles.textUser}
          placeholder="Sua senha.."
          placeholderTextColor={'#fff'}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={authenticate}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={() => navigation.navigate('Cadastrar')}
        >
          <Text style={styles.text}>Não possui uma conta? Cadastre-se</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  textUser: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 12,
    color: '#a1a1a1',
  },
  titleUser: {
    fontFamily: 'sans-serif',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    color: 'white',
  },
  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 'auto',
  },
  container: {
    flex: 1,
    height: 'auto',
    backgroundColor: '#38a69d',
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerForm: {
    flex: 3,
    backgroundColor: '#134647',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    color: 'white',
  },
  text: {
    textAlign: 'center',
    color: '#a1a1a1',
  },
  button: {
    backgroundColor: '#38a69d',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center',
    width: '80%',
  },
});

export default Login;
