// CartContext.js
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Handle adding item to the cart
      return state;
    case 'REMOVE_FROM_CART':
      // Handle removing item from the cart
      return state;
    case 'UPDATE_QUANTITY':
      // Handle updating quantity
      return state;
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  // Use data.json for initial product data
  const initialProducts = require('./data.json').products;
  const [cart, dispatch] = useReducer(cartReducer, initialProducts);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
