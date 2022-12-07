import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import {Products} from '../models/productsModel'


export interface ProductContextInterface {
   
    product: any
    products: Products[]
    featuredProducts: Products[] 
    discountProducts: Products[]
    getProduct: (articleNumber: number) => void
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
    const url = `http://localhost:5000/api/products`
    const [product, setProduct]   = useState<string>('')
    const [products, setProducts] = useState<Products[]>([])
    const [featuredProducts, setFeaturedProducts] = useState<Products[]>([])
    const [discountProducts, setDiscountProducts] =  useState<Products[]>([])

  


    const getProducts = async ( ) => {
        const res = await fetch(url)
        setProducts(await res.json())

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