import React, { useEffect, useState } from 'react'
import {useQuery, gql, useMutation} from '@apollo/client'
import { useParams } from 'react-router-dom';
import ProductsUpdateContext, { IProductsUpdateContext } from './contexts/ProductsUpdateContext';

const ProductUpdateForm = () => {

    const [isShown, setIsShown] = useState(false);
    const {id} = useParams()  
    const idNumber = id as unknown as number
  
  /*   const { product, setProduct, get, update } = React.useContext(ProductsUpdateContext) as IProductsUpdateContext
   
    
    useEffect(()=>{
    
      get(idNumber)
    
         
         
       return()=> get(idNumber)
    },[])
     */

  const GET_VENDORS_QUERY = gql`{ vendors {_id, name }}`
  const GET_PRODUCT_QUERY = gql`{ products {_id, title, category, imageURL, description, price, tag, rating}}`
 const PUT_PRODUCTUPDATE_QUERY = gql
 `
    mutation UpdateProduct(, $title: String!, $category: String!, $vendorId: ID!, $imageURL: String!, $description: String, $tag: String!, $price: String, $rating: String) {
    updateProduct(title: $title, category: $category, vendorId: $vendorId, imageURL: $imageURL, description: $description, tag: $tag, price: $price, rating: $rating) {
      title
    }
  }

  `

  const GET_PRODUCTS_QUERY = gql`{ products { _id, title, imageURL, category, description, price, tag, rating, }}`

  const {loading, error, data} = useQuery(GET_PRODUCT_QUERY)
  const [updateProduct] = useMutation(PUT_PRODUCTUPDATE_QUERY)
  const default_value = { _id: id, title: '', vendorId: '0', imageURL: '', category: '', description: '', price: '', tag: '', rating: ''}
  const [product, setProduct] = useState(default_value)
  const populateVendors = () => {
    if (loading) return <option disabled>Laddar...</option>
    if (error) return <option disabled>Ett fel uppstod...</option>
    return (
        <div className='container'>
        <h5 className='mb-5'>ProduktLista</h5>
        {
          data.products.map((product: any) => (<div key={product._id}> {product.title} </div>))
        }
        </div>
    
     
      )
  } 

  const handleSubmit = (e: any) => {
    e.preventDefault()
    updateProduct({variables:  product}) 
    setProduct(default_value)
  }


  return (
    <>
  {populateVendors()}
    <form className='container' onSubmit={handleSubmit}>
    <h5 className='mb-5'>Uppdatera Produkt</h5>
    <input type='hidden' value={product.title} onChange={(e) => setProduct({...product, title: e.target.value})} className='form-control mb-3' placeholder='Lägg till en produkt titel'/>
    <input value={product.title} onChange={(e) => setProduct({...product, title: e.target.value})} className='form-control mb-3' placeholder='Lägg till en produkt titel'/>
    
    <input value={product.imageURL} onChange={(e) => setProduct({...product, imageURL: e.target.value})} className='form-control mb-3' placeholder='Lägg till en produkt bild'/>
    <input value={product.category} onChange={(e) => setProduct({...product, category: e.target.value})} className='form-control mb-3' placeholder='Lägg till en produkt kategori'/>
    <input value={product.price} onChange={(e) => setProduct({...product, price: e.target.value})} className='form-control mb-3' placeholder='Lägg till en produkt pris'/>
    <input value={product.tag} onChange={(e) => setProduct({...product, tag: e.target.value})} className='form-control mb-3' placeholder='Lägg till en produkt tag'/>
  {/*   <select value={product.vendorId} onChange={(e) => setProduct({...product, vendorId: e.target.value})} className='form-select mb-3' placeholder='Lägg till en produkt tagg'>
   <option value="0" disabled>Välj en leverantör...</option>
   { populateVendors()} 
    </select> */}

    <textarea value={product.description} onChange={(e) => setProduct({...product, description: e.target.value})} className='form-control' placeholder='Ange en produktbeskrivning' rows={8} cols={75} ></textarea>
    <input value={product.rating} onChange={(e) => setProduct({...product, rating: e.target.value})} className='form-control mb-3' placeholder='Lägg till ett produkt betyg'/>

    <div className='d-grid'>
    <button className=' btn btn-secondary px-5 py-2' type='submit'>LÄGG TILL PRODUKT</button>
    </div>

  </form>
 
  </>
  
  )
}

export default ProductUpdateForm