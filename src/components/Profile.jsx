import React , { useContext } from 'react'
import MyContext from '../context/MyContext'

function Profile() {
  const { user } = useContext(MyContext);

 
  return (
        <>
          <h2>User : { user.name }</h2>
          <p>Status : { user.loggedIn ? "Loggin In" : "Logged Out" }</p>
        </>
  )
}

export default Profile