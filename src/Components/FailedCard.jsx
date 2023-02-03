import React,{useContext} from 'react'
import TodoContext from '../Context/TodoContext'

const FailedCard = () => {

    const a = useContext(TodoContext)
  return (
    <div className='h-20 w-[30rem] border absolute top-3 z-10 border-slate-400 overflow-hidden flex'>
        <div className="w-2 h-full bg-red-500   "></div>
        <div className=" w-full flex items-center justify-center  relative font-bold bg-white bg-red-200">Failed to Signup ! Please try again
        <span onClick={()=>{a.setAlert(false)}} className='mr-2 cursor-pointer flex items-center justify-center  w-8 h-8 text-black border-red-100 absolute right-0'><i class="fa-solid fa-close "></i></span>
        </div>
    
    </div>
  )
}

export default FailedCard