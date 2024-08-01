import {useContext, useEffect} from 'react';
import {FavoritesContext} from '../context/FavoritesContext';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Product} from './Home';
import Ionicons from 'react-native-vector-icons/Ionicons';

const renderProductItem = ({item}: {item: Product}) => {
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
      </View>
    </View>
  );
};

const FavoriteProducts = () => {
  const {favorites, setFavorites} = useContext(FavoritesContext);

  useEffect(() => {
    console.log('Favorites Changed', favorites);
  }, [favorites]);

  return (
    <>
      <Text style={styles.sectionTitle}>Products</Text>
      <View style={{flex: 1}}>
        <FlatList
          data={favorites}
          horizontal={false}
          numColumns={2}
          keyExtractor={item => String(item.id)}
          renderItem={renderProductItem}
          contentContainerStyle={[styles.container, {backgroundColor: 'white'}]}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  dollar: {
    fontSize: 12,
    color: 'darkblue',
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
});

export default FavoriteProducts;
