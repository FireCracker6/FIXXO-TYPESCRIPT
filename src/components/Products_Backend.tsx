import React from 'react'

import CreateProducts from './CreateProducts'
import Footer from './Footer'
import NavbarGlobal from './NavbarGlobal'
import ProductsList from './ProductsList'


const Products_Backend = () => {
  return (
    <>
    <NavbarGlobal />
    <div className='display-6 d-flex my-5'> 
        <div className='container d-grid justify-content-center my-5'>
         <CreateProducts />
    <hr className='my-2' />
    <ProductsList  />

    </div>
    </div>
    <Footer />
    </>
  )
}

export default Products_Backend