import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Autenticacao from './Autenticacao';
import Padrao from './Padrao';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
