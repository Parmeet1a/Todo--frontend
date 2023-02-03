import './App.css';
import Task from './Components/Task';
import {Routes,Route} from 'react-router-dom'
import Favourites from './Components/Favourites'
import Completed from './Components/Completed';
// import Sidebar from './Components/Sidebar';
import Body from './Components/Body';
// import Navbar from './Components/Navbar';
// import MainPage from './Components/MainPage';
// import Workspace from './Components/Workspace';
import TodoState from './Context/TodoState';
import LoginPage from './Components/LoginPage';
import Signup from './Components/Signup'
import MainPage from './Components/MainPage';


function App() {
  return (
    <div className="App">

    <TodoState>


     {/* <Signup/> */}
     {/* <Navbar/> */}
     {/* <FailedCard/> */}
     {/* <SuccessCard/> */}
    

    <Routes>

      <Route path="/" element={<Body/>} />
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/home" element={<MainPage/>}/>
      <Route path="/task" element={<Task/>}/>
      <Route path="/favourites" element={<Favourites/>}/>
      <Route path="/completed" element={<Completed/>}/>

    </Routes>
      

      {/* <Navbar/>
      <Body/> */}
      {/* <MainPage/> */}
    </TodoState>
      
     
      
    </div>
  );
}

export default App;
