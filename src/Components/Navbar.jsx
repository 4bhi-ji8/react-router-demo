import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='fixed left-0 top-0 w-full flex justify-between p-5 bg-blue-900'>
      <div className='text-2xl font-bold text-white'>
        R-R-D
      </div>
      <ul className='flex space-x-4'>
        <li className='text-indigo-100 hover:text-blue-500'><NavLink to="/">Home</NavLink></li>
        <li className='text-indigo-100 hover:text-blue-500'><NavLink to ="/about">About</NavLink></li>
        <li className='text-indigo-100 hover:text-blue-500'><NavLink to ="/users">Users</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar