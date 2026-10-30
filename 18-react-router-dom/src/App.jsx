import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/home" element = {<Home/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/contact" element = {<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App