import React, { useEffect } from 'react'
import {IUserContext, UserContext} from './contexts/UserContext'
import { User } from './models/UserModel'

const UserList = () => {
const { users, getAll, remove} = React.useContext(UserContext) as IUserContext


useEffect(() => {
  getAll()

 
}, [getAll])

const removeUser = (id:number) => {
  remove(id)
}

  return (
   <>
   <div className='container d-grid justify-content-center align-items-center mt-5'>
    <h3 className='display-6 mb-4'>List of Users </h3>
        {
            users.map((user: User) => (<div onClick={() => removeUser(user.id)} className='d-grid justify-content-center mb-3'>{user.firstName} {user.lastName}</div>) )
        }
        </div>
   </>
  )
}

export default UserList