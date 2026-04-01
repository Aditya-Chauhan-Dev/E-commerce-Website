import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navigator({title}) {
  return (
    <div className='text-xl'>
      <Link to="/">Home/</Link>
      {title}
    </div>
  )
}

export default Navigator
