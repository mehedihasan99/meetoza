import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../../redux/features/authSlice'
import Field from '../common/Field'

export default function LoginForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm()
  async function formSubmit(formData) {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_UR}/auth/login`,
        formData
      )

      if (response.status === 200) {
        const { user, token } = response.data
        if (token) {
          const authToken = token.token
          const refreshToken = token.refreshToken
          dispatch(setUser({ user, authToken, refreshToken }))
          navigate('/')
        }
      }
    } catch (error) {
      setError('root.random', {
        type: 'manual',
        message: 'Invalid email or password',
      })
    }
  }
  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className="border-b border-[#161212] pb-10 lg:pb-[60px]"
    >
      <Field label="Email" error={errors.email}>
        <input
          {...register('email', {
            required: 'Please enter a valid email',
          })}
          className={`${errors.password && 'border border-red-500'} auth-input`}
          name="email"
          type="email"
          id="email"
        />
      </Field>
      <Field label="Password" error={errors.password}>
        <input
          {...register('password', {
            required: 'Please enter a valid password',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters',
            },
          })}
          className={`${errors.password && 'border border-red-500'} auth-input`}
          name="password"
          type="password"
          id="password"
        />
      </Field>
      <p>{errors?.root?.random?.message}</p>
      <Field>
        <button
          className="auth-input bg-gray-600 text-white font-bold text-CoralBlue transition-all hover:opacity-90"
          type="submit"
        >
          Login
        </button>
      </Field>
    </form>
  )
}
