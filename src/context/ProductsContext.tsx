import React, {createContext, ReactNode, useContext, useState} from 'react';
import {Product} from '../screens/Home';

interface ProductsContextType {
  products: Product[];
  setProducts: (data: Product[]) => void;
}

// Provide a default value for the context
const defaultValue: ProductsContextType = {
  products: [],
  setProducts: () => {}, // Dummy function
};

export const ProductsContext = createContext<ProductsContextType>(defaultValue);

export const ProductsProvider = ({children}: {children: ReactNode}) => {
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <ProductsContext.Provider value={{products, setProducts}}>
      {children}
    </ProductsContext.Provider>
  );
};
