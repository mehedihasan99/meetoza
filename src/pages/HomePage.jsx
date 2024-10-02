import React from 'react'
import useAuth from '../hooks/useAuth'

export default function HomePage() {
  const { auth } = useAuth()
  console.log(auth.user.email)
  return <div>home</div>
}
