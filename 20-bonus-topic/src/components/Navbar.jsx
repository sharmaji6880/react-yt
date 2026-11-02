import React from 'react'

const Navbar = (props) => {
  return (
    <div>
        <p>Current theme is {props.theme}</p>
        <button
        onClick={() => {
            props.setTheme(
                props.theme === 'dark'? 'light':'dark'
            )
        }} 
        >
            Change Theme
        </button> 
    </div>
  )
}

export default Navbar