import { useContext } from 'react';
import { AuthContext } from '../context/auth-context';
import { Button, View, Text, StyleSheet } from 'react-native';

export default function Login({ navigation }) {
  const [state, dispatch] = useContext(AuthContext);

  return (
    <View>
      <Text style={styles.title}>Login Page</Text>
      <Button
        onPress={() => {
          dispatch({ type: 'user_login', payload: true });
          navigation.navigate('Home');
        }}
        title="Logar"
      ></Button>
      <Button
        title="Cadastrar"
        onPress={() =>
          navigation.navigate('Autenticacao', { screen: 'Cadastrar' })
        }
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { marginTop: 70, textAlign: 'center', fontSize: 20 },
});
