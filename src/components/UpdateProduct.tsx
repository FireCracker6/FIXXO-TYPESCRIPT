import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {IProductsUpdateContext, ProductsUpdateContext} from './contexts/ProductsUpdateContext'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { currencyFormatter } from './utilities/currencyFormatter'
import { setConstantValue } from 'typescript'
import ProductsList from './ProductsList'


const UpdateProduct= () => {

    const {id} = useParams() 
    const idNumber = id as unknown as number
  
    const { product, setProduct, get, update, remove } = React.useContext(ProductsUpdateContext) as IProductsUpdateContext
   

    useEffect(() => { 
      return () => {
          get(idNumber)
       
      }
    }, [ idNumber])
    

      const [newPrice, setNewPrice] = useState(product.price)
    
 
    const submitForm = () => console.log(product.price)
 
    console.log(product.articleNumber) 
    const handleClick = () => {
      
      setNewPrice(product.price)
      console.log(newPrice)
      product.price = newPrice

      
     
}

const removeProduct = (articleNumber:number) => {
  remove(articleNumber)
  console.log(remove(product.articleNumber))
}


 
  return (
    
    <div className='container d-flex justify-content-center mb-5'>
  
    <form onSubmit={update}   className="d-grid mb-5">
    <div>   <NavLink className=" btn btn-dark " to={`/productsbackend`} end>  

BACK TO PRODUCT LIST
 </NavLink></div>
        <h3 className='display-6 mb-4'>Update Product</h3>
        <input type="hidden" value={product.articleNumber} />
        <input value={product.category} onChange={(e) =>  setProduct({...product, category: e.target.value})} onBlur={(e) =>  setProduct({...product, category: e.target.value})}  type="text" className='form-control py-2 mb-3' placeholder={product.category} />
        <div> <img src={product.imageURL} alt={product.title} /> </div>

        <input value={product.imageURL} onChange={(e) =>  setProduct({...product, imageURL: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Enter image url...'/>

        <input value={product.title} onChange={(e) =>  setProduct({...product, title: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Enter product title...'/>


        <input value={product.description} onChange={(e) =>  setProduct({...product, description: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Enter description..' />
       
        <input value={product.price} onChange={(e) =>  setProduct({...product, price: parseFloat(e.target.value)})}  type="number" /* step="any" */ className='form-control py-2 mb-3' placeholder='Enter a price...' />
     
             <button type='submit' className='btn btn-warning py-2 mt-3' >UPDATE PRODUCT</button>
    <button className=' btn btn-danger  py-2 mt-3 ' onClick={(e) =>  removeProduct(product.articleNumber)} >Remove Product</button>

    </form>
   
    </div>
  
  )
} 

export default UpdateProduct