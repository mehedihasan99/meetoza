import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import logOut from '../../assets/icons/logout.svg'
import { setUser } from '../../redux/features/authSlice'
export default function Logout() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  function handleLogout() {
    dispatch(setUser(null))
    navigate('/login')
  }
  return (
    <button className="icon-btn" onClick={handleLogout}>
      <img src={logOut} alt="Notification" />
    </button>
  )
}
