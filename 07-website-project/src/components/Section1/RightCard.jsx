import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className="h-full shrink-0 relative w-80 overflow-hidden rounded-4xl">
        <img className="h-full w-full object-cover" src={props.user.img} alt="" />
        <RightCardContent user={props.user} id={props.id}/>
    </div>
  )
}

export default RightCard