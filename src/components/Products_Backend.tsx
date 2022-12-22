import React from 'react'
import { AdminView } from '../views/AdminView'
import Footer from './Footer'
import NavbarGlobal from './NavbarGlobal'
import ProductCreateForm from './ProductCreateForm'
import ProductListGRAPHQL from './ProductListGraphQL'

/* All frontend UI för Backend delen är för nuvarande implementerad här. Det betyder att det finns login,
registering, lägg till ett produkt, ta bort ett produkt, och uppdatera på denna komponenten
updatering sker via en komponent länk, där jag tyckte att sidan inte behövde mera än en back to products list
knapp -- för då ska användaren fokusera på just den produkten, och inget annat :D. Detta också 
för att token inte är implementerad i säkerhets nivån, med GRAPHQL än. */


const Products_Backend = () => {
  return (
    <>
    <NavbarGlobal />
    <div className='display-6 d-flex my-5'> 
        <div className='container d-grid justify-content-center my-5'>
   
      <AdminView />
      <h1 className='my-5'>HI THERE !</h1>
        <h3 className='display-6 mb-4'>Add Update or Delete a Product</h3>
        <ProductCreateForm />
       {/*   <CreateProducts />  */}
    <hr className='my-2' />
   {/*  <ProductsList  /> */} 
    <ProductListGRAPHQL /> 

    </div>
    </div>
    <Footer />
    </>
  )
}

export default Products_Backend