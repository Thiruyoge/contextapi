// App.js
import React from 'react';
import { CartProvider } from './CartContext';
import CartPage from './CartPage';

const App = () => {
  return (
    <CartProvider>
      {/* Your main application */}
      <CartPage />
    </CartProvider>
  );
};

export default App;
