import React from 'react'
import {ShoppingCartContextInterface, useShoppingCart } from '../contexts/ShoppingCartContext'
import { currencyFormatter } from '../utilities/currencyFormatter'

interface Props {
  item: any
}

// This card goes for the end section on the home page
const DiscountCardMobile: React.FC<Props> = ({item}) => {



/*   const { incrementQuantity }= useShoppingCart() as ShoppingCartContextInterface */

  const addToWishList = (e: any) => {
    console.log(`added to wish list)`)
  }

  const addToCompare = (e: any) => {
    console.log("added to compare")
  }
 
  return (
    <div className="card mb-3 " >
    <div className="row g-0">
      <div className="col-md-4">
      <img src={item.imageName}  alt={item.name}/>
      </div>
      <ul className="card-menu ">
        <li><button onClick={addToWishList} className='productButton'><i className="fa-light fa-heart "></i></button></li>
        <li><button onClick={addToCompare}  className='productButton' ><i className="fa-light fa-code-compare fa-flip-vertical"></i></button></li>
        <li><button /* onClick={() => incrementQuantity({articleNumber: item.articleNumber, product: item})} */  className='productButton'><i className="fa-light fa-bag-shopping"></i></button></li>
        </ul>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{item.category}</h5>
          <h4>{item.name}</h4>
                    <div className="text-theme">
                        <i className="fa-solid fa-star-sharp"></i>
                        <i className="fa-solid fa-star-sharp"></i>
                        <i className="fa-solid fa-star-sharp"></i>
                        <i className="fa-solid fa-star-sharp"></i>
                        <i className="fa-solid fa-star-sharp"></i>
                    </div>
            
              <div className="price">
                
                <p className="new-price">{currencyFormatter(item.price)}</p>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default DiscountCardMobile