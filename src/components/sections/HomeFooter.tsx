import React from 'react'
import customerService from '../assets/images/icons/customer-service.svg'
import deliveryTruck from '../assets/images/icons/delivery-truck.svg'
import securePayment from '../assets/images/icons/secure-payment.svg'
import { NavLink } from 'react-router-dom'

var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = {customerService}

function HomeFooter() {
  return (
    <section className="home-footer-section">
    <div className="container">
<div className="home-footer">

<div className="item-1"> <div className="item"><NavLink to='/' end/><img src={customerService} /> </div>
    <h3>Customer Support</h3>
    <p>Village did removed enjoyed  <br /> explain talking.</p>
</div>
<div className="item-1"> <div className="item"><NavLink to='/' end/><img src={securePayment} /> </div>
    <h3>Secured Payment</h3>
    <p>Village did removed enjoyed  <br /> explain talking.</p>
</div>
<div className="item-1"> <div className="item"><NavLink to='/' end/><img src={deliveryTruck} /> </div>
    <h3>Free Home Delivery</h3>
    <p>Village did removed enjoyed  <br /> explain talking.</p>
</div>
<div className="item-1"> <div className="item"><NavLink to='/' end/><img src={deliveryTruck} /> </div>
    <h3>30 Day Reuters</h3>
    <p>Village did removed enjoyed  <br /> explain talking.</p>
</div>
   
</div>
</div>
</section>
  )
}

export default HomeFooter