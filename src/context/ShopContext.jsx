import React, { createContext, useState } from 'react';
import products from '../data/products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};

  for (let index = 0; index < products.length; index++) {
    cart[index + 1] = { 
      S: 0,
      M: 0,
      L: 0,
    };
  }
  return cart;
};

const ShopContextProvider = ( props ) => {
  const [addToCartItems, setAddToCartItems] = useState(getDefaultCart());
  const [buyNowItems, setBuyNowItems] = useState(getDefaultCart());

  const addToCart = (itemID, size, cartType, quantity) => {
    const cartToUpdate = cartType === 'buyNow' ? buyNowItems : addToCartItems;

    if (cartType === 'buyNow') {
      setBuyNowItems((prev) => ({
        ...prev,
        [itemID]: {
          ...prev[itemID],
          [size]: prev[itemID][size] + quantity,
        },
      }));
    }

    setAddToCartItems((prev) => ({
      ...prev,
      [itemID]: {
        ...prev[itemID],
        [size]: prev[itemID][size] + quantity,
      },
    }));
  };

  const removeFromCart = (itemID, size, cartType, quantity) => {
    const cartToUpdate = cartType === 'buyNow' ? buyNowItems : addToCartItems;

    if (cartType === 'buyNow') {
      setBuyNowItems((prev) => ({
        ...prev,
        [itemID]: {
          ...prev[itemID],
          [size]: Math.max(prev[itemID][size] - quantity, 0),
        },
      }));
    }

    setAddToCartItems((prev) => ({
      ...prev,
      [itemID]: {
        ...prev[itemID],
        [size]: Math.max(prev[itemID][size] - quantity, 0),
      },
    }));
  };

  const getTotalCartAmount = (cartItems) => {
    let totalAmount = 0;
    for (const itemID in cartItems) {
      for (const size in cartItems[itemID]) {
        if (cartItems[itemID][size] > 0) {
          let itemInfo = products.find((product) => product.id === Number(itemID));
          totalAmount += itemInfo.new_price * cartItems[itemID][size];
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = (cartItems) => {
    let totalItem = 0;
    for (const itemID in cartItems) {
      for (const size in cartItems[itemID]) {
        if (cartItems[itemID][size] > 0) {
          totalItem += cartItems[itemID][size];
        }
      }
    }
    return totalItem;
  };

  const totalAmountAddToCart = getTotalCartAmount(addToCartItems);
  const totalItemsAddToCart = getTotalCartItems(addToCartItems);

  const totalAmountBuyNow = getTotalCartAmount(buyNowItems);
  const totalItemsBuyNow = getTotalCartItems(buyNowItems);

  const contextValue = { products, addToCartItems, buyNowItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
