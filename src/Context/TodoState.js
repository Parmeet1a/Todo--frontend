import React,{useState} from "react";
import TodoContext from "./TodoContext";

const TodoState = (props) =>{

    const[loginDrop,setLoginDrop] = useState(false);
    const [workspace,setWorkspace] = useState(false);
    const [favArray,setFavArray] = useState([])
    const [email,setEmail] = useState('')
    const [alert,setAlert] = useState('')
    const [success,setSuccess] = useState(false)
    const [workspaceArray,setWorkspaceArray] = useState([])


    return(

        <TodoContext.Provider value={{loginDrop,setLoginDrop,workspace,setWorkspace,favArray,setFavArray,email,setEmail,alert,setAlert,success,setSuccess,workspaceArray,setWorkspaceArray}}>
            {props.children}
        </TodoContext.Provider>
    )

}

export default TodoState;







