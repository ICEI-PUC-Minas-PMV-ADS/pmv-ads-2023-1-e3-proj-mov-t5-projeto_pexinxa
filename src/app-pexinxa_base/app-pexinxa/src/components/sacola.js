import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Sacola({ navigation }) {
  return (
    <View style={styles.sacolaView}>
      <TouchableOpacity
        style={styles.sacolaTouchable}
        onPress={() => navigation.navigate('Sacola')}
      >
        <Icon name="shopping-bag" size={30} color="#f2f2f2" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  sacolaView: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 50,
    width: 60,
    height: 60,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sacolaTouchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});
