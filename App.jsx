import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';
import './App.css';

function AppContent() {
  // 'landing' | 'products' | 'cart'
  const [page, setPage] = useState('landing');

  return (
    <div className="app">
      {page === 'landing' && (
        <AboutUs onGetStarted={() => setPage('products')} />
      )}
      {page === 'products' && (
        <ProductList onCartClick={() => setPage('cart')} />
      )}
      {page === 'cart' && (
        <CartItem onContinueShopping={() => setPage('products')} />
      )}
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
