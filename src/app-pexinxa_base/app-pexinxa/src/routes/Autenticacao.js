import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/Login';
import Cadastrar from '../pages/Cadastrar';

export default function Deslogado() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastrar"
        component={Cadastrar}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
