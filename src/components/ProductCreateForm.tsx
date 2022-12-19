import React, { useState } from 'react'
import {useQuery, gql, useMutation} from '@apollo/client'

const ProductCreateForm = () => {

  const GET_VENDORS_QUERY = gql`{ vendors {_id, name }}`
 const POST_PRODUCT_QUERY = gql
 `
    mutation AddProduct($title: String!, $category: String!, $vendorId: ID!, $imageURL: String!, $description: String, $tag: String!, $price: String, $rating: String) {
    addProduct(title: $title, category: $category, vendorId: $vendorId, imageURL: $imageURL, description: $description, tag: $tag, price: $price, rating: $rating) {
      title
    }
  }

  `


  const default_value = {title: '', vendorId: '0', imageURL: '', category: '', description: '', price: '', tag: '', rating: ''}
  const [product, setProduct] = useState(default_value)
  const {loading, error, data, refetch} = useQuery(GET_VENDORS_QUERY)
  const [addProduct] = useMutation(POST_PRODUCT_QUERY) 

  const populateVendors = () => {
    if (loading) return <option disabled>Laddar...</option>
    if (error) return <option disabled>Ett fel uppstod...</option>
    
    return (
      
      
        data.vendors.map((vendor: { _id: any, name: any }) =>   <option key={vendor._id} value={vendor._id} >{vendor.name}</option>)
      
      )
  } 

  const handleSubmit = (e: any) => {
    e.preventDefault()
    addProduct({variables:  product}) 
    setProduct(default_value)
    refetch()
  }


  return (
    <form className='container' onSubmit={handleSubmit}>
    <h5 className='mb-5'>Lägg till en Leverantör</h5>
    <input type='hidden' value={product.title} onChange={(e) => setProduct({...product, title: e.target.value})} className='form-control mb-3' placeholder='Lägg till en produkt titel'/>
    <input value={product.title} onChange={(e) => setProduct({...product, title: e.target.value})} className='form-control mb-3' placeholder='Lägg till en produkt titel'/>
    
    <input value={product.imageURL} onChange={(e) => setProduct({...product, imageURL: e.target.value})} className='form-control mb-3' placeholder='Lägg till en produkt bild'/>
    <input value={product.category} onChange={(e) => setProduct({...product, category: e.target.value})} className='form-control mb-3' placeholder='Lägg till en produkt kategori'/>
    <input value={product.price} onChange={(e) => setProduct({...product, price: e.target.value})} className='form-control mb-3' placeholder='Lägg till en produkt pris'/>
    <input value={product.tag} onChange={(e) => setProduct({...product, tag: e.target.value})} className='form-control mb-3' placeholder='Lägg till en produkt tag'/>
    <select value={product.vendorId} onChange={(e) => setProduct({...product, vendorId: e.target.value})} className='form-select mb-3' placeholder='Lägg till en produkt tagg'>
   <option value="0" disabled>Välj en leverantör...</option>
   { populateVendors()} 
    </select>
    
    <textarea value={product.description} onChange={(e) => setProduct({...product, description: e.target.value})} className='form-control' placeholder='Ange en produktbeskrivning' rows={8} cols={75} ></textarea>
    <input value={product.rating} onChange={(e) => setProduct({...product, rating: e.target.value})} className='form-control mb-3' placeholder='Lägg till ett produkt betyg'/>

    <div className='d-grid'>
    <button className=' btn btn-secondary px-5 py-2' type='submit'>LÄGG TILL PRODUKT</button>
    </div>
  </form>
  )
}

export default ProductCreateForm