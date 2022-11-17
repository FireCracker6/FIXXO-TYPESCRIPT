import React from 'react'
 import ExternalLinkIcon from './icons/ExternalLinkIcon'

const Footer = () => {
  return (
    <footer>
     {/*  <div className='container-fluid'> */}
    <div className="footer-text">
      <div className="social-media" >
      <ExternalLinkIcon link="https://facebook.com" icon="fa-brands fa-facebook-f" /> 
      <ExternalLinkIcon link="https://instagram.com" icon="fa-brands fa-instagram" /> 
      <ExternalLinkIcon link="https://twitter.com" icon="fa-brands fa-twitter" /> 
      <ExternalLinkIcon link="https://google.com icon=" icon="fa-brands fa-google" /> 
      <ExternalLinkIcon link="https://linkedin.com'" icon="fa-brands fa-linkedin" />  
      </div>
  <p> &copy; 2022 Fixxo. All Rights Reserved </p>
  </div>

</footer>
  )
}

export default Footer