import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { api } from '../api'
import { setUser } from '../redux/features/authSlice'

const useAxios = () => {
  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()
  useEffect(() => {
    //* add a request interceptor
    const requestInterceptor = api.interceptors.request.use(
      function (config) {
        // Do something before request is sent
        const authToken = user?.authToken
        if (authToken) {
          config.headers.Authorization = `Bearer ${authToken}`
        }
        return config
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error)
      }
    )
    //* add a response interceptor
    const responseInterceptor = api.interceptors.response.use(
      function (response) {
        return response
      },
      async function (error) {
        const originalRequest = error.config
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true
          try {
            const refreshToken = user?.refreshToken
            const response = await axios.post(
              `${import.meta.env.VITE_SERVER_BASE_URL}/auth/refresh`,
              {
                refreshToken,
              }
            )
            const { token } = response.data
            console.log(`new token: ${token}`)
            dispatch(setUser({ ...user, authToken: token }))
            originalRequest.headers.Authorization = `Bearer ${token}`
            return axios(originalRequest)
          } catch (error) {
            throw new Error(error)
          }
        }
        return Promise.reject(error)
      }
    )
    return () => {
      api.interceptors.request.eject(requestInterceptor)
      api.interceptors.response.eject(responseInterceptor)
    }
  }, [user, dispatch, user.authToken])

  return { api }
}

export default useAxios
