import React from 'react';

import './App.css';
import './App.min.css';

import './'
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
import UserProvider from './components/contexts/UserContext';
import UserList from './components/UserList';
import Products_Backend from './components/Products_Backend';
import ProductsUpdateProvider from './components/contexts/ProductsUpdateContext';
import UpdateProduct from './components/UpdateProduct';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import UpdateProductGRAPHQL from './components/UpdateProductGRAPHQL';


const App = () => {



  
  return (
    <div>
     
      <BrowserRouter>
        <ShoppingCartProvider>
            <ProductProvider>
              <UserProvider>
                <ProductsUpdateProvider>
              <Routes>
                <Route path='/productsbackend' element={<Products_Backend />} />
                <Route path='/updateproduct/:id' element={<UpdateProductGRAPHQL/>} />
                <Route path='/' element={<HomeView/>}/>
                <Route path='/products'   element={<ProductsView title={'Products'}   /> }/>
                <Route path='/productdetails/:id'  element={<ProductDetailsView  />}/>
                <Route path='/productdetails/:id' element={<ProductDetailGalleryHeader title={'Related Products'} items={[]} />}/>
                <Route path='/users' element={<UserList />}/>
                <Route path='/contacts' element={<ContactsView />}/>
                <Route path='/*' element={<NotFoundView />}/>
                <Route path='/search' element={<SearchView />}/>
                <Route path='/wishlist' element={<WishListView />}/>
                <Route path='/shoppingcart' element={<ShoppingCartView />}/>
                <Route path='/compare' element={<CompareView />}/>
              </Routes>
              </ProductsUpdateProvider>
              </UserProvider>
            </ProductProvider>
        </ShoppingCartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
