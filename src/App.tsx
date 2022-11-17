import React from 'react';

import './App.css';
import './App.min.css';

import NavbarGlobal from './components/NavbarGlobal';
import {  BrowserRouter } from 'react-router-dom'
import Showcase from './components/Showcase';
import ProductsBanner from './components/ProductsBanner';
import ProductGridSection from './components/sections/ProductGridSection';
import {ProductContext, ProductContextInterface, ProductProvider } from './components/contexts/ProductContext';
import ShoppingCartContext, { ShoppingCartProvider } from './components/contexts/ShoppingCartContext';
import { useEffect } from 'react';
import {Products} from './components/models/productsModel'
import HomeView from './views/HomeView';




const App = () => {



  const {featuredProducts, getFeaturedProducts}  = React.useContext(ProductContext) as ProductContextInterface

  useEffect(() => {
    getFeaturedProducts(4)
  
  }, [getFeaturedProducts])
  
  return (
    <div>
     
      <BrowserRouter>
    
      <ProductProvider>
  <HomeView />
   
   </ProductProvider>
  
   </BrowserRouter>
    </div>
  );
}

export default App;
