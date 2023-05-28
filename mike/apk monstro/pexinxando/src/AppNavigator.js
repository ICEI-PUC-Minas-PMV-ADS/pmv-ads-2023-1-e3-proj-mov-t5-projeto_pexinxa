import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './pages/Login';
import Cadastrar from './pages/Cadastrar';
import Home from './pages/Home'; 
 import Produtos from './pages/Produtos';
import CadastrarProduto from './pages/CadastrarProduto';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} />
        <Stack.Screen name="Home" component={Home} /> 
         <Stack.Screen name="Produtos" component={Produtos} />
        <Stack.Screen name="CadastrarProduto" component={CadastrarProduto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
