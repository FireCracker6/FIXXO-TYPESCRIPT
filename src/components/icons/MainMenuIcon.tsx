import React from 'react'
import { NavLink } from 'react-router-dom'

interface Props {
  link: string
  icon: any
  quantity: any
}

const MainMenuIcon: React.FC<Props> = ({link, icon, quantity }) => {
  return (
   
    <NavLink className=" __btn-background" to={link} end>
    
        <span className=" badge rounded-pill bg-theme">{}</span>
      
        <i className={icon}></i>


    
      
    </NavLink>
  
  )
}

export default MainMenuIcon