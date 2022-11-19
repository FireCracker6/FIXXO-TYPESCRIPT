import './MapSection'
import MapSection2 from './MapSection'
import BreadCrumbSections from './BreadCrumbsSections'

import { ContactForm, } from '../ContactForm'


function Contacts() {
  return (
    <>

 <div className="container" style={{height: "100px"}}></div>
<BreadCrumbSections currentPage="Contacts"/>
<MapSection2 />
    


<ContactForm />


    
    </>
  )
}

export default Contacts