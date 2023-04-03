import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const products = [
  { name: 'Produto 1', description: 'Descrição do produto 1', value: 'R$ 99,99' },
  { name: 'Produto 2', description: 'Descrição do produto 2', value: 'R$ 199,99' },
  { name: 'Produto 3', description: 'Descrição do produto 3', value: 'R$ 299,99' },
  { name: 'Produto 4', description: 'Descrição do produto 4', value: 'R$ 399,99' },
  { name: 'Produto 5', description: 'Descrição do produto 5', value: 'R$ 499,99' }
];

export default function PaginaInicial() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={() => {}}>
          <MaterialIcons name="menu" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Pexinxa</Text>
      <Text style={styles.subtitle}>O melhor aplicativo de vendas e compras do Brasil</Text>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Digite o que deseja encontrar" />
        <TouchableOpacity style={styles.searchButton} onPress={() => {}}>
          <Text>Buscar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Produtos mais vistos da semana:</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.card}>
            <Text style={styles.cardText}>Produto 1</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>Produto 2</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>Produto 3</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>Produto 4</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>Produto 5</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Produtos em destaque:</Text>
        {products.map((product, index) => (
          <View style={styles.card} key={index}>
            <Text style={styles.cardTitle}>{product.name}</Text>
            <Text style={styles.cardDescription}>{product.description}</Text>
            <Text style={styles.cardValue}>{product.value}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16
  },
  menuContainer: {
    position: 'absolute',
    left: 16,
    top: 16
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 8
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 16
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  searchInput: {
    flex: 1,
    height: 40,
    marginRight: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  searchButton: {
    backgroundColor: '#ccc',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4
  },
  section: {
    marginBottom: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  cardDescription: {
    fontSize: 14,
    marginBottom: 8
  },
  cardValue: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 8
  }
});
