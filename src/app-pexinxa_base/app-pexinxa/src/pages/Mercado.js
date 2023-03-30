import React from 'react';
import { View } from 'react-native';
import Body from '../Componentes/Body'
import Header from '../Componentes/Header';
import Container from '../Componentes/Container';
import Produto from '../Componentes/Produto';
import Input from '../Componentes/Input';

const Mercado = () => {
 return (
    <Body>
      <Container>
        <Header title= 'Mercado'></Header>
        <Produto>'Notebook'</Produto>
        <Produto></Produto>
      </Container>
    </Body>
 );
}

export default Mercado;