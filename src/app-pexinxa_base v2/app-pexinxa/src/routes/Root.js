import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Autenticacao from './Autenticacao';
import Padrao from './Padrao';
import Cadastrar from '../pages/Cadastrar';
import Login from '../pages/Login';
import CadastrarProduto from '../pages/CadastrarProduto'; // Importe a página CadastrarProduto corretamente

const Stack = createNativeStackNavigator();

export default function Root() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Padrao"
          component={Padrao}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Autenticacao"
          component={Autenticacao}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastrar"
          component={Cadastrar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CadastrarProduto"
          component={CadastrarProduto}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
