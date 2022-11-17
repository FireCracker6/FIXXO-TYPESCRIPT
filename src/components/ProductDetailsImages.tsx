import React, {useState, useEffect }from 'react'
import { useParams} from 'react-router-dom'
import { ProductContextInterface, useProductContext } from './contexts/ProductContext'



export const ProductDetailsImages: React.FC= () => {

  const {id} = useParams()

    const {product, getProduct} = useProductContext() as ProductContextInterface

    useEffect(() => {
        getProduct('')
    },[])




  return (
   
    <div className="grid-container">
   <div className="grid-container">
    <div className="item-1">

       
{/* 
        <div className="item-1-prod-images">
         <div className="item-1"> <img src={product.imageName}  alt={product.imageName} /></div>
         <div className="item-2"><img src={product.imageName} alt={product.imageName} /></div>
         <div className="item-3"><img src={product.imageName} alt={product.imageName} /></div>
         <div className="item-4"><img src={product.imageName} alt={product.imageName} /></div>
   
   
             
        </div>
 */}
    </div>
    
</div>
    
</div>
  )
}
