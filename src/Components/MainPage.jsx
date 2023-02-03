import React,{useContext} from "react";
import Sidebar from "./Sidebar";
import TodoContext from "../Context/TodoContext";
import Workspace from "./Workspace";



const MainPage = () => {

    const a = useContext(TodoContext)

   

  return (
    <div className="flex">
      <Sidebar />

      <div className="h-[100vh] w-full ">

        {
            a.workspace === true

            ? <Workspace/> : <div className=""></div>
        }

    
        
{/* 
            <div className="w-[45rem] border border-black h-[25rem] bg-white absolute z-10 top-[23%] left-[27%] shadow-2xl ">

                <span onClick={a.setWorkspace(false)} className="float-right p-4 cursor-pointer"><i class="fa-solid fa-xmark fa-2xl"></i></span>
                <div className="h-16  text-2xl indent-4 font-bold flex items-center">Create Workspace</div>

                <div className=" h-[15rem] flex flex-col items-center justify-center">
                    <div className="w-full  flex flex-col items-center justify-center">
                        <div className="w-[88%]">

                        <p className="text-md font-bold text-cyan-600">Workspace Name</p>
                        </div>
                        <input className="h-12 mt-1 w-[90%] p-4 border-2 placeholder:font-semibold" placeholder="Enter the Workspace Name " type="text" />
                    </div>


                    <div className="w-full  flex flex-col mt-4 items-center justify-center">
                        <div className="w-[88%]">

                        <p className="text-md font-bold opacity-60">Workspace URL</p>
                        </div>
                        <input className="h-12 mt-1 w-[90%] p-4 border-2" type="text" value="https://dodo.com" />
                    </div>

                </div>
                    <div className="h-16 flex flex-row-reverse items-center">

                        <button className="border w-[12rem] h-12 p-4 mx-2 bg-green-500 text-white hover:bg-green-600 active:bg-green-800 flex items-center justify-center font-semibold  rounded-lg shadow-xl" >Create WorkSpace</button>
                        <button onClick={a.setWorkspace(false)}  className="border-2 w-[10rem] h-12 p-4 mx-2 flex items-center justify-center font-semibold text-black hover:bg-red-600 hover:text-white active:bg-red-800 rounded-lg shadow-xl " >Cancel</button>
                    </div>
            </div> : <div className=""></div> */}

        
  

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


        <div className=" w-full h-[78%] grid grid-cols-3 gap-4 p-6 overflow-y-scroll ">
          <div className="h-[17rem] w-[22rem] border-2 bg-slate-100 flex flex-col items-center justify-center rounded-lg shadow-lg cursor-pointer hover:shadow-2xl">
            <span onClick={()=>{a.setWorkspace(true)}} className="bg-green-400 flex items-center justify-center cursor-pointer text-white rounded-full w-12 h-12">
              <i class="fa-solid fa-plus fa-2x"></i>
            </span>
            <p className="font-bold text-xl p-2">Create New Workspace</p>
          </div>



            {a.workspaceArray.map((val)=>(

          <div className="h-[17rem] w-[22rem] border-2 flex flex-col items-center justify-center rounded-lg shadow-lg cursor-pointer hover:shadow-2xl ">
            <div className="h-16 w-16 bg-green-500 rounded-full flex items-center justify-center">
              <p className="text-4xl font-bold text-white p-2">D</p>
            </div>
            <p className="text-xl font-semibold p-2">{val.name}</p>
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
            ))}

         


          
        </div>
      </div>
       
    </div>
  );
};

export default MainPage;
