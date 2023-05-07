import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const FaleConosco = () => {
  const [nome, setNome] = useState('');
  const [mail, setMail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [comentario, setComentario] = useState('');

  return (
    <ScrollView style={styles.body}>
      <Text style={styles.titulo}>
        Esse canal é para contato direto com o nosso site para dúvidas,
        sugestões, elogios
      </Text>

      <TextInput
        style={styles.input}
        label="Nome completo"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        label="E-mail"
        value={mail}
        onChangeText={(text) => setMail(text)}
        leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
      />
      <TextInput
        style={styles.input}
        label="Assunto"
        value={assunto}
        onChangeText={(text) => setAssunto(text)}
      />
      <TextInput
        style={styles.input}
        multiline
        numberOfLines={8}
        maxLength={250}
        label="Comentário"
        placeholder="Deixe aqui o seu comentário."
        value={comentario}
        onChangeText={(text) => setComentario(text)}
      />

      <Button mode="contained" onPress={() => console.log('Pressed')}>
        Enviar Comentário
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    margin: 8,
  },
  input: {
    backgroundColor: '#fff',
    marginBottom: 16,
    borderColor: '#ddd',
  },
  titulo: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 24,
  },
});

export default FaleConosco;
