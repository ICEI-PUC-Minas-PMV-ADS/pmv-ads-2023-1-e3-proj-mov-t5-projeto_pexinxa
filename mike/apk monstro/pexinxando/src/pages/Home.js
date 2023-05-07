import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import Produto from '../components/product';
import Sacola from '../components/sacola';

import products from '../products';

export default function Home({ navigation }) {
  const initialCategory = products.map((product) => product.category);
  let filteredCategories = [...new Set(initialCategory)];

  const [search, setSearch] = useState('');
  const [categories, setCategories] = useState([...filteredCategories]);
  const [filteredProducts, setFilteredProducts] = useState([...products]);

  const [selectedCategory, setSelectedCategory] = useState('');

  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (search.length === 0) {
      resetHome();
    }
  }, [search]);

  const resetHome = () => {
    setIsSearching(false);
    setSelectedCategory('');
    setSearch('');
    setCategories([...filteredCategories]);
    setFilteredProducts([...products]);
  };

  const handleSearch = () => {
    if (search.length === 0) {
      return;
    }
    setIsSearching(true);
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filtered);
    const categories = filtered.map((product) => product.category);
    setCategories([...new Set(categories)]);
  };

  const handleFilter = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory('');
    } else {
      setSelectedCategory(category);
    }
    const filtered = products.filter(
      (product) => product.category === category
    );
    if (JSON.stringify(filtered) === JSON.stringify(filteredProducts)) {
      setFilteredProducts([...products]);
    } else {
      setFilteredProducts(filtered);
    }
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar..."
            value={search}
            onChangeText={(text) => setSearch(text)}
          />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Text style={styles.searchButtonText}>Buscar</Text>
          </TouchableOpacity>
        </View>

        <Image
          style={{ width: '100%', height: 100 }}
          source={{
            uri: 'https://thumbs.dreamstime.com/z/niche-service-marketplace-concept-banner-header-tiny-people-customers-buy-babies-goods-online-smartphone-innovative-retail-141197990.jpg',
          }}
        />

        <ScrollView horizontal={true}>
          {!isSearching && (
            <View style={styles.categoriesContainer}>
              {categories.map((category) => (
                <TouchableOpacity
                  key={category}
                  style={[
                    styles.categoryButton,
                    category === selectedCategory
                      ? styles.selectedCategory
                      : '',
                  ]}
                  onPress={() => {
                    handleFilter(category);
                  }}
                >
                  <Text
                    style={[
                      styles.categoryButtonText,
                      category === selectedCategory
                        ? styles.selectedCategoryText
                        : '',
                    ]}
                  >
                    {category}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </ScrollView>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Produtos em destaque:</Text>

          <View style={styles.productsList}>
            {filteredProducts.map((product) => (
              <Produto key={product.id} size={'small'} product={product} />
            ))}
          </View>
        </View>
      </ScrollView>
      <Sacola navigation={navigation} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 12,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    flex: 1,
    marginLeft: 20,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    width: 100,
  },
  searchButton: {
    backgroundColor: '#333',
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  categoryButton: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 20,
    height: 40,
  },
  categoryButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  selectedCategory: {
    backgroundColor: '#333',
  },
  selectedCategoryText: {
    color: '#fff',
  },
  productsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    justifyContent: 'center',
  },
});
