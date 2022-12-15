import React, { useEffect } from 'react'
import NavbarGlobal from '../components/NavbarGlobal'
import Footer from '../components/Footer'
import ProductGridSection from '../components/sections/ProductGridSection'
import BreadCrumbsSections from '../components/sections/BreadCrumbsSections'

import {ProductContextInterface, useProductContext } from '../components/contexts/ProductContext'

interface Props {
  title: string
}

export const ProductsView: React.FC<Props> = ({title }) => {

document.title = "Products | Fixxo." 
  const {products, getProducts} = useProductContext() as ProductContextInterface

  useEffect(() => {
    getProducts()
  },[products, getProducts])
  


  return (
    <div>
    <NavbarGlobal />
 
    <div className="container" style={{height: "100px"}}></div>
<BreadCrumbsSections currentPage="Products"/>
 
   <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4'></div>


          
           <ProductGridSection title="Products" items={products} /> 

           
      
   <Footer />
   </div>
  )
}
