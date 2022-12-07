export interface Product{

    articleNumber: number
    title: string
    category: string
    imageURL: string
    description: string
    tag: string 
    price:  number
    rating: number
  
}
export interface ProductRequest {
   
    title: string
    category: string
    imageURL: string
    description: string
    tag: string 
    price: string | number
    rating:  string | number
}
