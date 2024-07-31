import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
  StyleSheet,
  ScrollView,
  LogBox,
} from 'react-native';
import ProductService from '../services/ProductService';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating: {rate: number; count: number};
}

const Home = () => {
  const [items, setItems] = useState<Product[]>([]);
  const [categoryItem, setCategories] = useState<string[]>([]);

  useEffect(() => {
    ProductService.getProducts().then(products => {
      setItems(products);
    });

    ProductService.getProductCategories().then(categories => {
      setCategories(categories);
    });
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const displayItem = ({item}: {item: Product}) => {
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
          <Text style={styles.dollar}>$</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </View>
    );
  };

  const displayCategories = ({item}: {item: string}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log(`${item} clicked.`);
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
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.sectionTitle}>Categories</Text>
      <View>
        <FlatList
          data={categoryItem}
          horizontal={true}
          keyExtractor={(item, index) => String(index)}
          renderItem={displayCategories}
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
          renderItem={displayItem}
          contentContainerStyle={[styles.container, {backgroundColor: 'white'}]}
        />
      </View>
    </ScrollView>
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
});

export default Home;
