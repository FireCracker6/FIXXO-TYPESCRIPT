import React, { useEffect, useState } from 'react'
import {useQuery, gql, useMutation} from '@apollo/client'
import { NavLink, useParams } from 'react-router-dom'
import ProductCard from './cards/ProductCard'
import { title } from 'process'

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
  const {loading, error, data, refetch} = useQuery(GET_PRODUCT_QUERY)
  const [updateProduct] = useMutation(UPDATE_PRODUCT_QUERY) 
 
  useEffect(() => {
    if(data) {
      // console.log(data)
      // console.log(product)

      setProduct(data.product)
    }
  }, [data])




  const handleSubmit = (e: any) => {
    e.preventDefault()
  
  updateProduct({ variables: { _id: id, title: product.title, imageURL: product.imageURL, category: product.category, description: product.description, price: product.price, tag: product.tag, rating: product.rating}}) 
   // updateProduct({ variables: product}) 

    console.log('this product: ' +  data.product._id, data.product.title, data.product.imageURL, data.product.category, data.product.tag, data.product.price, data.product.rating)
    // empty the form
    setProduct(default_value)
    refetch(data)
   
  }



  const populateProduct = () => {
    if (loading) return <option disabled>Laddar...</option>
    if (error) return <option disabled>Ett fel uppstod...</option>

    return (
      <>
      <div className='container'>
      <div className='updateButton'>
        <NavLink className="btn btn-secondary my-5 " to={`/productsbackend`} end>  BACK TO PRODUCT LIST </NavLink>
      </div>
      </div>

      <div className='container justify-content-center mb-5 updateContainer'>

    
      <form onSubmit={handleSubmit}>
     

        <input type="hidden" value={id} />
        <p className='updateLabel my-3'> Product Title: </p>
      <input value={product.title} onChange={(e) =>  setProduct({...product, title: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder={data.product.title}/>
      <p className='updateLabel'> Product Category: </p>
       <input value={product.category} onChange={(e) =>  setProduct({...product, category: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder={data.product.category}/>
       <p className='updateLabel'> Product Image URL: </p><br/>
      <p><br/> <img className='updateImage' src={product.imageURL} alt={product.title} /></p>
       <input value={product.imageURL} onChange={(e) =>  setProduct({...product, imageURL: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder={data.product.imageURL}/>
       <p className='updateLabel'> Product Description: </p>
       <input value={product.description} onChange={(e) =>  setProduct({...product, description: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder={data.product.description}/>
       <p className='updateLabel'> Product Price: </p>
       <input value={product.price} onChange={(e) =>  setProduct({...product, price: e.target.value})} type="number" step={0.5} className='form-control py-2 mb-3' placeholder={data.product.price}/>
       <p className='updateLabel'> Product Tag: </p>
       <input value={product.tag} onChange={(e) =>  setProduct({...product, tag: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder={data.product.tag}/>
       <p className='updateLabel'> Product Rating: </p>
       <input value={product.rating} onChange={(e) =>  setProduct({...product, rating: e.target.value})} type="number" step={1} min={1} max={5} className='form-control py-2 mb-3' placeholder={data.product.rating}/>
   
       <div className='updateButton'>
    <button className=' btn btn-secondary px-5 py-2 d-grid' type='submit'>UPDATERA PRODUKT</button>
    </div>
       </form>
       </div>
       </>
      )
  } 

 

  return (
 <>{populateProduct()}</>
  )
}

export default UpdateProductGRAPHQL