import React from 'react'
import { useParams } from 'react-router-dom'
import {UserContext, IUserContext } from './contexts/UserContext'
import { useEffect } from 'react'



const UpdateForm= () => {

  const { id } : any = useParams();
  
    const { user, setUser, get, update } = React.useContext(UserContext) as IUserContext

    useEffect(() => {
    return get(id)
    
    }, [get, id])
    
  return (
    <form onSubmit={update} className="d-grid mb-5">
        
        <h3 className='display-6 mb-4'>Update User</h3>
        <input type="hidden" value={user.id} />
        <input value={user.firstName} onChange={(e) =>  setUser({...user, firstName: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Enter your first name...' />

        <input value={user.lastName} onChange={(e) =>  setUser({...user, lastName: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Enter your last name...'/>

        <input value={user.email} onChange={(e) =>  setUser({...user, email: e.target.value})} type="email" className='form-control py-2 mb-3' placeholder='Enter your email adress...' />
     
        <button type='submit' className='btn btn-success py-2 mt-3'>CREATE USER</button>

    </form>
  )
}

export default UpdateForm