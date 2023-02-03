import React from 'react'
import logo from "../Modern-logo-design-template-on-transparent-PNG.png";
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <>
   
   
    
        <div className="h-[100vh] w-20 bg-gradient-to-b from-sky-500 to-cyan-400 flex flex-col items-center">
            <img src={logo} alt="" srcset="" />
            <li title='Home' className='text-white  list-none  mt-6 p-4 cursor-pointer hover:bg-cyan-600'><Link to="/home"><i class="fa-solid fa-house fa-2x"></i></Link></li>
            <li title='Tasks' className='text-white  list-none p-4 hover:bg-cyan-600 cursor-pointer'><Link to="/task"><i class="fa-solid fa-list-check fa-2x"></i></Link></li>
            <li title='Favourites' className='text-white list-none   p-4 hover:bg-cyan-600 cursor-pointer'><Link to="/favourites"><i class="fa-solid fa-heart fa-2x"></i></Link></li>
            {/* <li title='Completed' className='text-white  list-none  p-4 hover:bg-cyan-600 cursor-pointer'><Link to="/completed"><i class="fa-solid fa-circle-check fa-2x"></i></Link></li> */}
            <div className=" h-full w-full flex flex-col-reverse items-center">
                <div className="border-4 text-white w-14 h-14 mb-8 cursor-pointer flex items-center justify-center rounded-full"><i class="fa-regular fa-user fa-2x"></i></div>
            </div>

        </div>

  



     
    
  
    </>
  )

}

export default Sidebar