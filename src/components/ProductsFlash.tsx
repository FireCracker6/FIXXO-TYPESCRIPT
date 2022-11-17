import React from 'react'
import BlackButton from './buttons/BlackButton'

function ProductsFlash() {
  return (


<>

<div className="__GRID-container">
        <div className="item item-1">
            <div className="prod-text">
              <h2><strong>Winter Clearance<br/>Up To 70% OFF</strong> </h2>
          
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem apriam eaque ipsa quae ab illo inventore.</p>
           
            <BlackButton link="/products" text="SHOP NOW" />
          
         
        </div>
        
        </div>
        <div className="item item-2">
            <div className="prod-text">
                 <h2><strong>New<br/>Arrivals</strong></h2>
            
                 <BlackButton link="/products" text="SHOP NOW" />
           </div>
        </div>
    </div>
    
    </>
   
  )
}




export default ProductsFlash