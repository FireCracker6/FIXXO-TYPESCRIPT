import React, { useEffect, useState } from 'react'


// OLD PRODUCT CREATE FORM WITHOUT GRAPHQL -- THIS IMPLEMENTS VALIDATION AND STAR RATING  -- THIS COULD BE IMPLEMENTED INTO THE GRAPHQL FORM IF THERE WAS MORE TIME TO DO IT !!! 


import {ProductsUpdateContext, IProductsUpdateContext } from './contexts/ProductsUpdateContext'
import ProductUpdateForm from './ProductUpdateForm';
import StarRating from './StarRating';






const CreateProducts = () => {
  const [isShown, setIsShown] = useState(false);
  const [isValid, setValid] = useState(true);
  const [errors, setErrors] = useState({ category: '', title: '', imageURL: '', price: ''} )
    const { productRequest, setProductRequest, create } = React.useContext(ProductsUpdateContext) as IProductsUpdateContext
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

console.log(rating)
const handleErrors = (e: React.FormEvent) => {
e.preventDefault()



  let inputTitle = document.getElementById('title') as HTMLInputElement | null;

  let inputImage = document.getElementById('imageAPIURL') as HTMLInputElement | null;
  let inputPrice = document.getElementById('price') as HTMLInputElement | null;

 

if (productRequest.title.length !== 0) {
  if (inputTitle !== null ) {
    console.log(inputTitle.value); // 👉️ "Initial Value"
  if (productRequest.title.length < 4) {
    setIsShown(current => !current);


    console.log("title required!")
    errors.title = 'Title must be longer!'
}
else 
setValid(true)
  } 
}
if (productRequest.imageURL.length !== 0) {
   if (inputImage !== null ) {
    console.log(inputImage.value); // 👉️ "Initial Value"
  if (productRequest.imageURL.length < 4) {
    setIsShown(current => !current);

    console.log("imageURL required!")
    errors.imageURL = 'Image URL is required!'
}
else
setValid(true)
  }   
}
if (productRequest.price !== 0) {
  if (inputPrice != null ) {
   console.log(inputPrice.value); // 👉️ "Initial Value"
 if (productRequest.price < 10) {


   console.log("price must be over $10 and not negativ")
   errors.price = 'price must be over $10 and not negativ'
}
else setValid(true)
 }   
}
else setValid(false)
}
    
    
const handleClick = () => {

  
  if (productRequest.category !== '' && productRequest.imageURL !== '' && productRequest.title !== '' && productRequest.price !== 0)
  {
    setValid(true)
  
    console.log(isValid)
 productRequest.rating = rating

  }
 else  setValid(false)

    let inputPrice = document.getElementById('price') as HTMLInputElement | null;
    let inputRating = document.getElementById('rating') as HTMLInputElement | null;
    let inputCategory = document.getElementById('categoryList') as HTMLInputElement | null;



    if (inputPrice !== null) {
      console.log(inputPrice.value); // 👉️ "Initial Value"
   
    if (productRequest.price <= 0) {

      console.log('errors' )
      console.log("minus in price!")
     
      
        // timeout the message
  setTimeout(setIsShown, 2000);
      productRequest.price = 100
    
    }
  
    inputPrice.value = ''


    }

   
    
    if (inputCategory !== null) {
      console.log(inputCategory.value); // 👉️ "Initial Value"
    if (productRequest.category.length < 4) {
      setIsShown(current => !current);
      console.log('errors' )
      errors.category = "Please choose a category!"
     
      
        // timeout the message
  setTimeout(setIsShown, 2000);

    
    }
    else
setValid(true)
  
    inputCategory.value = 'Choose Category...'
    setRating(0)
    
  
    
    
     
    }



    

    let checkedRadio = document.getElementsByClassName('rating');
  
    /* let inputCategory = document.getElementById('categoryList') as HTMLInputElement | null; */
    let inputImage = document.getElementById('imageAPIURL') as HTMLInputElement | null;
  

  
  
  if (productRequest.imageURL.length !== 0) {
    if (inputImage !== null ) {
     console.log(inputImage.value); // 👉️ "Initial Value"
   if (productRequest.imageURL.length < 4) {
     setIsShown(current => !current);
 
     console.log("imageURL required!")
     errors.imageURL = 'Image URL is required!'
 }
 else
 setValid(true)
   }   
 }
    return isValid;
  }







  return (
<>

<ProductUpdateForm />

    <form onSubmit={create}  className="d-grid mb-5">
            <h1>HI THERE !</h1>
        <h3 className='display-6 mb-4'>Add Update or Delete a Product</h3>
             {/* give the user a message after updating */}
      {isShown && (
        <div id='submitMessage'>
       {/*    <h2 className='errorProduct'>Please choose a category!</h2> */}
        </div>
      )
}

      
     
        <select name="" id="categoryList" className='form-select form-select-lg mb-3' onChange={(e) =>  setProductRequest({...productRequest, category:  e.target.value})} placeholder='select category'  > 
        <option value="Choose Category...">Choose Category...</option>
          <option value="Pants">Pants</option>
        <option value="Jackets">Jackets</option>
        <option value="Sets">Sets</option>
        <option value="Dresses">Dresses</option>
        <option value="Shoes" >Shoes</option></select >
        {productRequest.category.length < 4 && productRequest.category.length !== 0 &&  <span className='errorProduct'>{errors.category}</span>}

        <input value={productRequest.imageURL} onChange={(e) =>  setProductRequest({...productRequest, imageURL: e.target.value})}  id='imageAPIURL' type="text" className='form-control py-2 mb-3' onKeyUp={handleErrors}  placeholder='Enter image url...'/>
        {productRequest.imageURL.length < 4 && productRequest.imageURL.length !== 0 &&  <span className='errorProduct'>{errors.imageURL}</span>}

        <input value={productRequest.title} onChange={(e) =>  setProductRequest({...productRequest, title: e.target.value})} type="text" name='title' className='form-control py-2 mb-3'  id='title'  onKeyUp={handleErrors} placeholder='Enter title...' />
        {productRequest.title.length < 4 && productRequest.title.length !== 0 &&  <span className='errorProduct'>{errors.title}</span>}
        <input value={productRequest.tag} onChange={(e) =>  setProductRequest({...productRequest, tag: e.target.value})} type="text" name='tag' className='form-control py-2 mb-3'  id='tag'   placeholder='Enter tag...' />
        <input value={productRequest.description} onChange={(e) =>  setProductRequest({...productRequest, description: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Enter your description...' />
        <input id='price' onChange={(e) =>  setProductRequest({...productRequest, price: Number(e.target.value).toFixed(2)})}  type="number" step="0.05" onKeyUp={handleErrors} className='form-control py-2 mb-3' min={1} placeholder='Enter a price...'  />
        
  {/*   <input id='rating' onChange={(e) =>  setProductRequest({...productRequest, rating: Number(e.target.value).toFixed(2)})}   type="number" step="1" max={5} onKeyUp={handleErrors} className='form-control py-2 mb-3' min={1} placeholder='Enter a rating...'  />
 */}
  
  {/* StarRating implemented directly -- (fick inte till det annars) */}
  <div className='P-rating'>Please choose a Rating: (default is 0)</div>
  <div className="star-rating P-Rating-Div" >
      {[...Array(5)].map((star: number, index) => {
       
        index += 1
    
        return (
     
               <div key={index}>
           <button
                type="button"
                key={index}
                className={index <= (hover || rating) ? "on" : "off"}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
              >
                <span className={"star"}>&#9733;</span>
              </button>
            </div>
           
        )
      })}
    </div>
        {productRequest.price <= 9 && productRequest.price !== 0 &&   <span className='errorProduct'>{errors.price}</span>}
        <button type='submit' className='btn btn-success py-2 mt-3' onClick={handleClick}  >ADD PRODUCT</button>

    </form>
   
    </>
  )

}

export default CreateProducts

