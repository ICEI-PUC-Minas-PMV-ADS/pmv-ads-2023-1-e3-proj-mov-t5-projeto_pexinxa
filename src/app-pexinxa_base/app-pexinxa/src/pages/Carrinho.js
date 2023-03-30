import React from 'react';
import { View } from 'react-native';
import Body from '../Componentes/Body'
import Header from '../Componentes/Header';
import Container from '../Componentes/Container';
import Input from '../Componentes/Input';

const Carrinho = () => {
 return (
    <Body>
      <Container>
        <Header title= 'Carrinho'></Header>
      </Container>
    </Body>
 );
}

export default Carrinho;