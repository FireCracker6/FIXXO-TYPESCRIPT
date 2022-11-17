import React from 'react'
import { ShoppingCartContextInterface, useShoppingCart } from '../contexts/ShoppingCartContext';
import MainMenuIcon from '../icons/MainMenuIcon';

const WhiteCircleButton: React.FC = () => {

 /*  let { cartQuantity }= useShoppingCart() as ShoppingCartContextInterface
 */
  return (
    
   <>
     <MainMenuIcon link="/search" icon="fa-light fa-magnifying-glass" quantity={0} />
     <MainMenuIcon link="/compare" icon="fa-light fa-code-compare fa-flip-vertical" quantity={0} />
    <MainMenuIcon link="/wishlist"  icon="fa-light fa-heart" quantity={2} />

    <button className="__btn-background" type="button" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart"  /* quantity={cartQuantity} */ /* icon="fa-light fa-bag-shopping" */> <span className=" badge rounded-pill bg-theme">2</span>
      
    <i className="fa-light fa-bag-shopping"></i></button>
  

    
                         
 
   </>
  )
}

export default WhiteCircleButton