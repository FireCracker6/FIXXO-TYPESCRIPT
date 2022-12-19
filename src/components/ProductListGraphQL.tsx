import React from 'react'
import {useQuery, gql} from '@apollo/client'
import { currencyFormatter } from './utilities/currencyFormatter'
import { NavLink } from 'react-router-dom'

const GET_PRODUCTS_QUERY = gql`{ products { _id, title, imageURL, category, description, price, tag, rating, }}`

const ProductListGRAPHQL = () => {
  const { loading, error, data, refetch } = useQuery(GET_PRODUCTS_QUERY)

  if (loading)  {
    refetch()
    return  <p>Laddar...</p> }
    
  if (error) return <p>Ett fel uppstod!: {error.message}</p>
  return (
    <div className='container PlistContainer mt-5'>
    <h3 className='PListHeader'>List of Products </h3>
        {
            data.products.map((product: any  ) => (<div  className='PListContent' key={product._id} >
                <div>  <h5>Category:</h5> <p>{product.category}</p>  </div>
                <div className='PListImage'> <img src={product.imageURL} alt={product.title} /> </div>

                <div>  <h5>Title:</h5> <p className='P-Title'>{product.title}</p>  </div>
                <div>  <h5>Tag:</h5> <p className='P-Tag'>{product.tag}</p>  </div>
                <div className='mb-5'>  <h5>Description:</h5> <p className='PDescription'>{product.description} </p> </div>
                <div>  <h5>Price:</h5><p className='P-Price' >{currencyFormatter(product.price)} </p>  </div>
                <div>  <h5>Rating:</h5><p className='P-Rating' >{product.rating} </p>  </div>
                <div className='P-Buttons'>   <NavLink className=" btn btn-dark " to={`/updateproduct/${product._id}`} end> 
                <i className="fa-solid fa-pen-to-square"></i>
                        </NavLink></div>
                       
                <div className='P-Buttons'> <button className=' btn btn-danger  '/*  onClick={(e) =>  removeProduct(product._id)} */ ><i className="fa-sharp fa-solid fa-trash"></i></button>
                </div>

               </div >) )
        }
        </div>

 
  )
}

export default ProductListGRAPHQL