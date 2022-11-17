import React from 'react'
import NavbarGlobal from '../components/NavbarGlobal'
import Footer from '../components/Footer'


function ShoppingCartView() {
  return (
    <div>
    <NavbarGlobal />
   
  
   <div style={{"height": "250px"}}></div> 
   <div className='my-5 d-flex justify-content-center align-items-center vh-100"'><h1>Shopping Cart</h1></div>
   <div style={{"height": "750px"}}></div> 
   <Footer />
   </div>
  )
}

export default ShoppingCartView