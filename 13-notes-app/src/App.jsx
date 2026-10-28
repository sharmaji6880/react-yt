import React, { useState } from 'react'
import Note from './assets/note.png'

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault()
    const copyTask = [...task,{title,details}]
    setTask(copyTask)
    setTitle("")
    setDetails("")
  }
  const deleteNote = (e,index) => {
    const copyTask = [...task]
    copyTask.splice(index,1)
    setTask(copyTask)
  }
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [task, setTask] = useState([])
  return (
    <>
    <div className='h-screen bg-black text-white lg:flex'>
      
        <form 
        className='flex items-start flex-col gap-4 p-10 lg:w-1/2'
        onSubmit = {submitHandler}
        >
              <h1 className="text-4xl font-bold">Add Notes</h1>
              <input 
              type="text" 
              placeholder="Enter Notes Heading"
              className="px-5 py-2  w-full border-2 font-medium rounded outline-none"
              value={title}
              onChange = {(e) => {
                setTitle(e.target.value)
              }}
              />
              <textarea 
              type="text" 
              className="px-5 py-2  w-full h-32 border-2 font-medium rounded outline-none"
              placeholder="Write Details Here"
              value={details}
              onChange = {(e) => {
                setDetails(e.target.value)
              }}
              />
              <button
              className='bg-white w-full text-black font-medium px-5 py-2 rounded cursor-pointer active:scale-95'
              >
                Add Notes
              </button>
        </form>

        <div 
        className="flex-wrap p-10 bg-gray-900 lg:w-1/2 gap-5 lg:border-l-2 overflow-auto"
        >
          <h1 className="text-4xl font-bold">Recent Notes</h1>

          <div className = "scrollbar-none flex flex-wrap items-start justify-start gap-5 mt-5 overflow-auto">
            {
              task.map((item, index) => {
                return <div 
                        key={index} 
                        onClick={(e) => {
                          setCurrentTitle(item.title)
                          setCurrentTitle(item.details)
                          setVisible(true)
                        }}
                        title="Click to Expand"
                        className=" py-8 px-4 bg-cover bg-[url('https://www.onlygfx.com/wp-content/uploads/2022/03/realistic-notebook-notepage-paper-background-2-cover.jpg')]  cursor-pointer   h-100 w-80 rounded-2xl bg-white justify-between text-black flex flex-col p-4">
                            
                            <div className="h-4/5 overflow-scroll scrollbar-none">
                              <h3 className="leading-tight text-xl font-bold text-center -translate-y-1">{item.title}</h3>
                              <p className="mt-2 leadint-tight font-medium text-gray-500">{item.details}</p>
                            </div>
                            <div className="h-1/5 self-center">
                              <button 
                              className="  bg-red-400 py-2 px-8 rounded-xl text-white cursor-pointer active:scale-90"
                              onClick = {(e) => {
                                deleteNote(e,index)
                              }}
                              >
                                Delete
                              </button>
                            </div>
                        </div>
              })
            }
          </div>
        </div>
        
      
    </div>
    </>

    
  )
}

export default App



