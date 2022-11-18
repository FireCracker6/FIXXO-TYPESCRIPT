import React from 'react'




import ContactFormsSection from './ContactFormsSection' 
import './MapSection'
import MapSection2 from './MapSection'
import BreadCrumbSections from './BreadCrumbsSections'
import Registration from '../Registration'
import { SignUp } from '../ContactForm'


function Contacts() {
  return (
    <>

 <div className="container" style={{height: "100px"}}></div>
<BreadCrumbSections currentPage="Contacts"/>
<MapSection2 />
    
{/*  Form section  */}
{/*  <ContactFormsSection /> */}
<SignUp />

{/* <Registration /> */}
    
    </>
  )
}

export default Contacts