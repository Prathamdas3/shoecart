import { useState, createContext, useContext } from 'react';
import { allData } from '../Data';

type childT = {
  children: React.ReactNode;
};
type ApiType = {
  bucketItems: { [key: string]: number };
  setBucketItems: React.Dispatch<
    React.SetStateAction<{ [key: string]: number }>
  >;
  toggleWishlistStatus: boolean;
  toggleWishListButton: (itemId: string) => void;
  totalItems: () => number;
};

// creation of the context api
const apiContext = createContext<ApiType | null>(null);

// function to set the all items count to zero
const defaultBucketItemsList = (): { [key: string]: number } => {
  let idList: string[] = [];
  let cart: { [id: string]: number } = {};
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

// distribution of the context api
export const ContextProvider = ({ children }: childT) => {
  const [bucketItems, setBucketItems] = useState<{ [key: string]: number }>(
    defaultBucketItemsList()
  );
  const [toggleWishlistStatus, setToggleWishlistStatus] =
    useState<boolean>(false);

  // function to toggle the button for which the addition and deletion of items in wishlist
  const toggleWishListButton = (itemId: string) => {
    if (!toggleWishlistStatus) {
      setToggleWishlistStatus(true);
      setBucketItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setToggleWishlistStatus(false);
      setBucketItems((prev) => ({ ...prev, [itemId]: 0 }));
    }
  };

  const totalItems = (): number => {
    let totalQuantity = 0;
    for (let item in bucketItems) {
      totalQuantity += bucketItems[item];
    }
    return totalQuantity;
  };

  const data = {
    bucketItems,
    setBucketItems,
    toggleWishlistStatus,
    toggleWishListButton,
    totalItems,
  };
  return <apiContext.Provider value={data}>{children}</apiContext.Provider>;
};

// converting the context into a custom hook for easier access
export const useWishContextProvider = () => {
  const contextData = useContext(apiContext);
  if (!contextData) {
    throw new Error('context must be used inside the provider');
  }
  return contextData;
};
