import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/auth-context';
import { TextInput, StyleSheet, Text, Button, View, Image, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';

const [state, dispatch] = useContext(AuthContext);
const Login = () => {
  
  return (
    <View style={styles.container}>

      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          resizeMode= "contain"
          style={styles.tinyLogo}
          source={require('../Imagens/—Pngtree—user login or authenticate icon_5089976.png')}
          
        />
      </View>

      <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
        <Animatable.Text animation="flipInY" delay={600} style={styles.title}>Pexinxa! </Animatable.Text>
          <Text style={styles.text}>Faça o login para continuar :)</Text>
            <Text style={styles.titleUser}>Email</Text>
            <TextInput style={styles.textUser} icon = {'home'} placeholder='Insira seu email..'></TextInput>
          <Text style={styles.titleUser}>Senha</Text>
            <TextInput style={styles.textUser} placeholder='Sua senha..'></TextInput>
          
        <TouchableOpacity 
        style= {styles.button}
        onPress={()=> {
          dispatch({type: 'user_login', payload: true});
          navigation.navigate('Home');
        }}
        >
        <Text style = {styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style= {styles.buttonRegister}
        onPress={() => navigation.navigate('Autenticacao', {screen: 'Cadastrar'})}   >
        <Text style = {styles.text}>Não possui uma conta? Cadastre-se</Text>
        </TouchableOpacity>
      </Animatable.View>


    </View>

  );
}
const styles = StyleSheet.create({

  textUser:{
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
    color: 'white'
  },
  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 'auto',
   
  },
  container: {
    flex: 1,
    backgroundColor: '#38a69d'
  },
  containerLogo: {
  flex: 2,
  backgroundColor: '#38a69d'
  },
  containerForm:{
    
    flex: 3,
    backgroundColor: '#134647',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
 
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    color: 'white'
  },
  text: {
    textAlign: 'center',
    color: '#a1a1a1',
    paddingStart: '5%,',
    paddingEnd: '5%'
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
    fontWeight: 'bold'

  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center',
    width: '80%',
    
  },


});

export default Login;
