import React from 'react'
import { NavLink } from 'react-router-dom'

const RedButton = ({link, text}) => {
  return (


    <div className='buttons'>

  <NavLink className=" mobile-red-button btn-mobile-border " to={link}>  

   {text}
    </NavLink>
   </div>
  
  )
}



export default RedButton
