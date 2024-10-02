import React from 'react'

export default function Field({ label, children, htmlFor, error }) {
  return (
    <div className="form-control">
      {label && <label className="auth-label">{label}</label>}
      {children}
      {error && (
        <div role="alert" className="text-red-600">
          {error.message}
        </div>
      )}
    </div>
  )
}
