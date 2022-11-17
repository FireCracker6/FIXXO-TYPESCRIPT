import React from 'react'
import { ShoppingCartContextInterface, useShoppingCart } from '../contexts/ShoppingCartContext';
import CartItemsIcon from '../icons/CartItemsIcon';
import MainMenuIcon from '../icons/MainMenuIcon';


const WhiteCircleButton: React.FC = () => {

  let { cartQuantity }= useShoppingCart() as ShoppingCartContextInterface

  return (
    
   <>
     <MainMenuIcon type="button" link="/search" icon="fa-light fa-magnifying-glass" quantity />
     <MainMenuIcon type="button" link="/compare" icon="fa-light fa-code-compare fa-flip-vertical" quantity />
    <MainMenuIcon  type="button" link="/wishlist"  icon="fa-light fa-heart" quantity={2} />
  
  
   <button className="__btn-background" type="button" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart"> <i className="fa-regular fa-bag-shopping"></i><span className=" badge rounded-pill bg-theme">{cartQuantity}</span></button>
  


   
                         
 
   </>
  )
}

export default WhiteCircleButton