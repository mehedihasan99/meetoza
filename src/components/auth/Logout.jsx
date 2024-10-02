import React from 'react'
import { useNavigate } from 'react-router-dom'
import logOut from '../../assets/icons/logout.svg'
import useAuth from '../../hooks/useAuth'
export default function Logout() {
  const navigate = useNavigate()
  const { setAuth } = useAuth()
  function handleLogout() {
    console.log('Logged out')
    setAuth({})
    navigate('/login')
  }
  return (
    <button className="icon-btn" onClick={handleLogout}>
      <img src={logOut} alt="Notification" />
    </button>
  )
}
