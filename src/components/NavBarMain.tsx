import React from 'react';

import { NavLink } from 'react-router-dom';


function NavBarMain() {
  return (
    <>
    <div className='container d-flex justify-content-center'>
    <div className='__ulinks'>
      <NavLink to="/" end>Home</NavLink>
      </div>
    <div className='__ulinks'>
    <NavLink to="/categories" end>Categories</NavLink> 
      </div>
    <div className='__ulinks'>
    <NavLink to="/products" >Products</NavLink>
      </div>
    <div className='__ulinks'>
    <NavLink to="/contacts" end>Contacts</NavLink>
      </div>
    </div>
    </>
    
  )
}

export default NavBarMain