import React from 'react'
import '../App.css'
// import LoginDropdown from './LoginDropdown'
import Navbar from './Navbar'

const Body = () => {


  return (
<>

<div className="">
  <Navbar/>
</div>
    
   {/* <div className="flex flex-col justify-end pt-32 h-12 bg-green-100 w-full">
   <LoginDropdown/>
   </div> */}
    
    <div className='bg-[#152238] h-[150vh] flex flex-col items-center justify-center z-0 '>
   


        <p className="flex flex-col justify-center items-center text-8xl w-320%] text-white">

          A platform built for a <span className='flex justify-center items-center'>new way of working </span>

          <p className='text-3xl font-sans indent-4 pt-12'>What would you like to manage with sunday.com Work OS?</p>
        </p>



        <div className=" w-full h-40 flex justify-around mt-28">
          <div id='box1'className="border-2 h-32 w-32 rounded-xl relative cursor-pointer hover:border-pink-500 ">
             <input type='checkbox' id='tick'  name='tick' className='border appearance-none checked:bg-pink-500 w-[25px] h-[25px] ml-2 mt-2  rounded-md '></input>
              <label for='tick' className=" flex items-center justify-center absolute top-5 w-full text-pink-400 cursor-pointer  "><i class="fa-solid fa-shapes fa-3x "></i></label>
              <label for='tick' className='text-white text-md w-full flex flex-col items-center mt-8 justify-center cursor-pointer '><span className='flex items-center justify-center'>Creative &</span> <span className=''>Design</span></label>
           
          </div>

          <div id='box'className="border-2 h-32 w-32 rounded-xl relative cursor-pointer hover:border-green-500 ">
             <input type='checkbox' id='tick1'  name='tick' className='border appearance-none checked:bg-green-500 w-[25px] h-[25px] ml-2 mt-2  rounded-md '></input>
              <label for='tick1' className=" flex items-center justify-center absolute top-5 w-full text-green-500 cursor-pointer  "><i class="fa-solid fa-code fa-3x"></i></label>
              <label for='tick1' className='text-white text-md w-full flex flex-col mt-8 items-center justify-center cursor-pointer '><span className='flex items-center justify-center'>Software</span> <span className=''>Development</span></label>
           
          </div>

          <div id='box'className="border-2 relative h-32 w-32 rounded-xl cursor-pointer hover:border-pink-500 ">
             <input type='checkbox' id='tick2'  name='tick' className='border appearance-none checked:bg-pink-500 w-[25px] h-[25px] ml-2 mt-2  rounded-md '></input>
              <label for='tick2' className=" flex items-center justify-center absolute top-5 w-full text-pink-500 cursor-pointer  "><i class="fa-solid fa-code fa-3x"></i></label>
              <label for='tick2' className='text-white text-md mt-8 relative w-full flex flex-col items-center justify-center cursor-pointer '><span className='flex items-center justify-center'>Marketing</span></label>
           
          </div>


          <div id='box'className="border-2 h-32 w-32 rounded-xl relative cursor-pointer hover:border-orange-500 ">
             <input type='checkbox' id='tick3'  name='tick' className='border appearance-none checked:bg-orange-500 w-[25px] h-[25px] ml-2 mt-2  rounded-md '></input>
              <label for='tick3' className=" flex items-center justify-center absolute top-5 w-full text-orange-500 cursor-pointer  "><i class="fa-sharp fa-solid fa-bars-staggered fa-3x"></i></label>
              <label for='tick3' className='text-white text-md mt-8 w-full flex flex-col items-center justify-center cursor-pointer '><span className='flex items-center justify-center'>Project</span> <span className=''>Management</span></label>
           
          </div>

          <div id='box'className="border-2 h-32 w-32 rounded-xl relative cursor-pointer hover:border-cyan-400 ">
             <input type='checkbox' id='tick4'  name='tick' className='border appearance-none checked:bg-cyan-500 w-[25px] h-[25px] ml-2 mt-2  rounded-md '></input>
              <label for='tick4' className=" flex items-center justify-center absolute top-5 w-full text-cyan-500 cursor-pointer  "><i class="fa-solid fa-arrow-trend-up fa-3x"></i></label>
              <label for='tick4' className='text-white text-md mt-8 w-full flex flex-col items-center justify-center cursor-pointer '><span className='flex items-center justify-center'>Sales&CRM</span></label>
           
          </div>

          <div id='box'className="border-2 h-32 w-32 rounded-xl relative cursor-pointer hover:border-red-500 ">
             <input type='checkbox' id='tick5'  name='tick' className='border appearance-none checked:bg-red-500 w-[25px] h-[25px] ml-2 mt-2  rounded-md '></input>
              <label for='tick5' className=" flex items-center justify-center absolute top-5 w-full text-red-500 cursor-pointer  "><i class="fa-solid fa-check fa-3x"></i></label>
              <label for='tick5' className='text-white text-md mt-8 w-full flex flex-col items-center justify-center cursor-pointer '><span className='flex items-center justify-center'>Task</span><span className=''>management</span></label>
           
          </div>

          <div id='box'className="border-2 h-32 w-32 rounded-xl relative cursor-pointer hover:border-green-500 ">
             <input type='checkbox' id='tick6'  name='tick' className='border appearance-none checked:bg-green-500 w-[25px] h-[25px] ml-2 mt-2  rounded-md '></input>
              <label for='tick6' className=" flex items-center justify-center absolute top-5 w-full text-green-500 cursor-pointer  "><i class="fa-sharp fa-solid fa-strikethrough fa-3x"></i></label>
              <label for='tick6' className='text-white text-md mt-8 w-full flex flex-col items-center justify-center cursor-pointer '><span className='flex items-center justify-center'>HR</span></label>
           
          </div>

          <div id='box'className="border-2 h-32 w-32 rounded-xl relative cursor-pointer hover:border-cyan-500 ">
             <input type='checkbox' id='tick7'  name='tick' className='border appearance-none checked:bg-cyan-300 w-[25px] h-[25px] ml-2 mt-2  rounded-md '></input>
              <label for='tick7' className=" flex items-center justify-center absolute top-5 w-full text-cyan-300 cursor-pointer  "><i class="fa-solid fa-gears fa-3x"></i></label>
              <label for='tick7' className='text-white text-md mt-8 w-full flex flex-col items-center justify-center cursor-pointer '><span className='flex items-center justify-center'>Operations</span></label>
           
          </div>


          <div id='box'className="border-2 h-32 w-32 rounded-xl relative cursor-pointer hover:border-violet-500 ">
             <input type='checkbox' id='tick8'  name='tick' className='border appearance-none checked:bg-violet-500 w-[25px] h-[25px] ml-2 mt-2  rounded-md '></input>
              <label for='tick8' className=" flex items-center justify-center absolute top-5 w-full text-violet-500 cursor-pointer  "><i class="fa-solid fa-puzzle-piece fa-3x"></i></label>
              <label for='tick8' className='text-white text-md mt-8 w-full flex flex-col items-center justify-center cursor-pointer '><span className='flex items-center justify-center'>More</span><span className=''>Workflows</span></label>
           
          </div>
          
            </div>

<div className="mt-8 p-12">


        <button className="border bg-sky-500 rounded-full h-16 w-[14rem] text-xl font-bold text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 ">Get Started <span className="ml-2 "><i class="fa-sharp fa-solid fa-arrow-right-long "></i></span></button>
</div>

      
    </div>

    </>

  )
}

export default Body
