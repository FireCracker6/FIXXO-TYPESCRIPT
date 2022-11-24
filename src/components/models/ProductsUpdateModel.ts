export interface Product{
    articleNumber: number
    imageURL: string
    category: string
    title: string
    description: string
    price:  number
  
}
export interface ProductRequest {
   
    
    category: string
    imageURL: string
    title: string
    description: string
    price: number
}
