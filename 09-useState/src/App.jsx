import React, { useState } from 'react'


const App = () => {
  const [num, setNum] = useState(0)
  return (
    <div>
      <div className="parent">
        <button
        onClick = {
          () => {
            setNum(num+1);
          }
        }
        >Increase</button>
        <button
        onClick = {
          () => {
            setNum(num-1);
          }
        }>Decrease</button>
      </div>
      <button className="val">Value : {num}</button>
      
    </div>
  )
}

export default App