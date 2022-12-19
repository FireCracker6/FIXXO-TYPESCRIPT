import React, { useEffect, useState } from 'react'
import {useQuery, gql, useMutation} from '@apollo/client'
import { useParams } from 'react-router-dom'
import ProductCard from './cards/ProductCard'

const UpdateProductGRAPHQL = () => {

const {id} = useParams()
const idNumber = id as unknown as String

const GET_ALL_PRODUCTS = gql`
  query {
  products  {
  _id
    title
    description
    price
  
  }
}
`;

  const GET_PRODUCT_QUERY = gql`{
    product (id: "${idNumber}" ) {
      _id
      title
      imageURL
      category
      description
      price
      tag
      rating
   
    }
  }`

 const UPDATE_PRODUCT_QUERY = gql
 `
 mutation   UpdateProduct($_id: ID!, $title: String, $category: String, $imageURL: String, $description: String, $tag: String, $price: String, $rating: String)  {
   updateProduct(_id: $_id,  title: $title, price: $price, category: $category, imageURL: $imageURL, description: $description, tag: $tag, rating: $rating) {
     _id, title, price, description
    }
    
  }
  `
  

  const getAll= useQuery(GET_ALL_PRODUCTS)

  const default_value = {_id: id, title: '', vendorId: '0', imageURL: '', category: '', description: '', price: '', tag: '', rating: ''}
  
  const [product, setProduct] = useState(default_value)
  const {loading, error, data} = useQuery(GET_PRODUCT_QUERY)


 
  const [updateProduct] = useMutation(UPDATE_PRODUCT_QUERY) 
  

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // testing input
    const test = { id: id, title: product.title, price: product.price}
    console.log(test)
    // updateProduct({ variables: { id: id, title: product.title, price: product.price}}) 
    updateProduct({ variables: product}) 

    console.log('this product: ' +  data.product._id, data.product.title, data.product.imageURL, data.product.category, data.product.tag, data.product.price, data.product.rating)
    // empty the form
    setProduct(default_value)
    
   
  }

  const populateVendors = () => {
    if (loading) return <option disabled>Laddar...</option>
    if (error) return <option disabled>Ett fel uppstod...</option>

    return (
      <>
    
      <div className='container justify-content-center mb-5'>
      <form onSubmit={handleSubmit}>
        <input type="hidden" value={id} />
      <input value={product.title} onChange={(e) =>  setProduct({...product, title: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder={data.product.title}/>
       <input value={product.category} onChange={(e) =>  setProduct({...product, category: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder={data.product.category}/>
       <input value={product.imageURL} onChange={(e) =>  setProduct({...product, imageURL: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder={data.product.imageURL}/>
       <input value={product.description} onChange={(e) =>  setProduct({...product, description: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder={data.product.description}/>
       <input value={product.price} onChange={(e) =>  setProduct({...product, price: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder={data.product.price}/>
       <input value={product.tag} onChange={(e) =>  setProduct({...product, tag: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder={data.product.tag}/>
       <input value={product.rating} onChange={(e) =>  setProduct({...product, rating: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder={data.product.rating}/>
   
       <div className='d-grid'>
    <button className=' btn btn-secondary px-5 py-2' type='submit'>UPDATERA PRODUKT</button>
    </div>
       </form>
       </div>
       </>
      )
  } 

 

  return (
 <>{populateVendors()}</>
  )
}

export default UpdateProductGRAPHQL