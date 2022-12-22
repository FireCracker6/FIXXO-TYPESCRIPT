
import React, { useState } from 'react'


// Användare - Registering via GraphQL Blir registrerad i Mongodb med alla fält ifyllda. Går att logga in sen med epost och lösenord. Man får en token, som än inte är implementerad i systemet.

import {useQuery, gql, useMutation} from '@apollo/client'
const POST_USER_QUERY = gql

    
    `
       mutation AddUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
       addUser(firstName: $firstName, lastName: $lastName,  email: $email, password: $password) {
         firstName, email
       }
     }
   
     `

const RegisterAdmin = () => {

    const default_value = {firstName: '', lastName: '', email: '', password: ''}
    const [user, setUser] = useState(default_value)
  
    const [addUser] = useMutation(POST_USER_QUERY) 

    const handleSignUp = async (e: any) => {

       
        e.preventDefault()
        if (user.email !== '' && user.firstName !== '' && user.lastName !== '' && user.password !== '') {
            addUser({variables:  user}) 
            console.log(`Andändare med epost ${user.email} registering lyckades!`)
        }
    
        else
        console.log('Vänligen fyll i alla fälten! ')
        setUser(default_value)
    
        }
    
  
  return (
    <div>
   
       <form onSubmit={handleSignUp}>

            <legend >Registrera Dig:</legend>
           
            <input value={user.firstName} onChange={(e) => setUser({...user, firstName: e.target.value})} className='form-control mb-3' placeholder='Ange ett Förnamn...'/>
            <input value={user.lastName} onChange={(e) => setUser({...user, lastName: e.target.value})} className='form-control mb-3' placeholder='Ange ett Efternamn...'/>
            <input value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} className='form-control mb-3' placeholder='Ange epost...'/>
            <input value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} className='form-control mb-3' placeholder='Ange ett lösenord...'/>


        <div className="updateButton "><button type="submit" className="btn btn-secondary px-5 py-2">REGISTERA DIG</button></div>
      
        </form>
</div>
  )
}

export default RegisterAdmin