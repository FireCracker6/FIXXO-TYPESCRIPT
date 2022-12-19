export interface Product{

    _id: number
    title: string
    category: string
    imageURL: string
    description: string
    tag: string 
    price: string | number
    rating: number
  
}
export interface ProductRequest {

    _id: number 
   
    title: string
    category: string
    imageURL: string
    description: string
    tag: string 
    price: string | number
    rating:  string | number
}
