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
 
   <div className='container PlistContainer mt-5'>
    <h3 className='PListHeader'>List of Products </h3>
        {
            products.map((product: Product  ) => (<div  className='PListContent' key={product.articleNumber} >
                <div>  <h5>Category:</h5> <p>{product.category}</p>  </div>
                <div className='PListImage'> <img src={product.imageURL} alt={product.title} /> </div>

                <div>  <h5>Title:</h5> <p className='P-Title'>{product.title}</p>  </div>
                <div className='mb-5'>  <h5>Description:</h5> <p className='PDescription'>{product.description} </p> </div>
                <div>  <h5>Price:</h5><p className='P-Price'>{currencyFormatter(product.price)} </p>  </div>
                <div className='P-Buttons'>   <NavLink className=" btn btn-dark " to={`/updateproduct/${product.articleNumber}`} end> 
                         Update Product
                        </NavLink></div>
                       
                <div className='P-Buttons'> <button className=' btn btn-danger  ' onClick={(e) =>  removeProduct(product.articleNumber)} >Remove Product</button>
                </div>

               </div >) )
        }
        </div>
   </>
  )
}

export default ProductsList