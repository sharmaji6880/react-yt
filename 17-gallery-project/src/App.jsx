import axios from 'axios'
import { useEffect, useState } from 'react'

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)
  const [loading, setLoading] = useState(false)
  const getData = async () => {
    setLoading(true)
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data)
    setLoading(false)
  }
  useEffect(() => {
    getData()
  },[index])
  return (
    <div className='bg-black h-screen p-4 text-white'>
      {
        loading == true?
        <p className='fixed top-1/2 left-1/2'>Loading.....</p>:
        <div className= "flex flex-wrap gap-x-25 justify-center pt-10">
        
          
            {
                userData.map((item,index) => {
                      return <div>

                                 <a href={item.url} target="_blank">
                                      <img 
                                      src={item.download_url} 
                                      alt="" 
                                      key={index}
                                      className="h-50 w-50 rounded cursor-pointer"
                                      title={item.url}
                                      />
                                 </a>
                                <p className="text-center mt-4 font-bold text-xl">{item.author}</p>
                            </div>
                })
            }
            <div className="flex gap-10 justify-center w-full mt-10 fixed bottom-20">
              <button 
              style={{opacity: index == 1? 0.5:1}}
              className="py-4 px-10 bg-cornflowerblue text-white rounded-xl cursor-pointer active:scale-95 text-xl"
              onClick={() => {
                if(index > 1) {
                  setIndex(index-1)
                }
              }}
              >
                Prev
              </button>
              <p className="self-center text-xl">Page {index}</p>
              <button 
              style={{opacity: index == 20? 0.5:1}}
              className="py-4 px-10 bg-white text-cornflowerblue rounded-xl cursor-pointer active:scale-95 text-xl"
              onClick={() =>{
                if(index < 20) {
                  setIndex(index+1)
                }
              } }
              >
                Next
              </button>
            </div>
          
          
        
      </div>
      }
      
      
    </div>
  )
}

export default App