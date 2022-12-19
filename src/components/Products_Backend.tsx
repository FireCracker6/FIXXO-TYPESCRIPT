import React from 'react'

import CreateProducts from './CreateProducts'
import Footer from './Footer'


import NavbarGlobal from './NavbarGlobal'

import ProductCreateForm from './ProductCreateForm'
import ProductListGRAPHQL from './ProductListGraphQL'
import ProductsList from './ProductsList'
import UpdateProductGRAPHQL from './UpdateProductGRAPHQL'
import  {UpdateProductMutation}  from './UpdateProductMutation'


const Products_Backend = () => {
  return (
    <>
    <NavbarGlobal />
    <div className='display-6 d-flex my-5'> 
        <div className='container d-grid justify-content-center my-5'>
     {/*      <UpdateProductGRAPHQL /> */}
      
        <ProductCreateForm />
       {/*   <CreateProducts />  */}
    <hr className='my-2' />
   {/*  <ProductsList  /> */} 
    <ProductListGRAPHQL /> 

    </div>
    </div>
    <Footer />
    </>
  )
}

export default Products_Backend