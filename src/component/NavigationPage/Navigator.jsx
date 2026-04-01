import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navigator({title}) {
  return (
    <div className='text-xl flex gap-1.5'>
      <Link to="/" className='underline'>Home</Link>
      <p>/</p>
      <p className='underline'>{title}</p>
    </div>
  )
}

export default Navigator
