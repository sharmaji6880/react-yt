import React from 'react'

const RightCardContent = (props) => {
  console.log(props.user)
  return (
    <div>
        <div className='flex justify-between flex-col  absolute top-0 left-0 h-full w-full p-8'>
            <h2 className="bg-white rounded-full h-12 w-12 flex justify-center items-center text-xl font-semibold">{props.id}</h2>
            <div>
                <p className="text-lg leading-relaxed text-white mb-14 text-shadow-2xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis saepe excepturi nostrum rerum repellendus nobis?</p>
                <div className="flex justify-between">
                    <button style={{backgroundColor:props.user.color}} className="text-white font-medium px-8 py-2 rounded-full ">{props.user.tag}</button>
                    <button style={{backgroundColor:props.user.color}} className= "text-white font-medium px-4 py-2 rounded-full">
                        <i className="ri-arrow-right-line"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent