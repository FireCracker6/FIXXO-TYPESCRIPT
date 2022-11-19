
import { ShoppingCartContextInterface, useShoppingCart } from './contexts/ShoppingCartContext'
import { ShoppingCartItem } from './sections/ShoppingCartItem'


export const ShoppingCart = () => {

  const {cartItems } = useShoppingCart() as ShoppingCartContextInterface


  return (
    <div className=" shoppingcart offcanvas offcanvas-end "  tabIndex={-1} id="shoppingCart" aria-labelledby="shoppingCartLabel">
      <div className="offcanvas-header">
        <h4 className="offcanvas-title" id="shoppingCartLabel"><i className="fa-light fa-bag-shopping"></i>&nbsp;&nbsp;&nbsp;Shopping Cart</h4>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body" >
     { 
      cartItems.map((item: any) => (<ShoppingCartItem   key={item.articleNumber} item={item} />))
     }
    </div>
  </div>
  )
}
