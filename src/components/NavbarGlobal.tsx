import React from 'react'
import Logo from './assets/images/logo.svg'
import NavBarMain from './NavBarMain'
import CustomerLinks from './CustomerLinks'
import { NavLink } from 'react-router-dom'



/* 
import MobileDropdown from './MobileDropdown'; */

function NavbarGlobal() {
  return (
    <nav className="__navbar">
      <div className="container ">
 {/*        <div className='mobileDropDown'> <MobileDropdown /> </div> */}
   <NavLink to="/" end className='logoType'>Fixxo.</NavLink> 
    <div className='__navbarmain'><NavBarMain /></div>
   <div> <CustomerLinks /></div>
      
      </div>

    </nav>
  )
}

export default NavbarGlobal