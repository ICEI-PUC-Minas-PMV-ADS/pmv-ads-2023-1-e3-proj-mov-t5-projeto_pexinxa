import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import { AuthContext } from '../context/auth-context';
import { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CustomDrawerContent(props) {
  const [state, dispatch] = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {state.isLogin && (
        <DrawerItem
          label="Logout"
          onPress={() => {
            dispatch({ type: 'user_logout', payload: false });
            navigation.navigate('Home');
          }}
          icon={() => <Icon name="logout" size={22} color="#333" />}
        />
      )}
    </DrawerContentScrollView>
  );
}
