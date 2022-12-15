import React from 'react'

import '../App.min.css'; 


import Footer from '../components/Footer';
import HomeFooter from '../components/sections/HomeFooter';
import ProductsBanner from '../components/ProductsBanner';
import Showcase from '../components/Showcase';
import SpecialOffer1 from '../components/sections/SpecialOffer1';
import SpecialOffer2 from '../components/sections/SpecialOffer2';
import Specialty from '../components/sections/Specialty';
import NavbarGlobal from '../components/NavbarGlobal';
import ProductGridSection from '../components/sections/ProductGridSection';
import DiscountCard2 from '../components/sections/DiscountCardSection';
import { useEffect } from 'react';
import { ProductContextInterface } from '../components/contexts/ProductContext';
import {ProductContext } from '../components/contexts/ProductContext';
import PamelaReif  from '../components/PamelaReif';
import DiscountBanner from '../components/DiscountBanner';

const HomeView = () => {
  const {featuredProducts, getFeaturedProducts}  = React.useContext(ProductContext) as ProductContextInterface
  const {discountProducts, getDiscountProducts}  = React.useContext(ProductContext) as ProductContextInterface

  useEffect(() => {
    getFeaturedProducts(4)
    getDiscountProducts(3)
  
    return () => {
      getFeaturedProducts(4)
      getDiscountProducts(3) 
    }
  }, [])


document.title = "Welcome To Fixxo." 

  return (
    <>
        <NavbarGlobal />
        <Showcase />
        <ProductsBanner />
        <ProductGridSection title="Featured Products" items={featuredProducts}/> 
        <PamelaReif />
        <Specialty title="Our Specialty"/>
        <SpecialOffer1  items={featuredProducts} />
        <SpecialOffer2  items={featuredProducts}  />  
        <DiscountBanner title={"Up to 70% off*"} />
        <DiscountCard2 items={discountProducts}/>
        <HomeFooter />
        <Footer />
 
   
    </>
  )
}

export default HomeView
