import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import FavoriteProducts from '../screens/FavoriteProducts';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FavoritesProvider} from '../context/FavoritesContext';
import {ProductsProvider} from '../context/ProductsContext';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <ProductsProvider>
      <FavoritesProvider>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Favorites') {
                iconName = focused ? 'heart' : 'heart-outline';
              }

              // Return the icon component
              return (
                <Ionicons name={iconName as any} size={size} color={color} />
              );
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
          })}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Favorites" component={FavoriteProducts} />
        </Tab.Navigator>
      </FavoritesProvider>
    </ProductsProvider>
  );
}

export default BottomTabs;
