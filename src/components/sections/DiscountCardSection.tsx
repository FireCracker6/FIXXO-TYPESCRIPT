import React from 'react'
import DiscountCardMobile from '../cards/DiscountCardMobile'

interface Props {
  items: any[]
}


const DiscountCard2: React.FC<Props> = ( {items = []}) => {

  return (
    
    <section className="disc-card container">
   

        
      <div className="grid-wrapper row row-cols-2 row-cols-sm-2  row-cols-md-2 row-cols-xl-3 g-4 ">
      <div className="item-1">
        <h4>Latest&nbsp;Product</h4>
  
       {

          items.map(product =>    <DiscountCardMobile key={product.articleNumber} item={product} />)


}

       </div>
         
               
   
        
       <div className="item-2">
       <h4>Best&nbsp;Selling&nbsp;Product</h4>
       {

items.map(product =>    <DiscountCardMobile key={product.articleNumber} item={product} />)


}
       
       </div>
               
            
                
     
        
 
           
       <div className="item-3">
       <h4>Top&nbsp;Ratings</h4>
       {

items.map(product =>    <DiscountCardMobile key={product.articleNumber} item={product} />)


}
       
       </div>
               
               
             </div>
          </section>  
              

  )
}

export default DiscountCard2