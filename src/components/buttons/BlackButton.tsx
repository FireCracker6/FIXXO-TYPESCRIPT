import React from 'react'
import { NavLink } from 'react-router-dom'

interface Props {
  link: string
  text: string
}
const BlackButton:React.FC<Props> = ({link, text}) => {
  return (
    <div className='buttons'>

  <NavLink className=" black-button btn-border " to={link}>  

   {text}
    </NavLink>
   </div>
  )
}

export default BlackButton