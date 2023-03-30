import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const Header = ({title}) => {
  return (

    <Appbar.Header style = {style.Appbars}>
     <Appbar.Content title= {title} />
    </Appbar.Header>

  );
}
const style = StyleSheet.create({
  Appbars: {
  backgroundColor: 'gray',
  margin: 8,
  alignText: 'center',
  flex: 1,
  }


});
export default Header;