import React from 'react'

import CreateProducts from './CreateProducts'
import ProductsList from './ProductsList'
import UpdateProduct from './UpdateProduct'


const Products_Backend = () => {
  return (
    <div className='display-6 d-flex my-5'> 
        <div className='container d-grid justify-content-center my-5'>
         <CreateProducts />
    <hr className='my-5' />
    <ProductsList  />

    </div>
    </div>
  )
}

export default Products_Backend