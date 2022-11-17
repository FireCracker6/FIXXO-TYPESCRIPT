import React from 'react';

import './App.css';
import './App.min.css';

import {  BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import ProductDetailsView from './views/ProductDetailsView';
import NotFoundView from './views/NotFoundView';
import WishListView from './views/WishListView';
import ShoppingCartView from './views/ShoppingCartView';
import CompareView from './views/CompareView';
import SearchView from './views/SearchView';
import CategoriesView from './views/CategoriesView';
import { ProductsView } from './views/ProductsView';
import { ProductDetailGalleryHeader } from './components/ProductDetailGalleryHeader';
import { ShoppingCartProvider } from './components/contexts/ShoppingCartContext';
import { ProductProvider } from './components/contexts/ProductContext';



const App = () => {



  
  return (
    <div>
     
      <BrowserRouter>
        <ShoppingCartProvider>
            <ProductProvider>
              <Routes>
                <Route path='/' element={<HomeView/>}/>
                <Route path='/products'   element={<ProductsView title={'Products'}   /> }/>
                <Route path='/productdetails/:id'  element={<ProductDetailsView  />}/>
                <Route path='/productdetails/:id' element={<ProductDetailGalleryHeader title={'Related Products'} items={[]} />}/>
                <Route path='/categories' element={<CategoriesView />}/>
                <Route path='/contacts' element={<ContactsView />}/>
                <Route path='/*' element={<NotFoundView />}/>
                <Route path='/search' element={<SearchView />}/>
                <Route path='/wishlist' element={<WishListView />}/>
                <Route path='/shoppingcart' element={<ShoppingCartView />}/>
                <Route path='/compare' element={<CompareView />}/>
              </Routes>
            </ProductProvider>
        </ShoppingCartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
