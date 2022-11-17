import { ShoppingCart } from "../ShoppingCart";
import { createContext, useContext, useState } from "react";

export interface ShoppingCartContextInterface {
  
    articleNumber?: number
    quantity?: number | null
    cartItems?: any
    cartQuantity: number
    getItemQuantity: any
    incrementQuantity: any
    decrementQuantity: any
    removeItem: any
    
}
export  interface IShoppingCartProps {
    children: any
   
    
    
}



const ShoppingCartContext = createContext<ShoppingCartContextInterface | null>(null)

export const useShoppingCart = () => {
    return useContext (ShoppingCartContext)
}



export const ShoppingCartProvider = ({children} : IShoppingCartProps ) => {

    const[cartItems, setCartItems] = useState<any[]>([])

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0
    )

    const getItemQuantity = (articleNumber: any) => {
        return cartItems.find(item => item.articleNumber === articleNumber)?.quantity || 0
    }

    const incrementQuantity = (cartItem: { articleNumber: any; product: any; }) => {
        const {articleNumber, product} = cartItem

        setCartItems(items => {
            if (items.find(item => item.articleNumber === articleNumber) == null) {
                return [...items, {articleNumber, product, quantity: 1}]
            }
            else {
                return items.map(item => {
                    if (item.articleNumber === articleNumber) {
                        return {...item, quantity: item.quantity +1}
                    }
                    else
                    return item
                })
            }
        })

      
    }
    const incrementDetailQuantity = (cartItem: { articleNumber: any; product: any; }) => {
        const {articleNumber, product} = cartItem

        setCartItems(items => {
            if (items.find(item => item.articleNumber === articleNumber) == null) {
                return [...items, {articleNumber, product, quantity: 5}]
            }
            else {
                return items.map(item => {
                    if (item.articleNumber === articleNumber) {
                        return {...item, quantity: item.quantity + 5}
                    }
                    else
                    return item
                })
            }
        })

      
    }
    const decrementQuantity = (cartItem: { articleNumber: any; }) => {
        const {articleNumber} = cartItem

        setCartItems(items => {
            if (items.find(item => item.articleNumber === articleNumber).quantity === 1) {
                return items.filter(item => item.articleNumber !== articleNumber)
            }
            else {
                return items.map(item => {
                    if (item.articleNumber === articleNumber) {
                        return {...item, quantity: item.quantity -1 }
                    }
                    else
                    return item
                })
            }
        })  
    }

    

  
    const removeItem = (articleNumber: any) => {
        setCartItems(items => {
            return items.filter(item => item.articleNumber !== articleNumber)
        })
    }

    return <ShoppingCartContext.Provider value = {{cartItems, cartQuantity, getItemQuantity, incrementQuantity, decrementQuantity, removeItem }} >
        {children}
        <ShoppingCart />
    </ShoppingCartContext.Provider>

}

export default ShoppingCartContext