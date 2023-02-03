import React, { useState,useContext } from "react";
import logo from "../Modern-logo-design-template-on-transparent-PNG.png";
import '../App.css'
import LoginDropdown from "./LoginDropdown";
import TodoContext from "../Context/TodoContext";
import {Link} from 'react-router-dom';

const Navbar = () => {
  const a = useContext(TodoContext)
  const [arrows, setArrows] = useState(false);
  const [render] = useState([
    { id: 1, name: "Products" },
    { id: 2, name: "Teams" },
    { id: 3, name: "Platforms" },
    { id: 4, name: "Resources" },
  ]);

  const [helpId, setHelpId] = useState("");

  return (
   


     <div className=" w-full flex justify-between bg-white fixed h-24">
 
        <div className=" flex items-center ">


      <div className="flex items-center ">
        <img className="h-20 w-20" src={logo} alt="" srcset="" />
        <p className="font-sans font-bold text-4xl ">sunday</p>
        <span className="text-lg pt-4">.com</span>
      </div>




      <div className=" flex items-center px-8 pt-2 w-[30rem]">
        <ul className=" flex items-center justify-center h-full w-full justify-around ">
          {render.map((val) => (
            <>
              <div className=" flex items-center cursor-pointer text-semibold rounded-lg hover:bg-pink-100 hover:text-pink-400">
                <li className="text-[1.1rem] indent-2 font-light font-sans">
                  <a href="/home">{val.name}</a>
                </li>
                <span
                  className="text-[15px] p-1 pt-2 cursor-pointer"
                  onClick={() => {
                    setHelpId(val.id);
                    setArrows(!arrows);
                  }}
                >
                  {arrows === true && helpId === val.id ? (
                    <i class="fa-solid fa-angle-up fa-1x"></i>
                  ) : (
                    <i class="fa-solid fa-angle-down fa-1x"></i>
                  )}
                </span>
              </div>
            </>
          ))}
        </ul>
      </div>
        </div>


      <div className=" flex items-center p-12">
        <ul className="flex items-center p-8">
            <li className=" mx-2 p-2 cursor-pointer text-semibold rounded-lg hover:bg-pink-100 hover:text-pink-400">Pricing</li>
            <li className=" mx-2 p-2   text-center cursor-pointer text-semibold rounded-lg hover:bg-pink-100 hover:text-pink-400">Contact Sales</li>
            <li className=" mx-2 p-2  text-center cursor-pointer text-semibold rounded-lg hover:bg-pink-100 hover:text-pink-400"><Link to="/login">Log in</Link></li>
        </ul>

        <div className="">

      <button onClick={()=>{a.setLoginDrop(true)}} className="border bg-gradient-to-r from-cyan-500 to-sky-500 rounded-full h-12  p-6 text-lg font-bold text-white flex items-center">Get Started <span className="ml-2"><i class="fa-sharp fa-solid fa-arrow-right-long "></i></span></button>
       
    {a.loginDrop === true ?
       <LoginDropdown/> : <div></div>
    }
        </div>
      </div>


    </div>
    

  
  );
};

export default Navbar;
