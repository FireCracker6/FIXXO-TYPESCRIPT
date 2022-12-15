import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import {Products} from '../models/productsModel'
import {useQuery, gql, useMutation} from '@apollo/client'




export interface ProductContextInterface {
   
    product: any
    products: Products[]
    featuredProducts: Products[] 
    discountProducts: Products[]
    getProduct: (_id: number) => void
    getProducts: () => void
    getFeaturedProducts: (take: number ) => void
    getDiscountProducts: (take: number) => void


  

   
}


 export interface IProductProps {
     children: any
    
 }
 

export const ProductContext = createContext<ProductContextInterface | null>(null)



export const useProductContext = () => {
    return useContext(ProductContext)
}

export const ProductProvider= ({children}: IProductProps)  => {
    const url = `http://localhost:8000/api/products`
    const [product, setProduct]   = useState<string>('')
    const [products, setProducts] = useState<Products[]>([])
    const [featuredProducts, setFeaturedProducts] = useState<Products[]>([])
    const [discountProducts, setDiscountProducts] =  useState<Products[]>([])

  
   
   
    const GET_PRODUCTS_QUERY = gql`{ products { _id, title, imageURL, category, description, price, tag, rating, }}`
   
     const getAllProducts = useQuery(GET_PRODUCTS_QUERY)
    const getProducts = async ( ) => {
       
        const res = await fetch(getAllProducts.data)
       /* console.log(getAllProducts.data) */
        if (getAllProducts.loading) return <p>Loading...</p>
        if(getAllProducts.error) return <p>Error...</p>
        else {
          
          /*   setProducts(await getAllProducts.data.articleNumber) */
           setProducts(await (getAllProducts.data.products))
            console.log(getAllProducts.data)  
        }
        /* const res = await fetch(url)
         */

    }
    
    const getFeaturedProducts = async (take: number = 0) => {
        let baseURL = `${url}`
 
         if (take !== 0) 
        baseURL +=`/featured/${take}`
      
 
        const res = await fetch(baseURL)
        setFeaturedProducts(await res.json())
        console.log('baseURL ' + baseURL)
    }
     const getDiscountProducts = async (take : number) => {
        let baseDiscountURL = `${url}`
 
        if (take !== undefined)
        baseDiscountURL +=`/discount/${take}`
 
        const res = await fetch(baseDiscountURL)
        setDiscountProducts(await res.json())
        console.log('baseURL ' + baseDiscountURL)
     } 
    const getProduct = async (id: number) => {
        const res = await fetch(`${url}/product/details/${id}`)
        setProduct(await res.json())

       
    }

    return <ProductContext.Provider value={{ product, getProduct, getProducts,  products, featuredProducts,discountProducts, getFeaturedProducts,  getDiscountProducts }}>
        {children}
    </ProductContext.Provider>


}