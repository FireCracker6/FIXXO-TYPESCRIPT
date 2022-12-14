
import React, { useState } from "react";
import {ProductsUpdateContext, IProductsUpdateContext} from "./contexts/ProductsUpdateContext";





 const StarRating = ({thisRating}: any) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  
  return (
    <>
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
  
        return (
               <><button
                type="button"
                key={index}
                className={index <= (hover || rating) ? "on" : "off"}
               
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onSubmit={() => setRating(0)}
            >
                <span className="star">&#9733;</span>
            </button></>
          
        )
      })}
    </div>
    </>
  )
 
}

export default StarRating;