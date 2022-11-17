import React from 'react'
import { useState } from 'react'


// This is original code by Leah Saxe
export const QuantityButton = ({number}) => {
   const [count, setCount] =  useState((countInitial) => {
    return 1
   })



    function decrementCount() {
        setCount(prevCount =>
            prevCount - 1)
        }


    function incrementCount() {
        
        setCount(prevCount =>
            prevCount + 1)
        }

        // quantity set to max 13 products minimum 1 product // not implemented to shoppingcart function yet. 
        const initNumber = 1
        switch(count) {
          
        case -1:  
        setCount(initNumber);
        break
        case 0:
        setCount(initNumber);
        break
        case 13:
        setCount(initNumber);
        break
       
    }
      function countNumber ({count}) {
        console.log(count)
        return count
       
      }
        
 
   

  return (
   
   <>
   <div className='quantity-group'>
   <button className='qbtn' title='decrement' onClick={decrementCount} ><i className="fa-regular fa-minus"></i></button>
   <input type="text" className='q-text' data-testid="count" value={count} disabled/>  
   <button className='qbtn' title='increment'  onClick={incrementCount}><i className="fa-regular fa-plus"></i></button>
   </div>

   
   </>
  )
}
