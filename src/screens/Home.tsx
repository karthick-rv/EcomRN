import React, {useContext, useEffect, useState} from 'react';
import {Image, Text, View, FlatList, StyleSheet, LogBox} from 'react-native';
import ProductService from '../services/ProductService';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FavoritesContext} from '../context/FavoritesContext';

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
  const [items, setItems] = useState<Product[]>([]);
  const [categoryItem, setCategories] = useState<string[]>([]);
  const {favorites, setFavorites} = useContext(FavoritesContext);

  useEffect(() => {
    ProductService.getProducts().then(products => {
      setItems(products);
    });

    ProductService.getProductCategories().then(categories => {
      setCategories(categories);
    });
  }, []);

  const renderProductItem = ({item}: {item: Product}) => {
    const favoritesIds = favorites.map(favorite => favorite.id);
    return (
      <View style={styles.itemContainer}>
        <Image
          style={styles.image}
          source={{uri: item.image}}
          resizeMode="contain"
        />
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
          {item.title}
        </Text>
        <View style={styles.priceContainer}>
          <View style={{flex: 3, flexDirection: 'row'}}>
            <Text style={styles.dollar}>$</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => onFavoritePress(item)}>
            <Ionicons
              name={favoritesIds.includes(item.id) ? 'heart' : 'heart-outline'}
              size={25}
              color="red"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const onFavoritePress = (item: Product) => {
    console.log(`Favorite press`);
    const itemsUpdated = items.map(product => {
      if (product.id == item.id) {
        console.log(`${item.title} Favorite Updated`);
        product.isFavorite = !product.isFavorite;
        if (!product.isFavorite) {
          setFavorites(favorites.filter(favorite => favorite.id != product.id));
        } else {
          favorites.push(item);
          setFavorites(favorites);
        }
      }
      return product;
    });
    setItems(itemsUpdated);
  };

  const renderCategoryItem = ({item}: {item: string}) => {
    return (
      <TouchableOpacity
        onPress={async () => {
          console.log(`${item} clicked.`);
          await ProductService.getProductsByCategory(item).then(products => {
            setItems(products);
          });
        }}>
        <View style={styles.categoryContainer}>
          <Image
            source={{
              uri: 'https://plus.unsplash.com/premium_photo-1677995700946-f6ea044f5291?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hvcHBpbmclMjBzbWFsbCUyMGltYWdlfGVufDB8fDB8fHww',
            }}
            style={styles.circularImgView}
          />
          <Text
            style={{color: 'black', fontSize: 9, fontWeight: 'bold'}}
            ellipsizeMode="tail"
            numberOfLines={1}>
            {item.toUpperCase()}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.scrollContainer}>
      <Text style={styles.sectionTitle}>Categories</Text>
      <View>
        <FlatList
          data={categoryItem}
          horizontal={true}
          keyExtractor={(item, index) => String(index)}
          renderItem={renderCategoryItem}
          contentContainerStyle={[styles.container, {backgroundColor: 'white'}]}
        />
      </View>
      <Text style={styles.sectionTitle}>Products</Text>
      <View style={{flex: 1}}>
        <FlatList
          data={items}
          horizontal={false}
          numColumns={2}
          keyExtractor={item => String(item.id)}
          renderItem={renderProductItem}
          contentContainerStyle={[styles.container, {backgroundColor: 'white'}]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    marginHorizontal: 8,
    marginVertical: 16,
    height: 80,
    width: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circularImgView: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
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
