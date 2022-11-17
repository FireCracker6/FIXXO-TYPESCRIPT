import React from 'react'
import NavbarGlobal from '../components/NavbarGlobal'
import Footer from '../components/Footer'

function NotFoundView() {
  return (

    <>
     <NavbarGlobal /> 

    <div className='my-5 d-flex justify-content-center align-items-center' style={{height: "300px"}} ><h1>404 -Page Not Found</h1></div>
    <div className='d-flex justify-content-center align-items-center' style={{ position: "fixed", bottom: "0", width: "100%"}}>
    <Footer />   
    </div>
    </>
  )
}

export default NotFoundView