import { Text, Button } from 'react-native';

export default function Cadastrar({ navigation }) {
  return (
    <>
      <Text>Página de Cadastro</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()}></Button>
    </>
  );
}
