import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import useAxios from '../hooks/useAxios'

export default function ProfilePage() {
  const [user, setUser] = useState({})
  const [post, setPost] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const { api } = useAxios()
  const { user: auth } = useSelector((state) => state.auth.user)
  console.log(user)
  useEffect(() => {
    async function fetchProfile() {
      setIsLoading(true)
      try {
        const response = await api.get(`/profile/${auth?.id}`)
        setUser(response.data.user)
        setPost(response.data.posts)
      } catch (error) {
        console.error(error)
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchProfile()
  }, [])
  if (isLoading) return <p>Loading...</p>
  return (
    <div>
      profile page: {user?.firstName} {user?.lastName}{' '}
      <p>Post length: {post.length}</p>
    </div>
  )
}
