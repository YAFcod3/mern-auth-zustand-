import React from 'react'
import { useAuthStore } from '../store/auth'
import { useNavigate } from 'react-router-dom'

function ProfilePage() {

  const logout = useAuthStore(state=>state.logout)
  const profile = useAuthStore(state=>state.profile)


const navigate=useNavigate()

  return (
    <div className='profilePage'>
      <h3>ProfilePage</h3>
      <button className='logout' onClick={()=>{
        logout()
        navigate('/login')
        }}>Logout</button>

        <div className='infoProfile'>

        {JSON.stringify(profile)}
        </div>
    </div>
  )
}

export default ProfilePage