import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-4 px-8 bg-cyan-900">
        <h2 className="text-2xl font-bold">bitlandsaga</h2>
        <div className='flex gap-10'>
          <Link className="text-lg font-medium" to="/home">Home</Link>
          <Link className="text-lg font-medium" to="/about">About</Link>
          <Link className="text-lg font-medium" to="/courses">Courses</Link>
          <Link className="text-lg font-medium" to="/product">Product</Link>
        </div>
    </div>
  )
}

export default Navbar