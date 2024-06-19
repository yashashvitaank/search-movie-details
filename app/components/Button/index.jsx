'use client'
import React from 'react'

function Button({name, handleSubmit}) {
  return (
    <button type='submit' className="bg-green-500 rounded p-2 container text-white" onClick={handleSubmit}>{name}</button>
  )
}

export default Button