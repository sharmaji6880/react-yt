import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
  const navigate = useNavigate()
  return (
    <div className="py-3 px-5 bg-cyan-700 ">
        <button 
        className="font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
        onClick={() => {
          navigate("/home")
        }}
        >
          Return to Home Page
        </button>

        <button 
        className="font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
        onClick={() => {
          navigate(-1)
        }}
        >
          Go Back
        </button>

         <button 
        className="font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
        onClick={() => {
          navigate(1)
        }}
        >
          Next
        </button>
    </div>
  )
}

export default Navbar2