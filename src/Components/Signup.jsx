import React,{useState,useContext} from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TodoContext from "../Context/TodoContext";
import FailedCard from "./FailedCard";
import SuccessCard from "./SuccessCard"
import { ColorRing } from 'react-loader-spinner'


const MainPage = () => {
  const navigate = useNavigate();
  const a = useContext(TodoContext)
  const[user,setUser] = useState({

    name:"",password:"",confirmPassword:""
  })
  const [loading,setLoading] = useState(false);


  const handleInput = (e) =>{

    let name,value;

    name = e.target.name;
    value = e.target.value;

    setUser({...user,[name]:value})
    
  }

  const handleSignup = async() => {

    setLoading(true)

  

    const {name,password,confirmPassword} = user

    if(!name || !password || !confirmPassword){


      setLoading(false)
      a.setAlert(true)

    }
    
    
    try {
        
        const login = await axios.post("/signup",{
    
          name : name,
          email : a.email,
          password : password,
          confirmpassword : confirmPassword,
          headers :{
    
            "Content-type" : "application/json"
          }
        })


        if(login){

          a.setSuccess(true)
        navigate("/login");

        }
      } catch (error) {

       console.log(error); 
      }
    

   
  };

  return (
    <div className="">
      <div className="flex">
        <Sidebar />

        <div className="h-[100vh] w-full ">
          <div className="text-black float-right p-4">
            <i class="fa-solid fa-bell fa-2x "></i>
          </div>
          <div className="border-b-2 h-16"></div>
          <div className=" h-20 mt-4 flex items-center justify-around">
            <div className=" flex items-center">
              <p className="text-xl font-bold opacity-60">Workspaces</p>
              <span className="p-1 pt-2">(1)</span>
            </div>

            <input
              className="border-2 shadow-md p-2 w-[20rem] outline-none"
              placeholder="Search Workspaces"
              type="search"
              name=""
              id=""
            />
          </div>

          <div className=" w-full h-[78%] grid grid-cols-3 gap-4 p-6 overflow-y-scroll">
            <div className="h-[17rem] w-[22rem] border-2 bg-slate-100 flex flex-col items-center justify-center rounded-lg shadow-lg cursor-pointer hover:shadow-2xl">
              <span className="bg-green-400 flex items-center justify-center cursor-pointer text-white rounded-full w-12 h-12">
                <i class="fa-solid fa-plus fa-2x"></i>
              </span>
              <p className="font-bold text-xl p-2">Create New Workspace</p>
            </div>

            <div className="h-[17rem] w-[22rem] border-2 flex flex-col items-center justify-center rounded-lg shadow-lg cursor-pointer hover:shadow-2xl ">
              <div className="h-16 w-16 bg-green-500 rounded-full flex items-center justify-center">
                <p className="text-4xl font-bold text-white p-2">D</p>
              </div>
              <p className="text-xl font-semibold p-2">Dodo</p>
              <div className=" flex items-center justify-evenly w-full">
                <div className=" flex flex-col items-center justify-center">
                  <p className="font-bold opacity-60">Projects</p>
                  <span className="text-xl font-bold">00</span>
                </div>

                <div className=" flex flex-col items-center justify-center">
                  <p className="font-bold opacity-60">Tasks</p>
                  <span className="text-xl font-bold">00</span>
                </div>

                <div className=" flex flex-col items-center justify-center">
                  <p className="font-bold opacity-60">Issues</p>
                  <span className="text-xl font-bold">00</span>
                </div>

                <div className=" flex flex-col items-center justify-center">
                  <p className="font-bold opacity-60">Risks</p>
                  <span className="text-xl font-bold">00</span>
                </div>
              </div>

              <div className="border-b-2 w-full mt-4"></div>

              <div className="flex items-center justify-center mt-4">
                <p className="font-bold text-sm">Members: </p>
                <div className="h-8 w-8 bg-pink-500 rounded-full flex items-center justify-center mx-1">
                  <p className="text-xl font-semibold text-white">D</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="h-full w-full absolute z-10 top-0 flex backdrop-blur-sm backdrop-brightness-50 items-center justify-center">
       
       {a.alert && <FailedCard/>}
       {a.success && <SuccessCard/>}
        <div className="h-[85%] w-[60%] bg-white flex rounded-xl overflow-none">
            <div className="w-[97%] h-full flex flex-col items-center justify-center">
              <h1 className=" w-[60%] text-4xl font-semibold">
                Set up your account
              </h1>
          <form className="" action="/signup" method="post">
              <p className="w-[60%] text-xl mt-16  font-serif">Full Name</p>
              <input
                className="w-[60%] border border-slate-400 h-12 text-xl p-6 mt-2 rounded-lg outline-sky-500"
                placeholder="e.g. Parmeet Singh"
                type="text"
                name="name"
                onChange={(e)=>{handleInput(e)}}
              />

              <p className="w-[60%] text-xl mt-6  font-serif">
                Create Password
              </p>
              <input
                className="w-[60%] border border-slate-400 h-12 text-xl p-6 mt-2 rounded-lg outline-sky-500"
                placeholder="Enter atleast 8 characters"
                type="text"
                name="password"
                onChange={(e)=>{handleInput(e)}}

              />

              <p className="w-[60%] text-xl mt-6  font-serif">
                Confirm Password
              </p>
              <input
                className="w-[60%] border border-slate-400 h-12 text-xl p-6 mt-2 rounded-lg outline-sky-500"
                placeholder="Confirm Password"
                type="text"
                name="confirmPassword"
                onChange={(e)=>{handleInput(e)}}

              />

              <div className="flex mt-6 w-[60%]">
                <input className="h-6 w-6" type="checkbox" name="" id="" />
                <p className="ml-4 text-lg">
                  I agree to the{" "}
                  <a className="text-sky-500" href="/">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a className="text-sky-500" href="/">
                    Privacy Policy
                  </a>
                </p>
              </div>

              <div className="flex mt-12 w-[60%] justify-end ">
               
               {loading === false ?
                <input
                  onClick={() => {
                    handleSignup();
                  }}
                  className="bg-sky-500 p-2 w-40 h-12 rounded-lg text-white font-semibold text-lg cursor-pointer hover:bg-sky-400 active:bg-sky-600"
                  type="button"
                  value="Continue   >"
                />
                : <ColorRing height="50"/>}

              </div>
          </form>
            </div>

          <div className="w-[3%] bg-gradient-to-b from-sky-400 to-cyan-400"></div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
