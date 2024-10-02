import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import Field from '../common/Field'

export default function LoginForm() {
  const navigate = useNavigate()
  const { setAuth } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  function formSubmit(formData) {
    const user = { ...formData }
    setAuth({ user })
    navigate('/')
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
