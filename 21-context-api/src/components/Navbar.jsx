import React from 'react'
import Nav2 from './Nav2'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = () => {
  const [theme] = useContext(ThemeDataContext)
  const nav = 'nav'
  return (
    <div className = {`nav ${theme}`}>
        <h2>bitlandsaga</h2>
        <Nav2/>
    </div>
  )
}

export default Navbar