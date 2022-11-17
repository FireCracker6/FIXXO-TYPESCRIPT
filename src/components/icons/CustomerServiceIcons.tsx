import React from 'react'
import { NavLink } from 'react-router-dom'



interface Props {
  link: string
  customerImage: any
}


const CustomerServiceIcons: React.FC<Props> = (link, customerImage)  => {
  return (
    
   
   <div className="item">< img src={customerImage} />
 
    </div> 
  )

}

export default CustomerServiceIcons
