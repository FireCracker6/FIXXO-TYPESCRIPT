import React, { useEffect } from 'react'
import {IProductsUpdateContext, ProductsUpdateContext} from './contexts/ProductsUpdateContext'
import { Product } from './models/ProductsUpdateModel'
import { currencyFormatter } from './utilities/currencyFormatter'
import { NavLink } from 'react-router-dom'



const ProductsList = () => {
const { products, getAll, remove} = React.useContext(ProductsUpdateContext) as IProductsUpdateContext


useEffect(() => {
  getAll()

 
},  [getAll] )


const removeProduct = (articleNumber:number) => {
  remove(articleNumber)
}

  return (
   <>
   <div className='container d-grid justify-content-center align-items-center mt-5'>
    <h3 className='display-6 mb-4'>List of Products </h3>
        {
            products.map((product: Product  ) => (<div  className='d-flex justify-content-center mb-3' key={product.articleNumber} >
                <div>  <h5>Category:</h5> <p>{product.category}</p>  </div>
                <div> <img src={product.imageURL} alt={product.title} /> </div>

                <div>  <h5>Title:</h5> <p>{product.title}</p>  </div>
                <div className='mb-5'>  <h4>Description:</h4> <p>{product.description} </p> </div>
                <div>  <h5>Price:</h5><p>{currencyFormatter(product.price)} </p>  </div>
                <div>   <NavLink className=" btn btn-dark " to={`/updateproduct/${product.articleNumber}`} end> 
                          UPDATE PRODUCT
                        </NavLink></div>
                       
                <div > <button className=' btn btn-danger  ' onClick={(e) =>  removeProduct(product.articleNumber)} >Remove Product</button>
                </div>

               </div >) )
        }
        </div>
   </>
  )
}

export default ProductsList