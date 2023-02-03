import React, { useState, useEffect, useContext } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import TodoContext from "../Context/TodoContext";

const Task = () => {
  const a = useContext(TodoContext);
  const [hover, setHover] = useState(false);
  const [task, setTask] = useState(false);
  const [input, setInput] = useState("");
  const [taskArray, setTaskArray] = useState([]);
  const [render, setRender] = useState("");
  const [status, setStatus] = useState(false);
  const [helpId, setHelpId] = useState("");
  const [date, setDate] = useState("");
  const [favourite, setFavourite] = useState(false);
 

  useEffect(() => {
    axios.get("/todo").then((res) => {
      setTaskArray(res.data);
      setTask(false);
      setRender(false);
    });
  }, [render]);

  const handleTask = (e) => {
    // console.log(e.key);

    if (e.key === "Enter") {
      axios
        .post("/todo", {
          title: input,
          headers: {
            "Content-type": "application/json",
          },
        })
        .then((res) => {
          console.log(res.data);

          setTask(false);

          setRender(true);

          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleStatus = async (e) => {
    try {
      const reqNum = e.target.value;
      console.log(reqNum);

      const update = await axios.put("/todo", {
        _id: helpId,
        status: reqNum,

        headers: {
          "Content-type": "application/json",
        },
      });
      if (update) {
        setRender(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // <-----------------------------------------------Deleting List ---------------------------------------->

  const handleDelete = (_id) => {
    console.log(_id);

    // const id = _id;

    axios
      .delete("/todo", {
        _id: _id,
        headers: {
          "Content-Type": "application/json",
        },
      })

      .then((res) => {
        // console.log(res);
        setRender(true);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  // <-----------------------------------Update Date -------------------------------->

  const handleUpdate = (_id) => {
    let reqDate = date;

    axios
      .put("/todo/endDate", {
        _id: _id,
        update: reqDate,
        headers: { "Content-type": "application/json" },
      })

      .then((res) => {
        // console.log(res);
        setRender(true);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  // <-----------------------------------Search -------------------------------->

  const taskSearch = (e) => {
    let inputValue = e.target.value;

    const filter = taskArray.filter((value) => {
      return value.title.toLowerCase().includes(inputValue);
    });

    //  console.log(filter);

    setTaskArray(filter);

    if (inputValue === "") {
      setRender(true);
    }
  };

  // <-----------------------------------Update Favourites -------------------------------->

  const handleFavourites = (_id) => {
    const reqArray = taskArray.filter((val) => val._id === _id);

    console.log(reqArray);

    const fullArray = [...a.favArray, ...reqArray];

    // const fullArray = a.favArray.concat(reqArray)

    a.setFavArray(fullArray);
    if (helpId === _id) {
      setFavourite(true);
    }
    console.log(fullArray);
  };

  // const getTask = () =>{

  //   axios.get('/todo')
  //   .then((res)=>{

  //     console.log(res);
  //   })
  //   .then((error)=>{

  //     console.log(error);
  //   })

  // };

  // useCallback(
  //   () => {
  //     axios.get('/todo')
  //     .then((res)=>{

  //       console.log(res);
  //     })
  //     .then((error)=>{

  //       console.log(error);
  //     })
  //   },
  //   [handleTask],
  // )

  return (
    <div className="h-[100vh] flex">
      <div className="">
        <Sidebar />
      </div>
      <div className="border-4 w-full h-full">
        <div className="border-b-2 h-12 w-full flex items-center justify-between p-8">
          <div className="w-[20rem] h-10 border-2 rounded-lg flex bg-slate-100 ">
            <span className="p-1 ml-2">
              <i class="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
              className="bg-slate-100 w-full outline-none p-2 "
              placeholder="Search"
              type="search"
              name=""
              id=""
              onChange={(e) => {
                taskSearch(e);
              }}
            />
          </div>

          <button className="border w-[9rem] h-10 p-4 mx-2 bg-green-500 text-white hover:bg-green-600 active:bg-green-800 flex items-center justify-center font-semibold  rounded-lg shadow-xl">
            <span className="p-2">
              <i class="fa-solid fa-plus"></i>
            </span>
            Add New
          </button>
        </div>

        <div
          onClick={() => {
            setStatus(false);
          }}
          className="w-full h-24 flex items-center justify-between "
        >
          <div className=" flex items-center ml-6 ">
            <div className="text-xl font-bold">
              Tasks
            </div>
            <div className="w-[18rem] grid grid-cols-3 border h-12 items-center ml-8 ">
              <p className="border flex items-center justify-center h-full font-semibold cursor-pointer active:bg-slate-200 hover:bg-slate-100">
                Lists
              </p>
              <p className="border flex items-center justify-center h-full font-semibold cursor-pointer active:bg-slate-200 hover:bg-slate-100">
                Grids
              </p>
              <p className="border flex items-center justify-center h-full font-semibold cursor-pointer active:bg-slate-200 hover:bg-slate-100">
                Calendar
              </p>
            </div>
          </div>
          <div className="w-[20rem] h-10 border-2 rounded flex bg-slate-100 mr-4 ">
            <input
              className="w-full outline-none p-4"
              placeholder="Search Tasks"
              type="search"
              name=""
              id=""
              onChange={(e) => {
                taskSearch(e);
              }}
            />
          </div>
        </div>

        <div className="h-8 w-[95%] mr-4 grid grid-cols-6 bg-gradient-to-r from-cyan-400 to-sky-400 ml-4 items-center mt-4">
          <div className=" border-r-2 h-4 w-full h-full flex items-center text-white font-semibold justify-center font-serif">
            Title
          </div>
          <div className="border-l-2 border-r-2 h-4 w-full h-full flex items-center text-white font-semibold justify-center font-serif">
            Created Time
          </div>
          <div className="border-l-2 border-r-2 h-4 w-full h-full flex items-center text-white font-semibold justify-center font-serif">
            Status
          </div>
          <div className="border-l-2 border-r-2 h-4 w-full h-full flex items-center text-white font-semibold justify-center font-serif">
            Priority
          </div>
          <div className="border-l-2 border-r-2 h-4 w-full h-full flex items-center text-white font-semibold justify-center font-serif">
            End Date
          </div>
          <div className="border-l-2  h-4 w-full h-full flex items-center text-white font-semibold justify-center font-serif">
            Owner
          </div>
        </div>

        {task === true ? (
          <div className="h-12 w-[95%] flex items-center cursor-pointer mx-4 hover:bg-cyan-100">
            <input
              className=" w-[97%] h-full placeholder:font-bold placeholder:p-2 outline-none hover:bg-cyan-100 p-6"
              type="text"
              placeholder="Enter title for new Task"
              onChange={(e) => {
                setInput(e.target.value);
              }}
              onKeyDown={(e) => {
                handleTask(e);
              }}
            />
            <div className="opacity-40 flex font-bold  items-center">
              <span className="text-black ">
                <i class="fa-solid fa-arrow-right-to-bracket fa-lg"></i>
              </span>
              <p className="text-sm  mx-6  ">Press enter to add the Task</p>
            </div>
          </div>
        ) : (
          <div className="h-12 w-[95%] flex items-center mx-4 cursor-pointer hover:bg-sky-100 hover:text-sky-500">
            <div
              onClick={() => {
                setTask(true);
              }}
              className=" ml-2 bg-sky-500 w-4 h-4 p-[10px] text-white cursor-pointer flex items-center justify-center rounded-full"
            >
              <i class="fa-solid fa-plus"></i>
            </div>
            <p className="font-semibold ml-2">Add new Task</p>
          </div>
        )}

        <div className=" h-[65%] overflow-y-scroll">
          {taskArray.map((val) => (
            <>
              <div
                onMouseEnter={() => {
                  setHover(true);
                }}
                onMouseLeave={() => {
                  setHover(false);
                }}
                className=" border-t-1 border-b-1 h-12 bg-white my-1 w-[96%] hover:bg-sky-100 mr-4 grid grid-cols-6 ml-4 items-center "
              >
                <div className=" h-4 flex items-center">
                  <div className="mx-2 w-[20px] h-[20px]">
                    {hover && (
                      <input
                        className="w-[20px] h-[20px]"
                        type="checkbox"
                        name=""
                        id=""
                      />
                    )}
                  </div>
                  <div className="">
                    <p className="w-40 ">{val.title}</p>
                  </div>

                  <div className=" cursor-pointer flex items-center  ">
                    {hover && (
                      <div
                        onClick={() => {
                          setHelpId(val._id);
                          handleFavourites(val._id);
                        }}
                        className="cursor-pointer w-full"
                      >
                        
                        {(favourite === true && helpId === val._id) ?(
                          <div className="text-yellow-500 ">
                            <i class="fa-solid fa-star"></i>
                          </div>
                        ) :<div className="text-yellow-500">
                        <i class="fa-regular fa-star"></i>
                      </div>}
                      </div>
                    )}

                    {hover && (
                      <div
                        onClick={() => {
                          handleDelete(val._id);
                        }}
                        className="mx-2 p-1 h-full text-red-500 cursor-pointer"
                      >
                        <i class="fa-solid fa-trash-can fa-md"></i>
                      </div>
                    )}
                  </div>
                </div>
                <div className=" h-4 w-full h-full flex items-center justify-center font-serif">
                  {val.created}
                </div>

                {val.status === "Created" && (
                  <div
                    onClick={() => {
                      setStatus(true);
                      setHelpId(val._id);
                    }}
                    className="  w-full relative z-0 h-full flex items-center bg-pink-500  text-white  font-semibold cursor-pointer   justify-center font-serif"
                  >
                    {val.status}
                  </div>
                )}

                {val.status === "Pending" && (
                  <div
                    onClick={() => {
                      setStatus(true);
                      setHelpId(val._id);
                    }}
                    className="  w-full h-full flex items-center bg-sky-500  text-white  font-semibold cursor-pointer justify-center font-serif"
                  >
                    {val.status}
                  </div>
                )}
                {val.status === "OnGoing" && (
                  <div
                    onClick={() => {
                      setStatus(true);
                      setHelpId(val._id);
                    }}
                    className="  w-full h-full flex items-center bg-orange-500 text-white  font-semibold cursor-pointer  justify-center font-serif"
                  >
                    {val.status}
                  </div>
                )}
                {val.status === "Closed" && (
                  <div
                    onClick={() => {
                      setStatus(true);
                      setHelpId(val._id);
                    }}
                    className="  w-full h-full flex items-center bg-green-500  text-white font-semibold cursor-pointer  justify-center font-serif"
                  >
                    {val.status}
                  </div>
                )}
                <div className=" w-full h-full flex items-center  justify-center font-serif">
                  Priority
                </div>

                <div className=" w-full h-full flex items-center hover:bg-sky-100 justify-center font-serif">
                  <input
                    onMouseLeave={() => {
                      handleUpdate(val._id);
                    }}
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                    value={val.endDate}
                    className="outline-none"
                    placeholder="Select Date"
                    type="date"
                    name=""
                    id=""
                  />
                </div>

                <div className=" w-full h-full flex items-center justify-center font-serif">
                 
                    <input
                      className="outline-none  w-6 flex items-center justify-center"
                      type="text"
                    
                      value = "Me"
                    />
                
                </div>
              </div>

              <div className="  w-[75%] ml-4 flex absolute bottom-[10rem] left-[17rem] z-10 justify-center h-[0 rem] ">
                {status === true && helpId === val._id ? (
                  <div className=" w-[15.5rem] h-[11rem] text-black font-sans bg-white border-2 p-1 flex flex-col items-center ">
                    <div
                      name="Created"
                      className="flex justify-between items-center mt-2 cursor-pointer w-full hover:bg-slate-100 active:bg-slate-200 p-1"
                    >
                      <input
                        onClick={(e) => {
                          handleStatus(e);
                          setStatus(false);
                        }}
                        className=" w-full flex flex-start cursor-pointer h-full "
                        type="button"
                        value="Created"
                      />
                      <div className="w-4 h-4 rounded-full bg-pink-500"></div>
                    </div>
                    <div
                      id="Pending"
                      onClick={(e) => {
                        handleStatus(e);
                        setStatus(false);
                      }}
                      className="flex justify-between items-center mt-2 cursor-pointer w-full hover:bg-slate-100 active:bg-slate-200 p-1"
                    >
                      <input
                        onClick={(e) => {
                          handleStatus(e);
                          setStatus(false);
                        }}
                        className=" w-full flex flex-start cursor-pointer h-full "
                        type="button"
                        value="Pending"
                      />

                      <div className="w-4 h-4 rounded-full bg-sky-500"></div>
                    </div>
                    <div
                      id="OnGoing"
                      onClick={(e) => {
                        handleStatus(e);
                        setStatus(false);
                      }}
                      className="flex justify-between items-center mt-2 cursor-pointer w-full hover:bg-slate-100 active:bg-slate-200 p-1"
                    >
                      <input
                        onClick={(e) => {
                          handleStatus(e);
                          setStatus(false);
                        }}
                        className=" w-full flex flex-start cursor-pointer h-full "
                        type="button"
                        value="OnGoing"
                      />

                      <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                    </div>
                    <div
                      id="Closed"
                      onClick={(e) => {
                        handleStatus(e);
                        setStatus(false);
                      }}
                      className="flex justify-between items-center mt-2 cursor-pointer w-full hover:bg-slate-100 active:bg-slate-200 p-1"
                    >
                      <input
                        onClick={(e) => {
                          handleStatus(e);
                          setStatus(false);
                        }}
                        className=" w-full flex flex-start cursor-pointer h-full "
                        type="button"
                        value="Closed"
                      />

                      <div className="w-4 h-4 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                ) : (
                  <div className=""></div>
                )}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Task;
