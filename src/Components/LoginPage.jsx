import React,{useState,useContext} from "react";
import logo from '../Modern-logo-design-template-on-transparent-PNG.png'
import google from '../pngwing.com.png'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FailedCard from "./FailedCard";
import TodoContext from "../Context/TodoContext";

const LoginPage = () => {

  const a = useContext(TodoContext)

    const navigate = useNavigate()
    const [password,setPassword] = useState(false)
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');

    const handleSubmit = () =>{

   
        
          axios.post("/signin",{
  
          email : email,
          password : pass,
  
          headers :{
            "Content-Type" : "application/json"
          }
        }).then((res)=>{

          

            navigate("/task")
          


        })
        .catch((error)=>{

          if(error.response.status === 422 || 400){

            a.setAlert(true);
          }
        })




    }

  return (
    <>
      <div className=" w-full border-b-2 flex justify-between bg-slate-100  fixed h-20">
        <div className=" flex items-center ">
          <div className="flex items-center ">
            <img className="h-20 w-20" src={logo} alt="" srcset="" />
            <p className="font-sans font-bold text-4xl ">sunday</p>
            <span className="text-lg pt-4">.com</span>
          </div>
        </div>
      </div>

{ a.alert === true &&

      <div className="w-full flex items-center justify-center">
        <FailedCard/>
      </div>
}


      <div className="h-[100vh] flex flex-col items-center justify-center pt-36 ">
        <h1 className="text-6xl">Log in to your account</h1>
        
        {
         
      ( password === true)     
        ? <div className=" ease-in-out duration-700 mt-4 flex flex-col items-center justify-center">

        <p className="text-2xl mt-8">Enter your Password</p>
        <input onChange={(e)=>{setPass(e.target.value)}} className="border-2 w-[30rem] h-12 text-xl p-4 outline-none border-sky-500 mt-2" placeholder="Enter your password" type="password" name="" id="" value={pass} />
        <input onClick={()=>{handleSubmit()}} className="border-2 w-[30rem] h-14 text-xl flex items-center justify-center font-bold text-white cursor-pointer hover:bg-sky-400 active:bg-sky-600 outline-none border-sky-500 bg-sky-500 flex mt-8" type="button" value="Submit" />
        </div>

        :<div className="ease-in-out duration-700 mt-4 flex flex-col items-center justify-center">
        <p className="text-2xl mt-8">Enter your email address</p>

        <input onChange={(e)=>{setEmail(e.target.value)}} className="border-2 w-[30rem] h-12 text-xl p-4 outline-none border-sky-500 mt-2" placeholder="Example@company.com" type="email" name="" id="" value={email} />
        <input  onClick={()=>{setPassword(true)}} className="border-2 w-[30rem] h-14 text-xl flex items-center justify-center font-bold text-white cursor-pointer hover:bg-sky-400 active:bg-sky-600 outline-none border-sky-500 bg-sky-500 flex mt-8" type="button" value="Next >" />

        </div>

        }
        <div className="border border-slate-400 mt-12 w-[50rem] flex items-center justify-center relative">

            <div className="bg-white h-6 w-[12rem] text-xl absolute flex items-center justify-center font-serif ">Or Sign in with </div>
            
        </div>

        <button className="flex items-center border border-slate-400 h-10 p-6 mt-12 text-xl border-2 w-40 justify-center"><img className="h-6 w-6 mr-2" src={google} alt="" srcset="" />Google</button>

        <p className="text-xl mt-12">Dont have an account yet?<a className="text-sky-600" href="/">Sign up </a></p>
        <p className="text-xl mt-2">Cant Login?<a className="text-sky-600" href="/">Visit our help center</a></p>
      </div>
    </>
  );
};

export default LoginPage;
