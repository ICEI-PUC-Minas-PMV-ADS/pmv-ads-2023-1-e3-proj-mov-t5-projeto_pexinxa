import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import { Icon } from 'react-native';

import Mercado from './Mercado';
import PaginaInicial from './PaginaInicial';
import Carrinho from './Carrinho';
const Home = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'paginainicial', title: 'Pagina Inicial', icon: 'home'},
    { key: 'mercado', title: 'Mercado', icon: 'store'},
    { key: 'carrinho', title: 'Carrinho', icon: 'shopping'}
  ]);

  const renderScene = BottomNavigation.SceneMap({
    mercado: Mercado,
    paginainicial: PaginaInicial,
    carrinho: Carrinho
  });

  return (
    <BottomNavigation style={styles.downbar}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};
const styles = StyleSheet.create({
  downbar: {
     flex: 1,
    backgroundColor: 'white',
   
  },

});

export default Home;