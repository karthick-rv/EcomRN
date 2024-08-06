import React, {useContext, useEffect, useState} from 'react';
import {Image, Text, View, FlatList, StyleSheet, LogBox} from 'react-native';
import ProductService from '../services/ProductService';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FavoritesContext} from '../context/FavoritesContext';
import {ProductsContext, ProductsProvider} from '../context/ProductsContext';
import {Categories} from '../components/home/Categories';
import {Products} from '../components/home/Products';

export interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating: {rate: number; count: number};
  isFavorite: boolean;
}

const Home = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const {products, setProducts} = useContext(ProductsContext);

  useEffect(() => {
    ProductService.getProducts().then(products => {
      setProducts(products);
    });

    ProductService.getProductCategories().then(categories => {
      setCategories(categories);
    });
  }, []);

  return (
    <View style={styles.scrollContainer}>
      <Categories categories={categories}></Categories>
      <Products />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
    paddingLeft: 20,
    justifyContent: 'flex-start',
  },
  container: {
    backgroundColor: 'white',
    marginVertical: 10,
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  itemContainer: {
    margin: 10,
    borderRadius: 8,
    backgroundColor: 'white',
    width: 159,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  title: {
    fontSize: 15,
    marginTop: 8,
    color: 'black',
    padding: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'darkblue',
    marginStart: 2,
    textAlign: 'left',
  },
  star: {
    paddingTop: 10,
    paddingLeft: 35,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  dollar: {
    fontSize: 12,
    color: 'darkblue',
  },

  icon: {
    flex: 1,
  },
});

export default Home;
