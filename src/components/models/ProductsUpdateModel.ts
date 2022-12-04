export interface Product{

    articleNumber: number
    tag: string
    imageURL: string
    category: string
    title: string
    description: string
    price:  number
  
}
export interface ProductRequest {
   
    tag: string
    category: string
    imageURL: string
    title: string
    description: string
    price: string | number
}
