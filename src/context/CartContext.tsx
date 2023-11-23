import React, { useState, createContext, useContext } from 'react';
import { allData } from '../Data';

// types
type childT = {
  children: React.ReactNode;
};

type ApiType = {
  cartItems?: { [key: string]: number };
  setCartItems?: React.Dispatch<
    React.SetStateAction<{ [key: string]: number }>
  >;
  addToCart: (itemId: string) => void;
  removeFromCart: (itemId: string) => void;
  deleteFromCart: (itemId: string) => void;
  totalItems: number;
};

// context creation
const cartContext = createContext<ApiType | null>(null);

//functions
let cart: { [id: string]: number } = {};
const defaultCartItems = (): { [key: string]: number } => {
  let idList: string[] = [];

  allData.map((data) => {
    idList.push(data.id);
  });

  for (let id of idList) {
    for (let i = 0; i < idList.length; i++) {
      cart[id] = 0;
    }
  }
  return cart;
};

// context distribution
export const ContextProvider = ({ children }: childT) => {
  const [totalItems, setTotalItems] = useState<number>(0);

  const [cartItems, setCartItems] = useState<{ [key: string]: number }>(
    defaultCartItems()
  );

  // allData.map((data) => {
  //   if (cartItems[data.id] !== 0) {
  //     setTotalItems(totalItems + cartItems[data.id]);
  //   }
  // });

  const addToCart = (itemId: string) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    setTotalItems(totalItems + 1);
  };
  const removeFromCart = (itemId: string) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0,
    }));
    totalItems > 0 ? setTotalItems(totalItems - 1) : 0;
  };

  const deleteFromCart = (itemId: string) => {
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
  };
  const data = {
    cartItems,
    addToCart,
    removeFromCart,
    totalItems,
    deleteFromCart,
  };
  return <cartContext.Provider value={data}>{children}</cartContext.Provider>;
};

//data provider through the custom hooks
export const useCartContextProvider = () => {
  const contextData = useContext(cartContext);
  if (!contextData) {
    throw new Error('context must be used inside the provider');
  }
  return contextData;
};
