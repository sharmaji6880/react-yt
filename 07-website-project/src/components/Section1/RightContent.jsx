import RightCard from './RightCard'

const RightContent = (props) => {
  const arr = [1,2,3]
  return (
    <div id="right" className="h-full w-2/3 p-6 flex flex-nowrap gap-10 overflow-x-auto scrollbar-none rounded-4xl">
        {
          props.users.map((user,index) => {
            return <RightCard key={index} user={user} id={index+1}/>
          })
        }
    </div>
  )
}

export default RightContent