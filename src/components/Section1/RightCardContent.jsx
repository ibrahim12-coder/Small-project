import {ArrowRight} from "lucide-react";

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full  p-10 flex flex-col justify-between">
    <h2 className='bg-white text-2xl font-semibold rounded-full p-6 h-14 w-14 flex justify-between items-center'>{props.id}</h2>
    <div>
      <p className="text-xl leading-normal text-white mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laborum atque tempore in perspiciatis 
      </p>
   <div className="flex justify-between ">
    <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full text-lg'>{props.tag}</button>
    <button className='bg-blue-600 text-white font-medium px-4 py-3 rounded-full text-lg'><ArrowRight size={15} /></button>
    </div>
    </div>
    </div>
  )
}

export default RightCardContent