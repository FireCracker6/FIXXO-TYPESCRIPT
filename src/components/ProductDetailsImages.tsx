import React, {useState, useEffect }from 'react'
import { useParams} from 'react-router-dom'
import { ProductContextInterface, useProductContext } from './contexts/ProductContext'
import {Products} from './models/productsModel'

interface IProductTilesProps {
  
  product: Products[]
  
}


export const ProductDetailsImages: React.FC<IProductTilesProps>= () => {

  const {id} = useParams()

    const {product, getProduct} = useProductContext() as ProductContextInterface
    const idNumber = id as unknown as number

    useEffect(() => {
         getProduct(idNumber)
    
    },[])




  return (
   
    <div className="grid-container">
   <div className="grid-container">
    <div className="item-1">

       

        <div className="item-1-prod-images">
         <div className="item-1"> <img src={product.imageURL}  alt={product.imageURL} /></div>
         <div className="item-2"><img src={product.imageURL} alt={product.imageURL} /></div>
         <div className="item-3"><img src={product.imageURL} alt={product.imageURL} /></div>
         <div className="item-4"><img src={product.imageURL} alt={product.imageURL} /></div>
   
   
             
        </div>
 
    </div>
    
</div>
    
</div>
  )
}
