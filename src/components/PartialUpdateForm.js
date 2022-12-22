import React, { useState } from 'react'
import {useQuery, gql, useMutation} from '@apollo/client'

const PartialUpdateForm = () => {

    
/* const { ApolloServer, gql } = require('apollo-server'); */
const { find, filter } = require('lodash');






const [product, setProduct] = useState('')

return (
    <form className='container' /* onSubmit={handleSubmit} */>
    <h5 className='mb-5'>Lägg till en Leverantör</h5>
    <input type='hidden' value={product.title} onChange={(e) => setProduct({...product, title: e.target.value})} className='form-control mb-3' placeholder='Lägg till en produkt titel'/>
    <input value={product.title} onChange={(e) => setProduct({...product, title: e.target.value})} className='form-control mb-3' placeholder='Lägg till en produkt titel'/>
    
    <input value={product.imageURL} onChange={(e) => setProduct({...product, imageURL: e.target.value})} className='form-control mb-3' placeholder='Lägg till en produkt bild'/>
    <input value={product.category} onChange={(e) => setProduct({...product, category: e.target.value})} className='form-control mb-3' placeholder='Lägg till en produkt kategori'/>
    <input value={product.price} onChange={(e) => setProduct({...product, price: e.target.value})} className='form-control mb-3' placeholder='Lägg till en produkt pris'/>
    <input value={product.tag} onChange={(e) => setProduct({...product, tag: e.target.value})} className='form-control mb-3' placeholder='Lägg till en produkt tag'/>
   {/*  <select value={product.vendorId} onChange={(e) => setProduct({...product, vendorId: e.target.value})} className='form-select mb-3' placeholder='Lägg till en produkt tagg'>
   <option value="0" disabled>Välj en leverantör...</option>
   { populateVendors()} 
    </select> */}
    
    <textarea value={product.description} onChange={(e) => setProduct({...product, description: e.target.value})} className='form-control' placeholder='Ange en produktbeskrivning' rows={8} cols={75} ></textarea>
    <input value={product.rating} onChange={(e) => setProduct({...product, rating: e.target.value})} className='form-control mb-3' placeholder='Lägg till ett produkt betyg'/>

    <div className='d-grid'>
    <button className=' btn btn-secondary px-5 py-2' type='submit'>LÄGG TILL PRODUKT</button>
    </div>
  </form>
  )
}
  export default PartialUpdateForm