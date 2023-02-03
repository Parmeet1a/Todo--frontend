import React,{useContext} from 'react'
import TodoContext from '../Context/TodoContext'

const SuccessCard = () => {

    const a = useContext(TodoContext)
  return (
    <div className='h-20 w-[30rem] border absolute top-3 z-10 border-slate-400 overflow-hidden flex'>
        <div className="w-2 h-full bg-green-500   "></div>
        <div className=" w-full flex items-center justify-center  relative font-bold bg-white bg-green-200">Success !
        <span onClick={()=>{a.setSuccess(false)}} className='mr-2 cursor-pointer flex items-center justify-center  w-8 h-8 text-black border-green-100 absolute right-0'><i class="fa-solid fa-close "></i></span>
        </div>
    
    </div>
  )
}

export default SuccessCard