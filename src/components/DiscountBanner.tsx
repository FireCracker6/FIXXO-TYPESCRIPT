import React from 'react'
import WhiteButton from './buttons/WhiteButton'

interface Props {
  title: string
}

const DiscountBanner:React.FC<Props> = ({title}) => {
  return (
    <section className="discount">
    <div className="container">
    <div className="discount-banner">
        <div className="info">
        <h2>{title}</h2>
        <h3>Women's, Men's & Kids' Winter Fashion</h3>
         
        <WhiteButton link="/products"  text="FLASH SALE" />
    </div>
    </div>
    </div>
    
    </section>
  )
}

export default DiscountBanner