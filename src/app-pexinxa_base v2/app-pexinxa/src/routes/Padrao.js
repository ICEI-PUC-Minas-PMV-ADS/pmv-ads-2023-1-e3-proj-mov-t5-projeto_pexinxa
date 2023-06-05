import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DrawerNav from './DrawerNav';
import Produto from '../pages/Produto';
import Sacola from '../pages/Sacola';
import Pagamento from '../pages/Pagamento';

export default function Logado() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Drawer"
        component={DrawerNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Produto" component={Produto} />
      <Stack.Screen name="Sacola" component={Sacola} />
      <Stack.Screen name="Pagamento" component={Pagamento} />
    </Stack.Navigator>
  );
}
