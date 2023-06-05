import React, { useContext } from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { AuthContext } from '../context/auth-context';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CustomDrawerContent(props) {
  const [state, dispatch] = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {state.isLogin && (
        <>
          <DrawerItem
            label="Cadastrar Produto"
            onPress={() => navigation.navigate('CadastrarProduto')}
            icon={() => <Icon name="add" size={22} color="#333" />}
          />
          <DrawerItem
            label="Logout"
            onPress={() => {
              dispatch({ type: 'user_logout', payload: false });
              navigation.navigate('Home');
            }}
            icon={() => <Icon name="logout" size={22} color="#333" />}
          />
        </>
      )}
    </DrawerContentScrollView>
  );
}
