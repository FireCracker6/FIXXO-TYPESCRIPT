import React, { useEffect, useState } from 'react'
import { InputGroup } from 'react-bootstrap'

import {ProductsUpdateContext, IProductsUpdateContext } from './contexts/ProductsUpdateContext'


const CreateProducts = () => {
    const { productRequest, setProductRequest, create } = React.useContext(ProductsUpdateContext) as IProductsUpdateContext
    
const handleClick = () => {
    let input = document.getElementById('price') as HTMLInputElement | null;

    if (input != null) {
      console.log(input.value); // 👉️ "Initial Value"
     
      input.value = ''
    
      
     
    }
 
  }

  return (

    <form onSubmit={create} className="d-grid mb-5">
            <h1>HI THERE !</h1>
        <h3 className='display-6 mb-4'>Add Update or Delete a Product</h3>
        <input value={productRequest.category} onChange={(e) =>  setProductRequest({...productRequest, category: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Enter category..' />

        <input value={productRequest.imageURL} onChange={(e) =>  setProductRequest({...productRequest, imageURL: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Enter image url...'/>

        <input value={productRequest.title} onChange={(e) =>  setProductRequest({...productRequest, title: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Enter title...' />
        <input value={productRequest.description} onChange={(e) =>  setProductRequest({...productRequest, description: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Enter your description...' />
        <input id='price' onChange={(e) =>  setProductRequest({...productRequest, price: parseFloat(e.target.value).toFixed(2)})}  type="number" step="0.05" className='form-control py-2 mb-3' placeholder='Enter a price...'  />
        <button type='submit' className='btn btn-success py-2 mt-3' onClick={handleClick}  >ADD PRODUCT</button>

    </form>
  )
}

export default CreateProducts

