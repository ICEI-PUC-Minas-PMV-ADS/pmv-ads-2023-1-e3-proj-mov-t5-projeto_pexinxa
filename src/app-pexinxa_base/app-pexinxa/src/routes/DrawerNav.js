import {
  createDrawerNavigator,
  DrawerToggleButton,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomDrawer from '../components/customDrawer';

import Home from '../pages/Home';
import Perfil from '../pages/Perfil';
import FaleConosco from '../pages/FaleConosco';
import Login from '../pages/Login';

const Drawer = createDrawerNavigator();

import { AuthContext } from '../context/auth-context';
import { useContext } from 'react';

export default function DrawerNav() {
  const [state, dispatch] = useContext(AuthContext);

  return (
    <Drawer.Navigator
      useLegacyImplementation
      initialRouteName="Home"
      screenOptions={{
        drawerPosition: 'right',
        headerLeft: false,
        headerRight: () => <DrawerToggleButton />,
      }}
      itemStyle={{ color: 'red' }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Icon name="home" size={size} color={focused ? '#333' : '#333'} />
          ),
          drawerActiveBackgroundColor: '#f2f2f2',
          drawerActiveTintColor: 'black',
        }}
      />
      <Drawer.Screen
        name="Perfil"
        component={Perfil}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Icon name="person" size={size} color={focused ? '#333' : '#333'} />
          ),
          drawerActiveBackgroundColor: '#f2f2f2',
          drawerActiveTintColor: 'black',
        }}
      />
      <Drawer.Screen
        name="Fale Conosco"
        component={FaleConosco}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="contact-support"
              size={size}
              color={focused ? '#333' : '#333'}
            />
          ),
          drawerActiveBackgroundColor: '#f2f2f2',
          drawerActiveTintColor: 'black',
        }}
      />
      {}
      {!state.isLogin && (
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{
            drawerIcon: ({ focused, size }) => (
              <Icon
                name="login"
                size={size}
                color={focused ? '#333' : '#333'}
              />
            ),
            drawerActiveBackgroundColor: '#f2f2f2',
            drawerActiveTintColor: 'black',
          }}
        />
      )}
    </Drawer.Navigator>
  );
}
