import React from 'react'
import NavbarGlobal from '../components/NavbarGlobal'
import Footer from '../components/Footer'
 import TopBannerDiscount from '../components/TopBannerDiscount' 
 import BreadCrumbsSections from '../components/sections/BreadCrumbsSections'
import { ProductDetailsInfoGrid } from '../components/sections/ProductDetailsInfoGrid'
 import { ProductDetailGalleryHeader } from '../components/ProductDetailGalleryHeader' 
import { ProductContextInterface, useProductContext } from '../components/contexts/ProductContext';
import { useEffect } from 'react'










const  ProductDetailsView: React.FC= () =>  {


 
  const {featuredProducts, getFeaturedProducts} = useProductContext() as ProductContextInterface
  useEffect(() => {
    getFeaturedProducts(4)
  
  
    return () => {
      getFeaturedProducts(3)
 
    }
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