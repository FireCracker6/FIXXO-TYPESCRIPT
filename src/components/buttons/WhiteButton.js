 import React from 'react'
import { NavLink } from 'react-router-dom'

const WhiteButton= ({link, text}) => {
  return (
<div className='buttons'>

  <NavLink className=" white-button btn-border-white " to={link}>  

   {text}
    </NavLink>
   </div>
  
  )
}

export default WhiteButton 