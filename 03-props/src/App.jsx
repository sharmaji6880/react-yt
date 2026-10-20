import React from 'react'
import Card from './components/Card'
import raghav from './assets/raghav.png'
import nandini from './assets/nandini.jpg'
import ritik from './assets/ritik.jpg'

const App = () => {
  return (
    <div className="parent">
      <Card user='Raghav' age = {24} img={raghav}/>
      <Card user='Nandini' age = {24} img={nandini}/>
      <Card user='Ritik'age = {26} img={ritik}/>
    </div>
  )
}

export default App