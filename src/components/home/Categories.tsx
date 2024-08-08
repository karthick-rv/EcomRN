import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageSourcePropType,
} from 'react-native';
import ProductService from '../../services/ProductService';
import {useContext} from 'react';
import {ProductsContext} from '../../context/ProductsContext';
import {TouchableHighlight} from 'react-native-gesture-handler';

export interface Category {
  name: string;
  selected: boolean;
}

export const Categories = ({
  categories,
  setCategories,
  resetProducts,
}: {
  categories: Category[];
  setCategories: (categories: Category[]) => void;
  resetProducts: () => void;
}) => {
  const {setProducts} = useContext(ProductsContext);

  const images: Record<number, ImageSourcePropType> = {
    0: require('../../assets/electronics.png'),
    1: require('../../assets/jewellery.png'),
    2: require('../../assets/mens.png'),
    3: require('../../assets/womens.png'),
  };

  const renderCategoryItem = (item: Category, index: number) => {
    console.log('Category', item);
    return (
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          onPress={async () => {
            const updatedCategories = categories.map(category => {
              category.selected = category.name == item.name;
              return category;
            });
            setCategories(updatedCategories);
            console.log(`${item} clicked.`);
            await ProductService.getProductsByCategory(item.name).then(
              products => {
                setProducts(products);
              },
            );
          }}>
          <View
            style={[
              styles.imageContainer,
              item.selected == true && styles.circleHighlightOverlay,
            ]}>
            <Image source={images[index]} style={styles.circularImgView} />
          </View>
        </TouchableOpacity>
        <Text
          style={{
            color: 'black',
            fontSize: 8,
            fontWeight: 'bold',
            marginTop: 10,
          }}
          ellipsizeMode="tail"
          numberOfLines={1}>
          {item.name.toUpperCase()}
        </Text>
      </View>
    );
  };

  return (
    <View>
      <View
        style={{
          width: 'auto',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <TouchableOpacity
          onPress={() => {
            const updatedCategories = categories.map(category => {
              category.selected = false;
              return category;
            });
            setCategories(updatedCategories);
            resetProducts();
          }}>
          <Text style={{color: 'black', fontWeight: '400'}}>Clear</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={categories}
        horizontal={true}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item, index}) => renderCategoryItem(item, index)}
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
    marginHorizontal: 6,
    marginTop: 10,
    height: 90,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circularImgView: {
    width: '90%',
    height: '90%',
    borderRadius: 50,
  },
  container: {
    backgroundColor: 'white',
    marginVertical: 10,
  },
  imageContainer: {
    width: 70,
    height: 70,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleHighlightOverlay: {
    borderColor: 'black',
    borderWidth: 2,
  },
});
