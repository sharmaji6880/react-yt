import React from 'react'
import Card from './components/Card.jsx'
import jobs from './data.js'

const App = () => {
  return (
    <div className="parent">
      {
         jobs.map(function(job) {
            return <Card key={job.id} {...job}/>
         })
      }
    </div>
  )
}

export default App