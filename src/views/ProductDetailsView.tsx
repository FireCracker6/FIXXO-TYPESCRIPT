import React from 'react'
import NavbarGlobal from '../components/NavbarGlobal'
import Footer from '../components/Footer'
 import TopBannerDiscount from '../components/TopBannerDiscount' 
 import BreadCrumbsSections from '../components/sections/BreadCrumbsSections'
import { ProductDetailsInfoGrid } from '../components/sections/ProductDetailsInfoGrid'
 import { ProductDetailGalleryHeader } from '../components/ProductDetailGalleryHeader' 
import {Products} from '../components/models/productsModel'
import { ProductContextInterface, useProductContext } from '../components/contexts/ProductContext';
import { useEffect } from 'react'

interface IProductTilesProps {
  
  items: Products[]
  
}










const  ProductDetailsView: React.FC= () =>  {


  const product =   useProductContext() as ProductContextInterface
  const {featuredProducts, getFeaturedProducts} = useProductContext() as ProductContextInterface
  
  useEffect(() => {
    getFeaturedProducts(4)
    
  }, [])



 

  return (
    <>
<NavbarGlobal /> 

   <TopBannerDiscount />
    <BreadCrumbsSections currentPage="Product Details" /> 
   
    <ProductDetailsInfoGrid  items={featuredProducts}/>
    <ProductDetailGalleryHeader  title="Related Products" items={featuredProducts}  />  
   
    <div className="container">


   
    </div>
    <div className="container" style={{height: "100px"}}></div>
    <Footer />   
    
    </>
  )
}

export default ProductDetailsView