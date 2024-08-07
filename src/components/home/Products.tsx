import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Product} from '../../screens/Home';
import {useContext} from 'react';
import {FavoritesContext} from '../../context/FavoritesContext';
import {ProductsContext} from '../../context/ProductsContext';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Products = () => {
  const {favorites, setFavorites} = useContext(FavoritesContext);
  const {products, setProducts} = useContext(ProductsContext);

  const onFavoritePress = (item: Product) => {
    console.log(`Favorite press`);
    const itemsUpdated = products.map(product => {
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
    setProducts(itemsUpdated);
  };

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

  return (
    <View style={{flex: 1}}>
      <Text style={styles.sectionTitle}>Products</Text>
      <FlatList
        data={products}
        horizontal={false}
        numColumns={2}
        keyExtractor={item => String(item.id)}
        renderItem={renderProductItem}
        contentContainerStyle={[styles.container, {backgroundColor: 'white'}]}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
  container: {
    backgroundColor: 'white',
    marginVertical: 10,
    paddingBottom: 20,
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
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
  },
});
