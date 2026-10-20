import React from 'react'

const App = () => {
  function inputChanged(user) {
    console.log("User is Typing");
    console.log("Hello from ", user)
  }
  return (
    <div>
      <input 
      type="text" 
      placeholder='Enter name' 
      onChange = {function(e) {
        inputChanged("Raghav")
      }}
      />
    </div>
  )
}

export default App