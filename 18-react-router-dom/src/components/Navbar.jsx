import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
        <div>bitlandsaga</div>
        <div className='links'>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar