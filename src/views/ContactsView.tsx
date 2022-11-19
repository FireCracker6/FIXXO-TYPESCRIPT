

import Contacts from '../components/sections/Contacts';
import Footer from '../components/Footer'
import NavbarGlobal from '../components/NavbarGlobal';


function ContactsView() {

document.title = "Contacts | Fixxo." 
  return (
    <div>
      <NavbarGlobal />

      <Contacts />

     <Footer />
    </div>
  )
}

export default ContactsView