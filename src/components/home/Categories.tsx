import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ProductService from '../../services/ProductService';
import {useContext} from 'react';
import {ProductsContext} from '../../context/ProductsContext';

export const Categories = ({categories}: {categories: string[]}) => {
  const {setProducts} = useContext(ProductsContext);

  const renderCategoryItem = ({item}: {item: string}) => {
    return (
      <TouchableOpacity
        onPress={async () => {
          console.log(`${item} clicked.`);
          await ProductService.getProductsByCategory(item).then(products => {
            setProducts(products);
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
    <View>
      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        data={categories}
        horizontal={true}
        keyExtractor={(item, index) => String(index)}
        renderItem={renderCategoryItem}
        contentContainerStyle={[styles.container, {backgroundColor: 'white'}]}
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
  container: {
    backgroundColor: 'white',
    marginVertical: 10,
    paddingBottom: 20,
  },
});
