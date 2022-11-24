import React from 'react'
import {UserContext, IUserContext } from '../contexts/UserContext'

const ProductsForm = () => {
    const { userRequest, setUserRequest, create } = React.useContext(UserContext) as IUserContext
  return (
    <form onSubmit={create} className="d-grid mb-5">
        
        <h3 className='display-6 mb-4'>Create User</h3>
        <input value={userRequest.firstName} onChange={(e) =>  setUserRequest({...userRequest, firstName: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Enter your first name...' />

        <input value={userRequest.lastName} onChange={(e) =>  setUserRequest({...userRequest, lastName: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Enter your last name...'/>

        <input value={userRequest.email} onChange={(e) =>  setUserRequest({...userRequest, email: e.target.value})} type="email" className='form-control py-2 mb-3' placeholder='Enter your email adress...' />
        <input value={userRequest.password} onChange={(e) =>  setUserRequest({...userRequest, password: e.target.value})} type="password" className='form-control py-2 mb-3' placeholder='Enter your password...' />
        <button type='submit' className='btn btn-success py-2 mt-3'>CREATE USER</button>

    </form>
  )
}

export default ProductsForm