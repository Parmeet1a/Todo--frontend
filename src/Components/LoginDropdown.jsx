import React,{useContext} from 'react'
import TodoContext from '../Context/TodoContext';
import {useNavigate} from 'react-router-dom'

const LoginDropdown = () => {
  
   const navigate = useNavigate();
   const a = useContext(TodoContext)


   const handleSubmit = () =>{

    navigate("/signup");


   }
    
  return (
    <div className=' w-[22rem] h-[25rem] bg-white absolute z-10 mt-8 right-2 p-2  rounded-lg'>
        
    <div onClick={()=>{a.setLoginDrop(false)}} className="cursor-pointer float-right p-2"><i class="fa-solid fa-xmark fa-xl"></i></div>  

    <div className="mt-6 items-center justify-center h-full z-10">
        
        <p className=' text-3xl w-full flex items-center justify-center'>Sign up for free </p>
        <p className='text-lg pt-2 font-semibold font-sans opacity-70 text-center'>Full access.No credit card needed</p>


        <form action="" method="post">
        <div className=" w-full h-16 flex flex-col mt-16 items-center justify-center ">

        <input onChange={(e)=>{a.setEmail(e.target.value)}} className='p-[15px] w-[90%] rounded-full text-xl text-center bg-slate-100 outline-sky-400 placeholder:text-xl' placeholder='Enter your email' type="email" name="email" id="email" />
      
      {a.email === ''?
      <div className="w-full mt-4 flex h-40 items-center justify-center ">

        <button type="submit"  className='p-[12px] absolute w-[90%] hover:ease-in duration-[0.7s] hover:-translate-x-[50rem]  rounded-full bg-sky-400 text-xl font-bold text-white hover:bg-sky-500 active:bg-sky-700  cursor-pointer' >Continue</button>
        <p className='text-red-500 mt-8 text-lg'>Please fill email !</p>
      </div>

      :<div className="w-full mt-4 flex h-40 items-center justify-center ">

        <button type="submit" onClick={()=>{handleSubmit()}}  className='p-[12px] w-[90%] rounded-full bg-sky-400 text-xl font-bold text-white hover:bg-sky-500 active:bg-sky-700  cursor-pointer' >Continue</button>
      </div>}

        </div>

        </form>
        <div className="flex items-center mt-4 justify-center w-full ">

        <div className="border-[1.5px] opacity-40 relative border-black w-[90%] mt-8">
        </div>

           
        </div>
        <div className="flex justify-center">
        <input className='p-[12px] w-[90%] mt-6 rounded-full border border-sky-400 text-xl text-sky-400 cursor-pointer' type="button" value="Sign up with Google" />

        </div>
        </div>      
        
        </div>
  )
}

export default LoginDropdown