import React from 'react'
import { NavLink } from 'react-router-dom'

interface Props {

  icon: any
  quantity:any
  type: any
}

const CartItemsIcon: React.FC<Props> = ({icon, quantity }) => {
  return (
   
    <NavLink className=" __btn-background" to="" end>
    
        <span className=" badge rounded-pill bg-theme">{quantity}</span>
      
        <i className={icon}></i>


    
      
    </NavLink>
  
  )
}

export default CartItemsIcon