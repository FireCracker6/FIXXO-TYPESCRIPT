import React from 'react'
import {ProductsUpdateContext, IProductsUpdateContext } from './contexts/ProductsUpdateContext'

const CreateForm = () => {
    const { productRequest, setProductRequest, create } = React.useContext(ProductsUpdateContext) as IProductsUpdateContext
  return (
    <form onSubmit={create} className="d-grid mb-5">
        
        <h3 className='display-6 mb-4'>Add Update or Delete a Product</h3>
        <input value={productRequest.category} onChange={(e) =>  setProductRequest({...productRequest, category: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Enter category..' />

        <input value={productRequest.imageURL} onChange={(e) =>  setProductRequest({...productRequest, imageURL: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Enter image url...'/>

        <input value={productRequest.title} onChange={(e) =>  setProductRequest({...productRequest, title: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Enter title...' />
        <input value={productRequest.description} onChange={(e) =>  setProductRequest({...productRequest, description: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Enter your description...' />
        <input value={productRequest.price} onChange={(e) =>  setProductRequest({...productRequest, price: parseFloat(e.target.value)})}  type="number" step="any" className='form-control py-2 mb-3' placeholder='122' />
        <button type='submit' className='btn btn-success py-2 mt-3'>ADD PRODUCT</button>

    </form>
  )
}

export default CreateForm