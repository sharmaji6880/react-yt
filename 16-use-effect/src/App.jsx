import React, { useEffect, useState } from 'react'

const App = () => {
  function aChanging() {
    console.log("a is changing")
  }
  function bChanging() {
    console.log("b is changing")
  }
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  useEffect(() => {
    aChanging()
  },[a])
  useEffect(() => {
    bChanging()
  },[b])
  return (
    <div>
      <h1>a: {a}</h1>
      <h1>b: {b}</h1>
      <button
      onClick={() => {
        setA(a+1)
      }}
      >
        Increment a
      </button>
      <button
      onClick={() => {
        setB(b+1)
      }}
      >
        Icrement b
      </button>
    </div>
  )
}

export default App