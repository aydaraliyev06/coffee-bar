import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import AuthContextProvider, { authContext } from './context/AuthContext';
import CartContextProvider from './context/CartContextProvider';
import ProductContexProvider from './context/ProductContexProvider';
import RecommendContextProvider from './context/RecommendContextProvider';
import Router from './context/Router';

const App = () => {
  return (
    <AuthContextProvider>
      <ProductContexProvider>
        <CartContextProvider>
          <RecommendContextProvider>
            <Router/>
            <Footer/>
          </RecommendContextProvider>
        </CartContextProvider>
      </ProductContexProvider>
    </AuthContextProvider>
  );
};

export default App;