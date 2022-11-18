import React from 'react'
import { useState } from 'react'
/* import { submitData, validate } from '../scrips/submitAndValidation' */

import User from "../User";




console.log()
const user = {

  name: "awssdasd",
  email: "john.doe@kindacode.com",
  comments: "sdfsdfsdf",
 
  doSomething: () => {
    console.log(`Hello ${user.email}`);
  },
};
const ContactFormSection:React.FC= () => {
  return (
    <div>
      <User
        name={user.name}
        email={user.email}
        comments={[user.comments]}
     
        doSomething={user.doSomething}
      />
    </div>
    
  )
}

export default ContactFormSection