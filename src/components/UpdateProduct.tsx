import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {IProductsUpdateContext, ProductsUpdateContext} from './contexts/ProductsUpdateContext'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { currencyFormatter } from './utilities/currencyFormatter'


const UpdateProduct= () => {
  const [isShown, setIsShown] = useState(false);
    const {id} = useParams()  
    const idNumber = id as unknown as number
  
    const { product, setProduct, get, update } = React.useContext(ProductsUpdateContext) as IProductsUpdateContext
   
    
    useEffect(()=>{
    
      get(idNumber)
    
         
         
       return()=> get(idNumber)
    },[])
    
  

/* console.log(product.price)
console.log(id) */


let message = ''

// show the user that product has been updated
 const handleClick = () => {
  message = 'Product updated successfully!'
  console.log(message) 

  // 👇️ toggle shown state
  setIsShown(current => !current);
 
  // timeout the message
  setTimeout(setIsShown, 5000);
/*   window.location.reload(); */
 }

 

 

  return (

    <>
    
    <div className='container d-flex justify-content-center my-5'>
 
    <form onSubmit={update}   className="d-grid mb-5">
    <div>   <NavLink className=" d-grid btn btn-dark my-5 " to={`/productsbackend`} end>  

BACK TO PRODUCT LIST
 </NavLink></div>
        <h3 className='display-6 mb-4'>Update Product</h3>
       
      
        
       
       {/* give the user a message after updating */}
      {isShown && (
        <div id='submitMessage'>
          <h2>Product updated successfully!</h2>
        </div>
      )
}


      
        <input type="hidden" value={product.articleNumber} />
        <input type="hidden" value={product.tag} />
        <input value={product.category} onChange={(e) =>  setProduct({...product, category: e.target.value})}   type="text" className='form-control py-2 mb-3' placeholder={product.category} />
        <div className='UpdateImage' > <img src={product.imageURL} alt={product.title}  /> </div>

        <input value={product.imageURL} onChange={(e) =>  setProduct({...product, imageURL: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Enter image url...'/>

        <input value={product.title} onChange={(e) =>  setProduct({...product, title: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Enter product title...'/>
        <input value={product.tag} onChange={(e) =>  setProduct({...product, tag: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Enter tag...'/>


        <input value={product.description} onChange={(e) =>  setProduct({...product, description: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Enter description..' />
       
        <input value={product.price} onChange={(e) =>  setProduct({...product, price: Number(e.target.value)})}  type="number"  step={.5}  className='form-control py-2 mb-3' placeholder='Enter a price...' />
     
             <button id='btn' type='submit' className='btn btn-danger py-2 mt-3' onClick={handleClick}>UPDATE PRODUCT</button>

      

    </form>
  
    </div>
    <div className='container PlistContainer mt-5'>
    
    <div className='PListContent'>

    <div>  <h5>Category:</h5> <p>{product.category}</p>  </div>
                <div className='PListImage' > <img src={product.imageURL} alt={product.title} /> </div>
<label htmlFor="html" ></label>
                <div>  <h5>Title:</h5> <input type="text" className='P-Title' value={product.title} disabled/>   </div>
                <div>  <h5>Tag:</h5> <input type="text" className='P-Title' value={product.tag} disabled/>   </div>
                <div>  <h5>Description:</h5> <input type="text" className='P-Description' value={product.description} disabled/>   </div>
                <div>  <h5>Price:</h5><input type="text" className='P-Title' value={product.price} disabled/>  </div>
                <div>  <h5>Rating:</h5> <input type="text" className='P-Title' value={product.rating} disabled/>   </div>
              
                </div> 
                </div>
                
    </>
  )
} 

export default UpdateProduct