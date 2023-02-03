import React,{useContext,useState} from 'react'
import TodoContext from '../Context/TodoContext'

const Workspace = () => {

    const a = useContext(TodoContext);
    const [name,setName] = useState('');
    
    const handleSubmit = () =>{

        console.log(name);
        console.log(a.workspaceArray);
        
        let array = [{name:name}]
       
   const reqVal = [...a.workspaceArray,...array]

   a.setWorkspaceArray(reqVal)
   console.log(a.workspaceArray);

   a.setWorkspace(false)

    }


  return (
    <div>

<div className="w-[45rem] border border-black h-[25rem] bg-white absolute z-10 top-[23%] left-[27%] shadow-2xl ">

<span onClick={()=>{a.setWorkspace(false)}}  className="float-right p-4 cursor-pointer"><i class="fa-solid fa-xmark fa-2xl"></i></span>
<div className="h-16  text-2xl indent-4 font-bold flex items-center">Create Workspace</div>

<div className=" h-[15rem] flex flex-col items-center justify-center">
    <div className="w-full  flex flex-col items-center justify-center">
        <div className="w-[88%]">

        <p className="text-md font-bold text-cyan-600">Workspace Name</p>
        </div>
        <input onChange={(e)=>{setName(e.target.value)}} className="h-12 mt-1 w-[90%] p-4 border-2 placeholder:font-semibold" placeholder="Enter the Workspace Name" value={name}  type="text" />
    </div>


    <div className="w-full  flex flex-col mt-4 items-center justify-center">
        <div className="w-[88%]">

        <p className="text-md font-bold opacity-60">Workspace URL</p>
        </div>
        <input className="h-12 mt-1 w-[90%] p-4 border-2" type="text" value="https://dodo.com" />
    </div>

</div>
    <div className="h-16 flex flex-row-reverse items-center">

        <button onClick={()=>{handleSubmit()}} className="border w-[12rem] h-12 p-4 mx-2 bg-green-500 text-white hover:bg-green-600 active:bg-green-800 flex items-center justify-center font-semibold  rounded-lg shadow-xl" >Create WorkSpace</button>
        <button onClick={()=>{a.setWorkspace(false)}}  className="border-2 w-[10rem] h-12 p-4 mx-2 flex items-center justify-center font-semibold text-black hover:bg-red-600 hover:text-white active:bg-red-800 rounded-lg shadow-xl " >Cancel</button>
    </div>
</div> 

      
    </div>
  )
}

export default Workspace
