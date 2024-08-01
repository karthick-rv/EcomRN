import React, {createContext, ReactNode, useContext, useState} from 'react';
import {Product} from '../screens/Home';

interface FavoriteContextType {
  favorites: Product[];
  setFavorites: (data: Product[]) => void;
}

// Provide a default value for the context
const defaultValue: FavoriteContextType = {
  favorites: [],
  setFavorites: () => {}, // Dummy function
};

export const FavoritesContext =
  createContext<FavoriteContextType>(defaultValue);

export const FavoritesProvider = ({children}: {children: ReactNode}) => {
  const [favorites, setFavorites] = useState<Product[]>([]);

  return (
    <FavoritesContext.Provider value={{favorites, setFavorites}}>
      {children}
    </FavoritesContext.Provider>
  );
};
