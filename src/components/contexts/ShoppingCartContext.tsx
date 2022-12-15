import { ShoppingCart } from "../ShoppingCart";
import { createContext, useContext, useState } from "react";

export interface ShoppingCartContextInterface {
  
    _id?: number
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

    const getItemQuantity = (_id: any) => {
        return cartItems.find(item => item._id === _id)?.quantity || 0
    }

    const incrementQuantity = (cartItem: { _id: any; product: any; }) => {
        const {_id, product} = cartItem

        setCartItems(items => {
            if (items.find(item => item._id === _id) == null) {
                return [...items, {_id, product, quantity: 1}]
            }
            else {
                return items.map(item => {
                    if (item._id === _id) {
                        return {...item, quantity: item.quantity +1}
                    }
                    else
                    return item
                })
            }
        })

      
    }
    const incrementDetailQuantity = (cartItem: { _id: any; product: any; }) => {
        const {_id, product} = cartItem

        setCartItems(items => {
            if (items.find(item => item._id === _id) == null) {
                return [...items, {_id, product, quantity: 5}]
            }
            else {
                return items.map(item => {
                    if (item._id === _id) {
                        return {...item, quantity: item.quantity + 5}
                    }
                    else
                    return item
                })
            }
        })

      
    }
    const decrementQuantity = (cartItem: { _id: any; }) => {
        const {_id} = cartItem

        setCartItems(items => {
            if (items.find(item => item._id === _id).quantity === 1) {
                return items.filter(item => item._id !== _id)
            }
            else {
                return items.map(item => {
                    if (item._id === _id) {
                        return {...item, quantity: item.quantity -1 }
                    }
                    else
                    return item
                })
            }
        })  
    }

    

  
    const removeItem = (_id: any) => {
        setCartItems(items => {
            return items.filter(item => item._id !== _id)
        })
    }

    return <ShoppingCartContext.Provider value = {{cartItems, cartQuantity, getItemQuantity, incrementQuantity, decrementQuantity, removeItem }} >
        {children}
        <ShoppingCart />
    </ShoppingCartContext.Provider>

}

export default ShoppingCartContext