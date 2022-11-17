import React from 'react'

import Contacts from '../components/sections/Contacts';
import Footer from '../components/Footer'
import NavbarGlobal from '../components/NavbarGlobal';
/* import Navbar from '../components/Navbar';
 */


function ContactsView() {

/* window.top.document.title = "Contacts | Fixxo." */
  return (
    <div>
      <NavbarGlobal />
     
      {/* <Navbar /> */}

      <Contacts />

     <Footer />
    </div>
  )
}

export default ContactsView