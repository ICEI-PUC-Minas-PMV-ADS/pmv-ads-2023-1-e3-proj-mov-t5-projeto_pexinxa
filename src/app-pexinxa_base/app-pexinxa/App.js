import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Home from './src/pages/Home';
import Mercado from './src/pages/Mercado';
import Carrinho from './src/pages/Carrinho';
import PaginaInicial from './src/pages/PaginaInicial';
import Produto from './src/Componentes/Produto';

export default function App() {
  return (
    <Home>
      <PaginaInicial>
        <Mercado></Mercado>
          <Carrinho></Carrinho>
      </PaginaInicial>
    </Home>
  );
}
