
import React, { useState } from 'react'
import {useQuery, gql, useMutation} from '@apollo/client'


// Get TOKEN fungerar (visas i console.log), men har inte haft tid till att få det att funka med secure routes

const SigninAdmin = () => {

  

  const LOGIN_USER = gql 

 
  `
  mutation LoginUser($email: String!, $password: String!) {
  loginUser( email: $email, password: $password) {
    email
    password
  }
}

`
const default_value = {email: '', password: ''}

const [user, setUser] = useState(default_value)
const [loginUser] = useMutation(LOGIN_USER) 


const handleSignIn = async (e: any) => {
  e.preventDefault()
  if (user.email !== '' && user.password !== '') { 
  loginUser({variables:  user}) 
  setUser(default_value)
  const result = await fetch('http://localhost:8000/api/authentication/signin', {
    method: 'post',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
})

const data = await result.json()
console.log(data.accessToken)
localStorage.setItem('accessToken', data.accessToken)
 
}
else
console.log('Please enter email and password')
}




  return (
    <div className='container d-flex justify-content-center my-5'>
    
    <form onSubmit={handleSignIn}>
    <legend >Logga in Admin:</legend>
    <input value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} className='form-control mb-3' placeholder='Ange epost...'/>
            <input value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} className='form-control mb-3'type='password' placeholder='Ange lösenord...'/>
           <div className='updateButton'> <button type="submit" className="d-grid btn btn-secondary"  >LOGGA IN </button></div>
            </form>
    </div>
  )
}

export default SigninAdmin