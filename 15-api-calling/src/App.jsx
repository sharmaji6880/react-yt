import axios from 'axios'
import { useState } from 'react'

const App = () => {
  const  getData = async () => {
    const {data} = await axios.get("https://picsum.photos/v2/list")
    console.log(data)
    setImages(data)
  }
  const [images, setImages] = useState([])
  return (
    <div>
      <button onClick={getData}>Get Images</button>
      {
        images.map((item) => {
          return <img src={item.download_url} alt="" key={item.id}/>
        })
      }
    </div>
  )
}

export default App