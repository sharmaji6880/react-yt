import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState('')
  const submitHandler = (e) => {
    console.log("Form submitted by", name)
    e.preventDefault();
    setName('')
  }
  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e);
      }}>
        <input 
        type="text" 
        placeholder="Enter your name"
        onChange = {(e) => {
          setName(e.target.value);
        }}
        value = {name}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App