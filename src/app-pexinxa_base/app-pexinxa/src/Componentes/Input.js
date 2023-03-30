import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput} from 'react-native-paper';

const Input = () => {
  return (

      <TextInput style= {styles.input}>       
      </TextInput>
  );
}
const styles = StyleSheet.create({

  input: {
    backgroundColor: 'white',
    flexbox: 1,
  }
  
});

export default Input;