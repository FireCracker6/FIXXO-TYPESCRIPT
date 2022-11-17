import React, { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import {Products} from '../models/productsModel'
import {Todo} from '../models/todoModel'

export interface ProductContextInterface {
   
    product: string
    products: Products[]
    featuredProducts: Products[]
    getProduct: (articleNumber: string) => void
    getProducts: () => void
    getFeaturedProducts: (take: number) => void


  

   
}


 export interface IProductProps {
     children: any
    
 }
 


export const ProductContext = createContext<ProductContextInterface | null>(null)



export const useProductContext = () => {
    return useContext(ProductContext)
}

export const ProductProvider= ({children}: IProductProps)  => {
    const url = `https://win22-webapi.azurewebsites.net/api/products/`
    const [product, setProduct]   = useState<string>('')
    const [products, setProducts] = useState<Products[]>([])
    const [featuredProducts, setFeaturedProducts] = useState<Products[]>([])
    const [discountProducts, setDiscountProducts] =  useState<Products[]>([])

  


    const getProducts = async ( ) => {
        const res = await fetch(url)
        setProducts(await res.json())

    }
    
    const getFeaturedProducts = async (take = 0) => {
        const res = await fetch(url + `?take=${take}`)
        setFeaturedProducts(await res.json())
    }
    const getDiscountProducts = async (take = 0) => {
        const res = await fetch(url + `?take=${take}`)
        setDiscountProducts(await res.json())
    }
    const getProduct = async (articleNumber: string) => {
        const res = await fetch(url + `${articleNumber}`)
        setProduct(await res.json())
    }

    return <ProductContext.Provider value={{ product, getProduct, getProducts,  products, featuredProducts, getFeaturedProducts}}>
        {children}
    </ProductContext.Provider>


}