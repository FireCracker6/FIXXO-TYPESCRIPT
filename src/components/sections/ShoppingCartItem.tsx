import React from 'react'
import { ShoppingCartContextInterface, useShoppingCart } from '../contexts/ShoppingCartContext'
import { currencyFormatter } from '../utilities/currencyFormatter'

interface Props {
    item: any
}


export const ShoppingCartItem: React.FC<Props> = ({item}) => {

    const { incrementQuantity, decrementQuantity, removeItem }= useShoppingCart() as ShoppingCartContextInterface

   
  return (
    <div className='shoppingcart-item'  >
    <div className="item-image">
        <img src={item.product.imageName} alt={item.product.name}/>
    </div>
        <div className="item-info">
            <div className='item-info-name' data-testid="shoppingCart">{item.product.name} 
             </div> 
             <div className='item-info-quantity-box'>
             <div className="item-info-quantity">

                    <button title='decrement' onClick={()=> decrementQuantity(item)}><i className="fa-light fa-minus"></i></button>    
                        <span className='number' test-id="counter" title="counter" data-testid="counter">  {item.quantity}</span>  
                    <button title='increment'  onClick={() => incrementQuantity(item)}><i className="fa-light fa-plus"></i></button>
                  
                </div>
             </div>
          
          
            </div>
            <div className="item-price">
                <div> {currencyFormatter(item.product.price * item.quantity)}</div>
                <button onClick={() => removeItem(item.articleNumber)}><i className='fa-solid fa-trash'></i> </button>
        </div>
    </div>
  )
}
